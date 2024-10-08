"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4598],{54e3:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>l});var a=s(85893),r=s(11151);const i={sidebar_position:1},d="Middleware Introduction",t={id:"guides/middlewares/middlewares",title:"Middleware Introduction",description:"In this section, we will learn what Middlewares are and how to create them.",source:"@site/versioned_docs/version-2.x/guides/middlewares/middlewares.md",sourceDirName:"guides/middlewares",slug:"/guides/middlewares/",permalink:"/kafkaflow/docs/2.x/guides/middlewares/",draft:!1,unlisted:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/versioned_docs/version-2.x/guides/middlewares/middlewares.md",tags:[],version:"2.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Middlewares",permalink:"/kafkaflow/docs/2.x/category/middlewares"},next:{title:"Typed Handler Middleware",permalink:"/kafkaflow/docs/2.x/guides/middlewares/typed-handler-middleware"}},o={},l=[{value:"Use Cases",id:"use-cases",level:2},{value:"Built-in middlewares",id:"built-in-middlewares",level:2},{value:"When Consuming\u200b",id:"when-consuming",level:2},{value:"When Producing",id:"when-producing",level:2},{value:"Creating a middleware",id:"creating-a-middleware",level:2},{value:"Some middleware samples",id:"some-middleware-samples",level:3},{value:"Log messages and processing time",id:"log-messages-and-processing-time",level:4},{value:"Log any exception",id:"log-any-exception",level:4},{value:"Ignore messages",id:"ignore-messages",level:4},{value:"Transform messages",id:"transform-messages",level:4},{value:"Pause Consumer when an exception is raised",id:"pause-consumer-when-an-exception-is-raised",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"middleware-introduction",children:"Middleware Introduction"}),"\n",(0,a.jsx)(n.p,{children:"In this section, we will learn what Middlewares are and how to create them."}),"\n",(0,a.jsx)(n.p,{children:"KafkaFlow is middleware-oriented. Messages are delivered to a middleware and then forwarded to another middleware, and so on. It's a middleware pipeline that will be invoked in sequence."}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"Middlewares are executed in the same order they are defined in the configuration.\nEvery product/consumer has its own Middlewares instances, so the instances are not shared between different consumers/producers, but when consuming, the instances are shared between the workers of the same consumer."})}),"\n",(0,a.jsx)(n.p,{children:"Middlewares are instantiated by the configured dependency injection container, so every dependency configured by your container can be delivered in the middleware constructor."}),"\n",(0,a.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,a.jsx)(n.p,{children:"Middlewares can perform several jobs. As an example, Middlewares can be used to:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Transform the messages, allowing them to apply serialization and compression."}),"\n",(0,a.jsx)(n.li,{children:"Log the messages"}),"\n",(0,a.jsx)(n.li,{children:"Handle exceptions"}),"\n",(0,a.jsxs)(n.li,{children:["Apply retry policies (take a look into ",(0,a.jsx)(n.a,{href:"https://github.com/Farfetch/kafkaflow-retry-extensions",children:"KafkaFlow Retry Extensions"}),")"]}),"\n",(0,a.jsx)(n.li,{children:"Collect metrics"}),"\n",(0,a.jsx)(n.li,{children:"etc."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"built-in-middlewares",children:"Built-in middlewares"}),"\n",(0,a.jsx)(n.p,{children:"KafkaFlow provides the following middlewares out of the box:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"serializer-middleware",children:"Serializer"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"compressor-middleware",children:"Compressor"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"typed-handler-middleware",children:"Typed Handler"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"batch-consume-middleware",children:"Batch Consume"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"consumer-throttling-middleware",children:"Consumer Throttling"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"when-consuming",children:"When Consuming\u200b"}),"\n",(0,a.jsxs)(n.p,{children:["The message will be delivered as a byte array to the first middleware; you will choose the middlewares to process the messages (you will probably create a middleware to do it or use the ",(0,a.jsx)(n.a,{href:"typed-handler-middleware",children:"Typed Handler"}),"). The next message will only be processed after all configured middlewares execute for that consumer."]}),"\n",(0,a.jsx)(n.h2,{id:"when-producing",children:"When Producing"}),"\n",(0,a.jsxs)(n.p,{children:["The middlewares are called when the ",(0,a.jsx)(n.code,{children:"Produce"})," or ",(0,a.jsx)(n.code,{children:"PoduceAsync"})," of the ",(0,a.jsx)(n.code,{children:"IMessageProducer"})," is called. After all the middlewares execute, the message will be published to Kafka."]}),"\n",(0,a.jsx)(n.h2,{id:"creating-a-middleware",children:"Creating a middleware"}),"\n",(0,a.jsxs)(n.p,{children:["You can create your own middlewares by implementing the ",(0,a.jsx)(n.code,{children:"IMessageMiddleware"})," interface. You must implement the ",(0,a.jsx)(n.code,{children:"Invoke"})," method, which receives two parameters: the ",(0,a.jsx)(n.code,{children:"IMessageContext"})," and the ",(0,a.jsx)(n.code,{children:"MiddlewareDelegate"}),". The ",(0,a.jsx)(n.code,{children:"IMessageContext"})," is an object that has the message, message metadata, and consumer/producer information. The ",(0,a.jsx)(n.code,{children:"MiddlewareDelegate"})," is an ",(0,a.jsx)(n.code,{children:"async"})," method that calls the next middleware, it receives an ",(0,a.jsx)(n.code,{children:"IMessageContext"})," parameter which is the context that will be passed to the next middleware."]}),"\n",(0,a.jsx)(n.h3,{id:"some-middleware-samples",children:"Some middleware samples"}),"\n",(0,a.jsx)(n.h4,{id:"log-messages-and-processing-time",children:"Log messages and processing time"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'public class LoggingMiddleware : IMessageMiddleware\n{\n    private readonly ILogger log;\n\n    public LoggingMiddleware(ILogger log)\n    {\n        this.log = log ?? throw new ArgumentNullException(nameof(log));\n    }\n\n    public async Task Invoke(IMessageContext context, MiddlewareDelegate next)\n    {\n        this.log.Info("Kafka Message Received");\n\n        var sw = Stopwatch.StartNew();\n\n        await next(context).ConfigureAwait(false);\n\n        sw.Stop();\n\n        this.log.Info(\n            "Kafka Message processed",\n            () => new\n            {\n                MessageType = context.Message?.GetType().FullName,\n                ProcessingTime = sw.ElapsedMilliseconds\n            });\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"log-any-exception",children:"Log any exception"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'public class ErrorHandlingMiddleware : IMessageMiddleware\n{\n    private readonly ILogger log;\n\n    public ErrorHandlingMiddleware(ILogger log)\n    {\n        this.log = log ?? throw new ArgumentNullException(nameof(log));\n    }\n\n    public async Task Invoke(IMessageContext context, MiddlewareDelegate next)\n    {\n        try\n        {\n            await next(context).ConfigureAwait(false);\n        }\n        catch(Exception ex)\n        {\n            this.log.Error("Error processing message", ex);\n        }\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ignore-messages",children:"Ignore messages"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"public class IgnoreMessageMiddleware : IMessageMiddleware\n{\n    public Task Invoke(IMessageContext context, MiddlewareDelegate next)\n    {\n        return UnwantedMessage(context) ?\n            Task.CompletedTask :\n            next(context);\n    }\n\n    private bool UnwantedMessage(IMessageContext context)\n    {\n        ...\n    }\n}\n"})}),"\n",(0,a.jsx)(n.h4,{id:"transform-messages",children:"Transform messages"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["This is only a sample, use the ",(0,a.jsx)(n.a,{href:"serializer-middleware",children:"Serializer Middleware"})," instead."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'public class JsonDeserializeMiddleware : IMessageMiddleware\n{\n    public Task Invoke(IMessageContext context, MiddlewareDelegate next)\n    {\n        if(!(context.Message is byte[] rawMessage))\n            throw new InvalidoperationException();\n\n        var type = Type.GetType(context.Headers.GetString("Message-Type"));\n\n        var jsonMessage = Encoding.UTF8.GetString(rawMessage);\n\n        context.TransformMessage(JsonConvert.Deserialize(jsonMessage, MessageType));\n\n        return next(context);\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"pause-consumer-when-an-exception-is-raised",children:"Pause Consumer when an exception is raised"}),"\n",(0,a.jsx)(n.p,{children:"Add the following middleware to the beginning of your Consumer middleware pipeline."}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["This middleware is part of a sample you can find ",(0,a.jsx)(n.a,{href:"https://github.com/Farfetch/kafkaflow/tree/master/samples/KafkaFlow.Sample.PauseConsumerOnError",children:"here"}),"."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'using KafkaFlow.Consumers;\n\npublic class PauseConsumerOnExceptionMiddleware : IMessageMiddleware\n{\n    private readonly IConsumerAccessor consumerAccessor;\n    private readonly ILogHandler logHandler;\n\n    public PauseConsumerOnExceptionMiddleware(IConsumerAccessor consumerAccessor, ILogHandler logHandler)\n    {\n        this.consumerAccessor = consumerAccessor;\n        this.logHandler = logHandler;\n    }\n\n    public async Task Invoke(IMessageContext context, MiddlewareDelegate next)\n    {\n        try\n        {\n            await next(context);\n        }\n        catch (Exception exception)\n        {\n            context.ConsumerContext.ShouldStoreOffset = false;\n            this.logHandler.Error("Error handling message", exception,\n                new\n                {\n                    context.Message,\n                    context.ConsumerContext.Topic,\n                    MessageKey = context.Message.Key,\n                    context.ConsumerContext.ConsumerName,\n                });\n\n            var consumer = this.consumerAccessor[context.ConsumerContext.ConsumerName];\n            consumer.Pause(consumer.Assignment);\n\n            this.logHandler.Warning("Consumer stopped", context.ConsumerContext.ConsumerName);\n        }\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>d});var a=s(67294);const r={},i=a.createContext(r);function d(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);