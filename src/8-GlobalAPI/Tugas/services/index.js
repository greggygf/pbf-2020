import GetAPI from './Get';
import PostAPI from './Post';
import DeleteAPI from './Delete';

const getMahasiswa = () => GetAPI("mahasiswa?_sort=id&_order=desc");
const postMahasiswa = (dataYangDikirim) => PostAPI('mahasiswa', dataYangDikirim);
const deleteMahasiswa = (dataYangDihapus) => DeleteAPI('mahasiswa', dataYangDihapus);

const API = {
    getMahasiswa,
    postMahasiswa,
    deleteMahasiswa
};

export default API;