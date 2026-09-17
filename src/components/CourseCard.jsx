function CourseCard(){
    const course = {
        name: "Kurs programowania",
        teacher: "John Jobs",
        hours: 30,
        completed: true
    };

    return(
    <section className="course-card">
        <h2>{course.name}</h2>
        <p>Prowadzący: {course.teacher}</p>
        <p>Liczba godzin: {course.hours} godz. ({course.hours * 60} min)</p>
        <p>Status: {course.completed ? 'Ukończony' : 'W trakcie'}</p>
    </section>
    )
}
export default CourseCard;