
const local = true;
let apiUrl = 'https://localhost:7148/api/Students/';
if (!local) {
  apiUrl = 'https://proj.ruppin.ac.il/cgroup10/prod/students/';
}


export default function ClientPage(props) {

  const btngetAll = () => {

    fetch(apiUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          result.map(st => console.log(st.name));
          console.log('result[0].FullName=', result[0].name);
        },
        (error) => {
          console.log("err post=", error);
        });

  }

  const btngetId = () => {

    fetch(apiUrl + "3", {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          console.log('result.Name=', result.name);
        },
        (error) => {
          console.log("err post=", error);
        });

  }

  const btnPOST = () => {
    const dataObj = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: 0,
      Name: 'nir',
      Grade: 77
    };

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(dataObj),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
      })
    })
      .then(res => {
        console.log('res=', res);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          console.log(result.id);
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  const btnPut = () => {
    const dataObj = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: 3,
      Name: 'eli',
      Grade: 95
    };

    fetch(apiUrl + '3', {
      method: 'PUT',
      body: JSON.stringify(dataObj),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
      })
    })
      .then(res => {
        console.log('res=', res);

      }),
      (error) => {
        console.log("err put=", error);
      };
  }

  const btnDelete = () => {
    fetch(apiUrl + '3', {
      method: 'DELETE',
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
      })
    })
      .then(res => {
        console.log('res=', res);

      }),
      (error) => {
        console.log("err put=", error);
      };
  }


  const btnSomething = () => {
    debugger;
    let num = 7;
    num++;
    console.log(num);
  }

  return (
    <div>
      <button onClick={btngetAll}>Get ALL</button> <br />
      <button onClick={btngetId}>Get Id</button> <br />
      <button onClick={btnPOST}>Get POST</button> <br />
      <button onClick={btnPut}>Get Put</button> <br />
      <button onClick={btnDelete}>Get Delete</button> <br />
      <button onClick={btnSomething}>Clac Stimthing</button> <br />
    </div>
  )
}
