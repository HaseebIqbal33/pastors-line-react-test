import {Axios} from '../../utils/axios';
import {CONTACTS} from '../actions/index';
 export const getContacts =()=>dispatch=>{
    Axios.get('contacts.json?companyId=171')
    .then(res=>{
      let contacts=[]
      let usContacts=[]
      for (const key in res.data.contacts) {
        contacts.push(res.data.contacts[key])
        const {iso}=res.data.contacts[key].country
        if(iso=="US")
        {
          usContacts.push(res.data.contacts[key])
        }
      }
       dispatch({
                type:CONTACTS,
                payload:{contacts,usContacts}
            })
    })
    .catch(err=>{
      throw err;
    })
 }