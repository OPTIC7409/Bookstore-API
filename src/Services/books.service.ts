import Book from '../Modals/books';

class BookService {
    async getBooks(): Promise<any> {
        return Book.find();
    }

    async createBook(book: any): Promise<any> {
        return Book.create(book);
    }

    async updateBook(id: string, book: any): Promise<any> {
        return Book.findByIdAndUpdate(id, book, { new: true });
    }

    async deleteBook(id: string): Promise<any> {
        return Book.findByIdAndDelete(id);
    }

}

export default new BookService();
