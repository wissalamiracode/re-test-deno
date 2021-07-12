@app
deno-hello

@http
get /api

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
