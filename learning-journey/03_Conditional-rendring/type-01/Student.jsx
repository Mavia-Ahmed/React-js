//TYPE-1 PART 1     IF-ELSE STATEMENT
function Student( { isPass } ){
    if(isPass){
        return <p>✅ Student Passed</p>
    } else {
        return <p>❌ Student Failed</p>
    }
}

export default Student;


//TYPE-1 PART 2      CONDITIONAL VARIABLES
function Student( {grade} ){
    if(grade === "A"){
        return <p>Excellent</p>
    } else if (grade === "B"){
        return <p>Good</p>
    }else {
        return <p>Need hard work</p>
    }
}

export default Student;
