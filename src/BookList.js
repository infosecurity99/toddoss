
class BookList extends Component {

    state = {
    search: '',
    selectedValue: 'name',
    options: [
      {
        name: 'Name',
        value: 'name',
      },
      {
        name: 'Author',
        value: 'author',
      },
      {
        name: 'ISBN',
        value: 'isbn',
      }
    ]
    }
    
    updateSearch (e) {
    this.setState({search: e.target.value});
    }
    
    selectedValueHandler (e) {
    this.setState({selectedValue: e.target.value});
    }
    
    render () {
          if (this.state.selectedValue === 'name') {
            let filteredBooks = this.props.books.filter(book => {
              return book.name.toLowerCase().indexOf(this.state.search) !== -1;
            })
          } else if (this.state.selectedValue === 'author') {
            let filteredBooks = this.props.books.filter(book => {
              return book.author.toLowerCase().indexOf(this.state.search) !== 
          -1;
            })
          } else if (this.state.selectedValue === 'isbn') {
            let filteredBooks = this.props.books.filter(book => {
              return book.isbn.indexOf(this.state.search) !== -1;
            })
          }
    
    return (
      <div>
        <div className='SearchInput'>
          <input type='text'
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} />
          <select
            id="searchSelect"
            name="searchSelect"
            onChange={this.selectedValueHandler.bind(this)} >
            {this.state.options.map(item => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className='BookList'>
          <ul>
            {filteredBooks.map(book => {
              return <book key={book.book_id} name={book.name} author={book.author} isbn={book.isbn} />
            })}
          </ul>
        </div>
    </div>
    )
    }
    };
    
     export default BookList;