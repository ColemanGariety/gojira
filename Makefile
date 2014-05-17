BIN=./node_modules/.bin

all: client server

client: ./src/client/*
	rm -rf ./dist/client
	mkdir -p ./dist/client
	tar cf - --directory=/Applications Atom.app | ( cd ./dist/client; tar xfp -)
	mkdir -p ./dist/client/Atom.app/Contents/Resources/app
	cp -r ./src/client/* ./dist/client/Atom.app/Contents/Resources/app
	jsx ./dist/client/Atom.app/Contents/Resources/app/lobby ./dist/client/Atom.app/Contents/Resources/app/lobby

server: ./src/server/*
	rm -rf ./dist/server
	mkdir -p ./dist/server
	cp -r ./src/server/* ./dist/server

run_server: server
	$(BIN)/nodemon --watch ./src/server ./dist/server

run_client: client
	- pkill Atom
	open ./dist/client/Atom.app
