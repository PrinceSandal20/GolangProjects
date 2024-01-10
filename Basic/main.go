package main

import (
	"fmt"
	"io"
	"os"
)

// "bufio"
// "fmt"
// "os"
// "strconv"
// "strings"

func main() {
	// fmt.Println("Welcome to our pizza app")
	// fmt.Println("Please rate our pizza between 1 and 5")

	// reader := bufio.NewReader(os.Stdin)

	// input, _ := reader.ReadString('\n')

	// fmt.Println("Thanks for rating, ", input)

	// numRating, err := strconv.ParseFloat(strings.TrimSpace(input), 64)

	// if err != nil {
	// 	fmt.Println(err)
	// } else {
	// 	fmt.Println("Added 1 to your ratings: ", numRating+1)
	// }

	//pointers
	// fmt.Println("Welcome to a class on pointers")
	// myNumber := 44

	// var ptr = &myNumber

	// fmt.Println("Value of actual pointer is ", ptr)
	// fmt.Println("Value of actual pointer is ", *ptr)

	// *ptr = *ptr + 2
	// fmt.Println("New value is: ", myNumber)

	//Array
	// fmt.Println("welcome to array in golang")

	// var animeList [3]string

	// animeList[0] = "JJK"
	// animeList[2] = "Naruto"

	// fmt.Println("Anime list is: ", animeList)

	// var animeList1 = [3]string{"JJK", "Naruto", "Demon"}
	// fmt.Println("Anime List is: ", animeList1)
	// fmt.Println("Anime List is: ", len(animeList1))

	//slices
	// fmt.Println("welcome to slices")

	// var animeList = []string{"JJk", "Naruto"}
	// fmt.Printf("Type of animelist is %T\n", animeList)

	// animeList = append(animeList, "AOT", "Solo Leveling")
	// fmt.Println(animeList)

	// //start element end element(not inclusive)
	// animeList = append(animeList[1:3])
	// fmt.Println(animeList)

	// highScores := make([]int, 4)
	// highScores[0] = 1
	// highScores[1] = 3
	// highScores[2] = 2
	// highScores[3] = 4
	// fmt.Println(highScores)

	// highScores = append(highScores, 6, 5)
	// fmt.Println(highScores)
	// sort.Ints(highScores)
	// fmt.Println(highScores)
	//removing from parti idx
	// var languages = []string{"c", "c++", "javascript", "python", "dart", "go"}
	// fmt.Println(languages)
	// var index int = 2
	// languages = append(languages[:index], languages[index+1:]...)
	// fmt.Println(languages)

	//Maps
	// fmt.Println("Maps in golang")

	// languages := make(map[string]string)

	// languages["JS"] = "JavaScript"
	// languages["PY"] = "Python"
	// languages["RB"] = "Ruby"

	// fmt.Println("List of all languages: ", languages)

	// delete(languages, "PY")
	// fmt.Println("List of all languages: ", languages)

	// for key, value := range languages {
	// 	fmt.Printf("For key %v,value is %v\n", key, value)
	// }

	//there are no classes in golang
	//structs
	//fmt.Println("Structs in golang")
	//no inheritance in golang; No super or parent

	// prince := User{"prince", "prince@gmail.com", true, 21}
	// fmt.Println(prince)
	// fmt.Printf("prince details rae %+v\n", prince)

	//if else
	// fmt.Println("Welcome to if else")

	// loginCount := 10
	// var result string

	// if loginCount < 10 {
	// 	result = "Regular user"
	// } else if loginCount > 10 {
	// 	result = "watch out"
	// } else {
	// 	result = "Exactly 10 login count"
	// }

	// fmt.Println(result)

	//swicth case
	// fmt.Println("Welcome to switch case")

	// rand.Seed(time.Now().UnixNano())
	// diceNumber := rand.Intn(6)+1
	// fmt.Println("Value of dice is ", diceNumber)

	// switch diceNumber {
	// case 1:
	// 	fmt.Println("Dice value is 1")
	// }

	//loops

	// names := []string{"prince", "manjot", "triaksh", "toshi", "harsh"}

	// fmt.Println(names)

	// for d := 0; d < len(names); d++ {
	// 	fmt.Println(names[d])
	// }

	// for i := range names {
	// 	fmt.Println(names[i])
	// }

	// for index, name := range names {
	// 	fmt.Printf("Index is %v and Value is %v\n", index, name)
	// }

	//functions
	// greetings()
	// ans := addtwo(5, 10)
	// fmt.Println(ans)

	// prince := User{"prince", "prince@gmail.com", true, 21}

	// prince.GetName()

	//defer keyword used to delay function execution
	//follows LIFO propery

	// defer f1()
	// defer f2()
	// fmt.Println("Hello Prince")

	//file handling
	fmt.Println("Welcome to files handling")

	content := "This needs to go in a file - prince.com"

	file, err := os.Create("./myfile.txt")

	if err != nil {
		panic(err)
	}

	length, err := io.WriteString(file, content)
	if err != nil {
		panic(err)
	}
	fmt.Println("length is: ", length)
	defer file.Close()

}

// func f1() {
// 	fmt.Println("Hello 1")
// }

// func f2() {
// 	fmt.Println("Hello 2")
// }

// func addtwo(val1 int, val2 int) int {
// 	return val1 + val2
// }

// func greetings() {
// 	fmt.Println("Hello")
// }

// type User struct {
// 	Name   string
// 	Email  string
// 	Status bool
// 	Age    int
// }

// func (u User) GetName() {
// 	fmt.Println(u.Name)
// }
