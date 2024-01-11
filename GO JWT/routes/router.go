package routes

import (
	"jwt/controllers"

	"github.com/gorilla/mux"
)

func SetupRuter() *mux.Router {
	router := mux.NewRouter()

	auth := router.PathPrefix("/auth").Subrouter()
	auth.HandleFunc("/register", controllers.RegisterHandler).Methods("POST")
	auth.HandleFunc("/login", controllers.LoginHandler).Methods("POST")
	return router
}
