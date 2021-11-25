let studenti = [
    {
        name: 'Alberto',
        surname: 'Bisetti',
        age: '23'
    },
    {
        name: 'Alessandro',
        surname: 'Scolozzi',
        age: '33'
    }
];


for(let i = 0; i < 2; i++){
    let newStudent = {
        name: 'Alberto',
        surname: 'Bisetti',
        age: '23' 
    }
    newStudent.name = prompt('Inserire nome:')
    newStudent.surname = prompt('Inserire cognome:')
    newStudent.age = prompt('Inserire età:')
    studenti.push(newStudent);
}

for( let i = 0; i < studenti.length; i++ ) {
    const student = studenti[i];
    for(let key in student) {
        if(key !== 'age'){
            console.log(student[key]);
        }
        
    }
}