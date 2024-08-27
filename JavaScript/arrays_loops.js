
// +++++++++++++++++++++ For In Loop +++++++++++++++++++++




const myObj = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'Swift by Apple'
  }
  
  // for (const key in myObj) {
  //   if (Object.prototype.hasOwnProperty.call(myObj, key)) {
  //     const element = myObj[key];
  //     console.log();
      
  //   }
  // }
  
  for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
  }
  
  // const programming = ["java", "js", "cpp","rb","py"]
  
  // for (const key in programming) {
  //   // console.log(programming[key]);
  // }
  
  
  // for (const key in map) {
  //   console.log(key)
  // }
  
  
  // +++++++++++++++++++++ For each loop +++++++++++++++++++++
  
  const coding = ["java", "js", "cpp", "rb", "py"]
  
  // coding.forEach( function (val) {
  //   console.log(val);
    
  // } )
  
  // coding.forEach( (element) => {
  //   console.log(element);
  // });
  
  // function printMe(item){
  //   console.log(item);
  // }
  
  // coding.forEach(printMe())
  
  
  // coding.forEach( (item, index, arr) => {
  //   console.log(item, index, arr);
  // } )
  
  
  const myCoding = [
    {
      languageName : "javaScript",
      languageFileName : "js"
    },
    {
      languageName : "Java",
      languageFileName : "java"
    },
    {
      languageName : "Python",
      languageFileName : "py"
    }
  ]
  
  myCoding.forEach( (item) => {
    console.log(item.languageName);
    
  } )
  
  