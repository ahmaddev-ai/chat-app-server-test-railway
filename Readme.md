#### Command For Testing in Console Do Step By Step

## Tab 1 Console

```
socket.emit("join", "room1")
```

## Tab 2 Console

```
socket.emit("join", "room1")
```

## Tab 1 Message Listner

```
socket.on("message",(msg)=>{
    console.log("Tab1 Received:",msg);
});
```

## Tab 2 Message Listner

```
socket.on("message",(msg)=>{
    console.log("Tab2 Received:",msg);
});
```

## Tab 1 Message send

```
socket.emit("send",{
    room:"room1",
    text:"Hello Ahmed",
    username:"Ali"
});
```

## Tab 2 Message send

```
socket.emit("send",{
    room:"room1",
    text:"Hello Ali",
    username:"ahmad"
});
```

#### COMMAND of DOCKER FOR DEPLOYMENT AND RUNNING

```
docker build . -t chat-server
```

```
docker run -d -p 5050:5050 chat-server
```
