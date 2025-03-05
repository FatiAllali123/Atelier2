// User Class
class User {
    constructor(id, username, email, password) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.posts = [];
    }

    toJSON() { // transformer objet user a objet json
        return {
            id: this.id,
            username: this.username,
            email: this.email,
            password: this.password, 
            posts: this.posts
        };
    }
    
    static fromJSON(json) {
        let data = typeof json === "string" ? JSON.parse(json) : json;// si c'est une chaine on le transforme a objet si deja un chaine on le laisse tel qu'il est
        return new User(data.id, data.username, data.email, data.password); // Ajoutez le paramètre password
    }
}

// Blog Management System
class BlogSystem {
    constructor() {
        // charger les users deja enregistres 
        this.users = JSON.parse(localStorage.getItem('blogUsers')) || [];
        // recupereer user connecte
        this.currentUser = this.getCurrentUserFromStorage();
    }

    // on save les users en localStorage pour que les donnees restent sauvegardees 
    saveUsers() {
        localStorage.setItem('blogUsers', JSON.stringify(this.users)); // sauvegardre la liste des users sous forme json
    }

    // Save current user 
    saveCurrentUser() {
        if (this.currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        } else {
            localStorage.removeItem('currentUser');
        }
    }

    // fonctio n pour recupere le user connecte 
    getCurrentUserFromStorage() {
        const userJson = localStorage.getItem('currentUser'); // verifier si un user est sauvegardé dans localStorage avec key"currentUser"
        return userJson ? JSON.parse(userJson) : null;
    }

    //incription de user
    registerUser(username, email, password) {
        // Check if user already exists
        if (this.users.some(user => user.email === email)) {
            throw new Error("Cet email est déjà utilisé.");
        }
    
        const newUser = new User( // c reer nouveau user
            this.users.length + 1, 
            username, 
            email, 
            password
        );
        
        console.log('Nouvel utilisateur enregistré:', newUser);
        
        this.users.push(newUser);
        this.saveUsers();
        return newUser;
    }

    // User Login
 
    login(email, password) {
        console.log('Recherche de l\'utilisateur avec:', email, password);
        
        const user = this.users.find(u => {
            console.log('Comparaison:', u.email, u.password);
            return u.email === email && u.password === password;
        });
    
        if (user) {
            this.currentUser = user;
            this.saveCurrentUser();
            return user;
        }
        
        throw new Error("Email ou mot de passe incorrect.");
    }
    // Logout
    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    }

    // 
    addPost(title, description) {
        if (!this.currentUser) {
            throw new Error("Vous devez être connecté pour créer un post.");
        }

        const newPost = {
            id: this.currentUser.posts.length + 1,
            title,
            description,
            date: new Date().toISOString()
        };
    // Ajouter des logs de débogage
    console.log('Nouveau post créé :', newPost);
        this.currentUser.posts.push(newPost);
        
        // Update the user in the users array
        const userIndex = this.users.findIndex(u => u.id === this.currentUser.id);
        if (userIndex !== -1) {
            this.users[userIndex] = this.currentUser;
        }

        this.saveUsers();
        this.saveCurrentUser();
        return newPost;
    }

    // Get Current User's Posts
    getCurrentUserPosts() {
        if (!this.currentUser) {
            throw new Error("Vous devez être connecté.");
        }


          // Ajouter des logs de débogage
    console.log('Posts de l\'utilisateur actuel :', this.currentUser.posts);
        return this.currentUser.posts;
    }
}

// creer une instance 
const blogSystem = new BlogSystem();