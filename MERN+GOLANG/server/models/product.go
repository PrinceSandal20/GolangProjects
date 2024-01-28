package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Product struct {
	ID           primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	ProductName  string             `json:"productName" bson:"productName"`
	ProductPrice float64            `json:"productPrice" bson:"productPrice"`
	Image        string             `json:"image" bson:"image"`
}
