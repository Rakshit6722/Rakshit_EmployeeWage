//UC1
const getAttendance = () => {
    const random = Math.floor(Math.random() * 2);
    return random === 1 ? 'Present' : 'Absent';
}