import GetAPI from './Get';
import PostAPI from './Post';
import DeleteAPI from './Delete';

const getNewsBlog = () => GetAPI("posts?_sort=id&_order=desc");
const postNewsBlog = (dataYangDikirim) => PostAPI('posts', dataYangDikirim);
const deleteNewsBlog = (dataYangDihapus) => DeleteAPI('posts', dataYangDihapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
};

export default API;