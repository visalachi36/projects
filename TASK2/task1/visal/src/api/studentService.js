export const fetchStudents = async () => {
    try {
      const response = await fetch("/api/students");
      if (!response.ok) {
        throw new Error("Failed to fetch student data");
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  };
  