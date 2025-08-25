//TYPE-2 PART 1     ternary operator
function Student( {marks} ){
    return(
        <p>{marks<="30" ? "fail" : "pass"}</p>
    )
}

export default Student;


//TYPE-2 PART 2      Logical AND (&&)
function Student ({hasCertificate}){
    return(
        <div>
            <h3>Ali</h3>
            {hasCertificate && <p>Certified Student</p>}
        </div>
    )
}

export default Student;
