const user2 = {
     firstName: "Rishabh",
     lastName: "Gupta",
     email: "Rishabh.Gupta@mail.com",
     courseList: [], //Defined as Empty Array.
     buyCourse: function (courseName) {
          this.courseList.push.courseName
     },
     getCourse: function(){
          return `${this.firstName} is enrolled in ${this.courseList.length} courses`
     },
}

console.table(user2)
console.log(user2.getCourse())
