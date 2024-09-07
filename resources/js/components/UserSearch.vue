<template>
  <div>
    <input v-model="searchQuery" placeholder="Search name/designation/department" @input="search" />
    <div v-for="user in filteredUsers" :key="user.id" class="user-card">
      <p>{{ user.name }}</p>
      <p>{{ user.designation.name }}</p>
      <p>{{ user.department.name }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchQuery: '',
      users: [],
      filteredUsers: []
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios.get('/api/users')
        .then(response => {
          this.users = response.data;
          this.filteredUsers = this.users;
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    },
    search() {
      const query = this.searchQuery.toLowerCase();
      this.filteredUsers = this.users.filter(user => {
        return user.name.toLowerCase().includes(query) ||
               user.designation.name.toLowerCase().includes(query) ||
               user.department.name.toLowerCase().includes(query);
      });
    }
  }
};
</script>

<style>
.user-card {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 10px;
}
</style>
