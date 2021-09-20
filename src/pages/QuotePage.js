import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'


class QuotePage extends Component {
  render() {
    return (
      <div>
       <BootstrapTable data={this.props.quotes}>
          <TableHeaderColumn isKey dataField='id'> ID </TableHeaderColumn>
          <TableHeaderColumn dataField='quote'> Quote </TableHeaderColumn>
          <TableHeaderColumn dataField='author'> Author </TableHeaderColumn>
          <TableHeaderColumn dataField='notes'> Notes </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default QuotePage