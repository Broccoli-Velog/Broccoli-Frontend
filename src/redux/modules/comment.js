const CREATE = 'comment/CREATE';
const ROAD = 'comment/ROAD';

const initialComment = [
    {
        author: '작성자',
        content: '코멘트',
        createdAt: '0000-00-00'
    },
    {
        author: '작성자',
        content: '코멘트',
        createdAt: '0000-00-00'
    },
    {
        author: '작성자',
        content: '코멘트',
        createdAt: '0000-00-00'
    }
]

export function createComment(comment) {
	return { type: CREATE, comment };
}

export function roadComment(comment) {
	return { type: ROAD, comment };
}

// Reducer
export default function reducer(state = initialComment, action = {}) {
	switch (action.type) {
	case 'comment/CREATE': {
        // 새 코멘트
        return state;
    }
	case 'comment/ROAD': {
        // 코멘트 불러옴
        return state;
    }
	default: return state;
	}
}