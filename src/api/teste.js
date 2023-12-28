

fetch("https://fingodb.com/api/database/table/row", {
  method:"POST",
  headers:{
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    "database_id": 108,
    "database_token": "H16Q9JR8A1y82KM2qLKlFz",
    "table_id": 78,
    "row_columns_values": {
        "name": "your string"
    }
  })
})

