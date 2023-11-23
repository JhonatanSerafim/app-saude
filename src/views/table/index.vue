<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Nome">
        <template slot-scope="scope">
          {{ options.nome }}
        </template>
      </el-table-column>
      <el-table-column label="Telefone" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="CPF" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Data" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        realizada: 'success',
        agendada: 'gray',
        cancelado: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      options: [
        { id: 1, nome: 'Nome1', telefone: '111-111-1111', cpf: '123.456.789-01', status: 'agendada', data: '2023-01-01' },
        { id: 2, nome: 'Nome2', telefone: '222-222-2222', cpf: '234.567.890-12', status: 'realizada', data: '2023-02-02' },
        { id: 3, nome: 'Nome3', telefone: '333-333-3333', cpf: '345.678.901-23', status: 'cancelada', data: '2023-03-03' },
      ]
    };
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>

