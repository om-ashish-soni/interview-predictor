const judge=(e)=>{
    e.preventDefault();
    const company=parseInt(document.getElementById('company').value);
    const communication=parseInt(document.getElementById('communication').value);
    const project=parseInt(document.getElementById('project').value);
    const dsa=parseInt(document.getElementById('dsa').value);
    const output=document.getElementById('output');
    const selected=decide(company, communication,project,dsa);

    if(selected==true){
        output.innerHTML="You will be selected";
        output.style.backgroundColor="green";
    }else{
        output.innerHTML="May not be selected";
        output.style.backgroundColor="red";
    }
}
const decide=(company, communication,project,dsa)=>{
    const output=predict(company, communication,project,dsa)[0];
    return output[1]>=output[0];
}
function predict(company, communication,project,dsa) {
  if (dsa <= 0.5) {
    if (project <= 1.5) {
      return [[24.0, 0.0]];
    } else {
      if (company <= 3.5) {
        if (company <= 0.5) {
          return [[1.0, 0.0]];
        } else {
          if (company <= 1.5) {
            return [[0.0, 1.0]];
          } else {
            if (company <= 2.5) {
              return [[1.0, 0.0]];
            } else {
              return [[0.0, 1.0]];
            }
          }
        }
      } else {
        if (company <= 4.5) {
          return [[4.0, 0.0]];
        } else {
          if (communication <= 0.5) {
            return [[1.0, 0.0]];
          } else {
            if (communication <= 1.5) {
              return [[1.0, 1.0]];
            } else {
              return [[1.0, 0.0]];
            }
          }
        }
      }
    }
  } else {
    return [[0.0, 47.0]];
  }
}
