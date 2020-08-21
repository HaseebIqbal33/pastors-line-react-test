import {Axios} from '../../utils/axios';
import {CONTACTS} from '../actions/index';
 export const getContacts =()=>dispatch=>{
    Axios.get('contacts.json?companyId=171')
    .then(res=>{
      let evenIdContacts=[]
      let contacts=[]
      let usContacts=[]
      let usEvenIdContacts=[]
      for (const key in res.data.contacts) {
        contacts.push(res.data.contacts[key])
        const {iso}=res.data.contacts[key].country;
        if(res.data.contacts[key].id %2===0){
          evenIdContacts.push(res.data.contacts[key])
        }
        if(iso=="US")
        {
          usContacts.push(res.data.contacts[key])
          if(res.data.contacts[key].id%2==0)
          {
            usEvenIdContacts.push(res.data.contacts[key])
          }
        }
      }
       dispatch({
                type:CONTACTS,
                payload:{contacts,evenIdContacts,usContacts,usEvenIdContacts}
            })
    })
    .catch(err=>{
      throw err;
    })
 }