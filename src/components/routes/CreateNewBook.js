function CreateNewBook() {
  return (
    <form>
      <input type="text" placeholder="Enter book title" />
      <input type="text" placeholder="Enter book author" />
      <input type="submit" value="Add book" />
    </form>
  );
}

export default CreateNewBook;
