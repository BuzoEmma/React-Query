import { useQuery } from "react-query"
import axios from "axios"


const fetchUserEmail =(email)=>{
    return axios.get(`http://localhost:4000/users/${email}`)
}
const DependentQueries = ({email}) => {

    const {data: user} = useQuery(["user", email], ()=> fetchUserEmail(email))
    const channelId = user?.data.channelId
    console.log(user)
    console.log(channelId)

const fetchChannelId = (channelId)=>{
    return axios.get(`http://localhost:4000/users/${channelId}`)
}

const {data: channelId1} = useQuery(["channelId", channelId], ()=>fetchChannelId(channelId),{
    enabled: !!channelId
})
console.log(channelId1)

  return (
    <div>DependentQueries</div>
  )
}

export default DependentQueries