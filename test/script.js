fetch('https://api.artsy.net/api/artists', {
    headers: {
        'X-XAPP-Token': 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2MzBmMjhiNTg4ZGEzYTAwMGI4MjU2NmUiLCJleHAiOjE2NjI1NDI2NDYsImlhdCI6MTY2MTkzNzg0NiwiYXVkIjoiNjMwZjI4YjU4OGRhM2EwMDBiODI1NjZlIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjYzMGYyOGI2MzA0ZjZkMDAwZTgyN2ZhZiJ9.BrWa-dZxBomQmbPept7-5RHAvKYTgjy4fEgipdJCUOw'
    }
}).then((data)=>{
    //console.log(data);
    return data.json();//converted to object
    }).then((objectData)=>{
    console.log(objectData._embedded.artists);
    let tableData="";
    objectData._embedded.artists.map((values)=>{
        tableData+=`<tr>
        
        <td>${values.created_at}</td>
        <td>@${values.deathday}</td>
        <td>${values.gender}</td>
        <td>${values.hometown}</td>
        <td>${values.name}</td>
        <td>@${values.nationality}</td>
        <td>${values.slug}</td>
        <td>${values.sortable_name}</td>
        <td>${values.target_supply}</td>
        <td>${values.updated_at}</td>
        
        
    </tr>`;
    });
    document.getElementById('table_body').innerHTML=tableData;

})
