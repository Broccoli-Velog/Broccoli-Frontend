const CREATE = 'note/CREATE';
const initialNote = [
    {
        'note_id': 0,
        "author": '작성자',
        "title": '노트 제목1', 
        "content": <div><h2>노트의 내용1</h2></div>,
        "series": '시리즈',
        "createdAt": '0000-00-00',
        "updatedAt": '0000-00-00'
    },
    {
        'note_id': 1,
        "author": '작성자',
        "title": '노트 제목2', 
        "content": <div><h2>노트의 내용1</h2></div>,
        "series": '시리즈',
        "createdAt": '0000-00-00',
        "updatedAt": '0000-00-00'
    },
    {
        'note_id': 2,
        "author": '작성자',
        "title": '노트 제목3', 
        "content": <div><h2>노트의 내용1</h2></div>,
        "series": '시리즈',
        "createdAt": '0000-00-00',
        "updatedAt": '0000-00-00'
    },
    {
        'note_id': 3,
        "author": '작성자',
        "title": '노트 제목4', 
        "content": <div>노트의 내용4</div>,
        "series": '시리즈',
        "createdAt": '0000-00-00',
        "updatedAt": '0000-00-00'
    },
    {
        'note_id': 4,
        "author": '작성자',
        "title": '노트 제목5', 
        "content": <div>노트의 내용5</div>,
        "series": '시리즈',
        "createdAt": '0000-00-00',
        "updatedAt": '0000-00-00'
    },
    {
        'note_id': 5,
        "author": '작성자',
        "title": '노트 제목6', 
        "content": <div>노트의 내용6</div>,
        "series": '시리즈',
        "createdAt": '0000-00-00',
        "updatedAt": '0000-00-00'
    },
    {
        'note_id': 6,
        "author": '작성자',
        "title": '노트 제목7', 
        "content": <div>노트의 내용7</div>,
        "series": '시리즈',
        "createdAt": '0000-00-00',
        "updatedAt": '0000-00-00'
    },
    {
        'note_id': 7,
        "author": '작성자',
        "title": '노트 제목8', 
        "content": <div>노트의 내용8</div>,
        "series": '시리즈',
        "createdAt": '0000-00-00',
        "updatedAt": '0000-00-00'
    },
    {
        'note_id': 8,
        "author": '작성자',
        "title": '노트 제목9', 
        "content": <div>노트의 내용9</div>,
        "series": '시리즈',
        "createdAt": '0000-00-00',
        "updatedAt": '0000-00-00'
    },
]

export function createNote(note) {
	return { type: CREATE, note };
}

// Reducer
export default function reducer(state = initialNote, action = {}) {
	switch (action.type) {
	case 'note/CREATE': {
        const new_note_list = [...initialNote, action.note];
        return new_note_list;
    }
	default: return state;
	}
}