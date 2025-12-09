const votersList=[{
    id:1,
    code:"KTM",
    name:"Harry",
    contact:9744563427,
    age:30,
    hasVoterCard:true,
    hasVotted:null
},
{
    id:2,
    code:"KTM",
    name:"Nick",
    contact:9744563456,
    age:25,
    hasVoterCard:true,
    hasVotted:null
},
{
    id:3,
    code:"KTM",
    name:"Emma",
    contact:9744463427,
    age:19,
    hasVoterCard:true,
    hasVotted:true
},
{
    id:4,
    code:"KTM",
    name:"Sunny",
    contact:9744123427,
    age:21,
    hasVoterCard:true,
    hasVotted:null
},
{
    id:5,
    code:"KTM",
    name:"Shurti",
    contact:9844463427,
    age:21,
    hasVoterCard:true,
    hasVotted:true
}
];



const getVotersWhoHasntVotted = (city) => {
    const doesVoterListHaveThisCity = !!votersList.find((voter) => voter.code === city
);
let result= [];
if (doesVoterListHaveThisCity) {
    const voterOfTheCity = votersList
    .filter((voter) => voter.code === city)
    .map((voter) => {
        if(voter.age > 18 && voter.hasVotted === null) {
            return {
                    name: voter.name,
                    phoneNumber: voter.contact,
                };
        }
    });
    result = voterOfTheCity.filter((voter) => voter);
}
return result;
};

// console.log(getVotersWhoHasntVotted("KTM"));
const getUsers = () => {
    const eligibleVoter = !!votersList.find((voter) => voter.age
     > 18);
     let result = [];
     if(eligibleVoter){
        const voterOlderThen18 = votersList.filter((voter) => voter.age > 18)
        .map((voter) => {
            if(voter.hasVoterCard && voter.hasVoted===null){
                return(
                    {
                        name:voter.name,
                        phoneNumber:voter.contact
                    }
                )
            }
        });
        result=voterOlderThen18.filter((voter) => voter);
     }
     return result;
// console.log(doesVoterListHaveThisCity, );
// //     const result= [];
// //     return result;
};
console.log(getUsers);
