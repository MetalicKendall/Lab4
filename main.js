(function(){
    console.log("test iife");
    const dataDisplay = document.getElementById('dataDisplay');
    const errorDisplay = document.getElementById('errorDisplay');

    function fetchData(index){
        console.log("inside of fetch data");
        return new Promise((resolve, reject) =>{
            fetch("student.json")
            .then(response =>{
                if(!response.ok){
                    throw new Error("Failed to fetch data");
                }
                return response.json()
            })
            .then(student =>{
                if(index >= 0 && index < student.length){
                    resolve(student[index]);
                }
                else{
                    reject("invalid index");
                }
            })
            .catch(error => {
                reject(error.message);
            })
        });
    }

    //was giving 12
    // var length = Object.keys("student.json").length;
    displayInfo();    
    var ageTotal = 0;
    function displayInfo(){
    var length = 15;

    for(i = 0; i < length; i++){
   fetchData(i)
    .then(data =>{
        console.log("Data Fetched successfully:", data);
        // displayInfo(student.json);
        dataDisplay.innerHTML += "<ul>";
        dataDisplay.innerHTML +=`<li>Name: ${data.Name}, Age: ${data.Age}, Grade Level: ${data.Grade}, Major: ${data.Major}</li>`;
        dataDisplay.innerHTML += "</ul>";
        // ageTotal+=data.Age;
        // console.log(data.Age);
    })
    .catch(error =>{
        console.error("Error Fetching Data:", error);
        errorDisplay.innerHTML = "Error Fetching Data. Please try again later.";
    })
    .finally(()=>{
        console.log("Fetched operation completed");
    })
    }
}
function filterByCompSci(){
    const filteredStudent = studentData.filter(Major => Major.Major == "Computer Science");
    displayInfo(filteredStudent);
    
}
 console.log(ageTotal);
function averageAge(){
   

}

})();

// function displayInfo(student){
//     dataDisplay.innerHTML = "<ul>";
//     student.forEach(data =>{
//         dataDisplay.innerHTML += `<li>Name: ${data.Name}, Age: ${data.Age}, Grade Level: ${data.Grade}, Major: ${data.Major}</li>`
//     });
//     dataDisplay.innerHTML = "</ul>";
// }


