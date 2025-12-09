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
    code:"BKT",
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
const getVotersListWhoDontHaveCard=(city)=>{
    const VotersOfInputCity = votersList
    .filter((voter) => voter.code === city)
    .map((voter)=> {
        if(voter.hasVoterCard) {
            return voter.name;
        }
    });

    return VotersOfInputCity;
};

console.log(getVotersListWhoDontHaveCard("KTM"));
