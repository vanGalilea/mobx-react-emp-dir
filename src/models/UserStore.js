import { observable, action, computed, useStrict } from 'mobx'
import axios from 'axios'

useStrict(true)

class UserStore {
  @observable users = []
  @observable selectedUser = {}
  @computed get selectedId() { return this.selectedUser.id }

  @action setUsers = (users) => { this.users = [...users] }
  @action selectUser = (user) => { this.selectedUser = user }

  @action clearSelectedUser = () => { this.selectedUser = {} }

  @action getUsers() {
    axios.get('http://jsonplaceholder.typicode.com/users')
      .then(
        response => {
           this.setUsers(response.data)
        }
      )
  }
}

const store = new UserStore()

export default store
export { UserStore }
