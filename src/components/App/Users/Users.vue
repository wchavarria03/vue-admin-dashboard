<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <noh-table :title="usersTable.title" :sub-title="usersTable.subTitle" :data="usersTable.data" :columns="usersTable.columns"></noh-table>
      </div>
    </div>
  </div>
</template>
<script>
  import NohTable from 'components/UIComponents/NohTable.vue';
  const usersTableColumns = ['Id', 'Name', 'Username', 'Password', 'Actions'];
  const usersTableData = [{
    id: 1,
    name: 'Test User 1',
    username: 'userTest1',
    password: 'MyEncyptedPassword',
    actions: ''
  }];

  export default {
    components: {
      NohTable
    },
    data () {
      return {
        usersTable: {
          title: 'Users Accounts',
          subTitle: 'Users accounts information',
          columns: [...usersTableColumns],
          data: [...usersTableData]
        }
      };
    }
  };

</script>
<style>

</style>
