<template>
  <div class="app-container">

    <h1 class="line">Cadastrar Médico</h1>

    <el-form ref="form" :model="form" label-width="120px">
      <div>
        <el-form-item label="Nome">
          <el-input v-model="form.name" />
        </el-form-item>
      </div>
      <el-form-item label="Especialidade">
        <el-input v-model="form.especialidade" />
      </el-form-item>

      <el-form-item label="E-mail">
        <el-input v-model="form.email" />
      </el-form-item>

      <el-form-item label="Telefone">
        <el-input v-model="form.telefone" />
      </el-form-item>

      <el-form-item label="CRM">
        <el-input v-model="form.crm" />
      </el-form-item>

      <el-form-item label="Endereço">
        <el-input v-model="form.address" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Cadastrar</el-button>
        <el-button @click="onCancel">Cancelar</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>


export default {
  data() {
    return {
      form: {
        name: '',
        especialidade: '',
        email: '',
        telefone: '',
        crm: '',
        address: ''
      }
    }
  },
  methods: {
    onSubmit() {
      
      this.$message('Seu cadastro foi realizado!')
    },
    onCancel() {
      this.$message({
        message: 'Cancelado o cadastro!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

