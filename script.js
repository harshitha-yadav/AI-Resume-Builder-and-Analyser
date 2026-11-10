function redirectTo(project) {
    if (project === 'ats') {
        window.location.href = "http://localhost:8501"; // URL for ATS Tracker
    } else if (project === 'builder') {
        window.location.href = "http://localhost:3000"; // URL for Resume Builder
    }
}
