//not passing the value to data store..hence no payload needed
export const voteAngular = ()=>
{
  return{
    type: 'VOTE_ANGULAR'//no payload field just voting
  }
}

export const voteReact = ()=>
{
  return{
    type: 'VOTE_REACT'//no payload field just voting
  }
}

export const voteVue = ()=>
{
  return{
    type: 'VOTE_VUE'//no payload field just voting
  }
}
