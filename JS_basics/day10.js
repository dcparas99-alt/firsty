const userList = [
    {
        id: 1,
        name: "ashesh",
        role: "lecturer",
        faculty: ["html, Js", "react", "adv react/Next"],
        experience: 5,
    },
    {
        id: 2,
        name: "paras",
        role: "student",
        faculty: ["html", "math"],
    },
    {
        id: 3,
        name: "undefined",
        role: "lecturer",
        faculty: ["html", "Java", "SQl"],
        experience: 4,
    },
];

const getUsersWhoHasExperience = (role) => {
    let result = [];
    userList.forEach((user) => {
        if (user.role === role && user.experience && user.experience > 0) {
            result.push(user.name);
        }
    });
    return result;
};

const addExperience = () => {
    let result = [];
    result = userList.map((user) => {
        if (user.role === "lecturer") {
            return user;
        } else {
            return { ...user, experience: 0 };
        }
    });
    return result;
};

// console.log(addExperience());

// func
// total faculty array
// class count of student
// class >3, assign new class from faculty array
const getUniqueFaculty = () => {
    let uniqueFaculty = [];
    userList.forEach((user) => {
        user.faculty.forEach((subject) => {
            if (!uniqueFaculty.includes(subject)) {
                uniqueFaculty = [...uniqueFaculty, subject];
            }
        });
    });
    return uniqueFaculty;
};


const getUniqueClassForStudent = (userId) => {
    let getUniqueClassForUser = [];
    const uniqueClasses = getUniqueFaculty();
    const userDetail = userList.find((user)=> user.id=== userId);
    const userClasses = userDetail.faculty || [];

    UniqueClassForUser = uniqueClasses.filter(
        (cls) => !userClasses.includes(cls)

    );
}
// console.log(getUniqueFaculty());
const addFacultyToStudents = () => {
    const uniqueFaculty =getUniqueFaculty();
    let result = [];
    result=userList.map(user=>{
        if(user.role==="lecturer"){
            return user
        }else{
            if(user.faculty.len <3 ){
                return {
                    ...user,
                    faculty:[...user.faculty,getUniqueClassForStudent(user.id)],
                };
            }
        }
    });
    return result;
};
console.log(addFacultyToStudents());