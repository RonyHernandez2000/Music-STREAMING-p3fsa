const url = (url) => {
    const [mp3Upload, setMp3Upload] = useState(null);
    const [mp3Urls, setMp3Urls] = useState([]);
  
    const mp3ListRef = ref(storage, "mp3/");
    const uploadFile = () => {
      if (mp3Upload == null) return;
      const mp3Ref = ref(storage, `mp3/${mp3Upload.name }`);
      uploadBytes(mp3Ref, mp3Upload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setMp3Urls((prev) => [...prev, url]);
        });
      });
    };
  
    useEffect(() => {
      listAll(mp3ListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setMp3Urls((prev) => [...prev, url]);
            console.log(url)
          });
        });
      });
    }, []);}

    
   