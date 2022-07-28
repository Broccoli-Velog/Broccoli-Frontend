if (document.getElementById('img')) {
    document.getElementById('img').addEventListener('change', function (e) {
        const formData = new FormData();
        console.log(this, this.files);
        formData.append('img', this.files[0]);
        axios.post('/post/img', formData)
            .then((res) => {
                document.getElementById('img-url').value = res.data.url;
                document.getElementById('img-preview').src = res.data.url;
                document.getElementById('img-preview').style.display = 'inline';
            })
            .catch((err) => {
                console.error(err);
            });
    });
}