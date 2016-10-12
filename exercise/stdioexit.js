//Demonstrating standard I/O in Node,and exiting application.

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function(){
    var input = process.stdin.read();

    if (input !== null){
        process.stdout.write(input);

        var command=input.trim();
        if (command == 'exit')
            process.exit(0);
    }
});
