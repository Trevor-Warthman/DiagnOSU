<script>
  window.watsonAssistantChatOptions = {
      integrationID: "2a6b68d7-2e01-43d4-9455-21c992cdf0b9", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "a67e5474-f948-4aba-957a-c6b9547e0150", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });
</script>