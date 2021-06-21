require('esbuild')
  .serve(
    {
      servedir: 'www'
    },
    {
      entryPoints: ['src/main.ts'],
      outdir: 'www/js',
      bundle: true
    }
  )
  .then((server) => {
    // console.log(server)
    console.log(`http://localhost:${server.port}`)
  })
