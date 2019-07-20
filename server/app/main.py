from sanic import Sanic
from sanic import response
import os

abs_path = os.path.dirname(os.path.realpath(__file__))
client_path = abs_path + '/../../client/dist/'

app = Sanic()

@app.route('/index_bundle.js')
async def bundle(request):
    return await response.file(client_path + '/index_bundle.js')

@app.route('/')
@app.route('/<path:path>')
async def catch_all(request, path=''):
    return await response.file(client_path + '/index.html')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3030)