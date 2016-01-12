<%@ page language="C#" autoeventwireup="true" inherits="_Default, App_Web_dzv01sm5" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    
    <form id="form1" runat="server">
    <asp:ScriptManager ID="scmScriptManager" runat="server">
    </asp:ScriptManager>

    <h3>Outside Update Panel</h3>
    <p><asp:Label ID="lblTimeDisplay" runat="server"></asp:Label></p>
   


    <asp:UpdatePanel ID="unplTimeWidget" runat="server">
        <ContentTemplate>
            <h3>Inside Update Panel</h3>
            <p><asp:Label ID="lblTimeDisplayAsync" runat="server"></asp:Label></p>
            <asp:Timer ID="tmrTimeUpdater" runat="server">
            </asp:Timer>
           <%-- <asp:TextBox ID="txtInsidePanel" runat="server"/><br />--%>
        </ContentTemplate>
        
        <Triggers>
            <asp:AsyncPostBackTrigger ControlID="lnkTriggerPnlRefresh" EventName="Click" />
        </Triggers>
        
    </asp:UpdatePanel>
    <%-- <asp:TextBox ID="txtOutsidePanel"
                runat="server"></asp:TextBox><br />--%>
        <asp:Button ID="btnSyncTimeUpdate" runat="server" Text="Update All Times" />
        <p>
            <asp:LinkButton ID="lnkTriggerPnlRefresh" runat="server" Text="Ohh! Now I can trigger an update panel to refresh from outside of it! Ain't that cool?" />
        </p>
    <div>
    </div>
    </form>
</body>
</html>
