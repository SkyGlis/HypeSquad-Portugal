client.on('ready', () => {
    let tt = [
             //Watching = Assistindo, Playing = Jogando, Streaming = Transmitindo, Listening = Ouvindo
        { name: 'Wikipédia', type: 'WATCHING'},
        { name: `Maria Leal`, type: 'LISTENING'},
        { name: `prefixo: -`, type: 'PLAYING'},
        { name: `Lo-Fi`, type: 'LISTENING'}
       //sempre use a vírgula ao trocar de status
    ];
    function st() {
        let rs = tt[Math.floor(Math.random() * tt.length)];
        client.user.setPresence({ game: rs });
    }
    st();
    setInterval(() => st(), 6700); //1000 = 1 segundo, 5000 = 5 segundos, 6700 = 6,7 segundos, 10000 = 10 segundos.
});    
