import React from 'react';
import MaterialTable from 'material-table';
import { customers } from './data.js';

export default function MyTable() {
  return (
    <div style={{ maxWidth: '75%' }}>
      <MaterialTable
        columns={
          [
            { title: 'Id', field: 'id' },
            { title: 'First Name', field: 'first_name' },
            { title: 'Last Name', field: 'last_name' },
            { title: 'Gender', field: 'gender' },
            { title: 'Catchphrase', field: 'catch_phrase' },
            { title: 'Language', field: 'language' }
          ]
        }
        data={customers}
    
        title="Customer Data"
        options={{  
          headerStyle: { 
            background: 'navy',
          },
          rowStyle: { 
            background: 'orange',
          }
        }
        }
        localization={{
          pagination: {
            nextAriaLabel: 'next',
            previousAriaLabel: 'prev'
          } 
        }}

      />      </div>
  );
}