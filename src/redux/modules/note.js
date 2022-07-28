const CREATE = 'note/CREATE';
const initialNote = [
    {
        "author": '작성자',
        "title": '노트 제목1', 
        "context": '노트의 내용1',
        "series": '시리즈',
        "createdAt": '0000-00-00',
        "updatedAt": '0000-00-00'
    },
    {
        "author": '작성자',
        "title": '노트 제목2', 
        "context": '노트의 내용2',
        "series": '시리즈',
        "createdAt": '0000-00-00',
        "updatedAt": '0000-00-00'
    },
    {
        "author": '작성자',
        "title": '노트 제목3', 
        "context": '노트의 내용3',
        "series": '시리즈',
        "createdAt": '0000-00-00',
        "updatedAt": '0000-00-00'
    },
    {
        "author": '작성자',
        "title": '노트 제목4', 
        "context": '노트의 내용4',
        "series": '시리즈',
        "createdAt": '0000-00-00',
        "updatedAt": '0000-00-00'
    },
    {
        "author": '작성자',
        "title": '노트 제목5', 
        "context": '노트의 내용5',
        "series": '시리즈',
        "createdAt": '0000-00-00',
        "updatedAt": '0000-00-00'
    },
    {
        "author": '작성자',
        "title": '노트 제목5', 
        "context": '노트의 내용5',
        "series": '시리즈',
        "createdAt": '0000-00-00',
        "updatedAt": '0000-00-00'
    },
    {
        "author": '작성자',
        "title": '노트 제목5', 
        "context": '노트의 내용5',
        "series": '시리즈',
        "createdAt": '0000-00-00',
        "updatedAt": '0000-00-00'
    },
    {
        "author": '작성자',
        "title": '노트 제목5', 
        "context": '노트의 내용5',
        "series": '시리즈',
        "createdAt": '0000-00-00',
        "updatedAt": '0000-00-00'
    },
    {
        "author": '작성자',
        "title": '노트 제목5', 
        "context": '노트의 내용5',
        "series": '시리즈',
        "createdAt": '0000-00-00',
        "updatedAt": '0000-00-00'
    },
    {
        "author": '작성자',
        "title": '노트 제목5', 
        "context": '노트의 내용5',
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