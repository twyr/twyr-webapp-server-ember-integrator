var __extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])
e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}
!function(e){!function(e){e[e.Unknown=0]="Unknown",e[e.EndOfFileToken=1]="EndOfFileToken",e[e.SingleLineCommentTrivia=2]="SingleLineCommentTrivia",e[e.MultiLineCommentTrivia=3]="MultiLineCommentTrivia",e[e.NewLineTrivia=4]="NewLineTrivia",e[e.WhitespaceTrivia=5]="WhitespaceTrivia",e[e.ShebangTrivia=6]="ShebangTrivia",e[e.ConflictMarkerTrivia=7]="ConflictMarkerTrivia",e[e.NumericLiteral=8]="NumericLiteral",e[e.StringLiteral=9]="StringLiteral",e[e.RegularExpressionLiteral=10]="RegularExpressionLiteral",e[e.NoSubstitutionTemplateLiteral=11]="NoSubstitutionTemplateLiteral",e[e.TemplateHead=12]="TemplateHead",e[e.TemplateMiddle=13]="TemplateMiddle",e[e.TemplateTail=14]="TemplateTail",e[e.OpenBraceToken=15]="OpenBraceToken",e[e.CloseBraceToken=16]="CloseBraceToken",e[e.OpenParenToken=17]="OpenParenToken",e[e.CloseParenToken=18]="CloseParenToken",e[e.OpenBracketToken=19]="OpenBracketToken",e[e.CloseBracketToken=20]="CloseBracketToken",e[e.DotToken=21]="DotToken",e[e.DotDotDotToken=22]="DotDotDotToken",e[e.SemicolonToken=23]="SemicolonToken",e[e.CommaToken=24]="CommaToken",e[e.LessThanToken=25]="LessThanToken",e[e.LessThanSlashToken=26]="LessThanSlashToken",e[e.GreaterThanToken=27]="GreaterThanToken",e[e.LessThanEqualsToken=28]="LessThanEqualsToken",e[e.GreaterThanEqualsToken=29]="GreaterThanEqualsToken",e[e.EqualsEqualsToken=30]="EqualsEqualsToken",e[e.ExclamationEqualsToken=31]="ExclamationEqualsToken",e[e.EqualsEqualsEqualsToken=32]="EqualsEqualsEqualsToken",e[e.ExclamationEqualsEqualsToken=33]="ExclamationEqualsEqualsToken",e[e.EqualsGreaterThanToken=34]="EqualsGreaterThanToken",e[e.PlusToken=35]="PlusToken",e[e.MinusToken=36]="MinusToken",e[e.AsteriskToken=37]="AsteriskToken",e[e.AsteriskAsteriskToken=38]="AsteriskAsteriskToken",e[e.SlashToken=39]="SlashToken",e[e.PercentToken=40]="PercentToken",e[e.PlusPlusToken=41]="PlusPlusToken",e[e.MinusMinusToken=42]="MinusMinusToken",e[e.LessThanLessThanToken=43]="LessThanLessThanToken",e[e.GreaterThanGreaterThanToken=44]="GreaterThanGreaterThanToken",e[e.GreaterThanGreaterThanGreaterThanToken=45]="GreaterThanGreaterThanGreaterThanToken",e[e.AmpersandToken=46]="AmpersandToken",e[e.BarToken=47]="BarToken",e[e.CaretToken=48]="CaretToken",e[e.ExclamationToken=49]="ExclamationToken",e[e.TildeToken=50]="TildeToken",e[e.AmpersandAmpersandToken=51]="AmpersandAmpersandToken",e[e.BarBarToken=52]="BarBarToken",e[e.QuestionToken=53]="QuestionToken",e[e.ColonToken=54]="ColonToken",e[e.AtToken=55]="AtToken",e[e.EqualsToken=56]="EqualsToken",e[e.PlusEqualsToken=57]="PlusEqualsToken",e[e.MinusEqualsToken=58]="MinusEqualsToken",e[e.AsteriskEqualsToken=59]="AsteriskEqualsToken",e[e.AsteriskAsteriskEqualsToken=60]="AsteriskAsteriskEqualsToken",e[e.SlashEqualsToken=61]="SlashEqualsToken",e[e.PercentEqualsToken=62]="PercentEqualsToken",e[e.LessThanLessThanEqualsToken=63]="LessThanLessThanEqualsToken",e[e.GreaterThanGreaterThanEqualsToken=64]="GreaterThanGreaterThanEqualsToken",e[e.GreaterThanGreaterThanGreaterThanEqualsToken=65]="GreaterThanGreaterThanGreaterThanEqualsToken",e[e.AmpersandEqualsToken=66]="AmpersandEqualsToken",e[e.BarEqualsToken=67]="BarEqualsToken",e[e.CaretEqualsToken=68]="CaretEqualsToken",e[e.Identifier=69]="Identifier",e[e.BreakKeyword=70]="BreakKeyword",e[e.CaseKeyword=71]="CaseKeyword",e[e.CatchKeyword=72]="CatchKeyword",e[e.ClassKeyword=73]="ClassKeyword",e[e.ConstKeyword=74]="ConstKeyword",e[e.ContinueKeyword=75]="ContinueKeyword",e[e.DebuggerKeyword=76]="DebuggerKeyword",e[e.DefaultKeyword=77]="DefaultKeyword",e[e.DeleteKeyword=78]="DeleteKeyword",e[e.DoKeyword=79]="DoKeyword",e[e.ElseKeyword=80]="ElseKeyword",e[e.EnumKeyword=81]="EnumKeyword",e[e.ExportKeyword=82]="ExportKeyword",e[e.ExtendsKeyword=83]="ExtendsKeyword",e[e.FalseKeyword=84]="FalseKeyword",e[e.FinallyKeyword=85]="FinallyKeyword",e[e.ForKeyword=86]="ForKeyword",e[e.FunctionKeyword=87]="FunctionKeyword",e[e.IfKeyword=88]="IfKeyword",e[e.ImportKeyword=89]="ImportKeyword",e[e.InKeyword=90]="InKeyword",e[e.InstanceOfKeyword=91]="InstanceOfKeyword",e[e.NewKeyword=92]="NewKeyword",e[e.NullKeyword=93]="NullKeyword",e[e.ReturnKeyword=94]="ReturnKeyword",e[e.SuperKeyword=95]="SuperKeyword",e[e.SwitchKeyword=96]="SwitchKeyword",e[e.ThisKeyword=97]="ThisKeyword",e[e.ThrowKeyword=98]="ThrowKeyword",e[e.TrueKeyword=99]="TrueKeyword",e[e.TryKeyword=100]="TryKeyword",e[e.TypeOfKeyword=101]="TypeOfKeyword",e[e.VarKeyword=102]="VarKeyword",e[e.VoidKeyword=103]="VoidKeyword",e[e.WhileKeyword=104]="WhileKeyword",e[e.WithKeyword=105]="WithKeyword",e[e.ImplementsKeyword=106]="ImplementsKeyword",e[e.InterfaceKeyword=107]="InterfaceKeyword",e[e.LetKeyword=108]="LetKeyword",e[e.PackageKeyword=109]="PackageKeyword",e[e.PrivateKeyword=110]="PrivateKeyword",e[e.ProtectedKeyword=111]="ProtectedKeyword",e[e.PublicKeyword=112]="PublicKeyword",e[e.StaticKeyword=113]="StaticKeyword",e[e.YieldKeyword=114]="YieldKeyword",e[e.AbstractKeyword=115]="AbstractKeyword",e[e.AsKeyword=116]="AsKeyword",e[e.AnyKeyword=117]="AnyKeyword",e[e.AsyncKeyword=118]="AsyncKeyword",e[e.AwaitKeyword=119]="AwaitKeyword",e[e.BooleanKeyword=120]="BooleanKeyword",e[e.ConstructorKeyword=121]="ConstructorKeyword",e[e.DeclareKeyword=122]="DeclareKeyword",e[e.GetKeyword=123]="GetKeyword",e[e.IsKeyword=124]="IsKeyword",e[e.ModuleKeyword=125]="ModuleKeyword",e[e.NamespaceKeyword=126]="NamespaceKeyword",e[e.RequireKeyword=127]="RequireKeyword",e[e.NumberKeyword=128]="NumberKeyword",e[e.SetKeyword=129]="SetKeyword",e[e.StringKeyword=130]="StringKeyword",e[e.SymbolKeyword=131]="SymbolKeyword",e[e.TypeKeyword=132]="TypeKeyword",e[e.FromKeyword=133]="FromKeyword",e[e.GlobalKeyword=134]="GlobalKeyword",e[e.OfKeyword=135]="OfKeyword",e[e.QualifiedName=136]="QualifiedName",e[e.ComputedPropertyName=137]="ComputedPropertyName",e[e.TypeParameter=138]="TypeParameter",e[e.Parameter=139]="Parameter",e[e.Decorator=140]="Decorator",e[e.PropertySignature=141]="PropertySignature",e[e.PropertyDeclaration=142]="PropertyDeclaration",e[e.MethodSignature=143]="MethodSignature",e[e.MethodDeclaration=144]="MethodDeclaration",e[e.Constructor=145]="Constructor",e[e.GetAccessor=146]="GetAccessor",e[e.SetAccessor=147]="SetAccessor",e[e.CallSignature=148]="CallSignature",e[e.ConstructSignature=149]="ConstructSignature",e[e.IndexSignature=150]="IndexSignature",e[e.TypePredicate=151]="TypePredicate",e[e.TypeReference=152]="TypeReference",e[e.FunctionType=153]="FunctionType",e[e.ConstructorType=154]="ConstructorType",e[e.TypeQuery=155]="TypeQuery",e[e.TypeLiteral=156]="TypeLiteral",e[e.ArrayType=157]="ArrayType",e[e.TupleType=158]="TupleType",e[e.UnionType=159]="UnionType",e[e.IntersectionType=160]="IntersectionType",e[e.ParenthesizedType=161]="ParenthesizedType",e[e.ThisType=162]="ThisType",e[e.StringLiteralType=163]="StringLiteralType",e[e.ObjectBindingPattern=164]="ObjectBindingPattern",e[e.ArrayBindingPattern=165]="ArrayBindingPattern",e[e.BindingElement=166]="BindingElement",e[e.ArrayLiteralExpression=167]="ArrayLiteralExpression",e[e.ObjectLiteralExpression=168]="ObjectLiteralExpression",e[e.PropertyAccessExpression=169]="PropertyAccessExpression",e[e.ElementAccessExpression=170]="ElementAccessExpression",e[e.CallExpression=171]="CallExpression",e[e.NewExpression=172]="NewExpression",e[e.TaggedTemplateExpression=173]="TaggedTemplateExpression",e[e.TypeAssertionExpression=174]="TypeAssertionExpression",e[e.ParenthesizedExpression=175]="ParenthesizedExpression",e[e.FunctionExpression=176]="FunctionExpression",e[e.ArrowFunction=177]="ArrowFunction",e[e.DeleteExpression=178]="DeleteExpression",e[e.TypeOfExpression=179]="TypeOfExpression",e[e.VoidExpression=180]="VoidExpression",e[e.AwaitExpression=181]="AwaitExpression",e[e.PrefixUnaryExpression=182]="PrefixUnaryExpression",e[e.PostfixUnaryExpression=183]="PostfixUnaryExpression",e[e.BinaryExpression=184]="BinaryExpression",e[e.ConditionalExpression=185]="ConditionalExpression",e[e.TemplateExpression=186]="TemplateExpression",e[e.YieldExpression=187]="YieldExpression",e[e.SpreadElementExpression=188]="SpreadElementExpression",e[e.ClassExpression=189]="ClassExpression",e[e.OmittedExpression=190]="OmittedExpression",e[e.ExpressionWithTypeArguments=191]="ExpressionWithTypeArguments",e[e.AsExpression=192]="AsExpression",e[e.TemplateSpan=193]="TemplateSpan",e[e.SemicolonClassElement=194]="SemicolonClassElement",e[e.Block=195]="Block",e[e.VariableStatement=196]="VariableStatement",e[e.EmptyStatement=197]="EmptyStatement",e[e.ExpressionStatement=198]="ExpressionStatement",e[e.IfStatement=199]="IfStatement",e[e.DoStatement=200]="DoStatement",e[e.WhileStatement=201]="WhileStatement",e[e.ForStatement=202]="ForStatement",e[e.ForInStatement=203]="ForInStatement",e[e.ForOfStatement=204]="ForOfStatement",e[e.ContinueStatement=205]="ContinueStatement",e[e.BreakStatement=206]="BreakStatement",e[e.ReturnStatement=207]="ReturnStatement",e[e.WithStatement=208]="WithStatement",e[e.SwitchStatement=209]="SwitchStatement",e[e.LabeledStatement=210]="LabeledStatement",e[e.ThrowStatement=211]="ThrowStatement",e[e.TryStatement=212]="TryStatement",e[e.DebuggerStatement=213]="DebuggerStatement",e[e.VariableDeclaration=214]="VariableDeclaration",e[e.VariableDeclarationList=215]="VariableDeclarationList",e[e.FunctionDeclaration=216]="FunctionDeclaration",e[e.ClassDeclaration=217]="ClassDeclaration",e[e.InterfaceDeclaration=218]="InterfaceDeclaration",e[e.TypeAliasDeclaration=219]="TypeAliasDeclaration",e[e.EnumDeclaration=220]="EnumDeclaration",e[e.ModuleDeclaration=221]="ModuleDeclaration",e[e.ModuleBlock=222]="ModuleBlock",e[e.CaseBlock=223]="CaseBlock",e[e.ImportEqualsDeclaration=224]="ImportEqualsDeclaration",e[e.ImportDeclaration=225]="ImportDeclaration",e[e.ImportClause=226]="ImportClause",e[e.NamespaceImport=227]="NamespaceImport",e[e.NamedImports=228]="NamedImports",e[e.ImportSpecifier=229]="ImportSpecifier",e[e.ExportAssignment=230]="ExportAssignment",e[e.ExportDeclaration=231]="ExportDeclaration",e[e.NamedExports=232]="NamedExports",e[e.ExportSpecifier=233]="ExportSpecifier",e[e.MissingDeclaration=234]="MissingDeclaration",e[e.ExternalModuleReference=235]="ExternalModuleReference",e[e.JsxElement=236]="JsxElement",e[e.JsxSelfClosingElement=237]="JsxSelfClosingElement",e[e.JsxOpeningElement=238]="JsxOpeningElement",e[e.JsxText=239]="JsxText",e[e.JsxClosingElement=240]="JsxClosingElement",e[e.JsxAttribute=241]="JsxAttribute",e[e.JsxSpreadAttribute=242]="JsxSpreadAttribute",e[e.JsxExpression=243]="JsxExpression",e[e.CaseClause=244]="CaseClause",e[e.DefaultClause=245]="DefaultClause",e[e.HeritageClause=246]="HeritageClause",e[e.CatchClause=247]="CatchClause",e[e.PropertyAssignment=248]="PropertyAssignment",e[e.ShorthandPropertyAssignment=249]="ShorthandPropertyAssignment",e[e.EnumMember=250]="EnumMember",e[e.SourceFile=251]="SourceFile",e[e.JSDocTypeExpression=252]="JSDocTypeExpression",e[e.JSDocAllType=253]="JSDocAllType",e[e.JSDocUnknownType=254]="JSDocUnknownType",e[e.JSDocArrayType=255]="JSDocArrayType",e[e.JSDocUnionType=256]="JSDocUnionType",e[e.JSDocTupleType=257]="JSDocTupleType",e[e.JSDocNullableType=258]="JSDocNullableType",e[e.JSDocNonNullableType=259]="JSDocNonNullableType",e[e.JSDocRecordType=260]="JSDocRecordType",e[e.JSDocRecordMember=261]="JSDocRecordMember",e[e.JSDocTypeReference=262]="JSDocTypeReference",e[e.JSDocOptionalType=263]="JSDocOptionalType",e[e.JSDocFunctionType=264]="JSDocFunctionType",e[e.JSDocVariadicType=265]="JSDocVariadicType",e[e.JSDocConstructorType=266]="JSDocConstructorType",e[e.JSDocThisType=267]="JSDocThisType",e[e.JSDocComment=268]="JSDocComment",e[e.JSDocTag=269]="JSDocTag",e[e.JSDocParameterTag=270]="JSDocParameterTag",e[e.JSDocReturnTag=271]="JSDocReturnTag",e[e.JSDocTypeTag=272]="JSDocTypeTag",e[e.JSDocTemplateTag=273]="JSDocTemplateTag",e[e.SyntaxList=274]="SyntaxList",e[e.Count=275]="Count",e[e.FirstAssignment=56]="FirstAssignment",e[e.LastAssignment=68]="LastAssignment",e[e.FirstReservedWord=70]="FirstReservedWord",e[e.LastReservedWord=105]="LastReservedWord",e[e.FirstKeyword=70]="FirstKeyword",e[e.LastKeyword=135]="LastKeyword",e[e.FirstFutureReservedWord=106]="FirstFutureReservedWord",e[e.LastFutureReservedWord=114]="LastFutureReservedWord",e[e.FirstTypeNode=151]="FirstTypeNode",e[e.LastTypeNode=163]="LastTypeNode",e[e.FirstPunctuation=15]="FirstPunctuation",e[e.LastPunctuation=68]="LastPunctuation",e[e.FirstToken=0]="FirstToken",e[e.LastToken=135]="LastToken",e[e.FirstTriviaToken=2]="FirstTriviaToken",e[e.LastTriviaToken=7]="LastTriviaToken",e[e.FirstLiteralToken=8]="FirstLiteralToken",e[e.LastLiteralToken=11]="LastLiteralToken",e[e.FirstTemplateToken=11]="FirstTemplateToken",e[e.LastTemplateToken=14]="LastTemplateToken",e[e.FirstBinaryOperator=25]="FirstBinaryOperator",e[e.LastBinaryOperator=68]="LastBinaryOperator",e[e.FirstNode=136]="FirstNode"}(e.SyntaxKind||(e.SyntaxKind={})),e.SyntaxKind,function(e){e[e.None=0]="None",e[e.Export=2]="Export",e[e.Ambient=4]="Ambient",e[e.Public=8]="Public",e[e.Private=16]="Private",e[e.Protected=32]="Protected",e[e.Static=64]="Static",e[e.Abstract=128]="Abstract",e[e.Async=256]="Async",e[e.Default=512]="Default",e[e.MultiLine=1024]="MultiLine",e[e.Synthetic=2048]="Synthetic",e[e.DeclarationFile=4096]="DeclarationFile",e[e.Let=8192]="Let",e[e.Const=16384]="Const",e[e.OctalLiteral=32768]="OctalLiteral",e[e.Namespace=65536]="Namespace",e[e.ExportContext=131072]="ExportContext",e[e.ContainsThis=262144]="ContainsThis",e[e.HasImplicitReturn=524288]="HasImplicitReturn",e[e.HasExplicitReturn=1048576]="HasExplicitReturn",e[e.GlobalAugmentation=2097152]="GlobalAugmentation",e[e.HasClassExtends=4194304]="HasClassExtends",e[e.HasDecorators=8388608]="HasDecorators",e[e.HasParamDecorators=16777216]="HasParamDecorators",e[e.HasAsyncFunctions=33554432]="HasAsyncFunctions",e[e.HasJsxSpreadAttribute=1073741824]="HasJsxSpreadAttribute",e[e.Modifier=1022]="Modifier",e[e.AccessibilityModifier=56]="AccessibilityModifier",e[e.BlockScoped=24576]="BlockScoped",e[e.ReachabilityCheckFlags=1572864]="ReachabilityCheckFlags",e[e.EmitHelperFlags=62914560]="EmitHelperFlags"}(e.NodeFlags||(e.NodeFlags={})),e.NodeFlags,function(e){e[e.None=0]="None",e[e.DisallowIn=1]="DisallowIn",e[e.Yield=2]="Yield",e[e.Decorator=4]="Decorator",e[e.Await=8]="Await",e[e.ThisNodeHasError=16]="ThisNodeHasError",e[e.JavaScriptFile=32]="JavaScriptFile",e[e.ParserGeneratedFlags=63]="ParserGeneratedFlags",e[e.TypeExcludesFlags=10]="TypeExcludesFlags",e[e.ThisNodeOrAnySubNodesHasError=64]="ThisNodeOrAnySubNodesHasError",e[e.HasAggregatedChildData=128]="HasAggregatedChildData"}(e.ParserContextFlags||(e.ParserContextFlags={})),e.ParserContextFlags,function(e){e[e.None=0]="None",e[e.IntrinsicNamedElement=1]="IntrinsicNamedElement",e[e.IntrinsicIndexedElement=2]="IntrinsicIndexedElement",e[e.ValueElement=4]="ValueElement",e[e.UnknownElement=16]="UnknownElement",e[e.IntrinsicElement=3]="IntrinsicElement"}(e.JsxFlags||(e.JsxFlags={})),e.JsxFlags,function(e){e[e.Succeeded=1]="Succeeded",e[e.Failed=2]="Failed",e[e.FailedAndReported=3]="FailedAndReported"}(e.RelationComparisonResult||(e.RelationComparisonResult={}))
var t=(e.RelationComparisonResult,function(){return function(){}}())
e.OperationCanceledException=t,function(e){e[e.Success=0]="Success",e[e.DiagnosticsPresent_OutputsSkipped=1]="DiagnosticsPresent_OutputsSkipped",e[e.DiagnosticsPresent_OutputsGenerated=2]="DiagnosticsPresent_OutputsGenerated"}(e.ExitStatus||(e.ExitStatus={})),e.ExitStatus,function(e){e[e.None=0]="None",e[e.WriteArrayAsGenericType=1]="WriteArrayAsGenericType",e[e.UseTypeOfFunction=2]="UseTypeOfFunction",e[e.NoTruncation=4]="NoTruncation",e[e.WriteArrowStyleSignature=8]="WriteArrowStyleSignature",e[e.WriteOwnNameForAnyLike=16]="WriteOwnNameForAnyLike",e[e.WriteTypeArgumentsOfSignature=32]="WriteTypeArgumentsOfSignature",e[e.InElementType=64]="InElementType",e[e.UseFullyQualifiedType=128]="UseFullyQualifiedType"}(e.TypeFormatFlags||(e.TypeFormatFlags={})),e.TypeFormatFlags,function(e){e[e.None=0]="None",e[e.WriteTypeParametersOrArguments=1]="WriteTypeParametersOrArguments",e[e.UseOnlyExternalAliasing=2]="UseOnlyExternalAliasing"}(e.SymbolFormatFlags||(e.SymbolFormatFlags={})),e.SymbolFormatFlags,function(e){e[e.Accessible=0]="Accessible",e[e.NotAccessible=1]="NotAccessible",e[e.CannotBeNamed=2]="CannotBeNamed"}(e.SymbolAccessibility||(e.SymbolAccessibility={})),e.SymbolAccessibility,function(e){e[e.This=0]="This",e[e.Identifier=1]="Identifier"}(e.TypePredicateKind||(e.TypePredicateKind={})),e.TypePredicateKind,function(e){e[e.Unknown=0]="Unknown",e[e.TypeWithConstructSignatureAndValue=1]="TypeWithConstructSignatureAndValue",e[e.VoidType=2]="VoidType",e[e.NumberLikeType=3]="NumberLikeType",e[e.StringLikeType=4]="StringLikeType",e[e.BooleanType=5]="BooleanType",e[e.ArrayLikeType=6]="ArrayLikeType",e[e.ESSymbolType=7]="ESSymbolType",e[e.TypeWithCallSignature=8]="TypeWithCallSignature",e[e.ObjectType=9]="ObjectType"}(e.TypeReferenceSerializationKind||(e.TypeReferenceSerializationKind={})),e.TypeReferenceSerializationKind,function(e){e[e.None=0]="None",e[e.FunctionScopedVariable=1]="FunctionScopedVariable",e[e.BlockScopedVariable=2]="BlockScopedVariable",e[e.Property=4]="Property",e[e.EnumMember=8]="EnumMember",e[e.Function=16]="Function",e[e.Class=32]="Class",e[e.Interface=64]="Interface",e[e.ConstEnum=128]="ConstEnum",e[e.RegularEnum=256]="RegularEnum",e[e.ValueModule=512]="ValueModule",e[e.NamespaceModule=1024]="NamespaceModule",e[e.TypeLiteral=2048]="TypeLiteral",e[e.ObjectLiteral=4096]="ObjectLiteral",e[e.Method=8192]="Method",e[e.Constructor=16384]="Constructor",e[e.GetAccessor=32768]="GetAccessor",e[e.SetAccessor=65536]="SetAccessor",e[e.Signature=131072]="Signature",e[e.TypeParameter=262144]="TypeParameter",e[e.TypeAlias=524288]="TypeAlias",e[e.ExportValue=1048576]="ExportValue",e[e.ExportType=2097152]="ExportType",e[e.ExportNamespace=4194304]="ExportNamespace",e[e.Alias=8388608]="Alias",e[e.Instantiated=16777216]="Instantiated",e[e.Merged=33554432]="Merged",e[e.Transient=67108864]="Transient",e[e.Prototype=134217728]="Prototype",e[e.SyntheticProperty=268435456]="SyntheticProperty",e[e.Optional=536870912]="Optional",e[e.ExportStar=1073741824]="ExportStar",e[e.Enum=384]="Enum",e[e.Variable=3]="Variable",e[e.Value=107455]="Value",e[e.Type=793056]="Type",e[e.Namespace=1536]="Namespace",e[e.Module=1536]="Module",e[e.Accessor=98304]="Accessor",e[e.FunctionScopedVariableExcludes=107454]="FunctionScopedVariableExcludes",e[e.BlockScopedVariableExcludes=107455]="BlockScopedVariableExcludes",e[e.ParameterExcludes=107455]="ParameterExcludes",e[e.PropertyExcludes=107455]="PropertyExcludes",e[e.EnumMemberExcludes=107455]="EnumMemberExcludes",e[e.FunctionExcludes=106927]="FunctionExcludes",e[e.ClassExcludes=899519]="ClassExcludes",e[e.InterfaceExcludes=792960]="InterfaceExcludes",e[e.RegularEnumExcludes=899327]="RegularEnumExcludes",e[e.ConstEnumExcludes=899967]="ConstEnumExcludes",e[e.ValueModuleExcludes=106639]="ValueModuleExcludes",e[e.NamespaceModuleExcludes=0]="NamespaceModuleExcludes",e[e.MethodExcludes=99263]="MethodExcludes",e[e.GetAccessorExcludes=41919]="GetAccessorExcludes",e[e.SetAccessorExcludes=74687]="SetAccessorExcludes",e[e.TypeParameterExcludes=530912]="TypeParameterExcludes",e[e.TypeAliasExcludes=793056]="TypeAliasExcludes",e[e.AliasExcludes=8388608]="AliasExcludes",e[e.ModuleMember=8914931]="ModuleMember",e[e.ExportHasLocal=944]="ExportHasLocal",e[e.HasExports=1952]="HasExports",e[e.HasMembers=6240]="HasMembers",e[e.BlockScoped=418]="BlockScoped",e[e.PropertyOrAccessor=98308]="PropertyOrAccessor",e[e.Export=7340032]="Export",e[e.Classifiable=788448]="Classifiable"}(e.SymbolFlags||(e.SymbolFlags={})),e.SymbolFlags,function(e){e[e.TypeChecked=1]="TypeChecked",e[e.LexicalThis=2]="LexicalThis",e[e.CaptureThis=4]="CaptureThis",e[e.SuperInstance=256]="SuperInstance",e[e.SuperStatic=512]="SuperStatic",e[e.ContextChecked=1024]="ContextChecked",e[e.AsyncMethodWithSuper=2048]="AsyncMethodWithSuper",e[e.AsyncMethodWithSuperBinding=4096]="AsyncMethodWithSuperBinding",e[e.CaptureArguments=8192]="CaptureArguments",e[e.EnumValuesComputed=16384]="EnumValuesComputed",e[e.LexicalModuleMergesWithClass=32768]="LexicalModuleMergesWithClass",e[e.LoopWithCapturedBlockScopedBinding=65536]="LoopWithCapturedBlockScopedBinding",e[e.CapturedBlockScopedBinding=131072]="CapturedBlockScopedBinding",e[e.BlockScopedBindingInLoop=262144]="BlockScopedBindingInLoop",e[e.ClassWithBodyScopedClassBinding=524288]="ClassWithBodyScopedClassBinding",e[e.BodyScopedClassBinding=1048576]="BodyScopedClassBinding",e[e.NeedsLoopOutParameter=2097152]="NeedsLoopOutParameter"}(e.NodeCheckFlags||(e.NodeCheckFlags={})),e.NodeCheckFlags,function(e){e[e.Any=1]="Any",e[e.String=2]="String",e[e.Number=4]="Number",e[e.Boolean=8]="Boolean",e[e.Void=16]="Void",e[e.Undefined=32]="Undefined",e[e.Null=64]="Null",e[e.Enum=128]="Enum",e[e.StringLiteral=256]="StringLiteral",e[e.TypeParameter=512]="TypeParameter",e[e.Class=1024]="Class",e[e.Interface=2048]="Interface",e[e.Reference=4096]="Reference",e[e.Tuple=8192]="Tuple",e[e.Union=16384]="Union",e[e.Intersection=32768]="Intersection",e[e.Anonymous=65536]="Anonymous",e[e.Instantiated=131072]="Instantiated",e[e.FromSignature=262144]="FromSignature",e[e.ObjectLiteral=524288]="ObjectLiteral",e[e.FreshObjectLiteral=1048576]="FreshObjectLiteral",e[e.ContainsUndefinedOrNull=2097152]="ContainsUndefinedOrNull",e[e.ContainsObjectLiteral=4194304]="ContainsObjectLiteral",e[e.ContainsAnyFunctionType=8388608]="ContainsAnyFunctionType",e[e.ESSymbol=16777216]="ESSymbol",e[e.ThisType=33554432]="ThisType",e[e.ObjectLiteralPatternWithComputedProperties=67108864]="ObjectLiteralPatternWithComputedProperties",e[e.Intrinsic=16777343]="Intrinsic",e[e.Primitive=16777726]="Primitive",e[e.StringLike=258]="StringLike",e[e.NumberLike=132]="NumberLike",e[e.ObjectType=80896]="ObjectType",e[e.UnionOrIntersection=49152]="UnionOrIntersection",e[e.StructuredType=130048]="StructuredType",e[e.RequiresWidening=6291456]="RequiresWidening",e[e.PropagatingFlags=14680064]="PropagatingFlags"}(e.TypeFlags||(e.TypeFlags={})),e.TypeFlags,function(e){e[e.Call=0]="Call",e[e.Construct=1]="Construct"}(e.SignatureKind||(e.SignatureKind={})),e.SignatureKind,function(e){e[e.String=0]="String",e[e.Number=1]="Number"}(e.IndexKind||(e.IndexKind={})),e.IndexKind,function(e){e[e.None=0]="None",e[e.ExportsProperty=1]="ExportsProperty",e[e.ModuleExports=2]="ModuleExports",e[e.PrototypeProperty=3]="PrototypeProperty",e[e.ThisProperty=4]="ThisProperty"}(e.SpecialPropertyAssignmentKind||(e.SpecialPropertyAssignmentKind={})),e.SpecialPropertyAssignmentKind,function(e){e[e.Warning=0]="Warning",e[e.Error=1]="Error",e[e.Message=2]="Message"}(e.DiagnosticCategory||(e.DiagnosticCategory={})),e.DiagnosticCategory,function(e){e[e.Classic=1]="Classic",e[e.NodeJs=2]="NodeJs"}(e.ModuleResolutionKind||(e.ModuleResolutionKind={})),e.ModuleResolutionKind,function(e){e[e.None=0]="None",e[e.CommonJS=1]="CommonJS",e[e.AMD=2]="AMD",e[e.UMD=3]="UMD",e[e.System=4]="System",e[e.ES6=5]="ES6",e[e.ES2015=5]="ES2015"}(e.ModuleKind||(e.ModuleKind={}))
e.ModuleKind,function(e){e[e.None=0]="None",e[e.Preserve=1]="Preserve",e[e.React=2]="React"}(e.JsxEmit||(e.JsxEmit={})),e.JsxEmit,function(e){e[e.CarriageReturnLineFeed=0]="CarriageReturnLineFeed",e[e.LineFeed=1]="LineFeed"}(e.NewLineKind||(e.NewLineKind={})),e.NewLineKind,function(e){e[e.Unknown=0]="Unknown",e[e.JS=1]="JS",e[e.JSX=2]="JSX",e[e.TS=3]="TS",e[e.TSX=4]="TSX"}(e.ScriptKind||(e.ScriptKind={})),e.ScriptKind,function(e){e[e.ES3=0]="ES3",e[e.ES5=1]="ES5",e[e.ES6=2]="ES6",e[e.ES2015=2]="ES2015",e[e.Latest=2]="Latest"}(e.ScriptTarget||(e.ScriptTarget={})),e.ScriptTarget,function(e){e[e.Standard=0]="Standard",e[e.JSX=1]="JSX"}(e.LanguageVariant||(e.LanguageVariant={})),e.LanguageVariant,function(e){e[e.Simple=0]="Simple",e[e.Pretty=1]="Pretty"}(e.DiagnosticStyle||(e.DiagnosticStyle={})),e.DiagnosticStyle,function(e){e[e.nullCharacter=0]="nullCharacter",e[e.maxAsciiCharacter=127]="maxAsciiCharacter",e[e.lineFeed=10]="lineFeed",e[e.carriageReturn=13]="carriageReturn",e[e.lineSeparator=8232]="lineSeparator",e[e.paragraphSeparator=8233]="paragraphSeparator",e[e.nextLine=133]="nextLine",e[e.space=32]="space",e[e.nonBreakingSpace=160]="nonBreakingSpace",e[e.enQuad=8192]="enQuad",e[e.emQuad=8193]="emQuad",e[e.enSpace=8194]="enSpace",e[e.emSpace=8195]="emSpace",e[e.threePerEmSpace=8196]="threePerEmSpace",e[e.fourPerEmSpace=8197]="fourPerEmSpace",e[e.sixPerEmSpace=8198]="sixPerEmSpace",e[e.figureSpace=8199]="figureSpace",e[e.punctuationSpace=8200]="punctuationSpace",e[e.thinSpace=8201]="thinSpace",e[e.hairSpace=8202]="hairSpace",e[e.zeroWidthSpace=8203]="zeroWidthSpace",e[e.narrowNoBreakSpace=8239]="narrowNoBreakSpace",e[e.ideographicSpace=12288]="ideographicSpace",e[e.mathematicalSpace=8287]="mathematicalSpace",e[e.ogham=5760]="ogham",e[e._=95]="_",e[e.$=36]="$",e[e._0=48]="_0",e[e._1=49]="_1",e[e._2=50]="_2",e[e._3=51]="_3",e[e._4=52]="_4",e[e._5=53]="_5",e[e._6=54]="_6",e[e._7=55]="_7",e[e._8=56]="_8",e[e._9=57]="_9",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.g=103]="g",e[e.h=104]="h",e[e.i=105]="i",e[e.j=106]="j",e[e.k=107]="k",e[e.l=108]="l",e[e.m=109]="m",e[e.n=110]="n",e[e.o=111]="o",e[e.p=112]="p",e[e.q=113]="q",e[e.r=114]="r",e[e.s=115]="s",e[e.t=116]="t",e[e.u=117]="u",e[e.v=118]="v",e[e.w=119]="w",e[e.x=120]="x",e[e.y=121]="y",e[e.z=122]="z",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.G=71]="G",e[e.H=72]="H",e[e.I=73]="I",e[e.J=74]="J",e[e.K=75]="K",e[e.L=76]="L",e[e.M=77]="M",e[e.N=78]="N",e[e.O=79]="O",e[e.P=80]="P",e[e.Q=81]="Q",e[e.R=82]="R",e[e.S=83]="S",e[e.T=84]="T",e[e.U=85]="U",e[e.V=86]="V",e[e.W=87]="W",e[e.X=88]="X",e[e.Y=89]="Y",e[e.Z=90]="Z",e[e.ampersand=38]="ampersand",e[e.asterisk=42]="asterisk",e[e.at=64]="at",e[e.backslash=92]="backslash",e[e.backtick=96]="backtick",e[e.bar=124]="bar",e[e.caret=94]="caret",e[e.closeBrace=125]="closeBrace",e[e.closeBracket=93]="closeBracket",e[e.closeParen=41]="closeParen",e[e.colon=58]="colon",e[e.comma=44]="comma",e[e.dot=46]="dot",e[e.doubleQuote=34]="doubleQuote",e[e.equals=61]="equals",e[e.exclamation=33]="exclamation",e[e.greaterThan=62]="greaterThan",e[e.hash=35]="hash",e[e.lessThan=60]="lessThan",e[e.minus=45]="minus",e[e.openBrace=123]="openBrace",e[e.openBracket=91]="openBracket",e[e.openParen=40]="openParen",e[e.percent=37]="percent",e[e.plus=43]="plus",e[e.question=63]="question",e[e.semicolon=59]="semicolon",e[e.singleQuote=39]="singleQuote",e[e.slash=47]="slash",e[e.tilde=126]="tilde",e[e.backspace=8]="backspace",e[e.formFeed=12]="formFeed",e[e.byteOrderMark=65279]="byteOrderMark",e[e.tab=9]="tab",e[e.verticalTab=11]="verticalTab"}(e.CharacterCodes||(e.CharacterCodes={})),e.CharacterCodes}(ts||(ts={})),function(e){function t(e,t){if(e)for(var n=0,r=e.length;r>n;n++){var a=t(e[n],n)
if(a)return a}}function n(e,t){if(e)for(var n=0,r=e;n<r.length;n++){if(r[n]===t)return!0}return!1}function r(e){return 0!==e.length?e[e.length-1]:void 0}function a(e,t){return N.call(e,t)}function i(e,t,n){return n=n||0,e.replace(/{(\d+)}/g,function(e,r){return t[+r+n]})}function o(t){return e.localizedDiagnosticMessages&&e.localizedDiagnosticMessages[t.key]?e.localizedDiagnosticMessages[t.key]:t.message}function s(e,t){return e===t?0:void 0===e?-1:void 0===t?1:t>e?-1:1}function c(e){return e.file?e.file.fileName:void 0}function _(e,t){return s(c(e),c(t))||s(e.start,t.start)||s(e.length,t.length)||s(e.code,t.code)||function(e,t){for(;e&&t;){var n="string"==typeof e?e:e.messageText,r="string"==typeof t?t:t.messageText,a=s(n,r)
if(a)return a
e="string"==typeof e?void 0:e.next,t="string"==typeof t?void 0:t.next}return e||t?e?1:-1:0}(e.messageText,t.messageText)||0}function u(e){if(e.length<2)return e
for(var t=[e[0]],n=e[0],r=1;r<e.length;r++){var a=e[r]
0===_(a,n)||(t.push(a),n=a)}return t}function l(e){return e.replace(/\\/g,"/")}function d(e){if(47===e.charCodeAt(0)){if(47!==e.charCodeAt(1))return 1
var t=e.indexOf("/",2)
if(0>t)return 2
var n=e.indexOf("/",t+1)
return 0>n?t+1:n+1}if(58===e.charCodeAt(1))return 47===e.charCodeAt(2)?3:2
if(0===e.lastIndexOf("file:///",0))return"file:///".length
var r=e.indexOf("://")
return-1!==r?r+"://".length:0}function p(t,n){for(var a=[],i=0,o=t.substr(n).split(e.directorySeparator);i<o.length;i++){var s=o[i]
"."!==s&&(".."===s&&a.length>0&&".."!==r(a)?a.pop():s&&a.push(s))}return a}function f(t){var n=d(t=l(t)),r=p(t,n)
return t.substr(0,n)+r.join(e.directorySeparator)}function m(e){return e&&!g(e)&&-1!==e.indexOf("://")}function g(e){return 0!==d(e)}function y(e,t){var n=p(e,t)
return[e.substr(0,t)].concat(n)}function h(e,t){var n=d(e=l(e))
return 0===n&&(n=d(e=C(l(t),e))),y(e,n)}function v(e,t){return k(h(e,t))}function k(t){return t&&t.length?t[0]+t.slice(1).join(e.directorySeparator):void 0}function b(t){for(var n=t.length,r=t.indexOf("://")+"://".length;n>r&&47===t.charCodeAt(r);)r++
if(r===n)return[t]
var a=t.indexOf(e.directorySeparator,r)
return-1!==a?y(t,r=a+1):[t+e.directorySeparator]}function x(e,t){return m(e)?b(e):h(e,t)}function C(t,n){return t&&t.length?n&&n.length?0!==d(n)?n:t.charAt(t.length-1)===e.directorySeparator?t+n:t+e.directorySeparator+n:t:n}function D(e,t){var n=e.length,r=t.length
return n>r&&e.substr(n-r,r)===t}function S(e){switch(e.substr(e.lastIndexOf(".")).toLowerCase()){case".js":return 1
case".jsx":return 2
case".ts":return 3
case".tsx":return 4
default:return 0}}function T(t){return t&&t.allowJs?O:e.supportedTypeScriptExtensions}function E(e,t){this.flags=e,this.name=t,this.declarations=void 0}function w(e,t){this.flags=t}function A(e){}function P(e,t,n){this.kind=e,this.pos=t,this.end=n,this.flags=0,this.parent=void 0}!function(e){e[e.False=0]="False",e[e.Maybe=1]="Maybe",e[e.True=-1]="True"}(e.Ternary||(e.Ternary={})),e.Ternary,e.createFileMap=function(e){function t(t){return e?e(t):t}var n={}
return{get:function(e){return n[t(e)]},set:function(e,r){n[t(e)]=r},contains:function(e){return a(n,t(e))},remove:function(e){var r=t(e)
delete n[r]},forEachValue:function(e){for(var t in n)e(t,n[t])},clear:function(){n={}}}},e.toPath=function(e,t,n){return n(g(e)?f(e):v(e,t))},function(e){e[e.LessThan=-1]="LessThan",e[e.EqualTo=0]="EqualTo",e[e.GreaterThan=1]="GreaterThan"}(e.Comparison||(e.Comparison={})),e.Comparison,e.forEach=t,e.contains=n,e.indexOf=function(e,t){if(e)for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n
return-1},e.countWhere=function(e,t){var n=0
if(e)for(var r=0,a=e;r<a.length;r++)t(a[r])&&n++
return n},e.filter=function(e,t){var n
if(e){n=[]
for(var r=0,a=e;r<a.length;r++){var i=a[r]
t(i)&&n.push(i)}}return n},e.map=function(e,t){var n
if(e){n=[]
for(var r=0,a=e;r<a.length;r++){var i=a[r]
n.push(t(i))}}return n},e.concatenate=function(e,t){return t&&t.length?e&&e.length?e.concat(t):t:e},e.deduplicate=function(e){var t
if(e){t=[]
for(var r=0,a=e;r<a.length;r++){var i=a[r]
n(t,i)||t.push(i)}}return t},e.sum=function(e,t){for(var n=0,r=0,a=e;r<a.length;r++)n+=a[r][t]
return n},e.addRange=function(e,t){if(e&&t)for(var n=0,r=t;n<r.length;n++){var a=r[n]
e.push(a)}},e.rangeEquals=function(e,t,n,r){for(;r>n;){if(e[n]!==t[n])return!1
n++}return!0},e.lastOrUndefined=r,e.binarySearch=function(e,t){for(var n=0,r=e.length-1;r>=n;){var a=n+(r-n>>1),i=e[a]
if(i===t)return a
i>t?r=a-1:n=a+1}return~n},e.reduceLeft=function(e,t,n){if(e){var r=e.length
if(r>0){var a=0,i=arguments.length<=2?e[a]:n
for(a++;r>a;)i=t(i,e[a]),a++
return i}}return n},e.reduceRight=function(e,t,n){if(e){var r=e.length-1
if(r>=0){var a=arguments.length<=2?e[r]:n
for(r--;r>=0;)a=t(a,e[r]),r--
return a}}return n}
var N=Object.prototype.hasOwnProperty
e.hasProperty=a,e.getKeys=function(e){var t=[]
for(var n in e)t.push(n)
return t},e.getProperty=function(e,t){return N.call(e,t)?e[t]:void 0},e.isEmpty=function(e){for(var t in e)if(a(e,t))return!1
return!0},e.clone=function(e){var t={}
for(var n in e)t[n]=e[n]
return t},e.extend=function(e,t){var n={}
for(var r in e)n[r]=e[r]
for(var r in t)a(n,r)||(n[r]=t[r])
return n},e.forEachValue=function(e,t){var n
for(var r in e)if(n=t(e[r]))break
return n},e.forEachKey=function(e,t){var n
for(var r in e)if(n=t(r))break
return n},e.lookUp=function(e,t){return a(e,t)?e[t]:void 0},e.copyMap=function(e,t){for(var n in e)t[n]=e[n]},e.arrayToMap=function(e,n){var r={}
return t(e,function(e){r[n(e)]=e}),r},e.reduceProperties=function(e,t,n){var r=n
if(e)for(var i in e)a(e,i)&&(r=t(r,e[i],String(i)))
return r},e.isArray=function(e){return Array.isArray?Array.isArray(e):e instanceof Array},e.memoize=function(e){var t
return function(){return e&&(t=e(),e=void 0),t}},e.localizedDiagnosticMessages=void 0,e.getLocaleSpecificMessage=o,e.createFileDiagnostic=function(e,t,n,r){var a=t+n
R.assert(t>=0,"start must be non-negative, is "+t),R.assert(n>=0,"length must be non-negative, is "+n),e&&(R.assert(t<=e.text.length,"start must be within the bounds of the file. "+t+" > "+e.text.length),R.assert(a<=e.text.length,"end must be the bounds of the file. "+a+" > "+e.text.length))
var s=o(r)
return arguments.length>4&&(s=i(s,arguments,4)),{file:e,start:t,length:n,messageText:s,category:r.category,code:r.code}},e.createCompilerDiagnostic=function(e){var t=o(e)
return arguments.length>1&&(t=i(t,arguments,1)),{file:void 0,start:void 0,length:void 0,messageText:t,category:e.category,code:e.code}},e.chainDiagnosticMessages=function(e,t){var n=o(t)
return arguments.length>2&&(n=i(n,arguments,2)),{messageText:n,category:t.category,code:t.code,next:e}},e.concatenateDiagnosticMessageChains=function(e,t){for(var n=e;n.next;)n=n.next
return n.next=t,e},e.compareValues=s,e.compareDiagnostics=_,e.sortAndDeduplicateDiagnostics=function(e){return u(e.sort(_))},e.deduplicateSortedDiagnostics=u,e.normalizeSlashes=l,e.getRootLength=d,e.directorySeparator="/",e.normalizePath=f,e.getDirectoryPath=function(t){return t.substr(0,Math.max(d(t),t.lastIndexOf(e.directorySeparator)))},e.isUrl=m,e.isRootedDiskPath=g,e.getNormalizedPathComponents=h,e.getNormalizedAbsolutePath=v,e.getNormalizedPathFromPathComponents=k,e.getRelativePathToDirectoryOrUrl=function(t,n,a,i,o){var s,c=x(n,a),_=x(t,a)
for(_.length>1&&""===r(_)&&_.length--,s=0;s<c.length&&s<_.length&&i(_[s])===i(c[s]);s++);if(s){for(var u="",l=c.slice(s,c.length);s<_.length;s++)""!==_[s]&&(u=u+".."+e.directorySeparator)
return u+l.join(e.directorySeparator)}var d=k(c)
return o&&g(d)&&(d="file:///"+d),d},e.getBaseFileName=function(t){if(void 0!==t){var n=t.lastIndexOf(e.directorySeparator)
return 0>n?t:t.substring(n+1)}},e.combinePaths=C,e.fileExtensionIs=D,e.ensureScriptKind=function(e,t){return t||S(e)||3},e.getScriptKindFromFileName=S,e.supportedTypeScriptExtensions=[".ts",".tsx",".d.ts"],e.supportedJavascriptExtensions=[".js",".jsx"]
var O=e.supportedTypeScriptExtensions.concat(e.supportedJavascriptExtensions)
e.getSupportedExtensions=T,e.isSupportedSourceFileName=function(e,t){if(!e)return!1
for(var n=0,r=T(t);n<r.length;n++)if(D(e,r[n]))return!0
return!1}
var R,I=[".d.ts",".ts",".js",".tsx",".jsx"]
e.removeFileExtension=function(e){for(var t=0,n=I;t<n.length;t++){var r=n[t]
if(D(e,r))return e.substr(0,e.length-r.length)}return e},e.objectAllocator={getNodeConstructor:function(){return P},getSourceFileConstructor:function(){return P},getSymbolConstructor:function(){return E},getTypeConstructor:function(){return w},getSignatureConstructor:function(){return A}},function(e){e[e.None=0]="None",e[e.Normal=1]="Normal",e[e.Aggressive=2]="Aggressive",e[e.VeryAggressive=3]="VeryAggressive"}(e.AssertionLevel||(e.AssertionLevel={})),e.AssertionLevel,function(e){var t=0
e.shouldAssert=function(e){return t>=e},e.assert=function(e,t,n){if(!e){var r=""
throw n&&(r="\r\nVerbose Debug Information: "+n()),new Error("Debug Failure. False expression: "+(t||"")+r)}},e.fail=function(t){e.assert(!1,t)}}(R=e.Debug||(e.Debug={})),e.copyListRemovingItem=function(e,t){for(var n=[],r=0,a=t;r<a.length;r++){var i=a[r]
i!==e&&n.push(i)}return n},e.createGetCanonicalFileName=function(e){return e?function(e){return e}:function(e){return e.toLowerCase()}}}(ts||(ts={})),function(e){e.sys=function(){return"undefined"!=typeof WScript&&"function"==typeof ActiveXObject?function(){function t(e){return e.toLowerCase()}function n(e){for(var t=[],n=new Enumerator(e);!n.atEnd();n.moveNext())t.push(n.item().Name)
return t.sort()}var r=new ActiveXObject("Scripting.FileSystemObject"),a=new ActiveXObject("ADODB.Stream")
a.Type=2
var i=new ActiveXObject("ADODB.Stream")
i.Type=1
for(var o=[],s=0;s<WScript.Arguments.length;s++)o[s]=WScript.Arguments.Item(s)
return{args:o,newLine:"\r\n",useCaseSensitiveFileNames:!1,write:function(e){WScript.StdOut.Write(e)},readFile:function(e,t){if(r.FileExists(e)){a.Open()
try{if(t)a.Charset=t,a.LoadFromFile(e)
else{a.Charset="x-ansi",a.LoadFromFile(e)
var n=a.ReadText(2)||""
a.Position=0,a.Charset=n.length>=2&&(255===n.charCodeAt(0)&&254===n.charCodeAt(1)||254===n.charCodeAt(0)&&255===n.charCodeAt(1))?"unicode":"utf-8"}return a.ReadText()}catch(e){throw e}finally{a.Close()}}},writeFile:function(e,t,n){a.Open(),i.Open()
try{a.Charset="utf-8",a.WriteText(t),a.Position=n?0:3,a.CopyTo(i),i.SaveToFile(e,2)}finally{i.Close(),a.Close()}},resolvePath:function(e){return r.GetAbsolutePathName(e)},fileExists:function(e){return r.FileExists(e)},directoryExists:function(e){return r.FolderExists(e)},createDirectory:function(e){this.directoryExists(e)||r.CreateFolder(e)},getExecutingFilePath:function(){return WScript.ScriptFullName},getCurrentDirectory:function(){return new ActiveXObject("WScript.Shell").CurrentDirectory},readDirectory:function(a,i,o){var s=[]
return o=e.map(o,function(n){return t(e.combinePaths(a,n))}),function a(c){for(var _=r.GetFolder(c||"."),u=0,l=n(_.files);u<l.length;u++){var d=l[u],p=e.combinePaths(c,d)
i&&!e.fileExtensionIs(p,i)||e.contains(o,t(p))||s.push(p)}for(var f=0,m=n(_.subfolders);f<m.length;f++){d=m[f]
var g=e.combinePaths(c,d)
e.contains(o,t(g))||a(g)}}(a),s},exit:function(e){try{WScript.Quit(e)}catch(e){}}}}():"undefined"!=typeof process&&process.nextTick&&!process.browser&&"undefined"!=typeof require?function(){function t(){return parseInt(process.version.charAt(1))>=4}function n(e){return _?e:e.toLowerCase()}var r=require("fs"),a=require("path"),i=require("os"),o=function(t,n){function a(e){return r.statSync(e).mtime}function i(e){var t=s[e]
t&&r.stat(t.filePath,function(e,n){e?t.callback(t.filePath):t.mtime.getTime()!==n.mtime.getTime()&&(t.mtime=a(t.filePath),t.callback(t.filePath,0===t.mtime.getTime()))})}function o(){setInterval(function(){for(var e=0,t=c,r=-1;n>e&&t!==r;)i(t),0>r&&(r=t),++t===s.length&&(t=0),e++
c=t},t)}void 0===t&&(t=2500),void 0===n&&(n=30)
var s=[],c=0
return{getModifiedTime:a,poll:i,startWatchTimer:o,addFile:function(e,t){var n={filePath:e,callback:t,mtime:a(e)}
return s.push(n),1===s.length&&o(),n},removeFile:function(t){s=e.copyListRemovingItem(t,s)}}}(),s=function(){function t(t){var n=e.getDirectoryPath(t)
if(i.contains(n)){var r=i.get(n)
r.referenceCount-=1,r.referenceCount<=0&&(r.close(),i.remove(n))}}function n(t,n){if(o.contains(t)){var r=e.copyListRemovingItem(n,o.get(t))
0===r.length?o.remove(t):o.set(t,r)}}function a(t,n,r){var a="string"!=typeof n?void 0:e.toPath(n,r,e.createGetCanonicalFileName(e.sys.useCaseSensitiveFileNames))
if(("change"===t||"rename"===t)&&o.contains(a))for(var i=0,s=o.get(a);i<s.length;i++)(0,s[i])(a)}var i=e.createFileMap(),o=e.createFileMap()
return{addFile:function(t,n){return function(e,t){o.contains(e)?o.get(e).push(t):o.set(e,[t])}(t,n),function(e){if(i.contains(e))i.get(e).referenceCount+=1
else{var t=r.watch(e,{persistent:!0},function(t,n){return a(t,n,e)})
t.referenceCount=1,i.set(e,t)}}(e.getDirectoryPath(t)),{filePath:t,callback:n}},removeFile:function(e){n(e.filePath,e.callback),t(e.filePath)}}}(),c=i.platform(),_="win32"!==c&&"win64"!==c&&"darwin"!==c
return{args:process.argv.slice(2),newLine:i.EOL,useCaseSensitiveFileNames:_,write:function(e){process.stdout.write(e)},readFile:function(e,t){if(r.existsSync(e)){var n=r.readFileSync(e),a=n.length
if(a>=2&&254===n[0]&&255===n[1]){a&=-2
for(var i=0;a>i;i+=2){var o=n[i]
n[i]=n[i+1],n[i+1]=o}return n.toString("utf16le",2)}return a>=2&&255===n[0]&&254===n[1]?n.toString("utf16le",2):a>=3&&239===n[0]&&187===n[1]&&191===n[2]?n.toString("utf8",3):n.toString("utf8")}},writeFile:function(e,t,n){var a
n&&(t="\ufeff"+t)
try{a=r.openSync(e,"w"),r.writeSync(a,t,void 0,"utf8")}finally{void 0!==a&&r.closeSync(a)}},watchFile:function(e,n){var r=t()?s:o,a=r.addFile(e,n)
return{close:function(){return r.removeFile(a)}}},watchDirectory:function(n,a,i){var o
return o=!t()||"win32"!==process.platform&&"darwin"!==process.platform?{persistent:!0}:{persistent:!0,recursive:!!i},r.watch(n,o,function(t,r){"rename"===t&&a(r?e.normalizePath(e.combinePaths(n,r)):r)})},resolvePath:function(e){return a.resolve(e)},fileExists:function(e){return r.existsSync(e)},directoryExists:function(e){return r.existsSync(e)&&r.statSync(e).isDirectory()},createDirectory:function(e){this.directoryExists(e)||r.mkdirSync(e)},getExecutingFilePath:function(){return __filename},getCurrentDirectory:function(){return process.cwd()},readDirectory:function(t,a,i){var o=[]
return i=e.map(i,function(r){return n(e.combinePaths(t,r))}),function t(s){for(var c=[],_=0,u=r.readdirSync(s||".").sort();_<u.length;_++){var l=u[_],d=e.combinePaths(s,l)
if(!e.contains(i,n(d)))try{var p=r.statSync(d)
p.isFile()?a&&!e.fileExtensionIs(d,a)||o.push(d):p.isDirectory()&&c.push(d)}catch(e){}}for(var f=0,m=c;f<m.length;f++)t(l=m[f])}(t),o},getMemoryUsage:function(){return global.gc&&global.gc(),process.memoryUsage().heapUsed},exit:function(e){process.exit(e)}}}():"undefined"!=typeof ChakraHost?{newLine:ChakraHost.newLine||"\r\n",args:ChakraHost.args,useCaseSensitiveFileNames:!!ChakraHost.useCaseSensitiveFileNames,write:ChakraHost.echo,readFile:function(e,t){return ChakraHost.readFile(e)},writeFile:function(e,t,n){n&&(t="\ufeff"+t),ChakraHost.writeFile(e,t)},resolvePath:ChakraHost.resolvePath,fileExists:ChakraHost.fileExists,directoryExists:ChakraHost.directoryExists,createDirectory:ChakraHost.createDirectory,getExecutingFilePath:function(){return ChakraHost.executingFile},getCurrentDirectory:function(){return ChakraHost.currentDirectory},readDirectory:ChakraHost.readDirectory,exit:ChakraHost.quit}:void 0}()}(ts||(ts={})),function(e){e.Diagnostics={Unterminated_string_literal:{code:1002,category:e.DiagnosticCategory.Error,key:"Unterminated_string_literal_1002",message:"Unterminated string literal."},Identifier_expected:{code:1003,category:e.DiagnosticCategory.Error,key:"Identifier_expected_1003",message:"Identifier expected."},_0_expected:{code:1005,category:e.DiagnosticCategory.Error,key:"_0_expected_1005",message:"'{0}' expected."},A_file_cannot_have_a_reference_to_itself:{code:1006,category:e.DiagnosticCategory.Error,key:"A_file_cannot_have_a_reference_to_itself_1006",message:"A file cannot have a reference to itself."},Trailing_comma_not_allowed:{code:1009,category:e.DiagnosticCategory.Error,key:"Trailing_comma_not_allowed_1009",message:"Trailing comma not allowed."},Asterisk_Slash_expected:{code:1010,category:e.DiagnosticCategory.Error,key:"Asterisk_Slash_expected_1010",message:"'*/' expected."},Unexpected_token:{code:1012,category:e.DiagnosticCategory.Error,key:"Unexpected_token_1012",message:"Unexpected token."},A_rest_parameter_must_be_last_in_a_parameter_list:{code:1014,category:e.DiagnosticCategory.Error,key:"A_rest_parameter_must_be_last_in_a_parameter_list_1014",message:"A rest parameter must be last in a parameter list."},Parameter_cannot_have_question_mark_and_initializer:{code:1015,category:e.DiagnosticCategory.Error,key:"Parameter_cannot_have_question_mark_and_initializer_1015",message:"Parameter cannot have question mark and initializer."},A_required_parameter_cannot_follow_an_optional_parameter:{code:1016,category:e.DiagnosticCategory.Error,key:"A_required_parameter_cannot_follow_an_optional_parameter_1016",message:"A required parameter cannot follow an optional parameter."},An_index_signature_cannot_have_a_rest_parameter:{code:1017,category:e.DiagnosticCategory.Error,key:"An_index_signature_cannot_have_a_rest_parameter_1017",message:"An index signature cannot have a rest parameter."},An_index_signature_parameter_cannot_have_an_accessibility_modifier:{code:1018,category:e.DiagnosticCategory.Error,key:"An_index_signature_parameter_cannot_have_an_accessibility_modifier_1018",message:"An index signature parameter cannot have an accessibility modifier."},An_index_signature_parameter_cannot_have_a_question_mark:{code:1019,category:e.DiagnosticCategory.Error,key:"An_index_signature_parameter_cannot_have_a_question_mark_1019",message:"An index signature parameter cannot have a question mark."},An_index_signature_parameter_cannot_have_an_initializer:{code:1020,category:e.DiagnosticCategory.Error,key:"An_index_signature_parameter_cannot_have_an_initializer_1020",message:"An index signature parameter cannot have an initializer."},An_index_signature_must_have_a_type_annotation:{code:1021,category:e.DiagnosticCategory.Error,key:"An_index_signature_must_have_a_type_annotation_1021",message:"An index signature must have a type annotation."},An_index_signature_parameter_must_have_a_type_annotation:{code:1022,category:e.DiagnosticCategory.Error,key:"An_index_signature_parameter_must_have_a_type_annotation_1022",message:"An index signature parameter must have a type annotation."},An_index_signature_parameter_type_must_be_string_or_number:{code:1023,category:e.DiagnosticCategory.Error,key:"An_index_signature_parameter_type_must_be_string_or_number_1023",message:"An index signature parameter type must be 'string' or 'number'."},Accessibility_modifier_already_seen:{code:1028,category:e.DiagnosticCategory.Error,key:"Accessibility_modifier_already_seen_1028",message:"Accessibility modifier already seen."},_0_modifier_must_precede_1_modifier:{code:1029,category:e.DiagnosticCategory.Error,key:"_0_modifier_must_precede_1_modifier_1029",message:"'{0}' modifier must precede '{1}' modifier."},_0_modifier_already_seen:{code:1030,category:e.DiagnosticCategory.Error,key:"_0_modifier_already_seen_1030",message:"'{0}' modifier already seen."},_0_modifier_cannot_appear_on_a_class_element:{code:1031,category:e.DiagnosticCategory.Error,key:"_0_modifier_cannot_appear_on_a_class_element_1031",message:"'{0}' modifier cannot appear on a class element."},super_must_be_followed_by_an_argument_list_or_member_access:{code:1034,category:e.DiagnosticCategory.Error,key:"super_must_be_followed_by_an_argument_list_or_member_access_1034",message:"'super' must be followed by an argument list or member access."},Only_ambient_modules_can_use_quoted_names:{code:1035,category:e.DiagnosticCategory.Error,key:"Only_ambient_modules_can_use_quoted_names_1035",message:"Only ambient modules can use quoted names."},Statements_are_not_allowed_in_ambient_contexts:{code:1036,category:e.DiagnosticCategory.Error,key:"Statements_are_not_allowed_in_ambient_contexts_1036",message:"Statements are not allowed in ambient contexts."},A_declare_modifier_cannot_be_used_in_an_already_ambient_context:{code:1038,category:e.DiagnosticCategory.Error,key:"A_declare_modifier_cannot_be_used_in_an_already_ambient_context_1038",message:"A 'declare' modifier cannot be used in an already ambient context."},Initializers_are_not_allowed_in_ambient_contexts:{code:1039,category:e.DiagnosticCategory.Error,key:"Initializers_are_not_allowed_in_ambient_contexts_1039",message:"Initializers are not allowed in ambient contexts."},_0_modifier_cannot_be_used_in_an_ambient_context:{code:1040,category:e.DiagnosticCategory.Error,key:"_0_modifier_cannot_be_used_in_an_ambient_context_1040",message:"'{0}' modifier cannot be used in an ambient context."},_0_modifier_cannot_be_used_with_a_class_declaration:{code:1041,category:e.DiagnosticCategory.Error,key:"_0_modifier_cannot_be_used_with_a_class_declaration_1041",message:"'{0}' modifier cannot be used with a class declaration."},_0_modifier_cannot_be_used_here:{code:1042,category:e.DiagnosticCategory.Error,key:"_0_modifier_cannot_be_used_here_1042",message:"'{0}' modifier cannot be used here."},_0_modifier_cannot_appear_on_a_data_property:{code:1043,category:e.DiagnosticCategory.Error,key:"_0_modifier_cannot_appear_on_a_data_property_1043",message:"'{0}' modifier cannot appear on a data property."},_0_modifier_cannot_appear_on_a_module_element:{code:1044,category:e.DiagnosticCategory.Error,key:"_0_modifier_cannot_appear_on_a_module_element_1044",message:"'{0}' modifier cannot appear on a module element."},A_0_modifier_cannot_be_used_with_an_interface_declaration:{code:1045,category:e.DiagnosticCategory.Error,key:"A_0_modifier_cannot_be_used_with_an_interface_declaration_1045",message:"A '{0}' modifier cannot be used with an interface declaration."},A_declare_modifier_is_required_for_a_top_level_declaration_in_a_d_ts_file:{code:1046,category:e.DiagnosticCategory.Error,key:"A_declare_modifier_is_required_for_a_top_level_declaration_in_a_d_ts_file_1046",message:"A 'declare' modifier is required for a top level declaration in a .d.ts file."},A_rest_parameter_cannot_be_optional:{code:1047,category:e.DiagnosticCategory.Error,key:"A_rest_parameter_cannot_be_optional_1047",message:"A rest parameter cannot be optional."},A_rest_parameter_cannot_have_an_initializer:{code:1048,category:e.DiagnosticCategory.Error,key:"A_rest_parameter_cannot_have_an_initializer_1048",message:"A rest parameter cannot have an initializer."},A_set_accessor_must_have_exactly_one_parameter:{code:1049,category:e.DiagnosticCategory.Error,key:"A_set_accessor_must_have_exactly_one_parameter_1049",message:"A 'set' accessor must have exactly one parameter."},A_set_accessor_cannot_have_an_optional_parameter:{code:1051,category:e.DiagnosticCategory.Error,key:"A_set_accessor_cannot_have_an_optional_parameter_1051",message:"A 'set' accessor cannot have an optional parameter."},A_set_accessor_parameter_cannot_have_an_initializer:{code:1052,category:e.DiagnosticCategory.Error,key:"A_set_accessor_parameter_cannot_have_an_initializer_1052",message:"A 'set' accessor parameter cannot have an initializer."},A_set_accessor_cannot_have_rest_parameter:{code:1053,category:e.DiagnosticCategory.Error,key:"A_set_accessor_cannot_have_rest_parameter_1053",message:"A 'set' accessor cannot have rest parameter."},A_get_accessor_cannot_have_parameters:{code:1054,category:e.DiagnosticCategory.Error,key:"A_get_accessor_cannot_have_parameters_1054",message:"A 'get' accessor cannot have parameters."},Type_0_is_not_a_valid_async_function_return_type:{code:1055,category:e.DiagnosticCategory.Error,key:"Type_0_is_not_a_valid_async_function_return_type_1055",message:"Type '{0}' is not a valid async function return type."},Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher:{code:1056,category:e.DiagnosticCategory.Error,key:"Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher_1056",message:"Accessors are only available when targeting ECMAScript 5 and higher."},An_async_function_or_method_must_have_a_valid_awaitable_return_type:{code:1057,category:e.DiagnosticCategory.Error,key:"An_async_function_or_method_must_have_a_valid_awaitable_return_type_1057",message:"An async function or method must have a valid awaitable return type."},Operand_for_await_does_not_have_a_valid_callable_then_member:{code:1058,category:e.DiagnosticCategory.Error,key:"Operand_for_await_does_not_have_a_valid_callable_then_member_1058",message:"Operand for 'await' does not have a valid callable 'then' member."},Return_expression_in_async_function_does_not_have_a_valid_callable_then_member:{code:1059,category:e.DiagnosticCategory.Error,key:"Return_expression_in_async_function_does_not_have_a_valid_callable_then_member_1059",message:"Return expression in async function does not have a valid callable 'then' member."},Expression_body_for_async_arrow_function_does_not_have_a_valid_callable_then_member:{code:1060,category:e.DiagnosticCategory.Error,key:"Expression_body_for_async_arrow_function_does_not_have_a_valid_callable_then_member_1060",message:"Expression body for async arrow function does not have a valid callable 'then' member."},Enum_member_must_have_initializer:{code:1061,category:e.DiagnosticCategory.Error,key:"Enum_member_must_have_initializer_1061",message:"Enum member must have initializer."},_0_is_referenced_directly_or_indirectly_in_the_fulfillment_callback_of_its_own_then_method:{code:1062,category:e.DiagnosticCategory.Error,key:"_0_is_referenced_directly_or_indirectly_in_the_fulfillment_callback_of_its_own_then_method_1062",message:"{0} is referenced directly or indirectly in the fulfillment callback of its own 'then' method."},An_export_assignment_cannot_be_used_in_a_namespace:{code:1063,category:e.DiagnosticCategory.Error,key:"An_export_assignment_cannot_be_used_in_a_namespace_1063",message:"An export assignment cannot be used in a namespace."},The_return_type_of_an_async_function_or_method_must_be_the_global_Promise_T_type:{code:1064,category:e.DiagnosticCategory.Error,key:"The_return_type_of_an_async_function_or_method_must_be_the_global_Promise_T_type_1064",message:"The return type of an async function or method must be the global Promise<T> type."},In_ambient_enum_declarations_member_initializer_must_be_constant_expression:{code:1066,category:e.DiagnosticCategory.Error,key:"In_ambient_enum_declarations_member_initializer_must_be_constant_expression_1066",message:"In ambient enum declarations member initializer must be constant expression."},Unexpected_token_A_constructor_method_accessor_or_property_was_expected:{code:1068,category:e.DiagnosticCategory.Error,key:"Unexpected_token_A_constructor_method_accessor_or_property_was_expected_1068",message:"Unexpected token. A constructor, method, accessor, or property was expected."},A_0_modifier_cannot_be_used_with_an_import_declaration:{code:1079,category:e.DiagnosticCategory.Error,key:"A_0_modifier_cannot_be_used_with_an_import_declaration_1079",message:"A '{0}' modifier cannot be used with an import declaration."},Invalid_reference_directive_syntax:{code:1084,category:e.DiagnosticCategory.Error,key:"Invalid_reference_directive_syntax_1084",message:"Invalid 'reference' directive syntax."},Octal_literals_are_not_available_when_targeting_ECMAScript_5_and_higher:{code:1085,category:e.DiagnosticCategory.Error,key:"Octal_literals_are_not_available_when_targeting_ECMAScript_5_and_higher_1085",message:"Octal literals are not available when targeting ECMAScript 5 and higher."},An_accessor_cannot_be_declared_in_an_ambient_context:{code:1086,category:e.DiagnosticCategory.Error,key:"An_accessor_cannot_be_declared_in_an_ambient_context_1086",message:"An accessor cannot be declared in an ambient context."},_0_modifier_cannot_appear_on_a_constructor_declaration:{code:1089,category:e.DiagnosticCategory.Error,key:"_0_modifier_cannot_appear_on_a_constructor_declaration_1089",message:"'{0}' modifier cannot appear on a constructor declaration."},_0_modifier_cannot_appear_on_a_parameter:{code:1090,category:e.DiagnosticCategory.Error,key:"_0_modifier_cannot_appear_on_a_parameter_1090",message:"'{0}' modifier cannot appear on a parameter."},Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement:{code:1091,category:e.DiagnosticCategory.Error,key:"Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement_1091",message:"Only a single variable declaration is allowed in a 'for...in' statement."},Type_parameters_cannot_appear_on_a_constructor_declaration:{code:1092,category:e.DiagnosticCategory.Error,key:"Type_parameters_cannot_appear_on_a_constructor_declaration_1092",message:"Type parameters cannot appear on a constructor declaration."},Type_annotation_cannot_appear_on_a_constructor_declaration:{code:1093,category:e.DiagnosticCategory.Error,key:"Type_annotation_cannot_appear_on_a_constructor_declaration_1093",message:"Type annotation cannot appear on a constructor declaration."},An_accessor_cannot_have_type_parameters:{code:1094,category:e.DiagnosticCategory.Error,key:"An_accessor_cannot_have_type_parameters_1094",message:"An accessor cannot have type parameters."},A_set_accessor_cannot_have_a_return_type_annotation:{code:1095,category:e.DiagnosticCategory.Error,key:"A_set_accessor_cannot_have_a_return_type_annotation_1095",message:"A 'set' accessor cannot have a return type annotation."},An_index_signature_must_have_exactly_one_parameter:{code:1096,category:e.DiagnosticCategory.Error,key:"An_index_signature_must_have_exactly_one_parameter_1096",message:"An index signature must have exactly one parameter."},_0_list_cannot_be_empty:{code:1097,category:e.DiagnosticCategory.Error,key:"_0_list_cannot_be_empty_1097",message:"'{0}' list cannot be empty."},Type_parameter_list_cannot_be_empty:{code:1098,category:e.DiagnosticCategory.Error,key:"Type_parameter_list_cannot_be_empty_1098",message:"Type parameter list cannot be empty."},Type_argument_list_cannot_be_empty:{code:1099,category:e.DiagnosticCategory.Error,key:"Type_argument_list_cannot_be_empty_1099",message:"Type argument list cannot be empty."},Invalid_use_of_0_in_strict_mode:{code:1100,category:e.DiagnosticCategory.Error,key:"Invalid_use_of_0_in_strict_mode_1100",message:"Invalid use of '{0}' in strict mode."},with_statements_are_not_allowed_in_strict_mode:{code:1101,category:e.DiagnosticCategory.Error,key:"with_statements_are_not_allowed_in_strict_mode_1101",message:"'with' statements are not allowed in strict mode."},delete_cannot_be_called_on_an_identifier_in_strict_mode:{code:1102,category:e.DiagnosticCategory.Error,key:"delete_cannot_be_called_on_an_identifier_in_strict_mode_1102",message:"'delete' cannot be called on an identifier in strict mode."},A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement:{code:1104,category:e.DiagnosticCategory.Error,key:"A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement_1104",message:"A 'continue' statement can only be used within an enclosing iteration statement."},A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement:{code:1105,category:e.DiagnosticCategory.Error,key:"A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement_1105",message:"A 'break' statement can only be used within an enclosing iteration or switch statement."},Jump_target_cannot_cross_function_boundary:{code:1107,category:e.DiagnosticCategory.Error,key:"Jump_target_cannot_cross_function_boundary_1107",message:"Jump target cannot cross function boundary."},A_return_statement_can_only_be_used_within_a_function_body:{code:1108,category:e.DiagnosticCategory.Error,key:"A_return_statement_can_only_be_used_within_a_function_body_1108",message:"A 'return' statement can only be used within a function body."},Expression_expected:{code:1109,category:e.DiagnosticCategory.Error,key:"Expression_expected_1109",message:"Expression expected."},Type_expected:{code:1110,category:e.DiagnosticCategory.Error,key:"Type_expected_1110",message:"Type expected."},A_class_member_cannot_be_declared_optional:{code:1112,category:e.DiagnosticCategory.Error,key:"A_class_member_cannot_be_declared_optional_1112",message:"A class member cannot be declared optional."},A_default_clause_cannot_appear_more_than_once_in_a_switch_statement:{code:1113,category:e.DiagnosticCategory.Error,key:"A_default_clause_cannot_appear_more_than_once_in_a_switch_statement_1113",message:"A 'default' clause cannot appear more than once in a 'switch' statement."},Duplicate_label_0:{code:1114,category:e.DiagnosticCategory.Error,key:"Duplicate_label_0_1114",message:"Duplicate label '{0}'"},A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement:{code:1115,category:e.DiagnosticCategory.Error,key:"A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement_1115",message:"A 'continue' statement can only jump to a label of an enclosing iteration statement."},A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement:{code:1116,category:e.DiagnosticCategory.Error,key:"A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement_1116",message:"A 'break' statement can only jump to a label of an enclosing statement."},An_object_literal_cannot_have_multiple_properties_with_the_same_name_in_strict_mode:{code:1117,category:e.DiagnosticCategory.Error,key:"An_object_literal_cannot_have_multiple_properties_with_the_same_name_in_strict_mode_1117",message:"An object literal cannot have multiple properties with the same name in strict mode."},An_object_literal_cannot_have_multiple_get_Slashset_accessors_with_the_same_name:{code:1118,category:e.DiagnosticCategory.Error,key:"An_object_literal_cannot_have_multiple_get_Slashset_accessors_with_the_same_name_1118",message:"An object literal cannot have multiple get/set accessors with the same name."},An_object_literal_cannot_have_property_and_accessor_with_the_same_name:{code:1119,category:e.DiagnosticCategory.Error,key:"An_object_literal_cannot_have_property_and_accessor_with_the_same_name_1119",message:"An object literal cannot have property and accessor with the same name."},An_export_assignment_cannot_have_modifiers:{code:1120,category:e.DiagnosticCategory.Error,key:"An_export_assignment_cannot_have_modifiers_1120",message:"An export assignment cannot have modifiers."},Octal_literals_are_not_allowed_in_strict_mode:{code:1121,category:e.DiagnosticCategory.Error,key:"Octal_literals_are_not_allowed_in_strict_mode_1121",message:"Octal literals are not allowed in strict mode."},A_tuple_type_element_list_cannot_be_empty:{code:1122,category:e.DiagnosticCategory.Error,key:"A_tuple_type_element_list_cannot_be_empty_1122",message:"A tuple type element list cannot be empty."},Variable_declaration_list_cannot_be_empty:{code:1123,category:e.DiagnosticCategory.Error,key:"Variable_declaration_list_cannot_be_empty_1123",message:"Variable declaration list cannot be empty."},Digit_expected:{code:1124,category:e.DiagnosticCategory.Error,key:"Digit_expected_1124",message:"Digit expected."},Hexadecimal_digit_expected:{code:1125,category:e.DiagnosticCategory.Error,key:"Hexadecimal_digit_expected_1125",message:"Hexadecimal digit expected."},Unexpected_end_of_text:{code:1126,category:e.DiagnosticCategory.Error,key:"Unexpected_end_of_text_1126",message:"Unexpected end of text."},Invalid_character:{code:1127,category:e.DiagnosticCategory.Error,key:"Invalid_character_1127",message:"Invalid character."},Declaration_or_statement_expected:{code:1128,category:e.DiagnosticCategory.Error,key:"Declaration_or_statement_expected_1128",message:"Declaration or statement expected."},Statement_expected:{code:1129,category:e.DiagnosticCategory.Error,key:"Statement_expected_1129",message:"Statement expected."},case_or_default_expected:{code:1130,category:e.DiagnosticCategory.Error,key:"case_or_default_expected_1130",message:"'case' or 'default' expected."},Property_or_signature_expected:{code:1131,category:e.DiagnosticCategory.Error,key:"Property_or_signature_expected_1131",message:"Property or signature expected."},Enum_member_expected:{code:1132,category:e.DiagnosticCategory.Error,key:"Enum_member_expected_1132",message:"Enum member expected."},Variable_declaration_expected:{code:1134,category:e.DiagnosticCategory.Error,key:"Variable_declaration_expected_1134",message:"Variable declaration expected."},Argument_expression_expected:{code:1135,category:e.DiagnosticCategory.Error,key:"Argument_expression_expected_1135",message:"Argument expression expected."},Property_assignment_expected:{code:1136,category:e.DiagnosticCategory.Error,key:"Property_assignment_expected_1136",message:"Property assignment expected."},Expression_or_comma_expected:{code:1137,category:e.DiagnosticCategory.Error,key:"Expression_or_comma_expected_1137",message:"Expression or comma expected."},Parameter_declaration_expected:{code:1138,category:e.DiagnosticCategory.Error,key:"Parameter_declaration_expected_1138",message:"Parameter declaration expected."},Type_parameter_declaration_expected:{code:1139,category:e.DiagnosticCategory.Error,key:"Type_parameter_declaration_expected_1139",message:"Type parameter declaration expected."},Type_argument_expected:{code:1140,category:e.DiagnosticCategory.Error,key:"Type_argument_expected_1140",message:"Type argument expected."},String_literal_expected:{code:1141,category:e.DiagnosticCategory.Error,key:"String_literal_expected_1141",message:"String literal expected."},Line_break_not_permitted_here:{code:1142,category:e.DiagnosticCategory.Error,key:"Line_break_not_permitted_here_1142",message:"Line break not permitted here."},or_expected:{code:1144,category:e.DiagnosticCategory.Error,key:"or_expected_1144",message:"'{' or ';' expected."},Modifiers_not_permitted_on_index_signature_members:{code:1145,category:e.DiagnosticCategory.Error,key:"Modifiers_not_permitted_on_index_signature_members_1145",message:"Modifiers not permitted on index signature members."},Declaration_expected:{code:1146,category:e.DiagnosticCategory.Error,key:"Declaration_expected_1146",message:"Declaration expected."},Import_declarations_in_a_namespace_cannot_reference_a_module:{code:1147,category:e.DiagnosticCategory.Error,key:"Import_declarations_in_a_namespace_cannot_reference_a_module_1147",message:"Import declarations in a namespace cannot reference a module."},Cannot_compile_modules_unless_the_module_flag_is_provided_with_a_valid_module_type_Consider_setting_the_module_compiler_option_in_a_tsconfig_json_file:{code:1148,category:e.DiagnosticCategory.Error,key:"Cannot_compile_modules_unless_the_module_flag_is_provided_with_a_valid_module_type_Consider_setting__1148",message:"Cannot compile modules unless the '--module' flag is provided with a valid module type. Consider setting the 'module' compiler option in a 'tsconfig.json' file."},File_name_0_differs_from_already_included_file_name_1_only_in_casing:{code:1149,category:e.DiagnosticCategory.Error,key:"File_name_0_differs_from_already_included_file_name_1_only_in_casing_1149",message:"File name '{0}' differs from already included file name '{1}' only in casing"},new_T_cannot_be_used_to_create_an_array_Use_new_Array_T_instead:{code:1150,category:e.DiagnosticCategory.Error,key:"new_T_cannot_be_used_to_create_an_array_Use_new_Array_T_instead_1150",message:"'new T[]' cannot be used to create an array. Use 'new Array<T>()' instead."},const_declarations_must_be_initialized:{code:1155,category:e.DiagnosticCategory.Error,key:"const_declarations_must_be_initialized_1155",message:"'const' declarations must be initialized"},const_declarations_can_only_be_declared_inside_a_block:{code:1156,category:e.DiagnosticCategory.Error,key:"const_declarations_can_only_be_declared_inside_a_block_1156",message:"'const' declarations can only be declared inside a block."},let_declarations_can_only_be_declared_inside_a_block:{code:1157,category:e.DiagnosticCategory.Error,key:"let_declarations_can_only_be_declared_inside_a_block_1157",message:"'let' declarations can only be declared inside a block."},Unterminated_template_literal:{code:1160,category:e.DiagnosticCategory.Error,key:"Unterminated_template_literal_1160",message:"Unterminated template literal."},Unterminated_regular_expression_literal:{code:1161,category:e.DiagnosticCategory.Error,key:"Unterminated_regular_expression_literal_1161",message:"Unterminated regular expression literal."},An_object_member_cannot_be_declared_optional:{code:1162,category:e.DiagnosticCategory.Error,key:"An_object_member_cannot_be_declared_optional_1162",message:"An object member cannot be declared optional."},A_yield_expression_is_only_allowed_in_a_generator_body:{code:1163,category:e.DiagnosticCategory.Error,key:"A_yield_expression_is_only_allowed_in_a_generator_body_1163",message:"A 'yield' expression is only allowed in a generator body."},Computed_property_names_are_not_allowed_in_enums:{code:1164,category:e.DiagnosticCategory.Error,key:"Computed_property_names_are_not_allowed_in_enums_1164",message:"Computed property names are not allowed in enums."},A_computed_property_name_in_an_ambient_context_must_directly_refer_to_a_built_in_symbol:{code:1165,category:e.DiagnosticCategory.Error,key:"A_computed_property_name_in_an_ambient_context_must_directly_refer_to_a_built_in_symbol_1165",message:"A computed property name in an ambient context must directly refer to a built-in symbol."},A_computed_property_name_in_a_class_property_declaration_must_directly_refer_to_a_built_in_symbol:{code:1166,category:e.DiagnosticCategory.Error,key:"A_computed_property_name_in_a_class_property_declaration_must_directly_refer_to_a_built_in_symbol_1166",message:"A computed property name in a class property declaration must directly refer to a built-in symbol."},A_computed_property_name_in_a_method_overload_must_directly_refer_to_a_built_in_symbol:{code:1168,category:e.DiagnosticCategory.Error,key:"A_computed_property_name_in_a_method_overload_must_directly_refer_to_a_built_in_symbol_1168",message:"A computed property name in a method overload must directly refer to a built-in symbol."},A_computed_property_name_in_an_interface_must_directly_refer_to_a_built_in_symbol:{code:1169,category:e.DiagnosticCategory.Error,key:"A_computed_property_name_in_an_interface_must_directly_refer_to_a_built_in_symbol_1169",message:"A computed property name in an interface must directly refer to a built-in symbol."},A_computed_property_name_in_a_type_literal_must_directly_refer_to_a_built_in_symbol:{code:1170,category:e.DiagnosticCategory.Error,key:"A_computed_property_name_in_a_type_literal_must_directly_refer_to_a_built_in_symbol_1170",message:"A computed property name in a type literal must directly refer to a built-in symbol."},A_comma_expression_is_not_allowed_in_a_computed_property_name:{code:1171,category:e.DiagnosticCategory.Error,key:"A_comma_expression_is_not_allowed_in_a_computed_property_name_1171",message:"A comma expression is not allowed in a computed property name."},extends_clause_already_seen:{code:1172,category:e.DiagnosticCategory.Error,key:"extends_clause_already_seen_1172",message:"'extends' clause already seen."},extends_clause_must_precede_implements_clause:{code:1173,category:e.DiagnosticCategory.Error,key:"extends_clause_must_precede_implements_clause_1173",message:"'extends' clause must precede 'implements' clause."},Classes_can_only_extend_a_single_class:{code:1174,category:e.DiagnosticCategory.Error,key:"Classes_can_only_extend_a_single_class_1174",message:"Classes can only extend a single class."},implements_clause_already_seen:{code:1175,category:e.DiagnosticCategory.Error,key:"implements_clause_already_seen_1175",message:"'implements' clause already seen."},Interface_declaration_cannot_have_implements_clause:{code:1176,category:e.DiagnosticCategory.Error,key:"Interface_declaration_cannot_have_implements_clause_1176",message:"Interface declaration cannot have 'implements' clause."},Binary_digit_expected:{code:1177,category:e.DiagnosticCategory.Error,key:"Binary_digit_expected_1177",message:"Binary digit expected."},Octal_digit_expected:{code:1178,category:e.DiagnosticCategory.Error,key:"Octal_digit_expected_1178",message:"Octal digit expected."},Unexpected_token_expected:{code:1179,category:e.DiagnosticCategory.Error,key:"Unexpected_token_expected_1179",message:"Unexpected token. '{' expected."},Property_destructuring_pattern_expected:{code:1180,category:e.DiagnosticCategory.Error,key:"Property_destructuring_pattern_expected_1180",message:"Property destructuring pattern expected."},Array_element_destructuring_pattern_expected:{code:1181,category:e.DiagnosticCategory.Error,key:"Array_element_destructuring_pattern_expected_1181",message:"Array element destructuring pattern expected."},A_destructuring_declaration_must_have_an_initializer:{code:1182,category:e.DiagnosticCategory.Error,key:"A_destructuring_declaration_must_have_an_initializer_1182",message:"A destructuring declaration must have an initializer."},An_implementation_cannot_be_declared_in_ambient_contexts:{code:1183,category:e.DiagnosticCategory.Error,key:"An_implementation_cannot_be_declared_in_ambient_contexts_1183",message:"An implementation cannot be declared in ambient contexts."},Modifiers_cannot_appear_here:{code:1184,category:e.DiagnosticCategory.Error,key:"Modifiers_cannot_appear_here_1184",message:"Modifiers cannot appear here."},Merge_conflict_marker_encountered:{code:1185,category:e.DiagnosticCategory.Error,key:"Merge_conflict_marker_encountered_1185",message:"Merge conflict marker encountered."},A_rest_element_cannot_have_an_initializer:{code:1186,category:e.DiagnosticCategory.Error,key:"A_rest_element_cannot_have_an_initializer_1186",message:"A rest element cannot have an initializer."},A_parameter_property_may_not_be_a_binding_pattern:{code:1187,category:e.DiagnosticCategory.Error,key:"A_parameter_property_may_not_be_a_binding_pattern_1187",message:"A parameter property may not be a binding pattern."},Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement:{code:1188,category:e.DiagnosticCategory.Error,key:"Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement_1188",message:"Only a single variable declaration is allowed in a 'for...of' statement."},The_variable_declaration_of_a_for_in_statement_cannot_have_an_initializer:{code:1189,category:e.DiagnosticCategory.Error,key:"The_variable_declaration_of_a_for_in_statement_cannot_have_an_initializer_1189",message:"The variable declaration of a 'for...in' statement cannot have an initializer."},The_variable_declaration_of_a_for_of_statement_cannot_have_an_initializer:{code:1190,category:e.DiagnosticCategory.Error,key:"The_variable_declaration_of_a_for_of_statement_cannot_have_an_initializer_1190",message:"The variable declaration of a 'for...of' statement cannot have an initializer."},An_import_declaration_cannot_have_modifiers:{code:1191,category:e.DiagnosticCategory.Error,key:"An_import_declaration_cannot_have_modifiers_1191",message:"An import declaration cannot have modifiers."},Module_0_has_no_default_export:{code:1192,category:e.DiagnosticCategory.Error,key:"Module_0_has_no_default_export_1192",message:"Module '{0}' has no default export."},An_export_declaration_cannot_have_modifiers:{code:1193,category:e.DiagnosticCategory.Error,key:"An_export_declaration_cannot_have_modifiers_1193",message:"An export declaration cannot have modifiers."},Export_declarations_are_not_permitted_in_a_namespace:{code:1194,category:e.DiagnosticCategory.Error,key:"Export_declarations_are_not_permitted_in_a_namespace_1194",message:"Export declarations are not permitted in a namespace."},Catch_clause_variable_name_must_be_an_identifier:{code:1195,category:e.DiagnosticCategory.Error,key:"Catch_clause_variable_name_must_be_an_identifier_1195",message:"Catch clause variable name must be an identifier."},Catch_clause_variable_cannot_have_a_type_annotation:{code:1196,category:e.DiagnosticCategory.Error,key:"Catch_clause_variable_cannot_have_a_type_annotation_1196",message:"Catch clause variable cannot have a type annotation."},Catch_clause_variable_cannot_have_an_initializer:{code:1197,category:e.DiagnosticCategory.Error,key:"Catch_clause_variable_cannot_have_an_initializer_1197",message:"Catch clause variable cannot have an initializer."},An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive:{code:1198,category:e.DiagnosticCategory.Error,key:"An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive_1198",message:"An extended Unicode escape value must be between 0x0 and 0x10FFFF inclusive."},Unterminated_Unicode_escape_sequence:{code:1199,category:e.DiagnosticCategory.Error,key:"Unterminated_Unicode_escape_sequence_1199",message:"Unterminated Unicode escape sequence."},Line_terminator_not_permitted_before_arrow:{code:1200,category:e.DiagnosticCategory.Error,key:"Line_terminator_not_permitted_before_arrow_1200",message:"Line terminator not permitted before arrow."},Import_assignment_cannot_be_used_when_targeting_ECMAScript_6_modules_Consider_using_import_Asterisk_as_ns_from_mod_import_a_from_mod_import_d_from_mod_or_another_module_format_instead:{code:1202,category:e.DiagnosticCategory.Error,key:"Import_assignment_cannot_be_used_when_targeting_ECMAScript_6_modules_Consider_using_import_Asterisk__1202",message:"Import assignment cannot be used when targeting ECMAScript 6 modules. Consider using 'import * as ns from \"mod\"', 'import {a} from \"mod\"', 'import d from \"mod\"', or another module format instead."},Export_assignment_cannot_be_used_when_targeting_ECMAScript_6_modules_Consider_using_export_default_or_another_module_format_instead:{code:1203,category:e.DiagnosticCategory.Error,key:"Export_assignment_cannot_be_used_when_targeting_ECMAScript_6_modules_Consider_using_export_default_o_1203",message:"Export assignment cannot be used when targeting ECMAScript 6 modules. Consider using 'export default' or another module format instead."},Cannot_compile_modules_into_es2015_when_targeting_ES5_or_lower:{code:1204,category:e.DiagnosticCategory.Error,key:"Cannot_compile_modules_into_es2015_when_targeting_ES5_or_lower_1204",message:"Cannot compile modules into 'es2015' when targeting 'ES5' or lower."},Decorators_are_not_valid_here:{code:1206,category:e.DiagnosticCategory.Error,key:"Decorators_are_not_valid_here_1206",message:"Decorators are not valid here."},Decorators_cannot_be_applied_to_multiple_get_Slashset_accessors_of_the_same_name:{code:1207,category:e.DiagnosticCategory.Error,key:"Decorators_cannot_be_applied_to_multiple_get_Slashset_accessors_of_the_same_name_1207",message:"Decorators cannot be applied to multiple get/set accessors of the same name."},Cannot_compile_namespaces_when_the_isolatedModules_flag_is_provided:{code:1208,category:e.DiagnosticCategory.Error,key:"Cannot_compile_namespaces_when_the_isolatedModules_flag_is_provided_1208",message:"Cannot compile namespaces when the '--isolatedModules' flag is provided."},Ambient_const_enums_are_not_allowed_when_the_isolatedModules_flag_is_provided:{code:1209,category:e.DiagnosticCategory.Error,key:"Ambient_const_enums_are_not_allowed_when_the_isolatedModules_flag_is_provided_1209",message:"Ambient const enums are not allowed when the '--isolatedModules' flag is provided."},Invalid_use_of_0_Class_definitions_are_automatically_in_strict_mode:{code:1210,category:e.DiagnosticCategory.Error,key:"Invalid_use_of_0_Class_definitions_are_automatically_in_strict_mode_1210",message:"Invalid use of '{0}'. Class definitions are automatically in strict mode."},A_class_declaration_without_the_default_modifier_must_have_a_name:{code:1211,category:e.DiagnosticCategory.Error,key:"A_class_declaration_without_the_default_modifier_must_have_a_name_1211",message:"A class declaration without the 'default' modifier must have a name"},Identifier_expected_0_is_a_reserved_word_in_strict_mode:{code:1212,category:e.DiagnosticCategory.Error,key:"Identifier_expected_0_is_a_reserved_word_in_strict_mode_1212",message:"Identifier expected. '{0}' is a reserved word in strict mode"},Identifier_expected_0_is_a_reserved_word_in_strict_mode_Class_definitions_are_automatically_in_strict_mode:{code:1213,category:e.DiagnosticCategory.Error,key:"Identifier_expected_0_is_a_reserved_word_in_strict_mode_Class_definitions_are_automatically_in_stric_1213",message:"Identifier expected. '{0}' is a reserved word in strict mode. Class definitions are automatically in strict mode."},Identifier_expected_0_is_a_reserved_word_in_strict_mode_Modules_are_automatically_in_strict_mode:{code:1214,category:e.DiagnosticCategory.Error,key:"Identifier_expected_0_is_a_reserved_word_in_strict_mode_Modules_are_automatically_in_strict_mode_1214",message:"Identifier expected. '{0}' is a reserved word in strict mode. Modules are automatically in strict mode."},Invalid_use_of_0_Modules_are_automatically_in_strict_mode:{code:1215,category:e.DiagnosticCategory.Error,key:"Invalid_use_of_0_Modules_are_automatically_in_strict_mode_1215",message:"Invalid use of '{0}'. Modules are automatically in strict mode."},Export_assignment_is_not_supported_when_module_flag_is_system:{code:1218,category:e.DiagnosticCategory.Error,key:"Export_assignment_is_not_supported_when_module_flag_is_system_1218",message:"Export assignment is not supported when '--module' flag is 'system'."},Experimental_support_for_decorators_is_a_feature_that_is_subject_to_change_in_a_future_release_Set_the_experimentalDecorators_option_to_remove_this_warning:{code:1219,category:e.DiagnosticCategory.Error,key:"Experimental_support_for_decorators_is_a_feature_that_is_subject_to_change_in_a_future_release_Set_t_1219",message:"Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option to remove this warning."},Generators_are_only_available_when_targeting_ECMAScript_6_or_higher:{code:1220,category:e.DiagnosticCategory.Error,key:"Generators_are_only_available_when_targeting_ECMAScript_6_or_higher_1220",message:"Generators are only available when targeting ECMAScript 6 or higher."},Generators_are_not_allowed_in_an_ambient_context:{code:1221,category:e.DiagnosticCategory.Error,key:"Generators_are_not_allowed_in_an_ambient_context_1221",message:"Generators are not allowed in an ambient context."},An_overload_signature_cannot_be_declared_as_a_generator:{code:1222,category:e.DiagnosticCategory.Error,key:"An_overload_signature_cannot_be_declared_as_a_generator_1222",message:"An overload signature cannot be declared as a generator."},_0_tag_already_specified:{code:1223,category:e.DiagnosticCategory.Error,key:"_0_tag_already_specified_1223",message:"'{0}' tag already specified."},Signature_0_must_have_a_type_predicate:{code:1224,category:e.DiagnosticCategory.Error,key:"Signature_0_must_have_a_type_predicate_1224",message:"Signature '{0}' must have a type predicate."},Cannot_find_parameter_0:{code:1225,category:e.DiagnosticCategory.Error,key:"Cannot_find_parameter_0_1225",message:"Cannot find parameter '{0}'."},Type_predicate_0_is_not_assignable_to_1:{code:1226,category:e.DiagnosticCategory.Error,key:"Type_predicate_0_is_not_assignable_to_1_1226",message:"Type predicate '{0}' is not assignable to '{1}'."},Parameter_0_is_not_in_the_same_position_as_parameter_1:{code:1227,category:e.DiagnosticCategory.Error,key:"Parameter_0_is_not_in_the_same_position_as_parameter_1_1227",message:"Parameter '{0}' is not in the same position as parameter '{1}'."},A_type_predicate_is_only_allowed_in_return_type_position_for_functions_and_methods:{code:1228,category:e.DiagnosticCategory.Error,key:"A_type_predicate_is_only_allowed_in_return_type_position_for_functions_and_methods_1228",message:"A type predicate is only allowed in return type position for functions and methods."},A_type_predicate_cannot_reference_a_rest_parameter:{code:1229,category:e.DiagnosticCategory.Error,key:"A_type_predicate_cannot_reference_a_rest_parameter_1229",message:"A type predicate cannot reference a rest parameter."},A_type_predicate_cannot_reference_element_0_in_a_binding_pattern:{code:1230,category:e.DiagnosticCategory.Error,key:"A_type_predicate_cannot_reference_element_0_in_a_binding_pattern_1230",message:"A type predicate cannot reference element '{0}' in a binding pattern."},An_export_assignment_can_only_be_used_in_a_module:{code:1231,category:e.DiagnosticCategory.Error,key:"An_export_assignment_can_only_be_used_in_a_module_1231",message:"An export assignment can only be used in a module."},An_import_declaration_can_only_be_used_in_a_namespace_or_module:{code:1232,category:e.DiagnosticCategory.Error,key:"An_import_declaration_can_only_be_used_in_a_namespace_or_module_1232",message:"An import declaration can only be used in a namespace or module."},An_export_declaration_can_only_be_used_in_a_module:{code:1233,category:e.DiagnosticCategory.Error,key:"An_export_declaration_can_only_be_used_in_a_module_1233",message:"An export declaration can only be used in a module."},An_ambient_module_declaration_is_only_allowed_at_the_top_level_in_a_file:{code:1234,category:e.DiagnosticCategory.Error,key:"An_ambient_module_declaration_is_only_allowed_at_the_top_level_in_a_file_1234",message:"An ambient module declaration is only allowed at the top level in a file."},A_namespace_declaration_is_only_allowed_in_a_namespace_or_module:{code:1235,category:e.DiagnosticCategory.Error,key:"A_namespace_declaration_is_only_allowed_in_a_namespace_or_module_1235",message:"A namespace declaration is only allowed in a namespace or module."},The_return_type_of_a_property_decorator_function_must_be_either_void_or_any:{code:1236,category:e.DiagnosticCategory.Error,key:"The_return_type_of_a_property_decorator_function_must_be_either_void_or_any_1236",message:"The return type of a property decorator function must be either 'void' or 'any'."},The_return_type_of_a_parameter_decorator_function_must_be_either_void_or_any:{code:1237,category:e.DiagnosticCategory.Error,key:"The_return_type_of_a_parameter_decorator_function_must_be_either_void_or_any_1237",message:"The return type of a parameter decorator function must be either 'void' or 'any'."},Unable_to_resolve_signature_of_class_decorator_when_called_as_an_expression:{code:1238,category:e.DiagnosticCategory.Error,key:"Unable_to_resolve_signature_of_class_decorator_when_called_as_an_expression_1238",message:"Unable to resolve signature of class decorator when called as an expression."},Unable_to_resolve_signature_of_parameter_decorator_when_called_as_an_expression:{code:1239,category:e.DiagnosticCategory.Error,key:"Unable_to_resolve_signature_of_parameter_decorator_when_called_as_an_expression_1239",message:"Unable to resolve signature of parameter decorator when called as an expression."},Unable_to_resolve_signature_of_property_decorator_when_called_as_an_expression:{code:1240,category:e.DiagnosticCategory.Error,key:"Unable_to_resolve_signature_of_property_decorator_when_called_as_an_expression_1240",message:"Unable to resolve signature of property decorator when called as an expression."},Unable_to_resolve_signature_of_method_decorator_when_called_as_an_expression:{code:1241,category:e.DiagnosticCategory.Error,key:"Unable_to_resolve_signature_of_method_decorator_when_called_as_an_expression_1241",message:"Unable to resolve signature of method decorator when called as an expression."},abstract_modifier_can_only_appear_on_a_class_or_method_declaration:{code:1242,category:e.DiagnosticCategory.Error,key:"abstract_modifier_can_only_appear_on_a_class_or_method_declaration_1242",message:"'abstract' modifier can only appear on a class or method declaration."},_0_modifier_cannot_be_used_with_1_modifier:{code:1243,category:e.DiagnosticCategory.Error,key:"_0_modifier_cannot_be_used_with_1_modifier_1243",message:"'{0}' modifier cannot be used with '{1}' modifier."},Abstract_methods_can_only_appear_within_an_abstract_class:{code:1244,category:e.DiagnosticCategory.Error,key:"Abstract_methods_can_only_appear_within_an_abstract_class_1244",message:"Abstract methods can only appear within an abstract class."},Method_0_cannot_have_an_implementation_because_it_is_marked_abstract:{code:1245,category:e.DiagnosticCategory.Error,key:"Method_0_cannot_have_an_implementation_because_it_is_marked_abstract_1245",message:"Method '{0}' cannot have an implementation because it is marked abstract."},An_interface_property_cannot_have_an_initializer:{code:1246,category:e.DiagnosticCategory.Error,key:"An_interface_property_cannot_have_an_initializer_1246",message:"An interface property cannot have an initializer."},A_type_literal_property_cannot_have_an_initializer:{code:1247,category:e.DiagnosticCategory.Error,key:"A_type_literal_property_cannot_have_an_initializer_1247",message:"A type literal property cannot have an initializer."},A_class_member_cannot_have_the_0_keyword:{code:1248,category:e.DiagnosticCategory.Error,key:"A_class_member_cannot_have_the_0_keyword_1248",message:"A class member cannot have the '{0}' keyword."},A_decorator_can_only_decorate_a_method_implementation_not_an_overload:{code:1249,category:e.DiagnosticCategory.Error,key:"A_decorator_can_only_decorate_a_method_implementation_not_an_overload_1249",message:"A decorator can only decorate a method implementation, not an overload."},with_statements_are_not_allowed_in_an_async_function_block:{code:1300,category:e.DiagnosticCategory.Error,key:"with_statements_are_not_allowed_in_an_async_function_block_1300",message:"'with' statements are not allowed in an async function block."},await_expression_is_only_allowed_within_an_async_function:{code:1308,category:e.DiagnosticCategory.Error,key:"await_expression_is_only_allowed_within_an_async_function_1308",message:"'await' expression is only allowed within an async function."},Async_functions_are_only_available_when_targeting_ECMAScript_6_and_higher:{code:1311,category:e.DiagnosticCategory.Error,key:"Async_functions_are_only_available_when_targeting_ECMAScript_6_and_higher_1311",message:"Async functions are only available when targeting ECMAScript 6 and higher."},can_only_be_used_in_an_object_literal_property_inside_a_destructuring_assignment:{code:1312,category:e.DiagnosticCategory.Error,key:"can_only_be_used_in_an_object_literal_property_inside_a_destructuring_assignment_1312",message:"'=' can only be used in an object literal property inside a destructuring assignment."},The_body_of_an_if_statement_cannot_be_the_empty_statement:{code:1313,category:e.DiagnosticCategory.Error,key:"The_body_of_an_if_statement_cannot_be_the_empty_statement_1313",message:"The body of an 'if' statement cannot be the empty statement."},Duplicate_identifier_0:{code:2300,category:e.DiagnosticCategory.Error,key:"Duplicate_identifier_0_2300",message:"Duplicate identifier '{0}'."},Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor:{code:2301,category:e.DiagnosticCategory.Error,key:"Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor_2301",message:"Initializer of instance member variable '{0}' cannot reference identifier '{1}' declared in the constructor."},Static_members_cannot_reference_class_type_parameters:{code:2302,category:e.DiagnosticCategory.Error,key:"Static_members_cannot_reference_class_type_parameters_2302",message:"Static members cannot reference class type parameters."},Circular_definition_of_import_alias_0:{code:2303,category:e.DiagnosticCategory.Error,key:"Circular_definition_of_import_alias_0_2303",message:"Circular definition of import alias '{0}'."},Cannot_find_name_0:{code:2304,category:e.DiagnosticCategory.Error,key:"Cannot_find_name_0_2304",message:"Cannot find name '{0}'."},Module_0_has_no_exported_member_1:{code:2305,category:e.DiagnosticCategory.Error,key:"Module_0_has_no_exported_member_1_2305",message:"Module '{0}' has no exported member '{1}'."},File_0_is_not_a_module:{code:2306,category:e.DiagnosticCategory.Error,key:"File_0_is_not_a_module_2306",message:"File '{0}' is not a module."},Cannot_find_module_0:{code:2307,category:e.DiagnosticCategory.Error,key:"Cannot_find_module_0_2307",message:"Cannot find module '{0}'."},Module_0_has_already_exported_a_member_named_1_Consider_explicitly_re_exporting_to_resolve_the_ambiguity:{code:2308,category:e.DiagnosticCategory.Error,key:"Module_0_has_already_exported_a_member_named_1_Consider_explicitly_re_exporting_to_resolve_the_ambig_2308",message:"Module {0} has already exported a member named '{1}'. Consider explicitly re-exporting to resolve the ambiguity."},An_export_assignment_cannot_be_used_in_a_module_with_other_exported_elements:{code:2309,category:e.DiagnosticCategory.Error,key:"An_export_assignment_cannot_be_used_in_a_module_with_other_exported_elements_2309",message:"An export assignment cannot be used in a module with other exported elements."},Type_0_recursively_references_itself_as_a_base_type:{code:2310,category:e.DiagnosticCategory.Error,key:"Type_0_recursively_references_itself_as_a_base_type_2310",message:"Type '{0}' recursively references itself as a base type."},A_class_may_only_extend_another_class:{code:2311,category:e.DiagnosticCategory.Error,key:"A_class_may_only_extend_another_class_2311",message:"A class may only extend another class."},An_interface_may_only_extend_a_class_or_another_interface:{code:2312,category:e.DiagnosticCategory.Error,key:"An_interface_may_only_extend_a_class_or_another_interface_2312",message:"An interface may only extend a class or another interface."},Type_parameter_0_has_a_circular_constraint:{code:2313,category:e.DiagnosticCategory.Error,key:"Type_parameter_0_has_a_circular_constraint_2313",message:"Type parameter '{0}' has a circular constraint."},Generic_type_0_requires_1_type_argument_s:{code:2314,category:e.DiagnosticCategory.Error,key:"Generic_type_0_requires_1_type_argument_s_2314",message:"Generic type '{0}' requires {1} type argument(s)."},Type_0_is_not_generic:{code:2315,category:e.DiagnosticCategory.Error,key:"Type_0_is_not_generic_2315",message:"Type '{0}' is not generic."},Global_type_0_must_be_a_class_or_interface_type:{code:2316,category:e.DiagnosticCategory.Error,key:"Global_type_0_must_be_a_class_or_interface_type_2316",message:"Global type '{0}' must be a class or interface type."},Global_type_0_must_have_1_type_parameter_s:{code:2317,category:e.DiagnosticCategory.Error,key:"Global_type_0_must_have_1_type_parameter_s_2317",message:"Global type '{0}' must have {1} type parameter(s)."},Cannot_find_global_type_0:{code:2318,category:e.DiagnosticCategory.Error,key:"Cannot_find_global_type_0_2318",message:"Cannot find global type '{0}'."},Named_property_0_of_types_1_and_2_are_not_identical:{code:2319,category:e.DiagnosticCategory.Error,key:"Named_property_0_of_types_1_and_2_are_not_identical_2319",message:"Named property '{0}' of types '{1}' and '{2}' are not identical."},Interface_0_cannot_simultaneously_extend_types_1_and_2:{code:2320,category:e.DiagnosticCategory.Error,key:"Interface_0_cannot_simultaneously_extend_types_1_and_2_2320",message:"Interface '{0}' cannot simultaneously extend types '{1}' and '{2}'."},Excessive_stack_depth_comparing_types_0_and_1:{code:2321,category:e.DiagnosticCategory.Error,key:"Excessive_stack_depth_comparing_types_0_and_1_2321",message:"Excessive stack depth comparing types '{0}' and '{1}'."},Type_0_is_not_assignable_to_type_1:{code:2322,category:e.DiagnosticCategory.Error,key:"Type_0_is_not_assignable_to_type_1_2322",message:"Type '{0}' is not assignable to type '{1}'."},Cannot_redeclare_exported_variable_0:{code:2323,category:e.DiagnosticCategory.Error,key:"Cannot_redeclare_exported_variable_0_2323",message:"Cannot redeclare exported variable '{0}'."},Property_0_is_missing_in_type_1:{code:2324,category:e.DiagnosticCategory.Error,key:"Property_0_is_missing_in_type_1_2324",message:"Property '{0}' is missing in type '{1}'."},Property_0_is_private_in_type_1_but_not_in_type_2:{code:2325,category:e.DiagnosticCategory.Error,key:"Property_0_is_private_in_type_1_but_not_in_type_2_2325",message:"Property '{0}' is private in type '{1}' but not in type '{2}'."},Types_of_property_0_are_incompatible:{code:2326,category:e.DiagnosticCategory.Error,key:"Types_of_property_0_are_incompatible_2326",message:"Types of property '{0}' are incompatible."},Property_0_is_optional_in_type_1_but_required_in_type_2:{code:2327,category:e.DiagnosticCategory.Error,key:"Property_0_is_optional_in_type_1_but_required_in_type_2_2327",message:"Property '{0}' is optional in type '{1}' but required in type '{2}'."},Types_of_parameters_0_and_1_are_incompatible:{code:2328,category:e.DiagnosticCategory.Error,key:"Types_of_parameters_0_and_1_are_incompatible_2328",message:"Types of parameters '{0}' and '{1}' are incompatible."},Index_signature_is_missing_in_type_0:{code:2329,category:e.DiagnosticCategory.Error,key:"Index_signature_is_missing_in_type_0_2329",message:"Index signature is missing in type '{0}'."},Index_signatures_are_incompatible:{code:2330,category:e.DiagnosticCategory.Error,key:"Index_signatures_are_incompatible_2330",message:"Index signatures are incompatible."},this_cannot_be_referenced_in_a_module_or_namespace_body:{code:2331,category:e.DiagnosticCategory.Error,key:"this_cannot_be_referenced_in_a_module_or_namespace_body_2331",message:"'this' cannot be referenced in a module or namespace body."},this_cannot_be_referenced_in_current_location:{code:2332,category:e.DiagnosticCategory.Error,key:"this_cannot_be_referenced_in_current_location_2332",message:"'this' cannot be referenced in current location."},this_cannot_be_referenced_in_constructor_arguments:{code:2333,category:e.DiagnosticCategory.Error,key:"this_cannot_be_referenced_in_constructor_arguments_2333",message:"'this' cannot be referenced in constructor arguments."},this_cannot_be_referenced_in_a_static_property_initializer:{code:2334,category:e.DiagnosticCategory.Error,key:"this_cannot_be_referenced_in_a_static_property_initializer_2334",message:"'this' cannot be referenced in a static property initializer."},super_can_only_be_referenced_in_a_derived_class:{code:2335,category:e.DiagnosticCategory.Error,key:"super_can_only_be_referenced_in_a_derived_class_2335",message:"'super' can only be referenced in a derived class."},super_cannot_be_referenced_in_constructor_arguments:{code:2336,category:e.DiagnosticCategory.Error,key:"super_cannot_be_referenced_in_constructor_arguments_2336",message:"'super' cannot be referenced in constructor arguments."},Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors:{code:2337,category:e.DiagnosticCategory.Error,key:"Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors_2337",message:"Super calls are not permitted outside constructors or in nested functions inside constructors."},super_property_access_is_permitted_only_in_a_constructor_member_function_or_member_accessor_of_a_derived_class:{code:2338,category:e.DiagnosticCategory.Error,key:"super_property_access_is_permitted_only_in_a_constructor_member_function_or_member_accessor_of_a_der_2338",message:"'super' property access is permitted only in a constructor, member function, or member accessor of a derived class."},Property_0_does_not_exist_on_type_1:{code:2339,category:e.DiagnosticCategory.Error,key:"Property_0_does_not_exist_on_type_1_2339",message:"Property '{0}' does not exist on type '{1}'."},Only_public_and_protected_methods_of_the_base_class_are_accessible_via_the_super_keyword:{code:2340,category:e.DiagnosticCategory.Error,key:"Only_public_and_protected_methods_of_the_base_class_are_accessible_via_the_super_keyword_2340",message:"Only public and protected methods of the base class are accessible via the 'super' keyword."},Property_0_is_private_and_only_accessible_within_class_1:{code:2341,category:e.DiagnosticCategory.Error,key:"Property_0_is_private_and_only_accessible_within_class_1_2341",message:"Property '{0}' is private and only accessible within class '{1}'."},An_index_expression_argument_must_be_of_type_string_number_symbol_or_any:{code:2342,category:e.DiagnosticCategory.Error,key:"An_index_expression_argument_must_be_of_type_string_number_symbol_or_any_2342",message:"An index expression argument must be of type 'string', 'number', 'symbol', or 'any'."},Type_0_does_not_satisfy_the_constraint_1:{code:2344,category:e.DiagnosticCategory.Error,key:"Type_0_does_not_satisfy_the_constraint_1_2344",message:"Type '{0}' does not satisfy the constraint '{1}'."},Argument_of_type_0_is_not_assignable_to_parameter_of_type_1:{code:2345,category:e.DiagnosticCategory.Error,key:"Argument_of_type_0_is_not_assignable_to_parameter_of_type_1_2345",message:"Argument of type '{0}' is not assignable to parameter of type '{1}'."},Supplied_parameters_do_not_match_any_signature_of_call_target:{code:2346,category:e.DiagnosticCategory.Error,key:"Supplied_parameters_do_not_match_any_signature_of_call_target_2346",message:"Supplied parameters do not match any signature of call target."},Untyped_function_calls_may_not_accept_type_arguments:{code:2347,category:e.DiagnosticCategory.Error,key:"Untyped_function_calls_may_not_accept_type_arguments_2347",message:"Untyped function calls may not accept type arguments."},Value_of_type_0_is_not_callable_Did_you_mean_to_include_new:{code:2348,category:e.DiagnosticCategory.Error,key:"Value_of_type_0_is_not_callable_Did_you_mean_to_include_new_2348",message:"Value of type '{0}' is not callable. Did you mean to include 'new'?"},Cannot_invoke_an_expression_whose_type_lacks_a_call_signature:{code:2349,category:e.DiagnosticCategory.Error,key:"Cannot_invoke_an_expression_whose_type_lacks_a_call_signature_2349",message:"Cannot invoke an expression whose type lacks a call signature."},Only_a_void_function_can_be_called_with_the_new_keyword:{code:2350,category:e.DiagnosticCategory.Error,key:"Only_a_void_function_can_be_called_with_the_new_keyword_2350",message:"Only a void function can be called with the 'new' keyword."},Cannot_use_new_with_an_expression_whose_type_lacks_a_call_or_construct_signature:{code:2351,category:e.DiagnosticCategory.Error,key:"Cannot_use_new_with_an_expression_whose_type_lacks_a_call_or_construct_signature_2351",message:"Cannot use 'new' with an expression whose type lacks a call or construct signature."},Neither_type_0_nor_type_1_is_assignable_to_the_other:{code:2352,category:e.DiagnosticCategory.Error,key:"Neither_type_0_nor_type_1_is_assignable_to_the_other_2352",message:"Neither type '{0}' nor type '{1}' is assignable to the other."},Object_literal_may_only_specify_known_properties_and_0_does_not_exist_in_type_1:{code:2353,category:e.DiagnosticCategory.Error,key:"Object_literal_may_only_specify_known_properties_and_0_does_not_exist_in_type_1_2353",message:"Object literal may only specify known properties, and '{0}' does not exist in type '{1}'."},No_best_common_type_exists_among_return_expressions:{code:2354,category:e.DiagnosticCategory.Error,key:"No_best_common_type_exists_among_return_expressions_2354",message:"No best common type exists among return expressions."},A_function_whose_declared_type_is_neither_void_nor_any_must_return_a_value:{code:2355,category:e.DiagnosticCategory.Error,key:"A_function_whose_declared_type_is_neither_void_nor_any_must_return_a_value_2355",message:"A function whose declared type is neither 'void' nor 'any' must return a value."},An_arithmetic_operand_must_be_of_type_any_number_or_an_enum_type:{code:2356,category:e.DiagnosticCategory.Error,key:"An_arithmetic_operand_must_be_of_type_any_number_or_an_enum_type_2356",message:"An arithmetic operand must be of type 'any', 'number' or an enum type."},The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_property_or_indexer:{code:2357,category:e.DiagnosticCategory.Error,key:"The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_property_or_indexer_2357",message:"The operand of an increment or decrement operator must be a variable, property or indexer."},The_left_hand_side_of_an_instanceof_expression_must_be_of_type_any_an_object_type_or_a_type_parameter:{code:2358,category:e.DiagnosticCategory.Error,key:"The_left_hand_side_of_an_instanceof_expression_must_be_of_type_any_an_object_type_or_a_type_paramete_2358",message:"The left-hand side of an 'instanceof' expression must be of type 'any', an object type or a type parameter."},The_right_hand_side_of_an_instanceof_expression_must_be_of_type_any_or_of_a_type_assignable_to_the_Function_interface_type:{code:2359,category:e.DiagnosticCategory.Error,key:"The_right_hand_side_of_an_instanceof_expression_must_be_of_type_any_or_of_a_type_assignable_to_the_F_2359",message:"The right-hand side of an 'instanceof' expression must be of type 'any' or of a type assignable to the 'Function' interface type."},The_left_hand_side_of_an_in_expression_must_be_of_type_any_string_number_or_symbol:{code:2360,category:e.DiagnosticCategory.Error,key:"The_left_hand_side_of_an_in_expression_must_be_of_type_any_string_number_or_symbol_2360",message:"The left-hand side of an 'in' expression must be of type 'any', 'string', 'number', or 'symbol'."},The_right_hand_side_of_an_in_expression_must_be_of_type_any_an_object_type_or_a_type_parameter:{code:2361,category:e.DiagnosticCategory.Error,key:"The_right_hand_side_of_an_in_expression_must_be_of_type_any_an_object_type_or_a_type_parameter_2361",message:"The right-hand side of an 'in' expression must be of type 'any', an object type or a type parameter"},The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type:{code:2362,category:e.DiagnosticCategory.Error,key:"The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type_2362",message:"The left-hand side of an arithmetic operation must be of type 'any', 'number' or an enum type."},The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type:{code:2363,category:e.DiagnosticCategory.Error,key:"The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type_2363",message:"The right-hand side of an arithmetic operation must be of type 'any', 'number' or an enum type."},Invalid_left_hand_side_of_assignment_expression:{code:2364,category:e.DiagnosticCategory.Error,key:"Invalid_left_hand_side_of_assignment_expression_2364",message:"Invalid left-hand side of assignment expression."},Operator_0_cannot_be_applied_to_types_1_and_2:{code:2365,category:e.DiagnosticCategory.Error,key:"Operator_0_cannot_be_applied_to_types_1_and_2_2365",message:"Operator '{0}' cannot be applied to types '{1}' and '{2}'."},Type_parameter_name_cannot_be_0:{code:2368,category:e.DiagnosticCategory.Error,key:"Type_parameter_name_cannot_be_0_2368",message:"Type parameter name cannot be '{0}'"},A_parameter_property_is_only_allowed_in_a_constructor_implementation:{code:2369,category:e.DiagnosticCategory.Error,key:"A_parameter_property_is_only_allowed_in_a_constructor_implementation_2369",message:"A parameter property is only allowed in a constructor implementation."},A_rest_parameter_must_be_of_an_array_type:{code:2370,category:e.DiagnosticCategory.Error,key:"A_rest_parameter_must_be_of_an_array_type_2370",message:"A rest parameter must be of an array type."},A_parameter_initializer_is_only_allowed_in_a_function_or_constructor_implementation:{code:2371,category:e.DiagnosticCategory.Error,key:"A_parameter_initializer_is_only_allowed_in_a_function_or_constructor_implementation_2371",message:"A parameter initializer is only allowed in a function or constructor implementation."},Parameter_0_cannot_be_referenced_in_its_initializer:{code:2372,category:e.DiagnosticCategory.Error,key:"Parameter_0_cannot_be_referenced_in_its_initializer_2372",message:"Parameter '{0}' cannot be referenced in its initializer."},Initializer_of_parameter_0_cannot_reference_identifier_1_declared_after_it:{code:2373,category:e.DiagnosticCategory.Error,key:"Initializer_of_parameter_0_cannot_reference_identifier_1_declared_after_it_2373",message:"Initializer of parameter '{0}' cannot reference identifier '{1}' declared after it."},Duplicate_string_index_signature:{code:2374,category:e.DiagnosticCategory.Error,key:"Duplicate_string_index_signature_2374",message:"Duplicate string index signature."},Duplicate_number_index_signature:{code:2375,category:e.DiagnosticCategory.Error,key:"Duplicate_number_index_signature_2375",message:"Duplicate number index signature."},A_super_call_must_be_the_first_statement_in_the_constructor_when_a_class_contains_initialized_properties_or_has_parameter_properties:{code:2376,category:e.DiagnosticCategory.Error,key:"A_super_call_must_be_the_first_statement_in_the_constructor_when_a_class_contains_initialized_proper_2376",message:"A 'super' call must be the first statement in the constructor when a class contains initialized properties or has parameter properties."},Constructors_for_derived_classes_must_contain_a_super_call:{code:2377,category:e.DiagnosticCategory.Error,key:"Constructors_for_derived_classes_must_contain_a_super_call_2377",message:"Constructors for derived classes must contain a 'super' call."},A_get_accessor_must_return_a_value:{code:2378,category:e.DiagnosticCategory.Error,key:"A_get_accessor_must_return_a_value_2378",message:"A 'get' accessor must return a value."},Getter_and_setter_accessors_do_not_agree_in_visibility:{code:2379,category:e.DiagnosticCategory.Error,key:"Getter_and_setter_accessors_do_not_agree_in_visibility_2379",message:"Getter and setter accessors do not agree in visibility."},get_and_set_accessor_must_have_the_same_type:{code:2380,category:e.DiagnosticCategory.Error,key:"get_and_set_accessor_must_have_the_same_type_2380",message:"'get' and 'set' accessor must have the same type."},A_signature_with_an_implementation_cannot_use_a_string_literal_type:{code:2381,category:e.DiagnosticCategory.Error,key:"A_signature_with_an_implementation_cannot_use_a_string_literal_type_2381",message:"A signature with an implementation cannot use a string literal type."},Specialized_overload_signature_is_not_assignable_to_any_non_specialized_signature:{code:2382,category:e.DiagnosticCategory.Error,key:"Specialized_overload_signature_is_not_assignable_to_any_non_specialized_signature_2382",message:"Specialized overload signature is not assignable to any non-specialized signature."},Overload_signatures_must_all_be_exported_or_not_exported:{code:2383,category:e.DiagnosticCategory.Error,key:"Overload_signatures_must_all_be_exported_or_not_exported_2383",message:"Overload signatures must all be exported or not exported."},Overload_signatures_must_all_be_ambient_or_non_ambient:{code:2384,category:e.DiagnosticCategory.Error,key:"Overload_signatures_must_all_be_ambient_or_non_ambient_2384",message:"Overload signatures must all be ambient or non-ambient."},Overload_signatures_must_all_be_public_private_or_protected:{code:2385,category:e.DiagnosticCategory.Error,key:"Overload_signatures_must_all_be_public_private_or_protected_2385",message:"Overload signatures must all be public, private or protected."},Overload_signatures_must_all_be_optional_or_required:{code:2386,category:e.DiagnosticCategory.Error,key:"Overload_signatures_must_all_be_optional_or_required_2386",message:"Overload signatures must all be optional or required."},Function_overload_must_be_static:{code:2387,category:e.DiagnosticCategory.Error,key:"Function_overload_must_be_static_2387",message:"Function overload must be static."},Function_overload_must_not_be_static:{code:2388,category:e.DiagnosticCategory.Error,key:"Function_overload_must_not_be_static_2388",message:"Function overload must not be static."},Function_implementation_name_must_be_0:{code:2389,category:e.DiagnosticCategory.Error,key:"Function_implementation_name_must_be_0_2389",message:"Function implementation name must be '{0}'."},Constructor_implementation_is_missing:{code:2390,category:e.DiagnosticCategory.Error,key:"Constructor_implementation_is_missing_2390",message:"Constructor implementation is missing."},Function_implementation_is_missing_or_not_immediately_following_the_declaration:{code:2391,category:e.DiagnosticCategory.Error,key:"Function_implementation_is_missing_or_not_immediately_following_the_declaration_2391",message:"Function implementation is missing or not immediately following the declaration."},Multiple_constructor_implementations_are_not_allowed:{code:2392,category:e.DiagnosticCategory.Error,key:"Multiple_constructor_implementations_are_not_allowed_2392",message:"Multiple constructor implementations are not allowed."},Duplicate_function_implementation:{code:2393,category:e.DiagnosticCategory.Error,key:"Duplicate_function_implementation_2393",message:"Duplicate function implementation."},Overload_signature_is_not_compatible_with_function_implementation:{code:2394,category:e.DiagnosticCategory.Error,key:"Overload_signature_is_not_compatible_with_function_implementation_2394",message:"Overload signature is not compatible with function implementation."},Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local:{code:2395,category:e.DiagnosticCategory.Error,key:"Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local_2395",message:"Individual declarations in merged declaration '{0}' must be all exported or all local."},Duplicate_identifier_arguments_Compiler_uses_arguments_to_initialize_rest_parameters:{code:2396,category:e.DiagnosticCategory.Error,key:"Duplicate_identifier_arguments_Compiler_uses_arguments_to_initialize_rest_parameters_2396",message:"Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters."},Declaration_name_conflicts_with_built_in_global_identifier_0:{code:2397,category:e.DiagnosticCategory.Error,key:"Declaration_name_conflicts_with_built_in_global_identifier_0_2397",message:"Declaration name conflicts with built-in global identifier '{0}'."},Duplicate_identifier_this_Compiler_uses_variable_declaration_this_to_capture_this_reference:{code:2399,category:e.DiagnosticCategory.Error,key:"Duplicate_identifier_this_Compiler_uses_variable_declaration_this_to_capture_this_reference_2399",message:"Duplicate identifier '_this'. Compiler uses variable declaration '_this' to capture 'this' reference."},Expression_resolves_to_variable_declaration_this_that_compiler_uses_to_capture_this_reference:{code:2400,category:e.DiagnosticCategory.Error,key:"Expression_resolves_to_variable_declaration_this_that_compiler_uses_to_capture_this_reference_2400",message:"Expression resolves to variable declaration '_this' that compiler uses to capture 'this' reference."},Duplicate_identifier_super_Compiler_uses_super_to_capture_base_class_reference:{code:2401,category:e.DiagnosticCategory.Error,key:"Duplicate_identifier_super_Compiler_uses_super_to_capture_base_class_reference_2401",message:"Duplicate identifier '_super'. Compiler uses '_super' to capture base class reference."},Expression_resolves_to_super_that_compiler_uses_to_capture_base_class_reference:{code:2402,category:e.DiagnosticCategory.Error,key:"Expression_resolves_to_super_that_compiler_uses_to_capture_base_class_reference_2402",message:"Expression resolves to '_super' that compiler uses to capture base class reference."},Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_type_2:{code:2403,category:e.DiagnosticCategory.Error,key:"Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_t_2403",message:"Subsequent variable declarations must have the same type.  Variable '{0}' must be of type '{1}', but here has type '{2}'."},The_left_hand_side_of_a_for_in_statement_cannot_use_a_type_annotation:{code:2404,category:e.DiagnosticCategory.Error,key:"The_left_hand_side_of_a_for_in_statement_cannot_use_a_type_annotation_2404",message:"The left-hand side of a 'for...in' statement cannot use a type annotation."},The_left_hand_side_of_a_for_in_statement_must_be_of_type_string_or_any:{code:2405,category:e.DiagnosticCategory.Error,key:"The_left_hand_side_of_a_for_in_statement_must_be_of_type_string_or_any_2405",message:"The left-hand side of a 'for...in' statement must be of type 'string' or 'any'."},Invalid_left_hand_side_in_for_in_statement:{code:2406,category:e.DiagnosticCategory.Error,key:"Invalid_left_hand_side_in_for_in_statement_2406",message:"Invalid left-hand side in 'for...in' statement."},The_right_hand_side_of_a_for_in_statement_must_be_of_type_any_an_object_type_or_a_type_parameter:{code:2407,category:e.DiagnosticCategory.Error,key:"The_right_hand_side_of_a_for_in_statement_must_be_of_type_any_an_object_type_or_a_type_parameter_2407",message:"The right-hand side of a 'for...in' statement must be of type 'any', an object type or a type parameter."},Setters_cannot_return_a_value:{code:2408,category:e.DiagnosticCategory.Error,key:"Setters_cannot_return_a_value_2408",message:"Setters cannot return a value."},Return_type_of_constructor_signature_must_be_assignable_to_the_instance_type_of_the_class:{code:2409,category:e.DiagnosticCategory.Error,key:"Return_type_of_constructor_signature_must_be_assignable_to_the_instance_type_of_the_class_2409",message:"Return type of constructor signature must be assignable to the instance type of the class"},All_symbols_within_a_with_block_will_be_resolved_to_any:{code:2410,category:e.DiagnosticCategory.Error,key:"All_symbols_within_a_with_block_will_be_resolved_to_any_2410",message:"All symbols within a 'with' block will be resolved to 'any'."},Property_0_of_type_1_is_not_assignable_to_string_index_type_2:{code:2411,category:e.DiagnosticCategory.Error,key:"Property_0_of_type_1_is_not_assignable_to_string_index_type_2_2411",message:"Property '{0}' of type '{1}' is not assignable to string index type '{2}'."},Property_0_of_type_1_is_not_assignable_to_numeric_index_type_2:{code:2412,category:e.DiagnosticCategory.Error,key:"Property_0_of_type_1_is_not_assignable_to_numeric_index_type_2_2412",message:"Property '{0}' of type '{1}' is not assignable to numeric index type '{2}'."},Numeric_index_type_0_is_not_assignable_to_string_index_type_1:{code:2413,category:e.DiagnosticCategory.Error,key:"Numeric_index_type_0_is_not_assignable_to_string_index_type_1_2413",message:"Numeric index type '{0}' is not assignable to string index type '{1}'."},Class_name_cannot_be_0:{code:2414,category:e.DiagnosticCategory.Error,key:"Class_name_cannot_be_0_2414",message:"Class name cannot be '{0}'"},Class_0_incorrectly_extends_base_class_1:{code:2415,category:e.DiagnosticCategory.Error,key:"Class_0_incorrectly_extends_base_class_1_2415",message:"Class '{0}' incorrectly extends base class '{1}'."},Class_static_side_0_incorrectly_extends_base_class_static_side_1:{code:2417,category:e.DiagnosticCategory.Error,key:"Class_static_side_0_incorrectly_extends_base_class_static_side_1_2417",message:"Class static side '{0}' incorrectly extends base class static side '{1}'."},Type_name_0_in_extends_clause_does_not_reference_constructor_function_for_0:{code:2419,category:e.DiagnosticCategory.Error,key:"Type_name_0_in_extends_clause_does_not_reference_constructor_function_for_0_2419",message:"Type name '{0}' in extends clause does not reference constructor function for '{0}'."},Class_0_incorrectly_implements_interface_1:{code:2420,category:e.DiagnosticCategory.Error,key:"Class_0_incorrectly_implements_interface_1_2420",message:"Class '{0}' incorrectly implements interface '{1}'."},A_class_may_only_implement_another_class_or_interface:{code:2422,category:e.DiagnosticCategory.Error,key:"A_class_may_only_implement_another_class_or_interface_2422",message:"A class may only implement another class or interface."},Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_accessor:{code:2423,category:e.DiagnosticCategory.Error,key:"Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_access_2423",message:"Class '{0}' defines instance member function '{1}', but extended class '{2}' defines it as instance member accessor."},Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_property:{code:2424,category:e.DiagnosticCategory.Error,key:"Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_proper_2424",message:"Class '{0}' defines instance member function '{1}', but extended class '{2}' defines it as instance member property."},Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_function:{code:2425,category:e.DiagnosticCategory.Error,key:"Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_functi_2425",message:"Class '{0}' defines instance member property '{1}', but extended class '{2}' defines it as instance member function."},Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_function:{code:2426,category:e.DiagnosticCategory.Error,key:"Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_functi_2426",message:"Class '{0}' defines instance member accessor '{1}', but extended class '{2}' defines it as instance member function."},Interface_name_cannot_be_0:{code:2427,category:e.DiagnosticCategory.Error,key:"Interface_name_cannot_be_0_2427",message:"Interface name cannot be '{0}'"},All_declarations_of_an_interface_must_have_identical_type_parameters:{code:2428,category:e.DiagnosticCategory.Error,key:"All_declarations_of_an_interface_must_have_identical_type_parameters_2428",message:"All declarations of an interface must have identical type parameters."},Interface_0_incorrectly_extends_interface_1:{code:2430,category:e.DiagnosticCategory.Error,key:"Interface_0_incorrectly_extends_interface_1_2430",message:"Interface '{0}' incorrectly extends interface '{1}'."},Enum_name_cannot_be_0:{code:2431,category:e.DiagnosticCategory.Error,key:"Enum_name_cannot_be_0_2431",message:"Enum name cannot be '{0}'"},In_an_enum_with_multiple_declarations_only_one_declaration_can_omit_an_initializer_for_its_first_enum_element:{code:2432,category:e.DiagnosticCategory.Error,key:"In_an_enum_with_multiple_declarations_only_one_declaration_can_omit_an_initializer_for_its_first_enu_2432",message:"In an enum with multiple declarations, only one declaration can omit an initializer for its first enum element."},A_namespace_declaration_cannot_be_in_a_different_file_from_a_class_or_function_with_which_it_is_merged:{code:2433,category:e.DiagnosticCategory.Error,key:"A_namespace_declaration_cannot_be_in_a_different_file_from_a_class_or_function_with_which_it_is_merg_2433",message:"A namespace declaration cannot be in a different file from a class or function with which it is merged"},A_namespace_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged:{code:2434,category:e.DiagnosticCategory.Error,key:"A_namespace_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged_2434",message:"A namespace declaration cannot be located prior to a class or function with which it is merged"},Ambient_modules_cannot_be_nested_in_other_modules_or_namespaces:{code:2435,category:e.DiagnosticCategory.Error,key:"Ambient_modules_cannot_be_nested_in_other_modules_or_namespaces_2435",message:"Ambient modules cannot be nested in other modules or namespaces."},Ambient_module_declaration_cannot_specify_relative_module_name:{code:2436,category:e.DiagnosticCategory.Error,key:"Ambient_module_declaration_cannot_specify_relative_module_name_2436",message:"Ambient module declaration cannot specify relative module name."},Module_0_is_hidden_by_a_local_declaration_with_the_same_name:{code:2437,category:e.DiagnosticCategory.Error,key:"Module_0_is_hidden_by_a_local_declaration_with_the_same_name_2437",message:"Module '{0}' is hidden by a local declaration with the same name"},Import_name_cannot_be_0:{code:2438,category:e.DiagnosticCategory.Error,key:"Import_name_cannot_be_0_2438",message:"Import name cannot be '{0}'"},Import_or_export_declaration_in_an_ambient_module_declaration_cannot_reference_module_through_relative_module_name:{code:2439,category:e.DiagnosticCategory.Error,key:"Import_or_export_declaration_in_an_ambient_module_declaration_cannot_reference_module_through_relati_2439",message:"Import or export declaration in an ambient module declaration cannot reference module through relative module name."},Import_declaration_conflicts_with_local_declaration_of_0:{code:2440,category:e.DiagnosticCategory.Error,key:"Import_declaration_conflicts_with_local_declaration_of_0_2440",message:"Import declaration conflicts with local declaration of '{0}'"},Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module:{code:2441,category:e.DiagnosticCategory.Error,key:"Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module_2441",message:"Duplicate identifier '{0}'. Compiler reserves name '{1}' in top level scope of a module."},Types_have_separate_declarations_of_a_private_property_0:{code:2442,category:e.DiagnosticCategory.Error,key:"Types_have_separate_declarations_of_a_private_property_0_2442",message:"Types have separate declarations of a private property '{0}'."},Property_0_is_protected_but_type_1_is_not_a_class_derived_from_2:{code:2443,category:e.DiagnosticCategory.Error,key:"Property_0_is_protected_but_type_1_is_not_a_class_derived_from_2_2443",message:"Property '{0}' is protected but type '{1}' is not a class derived from '{2}'."},Property_0_is_protected_in_type_1_but_public_in_type_2:{code:2444,category:e.DiagnosticCategory.Error,key:"Property_0_is_protected_in_type_1_but_public_in_type_2_2444",message:"Property '{0}' is protected in type '{1}' but public in type '{2}'."},Property_0_is_protected_and_only_accessible_within_class_1_and_its_subclasses:{code:2445,category:e.DiagnosticCategory.Error,key:"Property_0_is_protected_and_only_accessible_within_class_1_and_its_subclasses_2445",message:"Property '{0}' is protected and only accessible within class '{1}' and its subclasses."},Property_0_is_protected_and_only_accessible_through_an_instance_of_class_1:{code:2446,category:e.DiagnosticCategory.Error,key:"Property_0_is_protected_and_only_accessible_through_an_instance_of_class_1_2446",message:"Property '{0}' is protected and only accessible through an instance of class '{1}'."},The_0_operator_is_not_allowed_for_boolean_types_Consider_using_1_instead:{code:2447,category:e.DiagnosticCategory.Error,key:"The_0_operator_is_not_allowed_for_boolean_types_Consider_using_1_instead_2447",message:"The '{0}' operator is not allowed for boolean types. Consider using '{1}' instead."},Block_scoped_variable_0_used_before_its_declaration:{code:2448,category:e.DiagnosticCategory.Error,key:"Block_scoped_variable_0_used_before_its_declaration_2448",message:"Block-scoped variable '{0}' used before its declaration."},The_operand_of_an_increment_or_decrement_operator_cannot_be_a_constant:{code:2449,category:e.DiagnosticCategory.Error,key:"The_operand_of_an_increment_or_decrement_operator_cannot_be_a_constant_2449",message:"The operand of an increment or decrement operator cannot be a constant."},Left_hand_side_of_assignment_expression_cannot_be_a_constant:{code:2450,category:e.DiagnosticCategory.Error,key:"Left_hand_side_of_assignment_expression_cannot_be_a_constant_2450",message:"Left-hand side of assignment expression cannot be a constant."},Cannot_redeclare_block_scoped_variable_0:{code:2451,category:e.DiagnosticCategory.Error,key:"Cannot_redeclare_block_scoped_variable_0_2451",message:"Cannot redeclare block-scoped variable '{0}'."},An_enum_member_cannot_have_a_numeric_name:{code:2452,category:e.DiagnosticCategory.Error,key:"An_enum_member_cannot_have_a_numeric_name_2452",message:"An enum member cannot have a numeric name."},The_type_argument_for_type_parameter_0_cannot_be_inferred_from_the_usage_Consider_specifying_the_type_arguments_explicitly:{code:2453,category:e.DiagnosticCategory.Error,key:"The_type_argument_for_type_parameter_0_cannot_be_inferred_from_the_usage_Consider_specifying_the_typ_2453",message:"The type argument for type parameter '{0}' cannot be inferred from the usage. Consider specifying the type arguments explicitly."},Type_argument_candidate_1_is_not_a_valid_type_argument_because_it_is_not_a_supertype_of_candidate_0:{code:2455,category:e.DiagnosticCategory.Error,key:"Type_argument_candidate_1_is_not_a_valid_type_argument_because_it_is_not_a_supertype_of_candidate_0_2455",message:"Type argument candidate '{1}' is not a valid type argument because it is not a supertype of candidate '{0}'."},Type_alias_0_circularly_references_itself:{code:2456,category:e.DiagnosticCategory.Error,key:"Type_alias_0_circularly_references_itself_2456",message:"Type alias '{0}' circularly references itself."},Type_alias_name_cannot_be_0:{code:2457,category:e.DiagnosticCategory.Error,key:"Type_alias_name_cannot_be_0_2457",message:"Type alias name cannot be '{0}'"},An_AMD_module_cannot_have_multiple_name_assignments:{code:2458,category:e.DiagnosticCategory.Error,key:"An_AMD_module_cannot_have_multiple_name_assignments_2458",message:"An AMD module cannot have multiple name assignments."},Type_0_has_no_property_1_and_no_string_index_signature:{code:2459,category:e.DiagnosticCategory.Error,key:"Type_0_has_no_property_1_and_no_string_index_signature_2459",message:"Type '{0}' has no property '{1}' and no string index signature."},Type_0_has_no_property_1:{code:2460,category:e.DiagnosticCategory.Error,key:"Type_0_has_no_property_1_2460",message:"Type '{0}' has no property '{1}'."},Type_0_is_not_an_array_type:{code:2461,category:e.DiagnosticCategory.Error,key:"Type_0_is_not_an_array_type_2461",message:"Type '{0}' is not an array type."},A_rest_element_must_be_last_in_an_array_destructuring_pattern:{code:2462,category:e.DiagnosticCategory.Error,key:"A_rest_element_must_be_last_in_an_array_destructuring_pattern_2462",message:"A rest element must be last in an array destructuring pattern"},A_binding_pattern_parameter_cannot_be_optional_in_an_implementation_signature:{code:2463,category:e.DiagnosticCategory.Error,key:"A_binding_pattern_parameter_cannot_be_optional_in_an_implementation_signature_2463",message:"A binding pattern parameter cannot be optional in an implementation signature."},A_computed_property_name_must_be_of_type_string_number_symbol_or_any:{code:2464,category:e.DiagnosticCategory.Error,key:"A_computed_property_name_must_be_of_type_string_number_symbol_or_any_2464",message:"A computed property name must be of type 'string', 'number', 'symbol', or 'any'."},this_cannot_be_referenced_in_a_computed_property_name:{code:2465,category:e.DiagnosticCategory.Error,key:"this_cannot_be_referenced_in_a_computed_property_name_2465",message:"'this' cannot be referenced in a computed property name."},super_cannot_be_referenced_in_a_computed_property_name:{code:2466,category:e.DiagnosticCategory.Error,key:"super_cannot_be_referenced_in_a_computed_property_name_2466",message:"'super' cannot be referenced in a computed property name."},A_computed_property_name_cannot_reference_a_type_parameter_from_its_containing_type:{code:2467,category:e.DiagnosticCategory.Error,key:"A_computed_property_name_cannot_reference_a_type_parameter_from_its_containing_type_2467",message:"A computed property name cannot reference a type parameter from its containing type."},Cannot_find_global_value_0:{code:2468,category:e.DiagnosticCategory.Error,key:"Cannot_find_global_value_0_2468",message:"Cannot find global value '{0}'."},The_0_operator_cannot_be_applied_to_type_symbol:{code:2469,category:e.DiagnosticCategory.Error,key:"The_0_operator_cannot_be_applied_to_type_symbol_2469",message:"The '{0}' operator cannot be applied to type 'symbol'."},Symbol_reference_does_not_refer_to_the_global_Symbol_constructor_object:{code:2470,category:e.DiagnosticCategory.Error,key:"Symbol_reference_does_not_refer_to_the_global_Symbol_constructor_object_2470",message:"'Symbol' reference does not refer to the global Symbol constructor object."},A_computed_property_name_of_the_form_0_must_be_of_type_symbol:{code:2471,category:e.DiagnosticCategory.Error,key:"A_computed_property_name_of_the_form_0_must_be_of_type_symbol_2471",message:"A computed property name of the form '{0}' must be of type 'symbol'."},Spread_operator_in_new_expressions_is_only_available_when_targeting_ECMAScript_5_and_higher:{code:2472,category:e.DiagnosticCategory.Error,key:"Spread_operator_in_new_expressions_is_only_available_when_targeting_ECMAScript_5_and_higher_2472",message:"Spread operator in 'new' expressions is only available when targeting ECMAScript 5 and higher."},Enum_declarations_must_all_be_const_or_non_const:{code:2473,category:e.DiagnosticCategory.Error,key:"Enum_declarations_must_all_be_const_or_non_const_2473",message:"Enum declarations must all be const or non-const."},In_const_enum_declarations_member_initializer_must_be_constant_expression:{code:2474,category:e.DiagnosticCategory.Error,key:"In_const_enum_declarations_member_initializer_must_be_constant_expression_2474",message:"In 'const' enum declarations member initializer must be constant expression."},const_enums_can_only_be_used_in_property_or_index_access_expressions_or_the_right_hand_side_of_an_import_declaration_or_export_assignment:{code:2475,category:e.DiagnosticCategory.Error,key:"const_enums_can_only_be_used_in_property_or_index_access_expressions_or_the_right_hand_side_of_an_im_2475",message:"'const' enums can only be used in property or index access expressions or the right hand side of an import declaration or export assignment."},A_const_enum_member_can_only_be_accessed_using_a_string_literal:{code:2476,category:e.DiagnosticCategory.Error,key:"A_const_enum_member_can_only_be_accessed_using_a_string_literal_2476",message:"A const enum member can only be accessed using a string literal."},const_enum_member_initializer_was_evaluated_to_a_non_finite_value:{code:2477,category:e.DiagnosticCategory.Error,key:"const_enum_member_initializer_was_evaluated_to_a_non_finite_value_2477",message:"'const' enum member initializer was evaluated to a non-finite value."},const_enum_member_initializer_was_evaluated_to_disallowed_value_NaN:{code:2478,category:e.DiagnosticCategory.Error,key:"const_enum_member_initializer_was_evaluated_to_disallowed_value_NaN_2478",message:"'const' enum member initializer was evaluated to disallowed value 'NaN'."},Property_0_does_not_exist_on_const_enum_1:{code:2479,category:e.DiagnosticCategory.Error,key:"Property_0_does_not_exist_on_const_enum_1_2479",message:"Property '{0}' does not exist on 'const' enum '{1}'."},let_is_not_allowed_to_be_used_as_a_name_in_let_or_const_declarations:{code:2480,category:e.DiagnosticCategory.Error,key:"let_is_not_allowed_to_be_used_as_a_name_in_let_or_const_declarations_2480",message:"'let' is not allowed to be used as a name in 'let' or 'const' declarations."},Cannot_initialize_outer_scoped_variable_0_in_the_same_scope_as_block_scoped_declaration_1:{code:2481,category:e.DiagnosticCategory.Error,key:"Cannot_initialize_outer_scoped_variable_0_in_the_same_scope_as_block_scoped_declaration_1_2481",message:"Cannot initialize outer scoped variable '{0}' in the same scope as block scoped declaration '{1}'."},The_left_hand_side_of_a_for_of_statement_cannot_use_a_type_annotation:{code:2483,category:e.DiagnosticCategory.Error,key:"The_left_hand_side_of_a_for_of_statement_cannot_use_a_type_annotation_2483",message:"The left-hand side of a 'for...of' statement cannot use a type annotation."},Export_declaration_conflicts_with_exported_declaration_of_0:{code:2484,category:e.DiagnosticCategory.Error,key:"Export_declaration_conflicts_with_exported_declaration_of_0_2484",message:"Export declaration conflicts with exported declaration of '{0}'"},The_left_hand_side_of_a_for_of_statement_cannot_be_a_previously_defined_constant:{code:2485,category:e.DiagnosticCategory.Error,key:"The_left_hand_side_of_a_for_of_statement_cannot_be_a_previously_defined_constant_2485",message:"The left-hand side of a 'for...of' statement cannot be a previously defined constant."},The_left_hand_side_of_a_for_in_statement_cannot_be_a_previously_defined_constant:{code:2486,category:e.DiagnosticCategory.Error,key:"The_left_hand_side_of_a_for_in_statement_cannot_be_a_previously_defined_constant_2486",message:"The left-hand side of a 'for...in' statement cannot be a previously defined constant."},Invalid_left_hand_side_in_for_of_statement:{code:2487,category:e.DiagnosticCategory.Error,key:"Invalid_left_hand_side_in_for_of_statement_2487",message:"Invalid left-hand side in 'for...of' statement."},Type_must_have_a_Symbol_iterator_method_that_returns_an_iterator:{code:2488,category:e.DiagnosticCategory.Error,key:"Type_must_have_a_Symbol_iterator_method_that_returns_an_iterator_2488",message:"Type must have a '[Symbol.iterator]()' method that returns an iterator."},An_iterator_must_have_a_next_method:{code:2489,category:e.DiagnosticCategory.Error,key:"An_iterator_must_have_a_next_method_2489",message:"An iterator must have a 'next()' method."},The_type_returned_by_the_next_method_of_an_iterator_must_have_a_value_property:{code:2490,category:e.DiagnosticCategory.Error,key:"The_type_returned_by_the_next_method_of_an_iterator_must_have_a_value_property_2490",message:"The type returned by the 'next()' method of an iterator must have a 'value' property."},The_left_hand_side_of_a_for_in_statement_cannot_be_a_destructuring_pattern:{code:2491,category:e.DiagnosticCategory.Error,key:"The_left_hand_side_of_a_for_in_statement_cannot_be_a_destructuring_pattern_2491",message:"The left-hand side of a 'for...in' statement cannot be a destructuring pattern."},Cannot_redeclare_identifier_0_in_catch_clause:{code:2492,category:e.DiagnosticCategory.Error,key:"Cannot_redeclare_identifier_0_in_catch_clause_2492",message:"Cannot redeclare identifier '{0}' in catch clause"},Tuple_type_0_with_length_1_cannot_be_assigned_to_tuple_with_length_2:{code:2493,category:e.DiagnosticCategory.Error,key:"Tuple_type_0_with_length_1_cannot_be_assigned_to_tuple_with_length_2_2493",message:"Tuple type '{0}' with length '{1}' cannot be assigned to tuple with length '{2}'."},Using_a_string_in_a_for_of_statement_is_only_supported_in_ECMAScript_5_and_higher:{code:2494,category:e.DiagnosticCategory.Error,key:"Using_a_string_in_a_for_of_statement_is_only_supported_in_ECMAScript_5_and_higher_2494",message:"Using a string in a 'for...of' statement is only supported in ECMAScript 5 and higher."},Type_0_is_not_an_array_type_or_a_string_type:{code:2495,category:e.DiagnosticCategory.Error,key:"Type_0_is_not_an_array_type_or_a_string_type_2495",message:"Type '{0}' is not an array type or a string type."},The_arguments_object_cannot_be_referenced_in_an_arrow_function_in_ES3_and_ES5_Consider_using_a_standard_function_expression:{code:2496,category:e.DiagnosticCategory.Error,key:"The_arguments_object_cannot_be_referenced_in_an_arrow_function_in_ES3_and_ES5_Consider_using_a_stand_2496",message:"The 'arguments' object cannot be referenced in an arrow function in ES3 and ES5. Consider using a standard function expression."},Module_0_resolves_to_a_non_module_entity_and_cannot_be_imported_using_this_construct:{code:2497,category:e.DiagnosticCategory.Error,key:"Module_0_resolves_to_a_non_module_entity_and_cannot_be_imported_using_this_construct_2497",message:"Module '{0}' resolves to a non-module entity and cannot be imported using this construct."},Module_0_uses_export_and_cannot_be_used_with_export_Asterisk:{code:2498,category:e.DiagnosticCategory.Error,key:"Module_0_uses_export_and_cannot_be_used_with_export_Asterisk_2498",message:"Module '{0}' uses 'export =' and cannot be used with 'export *'."},An_interface_can_only_extend_an_identifier_Slashqualified_name_with_optional_type_arguments:{code:2499,category:e.DiagnosticCategory.Error,key:"An_interface_can_only_extend_an_identifier_Slashqualified_name_with_optional_type_arguments_2499",message:"An interface can only extend an identifier/qualified-name with optional type arguments."},A_class_can_only_implement_an_identifier_Slashqualified_name_with_optional_type_arguments:{code:2500,category:e.DiagnosticCategory.Error,key:"A_class_can_only_implement_an_identifier_Slashqualified_name_with_optional_type_arguments_2500",message:"A class can only implement an identifier/qualified-name with optional type arguments."},A_rest_element_cannot_contain_a_binding_pattern:{code:2501,category:e.DiagnosticCategory.Error,key:"A_rest_element_cannot_contain_a_binding_pattern_2501",message:"A rest element cannot contain a binding pattern."},_0_is_referenced_directly_or_indirectly_in_its_own_type_annotation:{code:2502,category:e.DiagnosticCategory.Error,key:"_0_is_referenced_directly_or_indirectly_in_its_own_type_annotation_2502",message:"'{0}' is referenced directly or indirectly in its own type annotation."},Cannot_find_namespace_0:{code:2503,category:e.DiagnosticCategory.Error,key:"Cannot_find_namespace_0_2503",message:"Cannot find namespace '{0}'."},No_best_common_type_exists_among_yield_expressions:{code:2504,category:e.DiagnosticCategory.Error,key:"No_best_common_type_exists_among_yield_expressions_2504",message:"No best common type exists among yield expressions."},A_generator_cannot_have_a_void_type_annotation:{code:2505,category:e.DiagnosticCategory.Error,key:"A_generator_cannot_have_a_void_type_annotation_2505",message:"A generator cannot have a 'void' type annotation."},_0_is_referenced_directly_or_indirectly_in_its_own_base_expression:{code:2506,category:e.DiagnosticCategory.Error,key:"_0_is_referenced_directly_or_indirectly_in_its_own_base_expression_2506",message:"'{0}' is referenced directly or indirectly in its own base expression."},Type_0_is_not_a_constructor_function_type:{code:2507,category:e.DiagnosticCategory.Error,key:"Type_0_is_not_a_constructor_function_type_2507",message:"Type '{0}' is not a constructor function type."},No_base_constructor_has_the_specified_number_of_type_arguments:{code:2508,category:e.DiagnosticCategory.Error,key:"No_base_constructor_has_the_specified_number_of_type_arguments_2508",message:"No base constructor has the specified number of type arguments."},Base_constructor_return_type_0_is_not_a_class_or_interface_type:{code:2509,category:e.DiagnosticCategory.Error,key:"Base_constructor_return_type_0_is_not_a_class_or_interface_type_2509",message:"Base constructor return type '{0}' is not a class or interface type."},Base_constructors_must_all_have_the_same_return_type:{code:2510,category:e.DiagnosticCategory.Error,key:"Base_constructors_must_all_have_the_same_return_type_2510",message:"Base constructors must all have the same return type."},Cannot_create_an_instance_of_the_abstract_class_0:{code:2511,category:e.DiagnosticCategory.Error,key:"Cannot_create_an_instance_of_the_abstract_class_0_2511",message:"Cannot create an instance of the abstract class '{0}'."},Overload_signatures_must_all_be_abstract_or_not_abstract:{code:2512,category:e.DiagnosticCategory.Error,key:"Overload_signatures_must_all_be_abstract_or_not_abstract_2512",message:"Overload signatures must all be abstract or not abstract."},Abstract_method_0_in_class_1_cannot_be_accessed_via_super_expression:{code:2513,category:e.DiagnosticCategory.Error,key:"Abstract_method_0_in_class_1_cannot_be_accessed_via_super_expression_2513",message:"Abstract method '{0}' in class '{1}' cannot be accessed via super expression."},Classes_containing_abstract_methods_must_be_marked_abstract:{code:2514,category:e.DiagnosticCategory.Error,key:"Classes_containing_abstract_methods_must_be_marked_abstract_2514",message:"Classes containing abstract methods must be marked abstract."},Non_abstract_class_0_does_not_implement_inherited_abstract_member_1_from_class_2:{code:2515,category:e.DiagnosticCategory.Error,key:"Non_abstract_class_0_does_not_implement_inherited_abstract_member_1_from_class_2_2515",message:"Non-abstract class '{0}' does not implement inherited abstract member '{1}' from class '{2}'."},All_declarations_of_an_abstract_method_must_be_consecutive:{code:2516,category:e.DiagnosticCategory.Error,key:"All_declarations_of_an_abstract_method_must_be_consecutive_2516",message:"All declarations of an abstract method must be consecutive."},Cannot_assign_an_abstract_constructor_type_to_a_non_abstract_constructor_type:{code:2517,category:e.DiagnosticCategory.Error,key:"Cannot_assign_an_abstract_constructor_type_to_a_non_abstract_constructor_type_2517",message:"Cannot assign an abstract constructor type to a non-abstract constructor type."},A_this_based_type_guard_is_not_compatible_with_a_parameter_based_type_guard:{code:2518,category:e.DiagnosticCategory.Error,key:"A_this_based_type_guard_is_not_compatible_with_a_parameter_based_type_guard_2518",message:"A 'this'-based type guard is not compatible with a parameter-based type guard."},Duplicate_identifier_0_Compiler_uses_declaration_1_to_support_async_functions:{code:2520,category:e.DiagnosticCategory.Error,key:"Duplicate_identifier_0_Compiler_uses_declaration_1_to_support_async_functions_2520",message:"Duplicate identifier '{0}'. Compiler uses declaration '{1}' to support async functions."},Expression_resolves_to_variable_declaration_0_that_compiler_uses_to_support_async_functions:{code:2521,category:e.DiagnosticCategory.Error,key:"Expression_resolves_to_variable_declaration_0_that_compiler_uses_to_support_async_functions_2521",message:"Expression resolves to variable declaration '{0}' that compiler uses to support async functions."},The_arguments_object_cannot_be_referenced_in_an_async_arrow_function_Consider_using_a_standard_async_function_expression:{code:2522,category:e.DiagnosticCategory.Error,key:"The_arguments_object_cannot_be_referenced_in_an_async_arrow_function_Consider_using_a_standard_async_2522",message:"The 'arguments' object cannot be referenced in an async arrow function. Consider using a standard async function expression."},yield_expressions_cannot_be_used_in_a_parameter_initializer:{code:2523,category:e.DiagnosticCategory.Error,key:"yield_expressions_cannot_be_used_in_a_parameter_initializer_2523",message:"'yield' expressions cannot be used in a parameter initializer."},await_expressions_cannot_be_used_in_a_parameter_initializer:{code:2524,category:e.DiagnosticCategory.Error,key:"await_expressions_cannot_be_used_in_a_parameter_initializer_2524",message:"'await' expressions cannot be used in a parameter initializer."},Initializer_provides_no_value_for_this_binding_element_and_the_binding_element_has_no_default_value:{code:2525,category:e.DiagnosticCategory.Error,key:"Initializer_provides_no_value_for_this_binding_element_and_the_binding_element_has_no_default_value_2525",message:"Initializer provides no value for this binding element and the binding element has no default value."},A_this_type_is_available_only_in_a_non_static_member_of_a_class_or_interface:{code:2526,category:e.DiagnosticCategory.Error,key:"A_this_type_is_available_only_in_a_non_static_member_of_a_class_or_interface_2526",message:"A 'this' type is available only in a non-static member of a class or interface."},The_inferred_type_of_0_references_an_inaccessible_this_type_A_type_annotation_is_necessary:{code:2527,category:e.DiagnosticCategory.Error,key:"The_inferred_type_of_0_references_an_inaccessible_this_type_A_type_annotation_is_necessary_2527",message:"The inferred type of '{0}' references an inaccessible 'this' type. A type annotation is necessary."},A_module_cannot_have_multiple_default_exports:{code:2528,category:e.DiagnosticCategory.Error,key:"A_module_cannot_have_multiple_default_exports_2528",message:"A module cannot have multiple default exports."},Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module_containing_async_functions:{code:2529,category:e.DiagnosticCategory.Error,key:"Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module_containing_async_func_2529",message:"Duplicate identifier '{0}'. Compiler reserves name '{1}' in top level scope of a module containing async functions."},JSX_element_attributes_type_0_may_not_be_a_union_type:{code:2600,category:e.DiagnosticCategory.Error,key:"JSX_element_attributes_type_0_may_not_be_a_union_type_2600",message:"JSX element attributes type '{0}' may not be a union type."},The_return_type_of_a_JSX_element_constructor_must_return_an_object_type:{code:2601,category:e.DiagnosticCategory.Error,key:"The_return_type_of_a_JSX_element_constructor_must_return_an_object_type_2601",message:"The return type of a JSX element constructor must return an object type."},JSX_element_implicitly_has_type_any_because_the_global_type_JSX_Element_does_not_exist:{code:2602,category:e.DiagnosticCategory.Error,key:"JSX_element_implicitly_has_type_any_because_the_global_type_JSX_Element_does_not_exist_2602",message:"JSX element implicitly has type 'any' because the global type 'JSX.Element' does not exist."},Property_0_in_type_1_is_not_assignable_to_type_2:{code:2603,category:e.DiagnosticCategory.Error,key:"Property_0_in_type_1_is_not_assignable_to_type_2_2603",message:"Property '{0}' in type '{1}' is not assignable to type '{2}'"},JSX_element_type_0_does_not_have_any_construct_or_call_signatures:{code:2604,category:e.DiagnosticCategory.Error,key:"JSX_element_type_0_does_not_have_any_construct_or_call_signatures_2604",message:"JSX element type '{0}' does not have any construct or call signatures."},JSX_element_type_0_is_not_a_constructor_function_for_JSX_elements:{code:2605,category:e.DiagnosticCategory.Error,key:"JSX_element_type_0_is_not_a_constructor_function_for_JSX_elements_2605",message:"JSX element type '{0}' is not a constructor function for JSX elements."},Property_0_of_JSX_spread_attribute_is_not_assignable_to_target_property:{code:2606,category:e.DiagnosticCategory.Error,key:"Property_0_of_JSX_spread_attribute_is_not_assignable_to_target_property_2606",message:"Property '{0}' of JSX spread attribute is not assignable to target property."},JSX_element_class_does_not_support_attributes_because_it_does_not_have_a_0_property:{code:2607,category:e.DiagnosticCategory.Error,key:"JSX_element_class_does_not_support_attributes_because_it_does_not_have_a_0_property_2607",message:"JSX element class does not support attributes because it does not have a '{0}' property"},The_global_type_JSX_0_may_not_have_more_than_one_property:{code:2608,category:e.DiagnosticCategory.Error,key:"The_global_type_JSX_0_may_not_have_more_than_one_property_2608",message:"The global type 'JSX.{0}' may not have more than one property"},Cannot_emit_namespaced_JSX_elements_in_React:{code:2650,category:e.DiagnosticCategory.Error,key:"Cannot_emit_namespaced_JSX_elements_in_React_2650",message:"Cannot emit namespaced JSX elements in React"},A_member_initializer_in_a_enum_declaration_cannot_reference_members_declared_after_it_including_members_defined_in_other_enums:{code:2651,category:e.DiagnosticCategory.Error,key:"A_member_initializer_in_a_enum_declaration_cannot_reference_members_declared_after_it_including_memb_2651",message:"A member initializer in a enum declaration cannot reference members declared after it, including members defined in other enums."},Merged_declaration_0_cannot_include_a_default_export_declaration_Consider_adding_a_separate_export_default_0_declaration_instead:{code:2652,category:e.DiagnosticCategory.Error,key:"Merged_declaration_0_cannot_include_a_default_export_declaration_Consider_adding_a_separate_export_d_2652",message:"Merged declaration '{0}' cannot include a default export declaration. Consider adding a separate 'export default {0}' declaration instead."},Non_abstract_class_expression_does_not_implement_inherited_abstract_member_0_from_class_1:{code:2653,category:e.DiagnosticCategory.Error,key:"Non_abstract_class_expression_does_not_implement_inherited_abstract_member_0_from_class_1_2653",message:"Non-abstract class expression does not implement inherited abstract member '{0}' from class '{1}'."},Exported_external_package_typings_file_cannot_contain_tripleslash_references_Please_contact_the_package_author_to_update_the_package_definition:{code:2654,category:e.DiagnosticCategory.Error,key:"Exported_external_package_typings_file_cannot_contain_tripleslash_references_Please_contact_the_pack_2654",message:"Exported external package typings file cannot contain tripleslash references. Please contact the package author to update the package definition."},Exported_external_package_typings_file_0_is_not_a_module_Please_contact_the_package_author_to_update_the_package_definition:{code:2656,category:e.DiagnosticCategory.Error,key:"Exported_external_package_typings_file_0_is_not_a_module_Please_contact_the_package_author_to_update_2656",message:"Exported external package typings file '{0}' is not a module. Please contact the package author to update the package definition."},JSX_expressions_must_have_one_parent_element:{code:2657,category:e.DiagnosticCategory.Error,key:"JSX_expressions_must_have_one_parent_element_2657",message:"JSX expressions must have one parent element"},Type_0_provides_no_match_for_the_signature_1:{code:2658,category:e.DiagnosticCategory.Error,key:"Type_0_provides_no_match_for_the_signature_1_2658",message:"Type '{0}' provides no match for the signature '{1}'"},super_is_only_allowed_in_members_of_object_literal_expressions_when_option_target_is_ES2015_or_higher:{code:2659,category:e.DiagnosticCategory.Error,key:"super_is_only_allowed_in_members_of_object_literal_expressions_when_option_target_is_ES2015_or_highe_2659",message:"'super' is only allowed in members of object literal expressions when option 'target' is 'ES2015' or higher."},super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions:{code:2660,category:e.DiagnosticCategory.Error,key:"super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions_2660",message:"'super' can only be referenced in members of derived classes or object literal expressions."},Cannot_re_export_name_that_is_not_defined_in_the_module:{code:2661,category:e.DiagnosticCategory.Error,key:"Cannot_re_export_name_that_is_not_defined_in_the_module_2661",message:"Cannot re-export name that is not defined in the module."},Cannot_find_name_0_Did_you_mean_the_static_member_1_0:{code:2662,category:e.DiagnosticCategory.Error,key:"Cannot_find_name_0_Did_you_mean_the_static_member_1_0_2662",message:"Cannot find name '{0}'. Did you mean the static member '{1}.{0}'?"},Cannot_find_name_0_Did_you_mean_the_instance_member_this_0:{code:2663,category:e.DiagnosticCategory.Error,key:"Cannot_find_name_0_Did_you_mean_the_instance_member_this_0_2663",message:"Cannot find name '{0}'. Did you mean the instance member 'this.{0}'?"},Invalid_module_name_in_augmentation_module_0_cannot_be_found:{code:2664,category:e.DiagnosticCategory.Error,key:"Invalid_module_name_in_augmentation_module_0_cannot_be_found_2664",message:"Invalid module name in augmentation, module '{0}' cannot be found."},Module_augmentation_cannot_introduce_new_names_in_the_top_level_scope:{code:2665,category:e.DiagnosticCategory.Error,key:"Module_augmentation_cannot_introduce_new_names_in_the_top_level_scope_2665",message:"Module augmentation cannot introduce new names in the top level scope."},Exports_and_export_assignments_are_not_permitted_in_module_augmentations:{code:2666,category:e.DiagnosticCategory.Error,key:"Exports_and_export_assignments_are_not_permitted_in_module_augmentations_2666",message:"Exports and export assignments are not permitted in module augmentations."},Imports_are_not_permitted_in_module_augmentations_Consider_moving_them_to_the_enclosing_external_module:{code:2667,category:e.DiagnosticCategory.Error,key:"Imports_are_not_permitted_in_module_augmentations_Consider_moving_them_to_the_enclosing_external_mod_2667",message:"Imports are not permitted in module augmentations. Consider moving them to the enclosing external module."},export_modifier_cannot_be_applied_to_ambient_modules_and_module_augmentations_since_they_are_always_visible:{code:2668,category:e.DiagnosticCategory.Error,key:"export_modifier_cannot_be_applied_to_ambient_modules_and_module_augmentations_since_they_are_always__2668",message:"'export' modifier cannot be applied to ambient modules and module augmentations since they are always visible."},Augmentations_for_the_global_scope_can_only_be_directly_nested_in_external_modules_or_ambient_module_declarations:{code:2669,category:e.DiagnosticCategory.Error,key:"Augmentations_for_the_global_scope_can_only_be_directly_nested_in_external_modules_or_ambient_module_2669",message:"Augmentations for the global scope can only be directly nested in external modules or ambient module declarations."},Augmentations_for_the_global_scope_should_have_declare_modifier_unless_they_appear_in_already_ambient_context:{code:2670,category:e.DiagnosticCategory.Error,key:"Augmentations_for_the_global_scope_should_have_declare_modifier_unless_they_appear_in_already_ambien_2670",message:"Augmentations for the global scope should have 'declare' modifier unless they appear in already ambient context."},Cannot_augment_module_0_because_it_resolves_to_a_non_module_entity:{code:2671,category:e.DiagnosticCategory.Error,key:"Cannot_augment_module_0_because_it_resolves_to_a_non_module_entity_2671",message:"Cannot augment module '{0}' because it resolves to a non-module entity."},Import_declaration_0_is_using_private_name_1:{code:4e3,category:e.DiagnosticCategory.Error,key:"Import_declaration_0_is_using_private_name_1_4000",message:"Import declaration '{0}' is using private name '{1}'."},Type_parameter_0_of_exported_class_has_or_is_using_private_name_1:{code:4002,category:e.DiagnosticCategory.Error,key:"Type_parameter_0_of_exported_class_has_or_is_using_private_name_1_4002",message:"Type parameter '{0}' of exported class has or is using private name '{1}'."},Type_parameter_0_of_exported_interface_has_or_is_using_private_name_1:{code:4004,category:e.DiagnosticCategory.Error,key:"Type_parameter_0_of_exported_interface_has_or_is_using_private_name_1_4004",message:"Type parameter '{0}' of exported interface has or is using private name '{1}'."},Type_parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1:{code:4006,category:e.DiagnosticCategory.Error,key:"Type_parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1_4006",message:"Type parameter '{0}' of constructor signature from exported interface has or is using private name '{1}'."},Type_parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1:{code:4008,category:e.DiagnosticCategory.Error,key:"Type_parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1_4008",message:"Type parameter '{0}' of call signature from exported interface has or is using private name '{1}'."},Type_parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1:{code:4010,category:e.DiagnosticCategory.Error,key:"Type_parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1_4010",message:"Type parameter '{0}' of public static method from exported class has or is using private name '{1}'."},Type_parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1:{code:4012,category:e.DiagnosticCategory.Error,key:"Type_parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1_4012",message:"Type parameter '{0}' of public method from exported class has or is using private name '{1}'."},Type_parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1:{code:4014,category:e.DiagnosticCategory.Error,key:"Type_parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1_4014",message:"Type parameter '{0}' of method from exported interface has or is using private name '{1}'."},Type_parameter_0_of_exported_function_has_or_is_using_private_name_1:{code:4016,category:e.DiagnosticCategory.Error,key:"Type_parameter_0_of_exported_function_has_or_is_using_private_name_1_4016",message:"Type parameter '{0}' of exported function has or is using private name '{1}'."},Implements_clause_of_exported_class_0_has_or_is_using_private_name_1:{code:4019,category:e.DiagnosticCategory.Error,key:"Implements_clause_of_exported_class_0_has_or_is_using_private_name_1_4019",message:"Implements clause of exported class '{0}' has or is using private name '{1}'."},Extends_clause_of_exported_class_0_has_or_is_using_private_name_1:{code:4020,category:e.DiagnosticCategory.Error,key:"Extends_clause_of_exported_class_0_has_or_is_using_private_name_1_4020",message:"Extends clause of exported class '{0}' has or is using private name '{1}'."},Extends_clause_of_exported_interface_0_has_or_is_using_private_name_1:{code:4022,category:e.DiagnosticCategory.Error,key:"Extends_clause_of_exported_interface_0_has_or_is_using_private_name_1_4022",message:"Extends clause of exported interface '{0}' has or is using private name '{1}'."},Exported_variable_0_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:{code:4023,category:e.DiagnosticCategory.Error,key:"Exported_variable_0_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named_4023",message:"Exported variable '{0}' has or is using name '{1}' from external module {2} but cannot be named."},Exported_variable_0_has_or_is_using_name_1_from_private_module_2:{code:4024,category:e.DiagnosticCategory.Error,key:"Exported_variable_0_has_or_is_using_name_1_from_private_module_2_4024",message:"Exported variable '{0}' has or is using name '{1}' from private module '{2}'."},Exported_variable_0_has_or_is_using_private_name_1:{code:4025,category:e.DiagnosticCategory.Error,key:"Exported_variable_0_has_or_is_using_private_name_1_4025",message:"Exported variable '{0}' has or is using private name '{1}'."},Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:{code:4026,category:e.DiagnosticCategory.Error,key:"Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot__4026",message:"Public static property '{0}' of exported class has or is using name '{1}' from external module {2} but cannot be named."},Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2:{code:4027,category:e.DiagnosticCategory.Error,key:"Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2_4027",message:"Public static property '{0}' of exported class has or is using name '{1}' from private module '{2}'."},Public_static_property_0_of_exported_class_has_or_is_using_private_name_1:{code:4028,category:e.DiagnosticCategory.Error,key:"Public_static_property_0_of_exported_class_has_or_is_using_private_name_1_4028",message:"Public static property '{0}' of exported class has or is using private name '{1}'."},Public_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:{code:4029,category:e.DiagnosticCategory.Error,key:"Public_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_name_4029",message:"Public property '{0}' of exported class has or is using name '{1}' from external module {2} but cannot be named."},Public_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2:{code:4030,category:e.DiagnosticCategory.Error,key:"Public_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2_4030",message:"Public property '{0}' of exported class has or is using name '{1}' from private module '{2}'."},Public_property_0_of_exported_class_has_or_is_using_private_name_1:{code:4031,category:e.DiagnosticCategory.Error,key:"Public_property_0_of_exported_class_has_or_is_using_private_name_1_4031",message:"Public property '{0}' of exported class has or is using private name '{1}'."},Property_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2:{code:4032,category:e.DiagnosticCategory.Error,key:"Property_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2_4032",message:"Property '{0}' of exported interface has or is using name '{1}' from private module '{2}'."},Property_0_of_exported_interface_has_or_is_using_private_name_1:{code:4033,category:e.DiagnosticCategory.Error,key:"Property_0_of_exported_interface_has_or_is_using_private_name_1_4033",message:"Property '{0}' of exported interface has or is using private name '{1}'."},Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_name_1_from_private_module_2:{code:4034,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_name_1_from_private_4034",message:"Parameter '{0}' of public static property setter from exported class has or is using name '{1}' from private module '{2}'."},Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_private_name_1:{code:4035,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_private_name_1_4035",message:"Parameter '{0}' of public static property setter from exported class has or is using private name '{1}'."},Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_name_1_from_private_module_2:{code:4036,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_name_1_from_private_module_4036",message:"Parameter '{0}' of public property setter from exported class has or is using name '{1}' from private module '{2}'."},Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_private_name_1:{code:4037,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_private_name_1_4037",message:"Parameter '{0}' of public property setter from exported class has or is using private name '{1}'."},Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named:{code:4038,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_externa_4038",message:"Return type of public static property getter from exported class has or is using name '{0}' from external module {1} but cannot be named."},Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_private_module_1:{code:4039,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_private_4039",message:"Return type of public static property getter from exported class has or is using name '{0}' from private module '{1}'."},Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_private_name_0:{code:4040,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_private_name_0_4040",message:"Return type of public static property getter from exported class has or is using private name '{0}'."},Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named:{code:4041,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_external_modul_4041",message:"Return type of public property getter from exported class has or is using name '{0}' from external module {1} but cannot be named."},Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_private_module_1:{code:4042,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_private_module_4042",message:"Return type of public property getter from exported class has or is using name '{0}' from private module '{1}'."},Return_type_of_public_property_getter_from_exported_class_has_or_is_using_private_name_0:{code:4043,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_property_getter_from_exported_class_has_or_is_using_private_name_0_4043",message:"Return type of public property getter from exported class has or is using private name '{0}'."},Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1:{code:4044,category:e.DiagnosticCategory.Error,key:"Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_name_0_from_private_mod_4044",message:"Return type of constructor signature from exported interface has or is using name '{0}' from private module '{1}'."},Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_0:{code:4045,category:e.DiagnosticCategory.Error,key:"Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_0_4045",message:"Return type of constructor signature from exported interface has or is using private name '{0}'."},Return_type_of_call_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1:{code:4046,category:e.DiagnosticCategory.Error,key:"Return_type_of_call_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1_4046",message:"Return type of call signature from exported interface has or is using name '{0}' from private module '{1}'."},Return_type_of_call_signature_from_exported_interface_has_or_is_using_private_name_0:{code:4047,category:e.DiagnosticCategory.Error,key:"Return_type_of_call_signature_from_exported_interface_has_or_is_using_private_name_0_4047",message:"Return type of call signature from exported interface has or is using private name '{0}'."},Return_type_of_index_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1:{code:4048,category:e.DiagnosticCategory.Error,key:"Return_type_of_index_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1_4048",message:"Return type of index signature from exported interface has or is using name '{0}' from private module '{1}'."},Return_type_of_index_signature_from_exported_interface_has_or_is_using_private_name_0:{code:4049,category:e.DiagnosticCategory.Error,key:"Return_type_of_index_signature_from_exported_interface_has_or_is_using_private_name_0_4049",message:"Return type of index signature from exported interface has or is using private name '{0}'."},Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named:{code:4050,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_external_module__4050",message:"Return type of public static method from exported class has or is using name '{0}' from external module {1} but cannot be named."},Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_private_module_1:{code:4051,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_private_module_1_4051",message:"Return type of public static method from exported class has or is using name '{0}' from private module '{1}'."},Return_type_of_public_static_method_from_exported_class_has_or_is_using_private_name_0:{code:4052,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_static_method_from_exported_class_has_or_is_using_private_name_0_4052",message:"Return type of public static method from exported class has or is using private name '{0}'."},Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named:{code:4053,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_c_4053",message:"Return type of public method from exported class has or is using name '{0}' from external module {1} but cannot be named."},Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_private_module_1:{code:4054,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_private_module_1_4054",message:"Return type of public method from exported class has or is using name '{0}' from private module '{1}'."},Return_type_of_public_method_from_exported_class_has_or_is_using_private_name_0:{code:4055,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_method_from_exported_class_has_or_is_using_private_name_0_4055",message:"Return type of public method from exported class has or is using private name '{0}'."},Return_type_of_method_from_exported_interface_has_or_is_using_name_0_from_private_module_1:{code:4056,category:e.DiagnosticCategory.Error,key:"Return_type_of_method_from_exported_interface_has_or_is_using_name_0_from_private_module_1_4056",message:"Return type of method from exported interface has or is using name '{0}' from private module '{1}'."},Return_type_of_method_from_exported_interface_has_or_is_using_private_name_0:{code:4057,category:e.DiagnosticCategory.Error,key:"Return_type_of_method_from_exported_interface_has_or_is_using_private_name_0_4057",message:"Return type of method from exported interface has or is using private name '{0}'."},Return_type_of_exported_function_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named:{code:4058,category:e.DiagnosticCategory.Error,key:"Return_type_of_exported_function_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named_4058",message:"Return type of exported function has or is using name '{0}' from external module {1} but cannot be named."},Return_type_of_exported_function_has_or_is_using_name_0_from_private_module_1:{code:4059,category:e.DiagnosticCategory.Error,key:"Return_type_of_exported_function_has_or_is_using_name_0_from_private_module_1_4059",message:"Return type of exported function has or is using name '{0}' from private module '{1}'."},Return_type_of_exported_function_has_or_is_using_private_name_0:{code:4060,category:e.DiagnosticCategory.Error,key:"Return_type_of_exported_function_has_or_is_using_private_name_0_4060",message:"Return type of exported function has or is using private name '{0}'."},Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:{code:4061,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_can_4061",message:"Parameter '{0}' of constructor from exported class has or is using name '{1}' from external module {2} but cannot be named."},Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_private_module_2:{code:4062,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_private_module_2_4062",message:"Parameter '{0}' of constructor from exported class has or is using name '{1}' from private module '{2}'."},Parameter_0_of_constructor_from_exported_class_has_or_is_using_private_name_1:{code:4063,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_constructor_from_exported_class_has_or_is_using_private_name_1_4063",message:"Parameter '{0}' of constructor from exported class has or is using private name '{1}'."},Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2:{code:4064,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_name_1_from_private_mod_4064",message:"Parameter '{0}' of constructor signature from exported interface has or is using name '{1}' from private module '{2}'."},Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1:{code:4065,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1_4065",message:"Parameter '{0}' of constructor signature from exported interface has or is using private name '{1}'."},Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2:{code:4066,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2_4066",message:"Parameter '{0}' of call signature from exported interface has or is using name '{1}' from private module '{2}'."},Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1:{code:4067,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1_4067",message:"Parameter '{0}' of call signature from exported interface has or is using private name '{1}'."},Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:{code:4068,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_external_module__4068",message:"Parameter '{0}' of public static method from exported class has or is using name '{1}' from external module {2} but cannot be named."},Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_private_module_2:{code:4069,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_private_module_2_4069",message:"Parameter '{0}' of public static method from exported class has or is using name '{1}' from private module '{2}'."},Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1:{code:4070,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1_4070",message:"Parameter '{0}' of public static method from exported class has or is using private name '{1}'."},Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:{code:4071,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_c_4071",message:"Parameter '{0}' of public method from exported class has or is using name '{1}' from external module {2} but cannot be named."},Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_private_module_2:{code:4072,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_private_module_2_4072",message:"Parameter '{0}' of public method from exported class has or is using name '{1}' from private module '{2}'."},Parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1:{code:4073,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1_4073",message:"Parameter '{0}' of public method from exported class has or is using private name '{1}'."},Parameter_0_of_method_from_exported_interface_has_or_is_using_name_1_from_private_module_2:{code:4074,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_method_from_exported_interface_has_or_is_using_name_1_from_private_module_2_4074",message:"Parameter '{0}' of method from exported interface has or is using name '{1}' from private module '{2}'."},Parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1:{code:4075,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1_4075",message:"Parameter '{0}' of method from exported interface has or is using private name '{1}'."},Parameter_0_of_exported_function_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:{code:4076,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_exported_function_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named_4076",message:"Parameter '{0}' of exported function has or is using name '{1}' from external module {2} but cannot be named."},Parameter_0_of_exported_function_has_or_is_using_name_1_from_private_module_2:{code:4077,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_exported_function_has_or_is_using_name_1_from_private_module_2_4077",message:"Parameter '{0}' of exported function has or is using name '{1}' from private module '{2}'."},Parameter_0_of_exported_function_has_or_is_using_private_name_1:{code:4078,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_exported_function_has_or_is_using_private_name_1_4078",message:"Parameter '{0}' of exported function has or is using private name '{1}'."},Exported_type_alias_0_has_or_is_using_private_name_1:{code:4081,category:e.DiagnosticCategory.Error,key:"Exported_type_alias_0_has_or_is_using_private_name_1_4081",message:"Exported type alias '{0}' has or is using private name '{1}'."},Default_export_of_the_module_has_or_is_using_private_name_0:{code:4082,category:e.DiagnosticCategory.Error,key:"Default_export_of_the_module_has_or_is_using_private_name_0_4082",message:"Default export of the module has or is using private name '{0}'."},The_current_host_does_not_support_the_0_option:{code:5001,category:e.DiagnosticCategory.Error,key:"The_current_host_does_not_support_the_0_option_5001",message:"The current host does not support the '{0}' option."},Cannot_find_the_common_subdirectory_path_for_the_input_files:{code:5009,category:e.DiagnosticCategory.Error,key:"Cannot_find_the_common_subdirectory_path_for_the_input_files_5009",message:"Cannot find the common subdirectory path for the input files."},Cannot_read_file_0_Colon_1:{code:5012,category:e.DiagnosticCategory.Error,key:"Cannot_read_file_0_Colon_1_5012",message:"Cannot read file '{0}': {1}"},Unsupported_file_encoding:{code:5013,category:e.DiagnosticCategory.Error,key:"Unsupported_file_encoding_5013",message:"Unsupported file encoding."},Failed_to_parse_file_0_Colon_1:{code:5014,category:e.DiagnosticCategory.Error,key:"Failed_to_parse_file_0_Colon_1_5014",message:"Failed to parse file '{0}': {1}."},Unknown_compiler_option_0:{code:5023,category:e.DiagnosticCategory.Error,key:"Unknown_compiler_option_0_5023",message:"Unknown compiler option '{0}'."},Compiler_option_0_requires_a_value_of_type_1:{code:5024,category:e.DiagnosticCategory.Error,key:"Compiler_option_0_requires_a_value_of_type_1_5024",message:"Compiler option '{0}' requires a value of type {1}."},Could_not_write_file_0_Colon_1:{code:5033,category:e.DiagnosticCategory.Error,key:"Could_not_write_file_0_Colon_1_5033",message:"Could not write file '{0}': {1}"},Option_project_cannot_be_mixed_with_source_files_on_a_command_line:{code:5042,category:e.DiagnosticCategory.Error,key:"Option_project_cannot_be_mixed_with_source_files_on_a_command_line_5042",message:"Option 'project' cannot be mixed with source files on a command line."},Option_isolatedModules_can_only_be_used_when_either_option_module_is_provided_or_option_target_is_ES2015_or_higher:{code:5047,category:e.DiagnosticCategory.Error,key:"Option_isolatedModules_can_only_be_used_when_either_option_module_is_provided_or_option_target_is_ES_5047",message:"Option 'isolatedModules' can only be used when either option '--module' is provided or option 'target' is 'ES2015' or higher."},Option_inlineSources_can_only_be_used_when_either_option_inlineSourceMap_or_option_sourceMap_is_provided:{code:5051,category:e.DiagnosticCategory.Error,key:"Option_inlineSources_can_only_be_used_when_either_option_inlineSourceMap_or_option_sourceMap_is_prov_5051",message:"Option 'inlineSources' can only be used when either option '--inlineSourceMap' or option '--sourceMap' is provided."},Option_0_cannot_be_specified_without_specifying_option_1:{code:5052,category:e.DiagnosticCategory.Error,key:"Option_0_cannot_be_specified_without_specifying_option_1_5052",message:"Option '{0}' cannot be specified without specifying option '{1}'."},Option_0_cannot_be_specified_with_option_1:{code:5053,category:e.DiagnosticCategory.Error,key:"Option_0_cannot_be_specified_with_option_1_5053",message:"Option '{0}' cannot be specified with option '{1}'."},A_tsconfig_json_file_is_already_defined_at_Colon_0:{code:5054,category:e.DiagnosticCategory.Error,key:"A_tsconfig_json_file_is_already_defined_at_Colon_0_5054",message:"A 'tsconfig.json' file is already defined at: '{0}'."},Cannot_write_file_0_because_it_would_overwrite_input_file:{code:5055,category:e.DiagnosticCategory.Error,key:"Cannot_write_file_0_because_it_would_overwrite_input_file_5055",message:"Cannot write file '{0}' because it would overwrite input file."},Cannot_write_file_0_because_it_would_be_overwritten_by_multiple_input_files:{code:5056,category:e.DiagnosticCategory.Error,key:"Cannot_write_file_0_because_it_would_be_overwritten_by_multiple_input_files_5056",message:"Cannot write file '{0}' because it would be overwritten by multiple input files."},Cannot_find_a_tsconfig_json_file_at_the_specified_directory_Colon_0:{code:5057,category:e.DiagnosticCategory.Error,key:"Cannot_find_a_tsconfig_json_file_at_the_specified_directory_Colon_0_5057",message:"Cannot find a tsconfig.json file at the specified directory: '{0}'"},The_specified_path_does_not_exist_Colon_0:{code:5058,category:e.DiagnosticCategory.Error,key:"The_specified_path_does_not_exist_Colon_0_5058",message:"The specified path does not exist: '{0}'"},Invalide_value_for_reactNamespace_0_is_not_a_valid_identifier:{code:5059,category:e.DiagnosticCategory.Error,key:"Invalide_value_for_reactNamespace_0_is_not_a_valid_identifier_5059",message:"Invalide value for '--reactNamespace'. '{0}' is not a valid identifier."},Concatenate_and_emit_output_to_single_file:{code:6001,category:e.DiagnosticCategory.Message,key:"Concatenate_and_emit_output_to_single_file_6001",message:"Concatenate and emit output to single file."},Generates_corresponding_d_ts_file:{code:6002,category:e.DiagnosticCategory.Message,key:"Generates_corresponding_d_ts_file_6002",message:"Generates corresponding '.d.ts' file."},Specifies_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations:{code:6003,category:e.DiagnosticCategory.Message,key:"Specifies_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations_6003",message:"Specifies the location where debugger should locate map files instead of generated locations."},Specifies_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations:{code:6004,category:e.DiagnosticCategory.Message,key:"Specifies_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations_6004",message:"Specifies the location where debugger should locate TypeScript files instead of source locations."},Watch_input_files:{code:6005,category:e.DiagnosticCategory.Message,key:"Watch_input_files_6005",message:"Watch input files."},Redirect_output_structure_to_the_directory:{code:6006,category:e.DiagnosticCategory.Message,key:"Redirect_output_structure_to_the_directory_6006",message:"Redirect output structure to the directory."},Do_not_erase_const_enum_declarations_in_generated_code:{code:6007,category:e.DiagnosticCategory.Message,key:"Do_not_erase_const_enum_declarations_in_generated_code_6007",message:"Do not erase const enum declarations in generated code."},Do_not_emit_outputs_if_any_errors_were_reported:{code:6008,category:e.DiagnosticCategory.Message,key:"Do_not_emit_outputs_if_any_errors_were_reported_6008",message:"Do not emit outputs if any errors were reported."},Do_not_emit_comments_to_output:{code:6009,category:e.DiagnosticCategory.Message,key:"Do_not_emit_comments_to_output_6009",message:"Do not emit comments to output."},Do_not_emit_outputs:{code:6010,category:e.DiagnosticCategory.Message,key:"Do_not_emit_outputs_6010",message:"Do not emit outputs."},Allow_default_imports_from_modules_with_no_default_export_This_does_not_affect_code_emit_just_typechecking:{code:6011,category:e.DiagnosticCategory.Message,key:"Allow_default_imports_from_modules_with_no_default_export_This_does_not_affect_code_emit_just_typech_6011",message:"Allow default imports from modules with no default export. This does not affect code emit, just typechecking."},Specify_ECMAScript_target_version_Colon_ES3_default_ES5_or_ES2015_experimental:{code:6015,category:e.DiagnosticCategory.Message,key:"Specify_ECMAScript_target_version_Colon_ES3_default_ES5_or_ES2015_experimental_6015",message:"Specify ECMAScript target version: 'ES3' (default), 'ES5', or 'ES2015' (experimental)"},Specify_module_code_generation_Colon_commonjs_amd_system_umd_or_es2015:{code:6016,category:e.DiagnosticCategory.Message,key:"Specify_module_code_generation_Colon_commonjs_amd_system_umd_or_es2015_6016",message:"Specify module code generation: 'commonjs', 'amd', 'system', 'umd' or 'es2015'"},Print_this_message:{code:6017,category:e.DiagnosticCategory.Message,key:"Print_this_message_6017",message:"Print this message."},Print_the_compiler_s_version:{code:6019,category:e.DiagnosticCategory.Message,key:"Print_the_compiler_s_version_6019",message:"Print the compiler's version."},Compile_the_project_in_the_given_directory:{code:6020,category:e.DiagnosticCategory.Message,key:"Compile_the_project_in_the_given_directory_6020",message:"Compile the project in the given directory."},Syntax_Colon_0:{code:6023,category:e.DiagnosticCategory.Message,key:"Syntax_Colon_0_6023",message:"Syntax: {0}"},options:{code:6024,category:e.DiagnosticCategory.Message,key:"options_6024",message:"options"},file:{code:6025,category:e.DiagnosticCategory.Message,key:"file_6025",message:"file"},Examples_Colon_0:{code:6026,category:e.DiagnosticCategory.Message,key:"Examples_Colon_0_6026",message:"Examples: {0}"},Options_Colon:{code:6027,category:e.DiagnosticCategory.Message,key:"Options_Colon_6027",message:"Options:"},Version_0:{code:6029,category:e.DiagnosticCategory.Message,key:"Version_0_6029",message:"Version {0}"},Insert_command_line_options_and_files_from_a_file:{code:6030,category:e.DiagnosticCategory.Message,key:"Insert_command_line_options_and_files_from_a_file_6030",message:"Insert command line options and files from a file."},File_change_detected_Starting_incremental_compilation:{code:6032,category:e.DiagnosticCategory.Message,key:"File_change_detected_Starting_incremental_compilation_6032",message:"File change detected. Starting incremental compilation..."},KIND:{code:6034,category:e.DiagnosticCategory.Message,key:"KIND_6034",message:"KIND"},FILE:{code:6035,category:e.DiagnosticCategory.Message,key:"FILE_6035",message:"FILE"},VERSION:{code:6036,category:e.DiagnosticCategory.Message,key:"VERSION_6036",message:"VERSION"},LOCATION:{code:6037,category:e.DiagnosticCategory.Message,key:"LOCATION_6037",message:"LOCATION"},DIRECTORY:{code:6038,category:e.DiagnosticCategory.Message,key:"DIRECTORY_6038",message:"DIRECTORY"},Compilation_complete_Watching_for_file_changes:{code:6042,category:e.DiagnosticCategory.Message,key:"Compilation_complete_Watching_for_file_changes_6042",message:"Compilation complete. Watching for file changes."},Generates_corresponding_map_file:{code:6043,category:e.DiagnosticCategory.Message,key:"Generates_corresponding_map_file_6043",message:"Generates corresponding '.map' file."},Compiler_option_0_expects_an_argument:{code:6044,category:e.DiagnosticCategory.Error,key:"Compiler_option_0_expects_an_argument_6044",message:"Compiler option '{0}' expects an argument."},Unterminated_quoted_string_in_response_file_0:{code:6045,category:e.DiagnosticCategory.Error,key:"Unterminated_quoted_string_in_response_file_0_6045",message:"Unterminated quoted string in response file '{0}'."},Argument_for_module_option_must_be_commonjs_amd_system_umd_es2015_or_none:{code:6046,category:e.DiagnosticCategory.Error,key:"Argument_for_module_option_must_be_commonjs_amd_system_umd_es2015_or_none_6046",message:"Argument for '--module' option must be 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'none'."},Argument_for_target_option_must_be_ES3_ES5_or_ES2015:{code:6047,category:e.DiagnosticCategory.Error,key:"Argument_for_target_option_must_be_ES3_ES5_or_ES2015_6047",message:"Argument for '--target' option must be 'ES3', 'ES5', or 'ES2015'."},Locale_must_be_of_the_form_language_or_language_territory_For_example_0_or_1:{code:6048,category:e.DiagnosticCategory.Error,key:"Locale_must_be_of_the_form_language_or_language_territory_For_example_0_or_1_6048",message:"Locale must be of the form <language> or <language>-<territory>. For example '{0}' or '{1}'."},Unsupported_locale_0:{code:6049,category:e.DiagnosticCategory.Error,key:"Unsupported_locale_0_6049",message:"Unsupported locale '{0}'."},Unable_to_open_file_0:{code:6050,category:e.DiagnosticCategory.Error,key:"Unable_to_open_file_0_6050",message:"Unable to open file '{0}'."},Corrupted_locale_file_0:{code:6051,category:e.DiagnosticCategory.Error,key:"Corrupted_locale_file_0_6051",message:"Corrupted locale file {0}."},Raise_error_on_expressions_and_declarations_with_an_implied_any_type:{code:6052,category:e.DiagnosticCategory.Message,key:"Raise_error_on_expressions_and_declarations_with_an_implied_any_type_6052",message:"Raise error on expressions and declarations with an implied 'any' type."},File_0_not_found:{code:6053,category:e.DiagnosticCategory.Error,key:"File_0_not_found_6053",message:"File '{0}' not found."},File_0_has_unsupported_extension_The_only_supported_extensions_are_1:{code:6054,category:e.DiagnosticCategory.Error,key:"File_0_has_unsupported_extension_The_only_supported_extensions_are_1_6054",message:"File '{0}' has unsupported extension. The only supported extensions are {1}."},Suppress_noImplicitAny_errors_for_indexing_objects_lacking_index_signatures:{code:6055,category:e.DiagnosticCategory.Message,key:"Suppress_noImplicitAny_errors_for_indexing_objects_lacking_index_signatures_6055",message:"Suppress noImplicitAny errors for indexing objects lacking index signatures."},Do_not_emit_declarations_for_code_that_has_an_internal_annotation:{code:6056,category:e.DiagnosticCategory.Message,key:"Do_not_emit_declarations_for_code_that_has_an_internal_annotation_6056",message:"Do not emit declarations for code that has an '@internal' annotation."},Specifies_the_root_directory_of_input_files_Use_to_control_the_output_directory_structure_with_outDir:{code:6058,category:e.DiagnosticCategory.Message,key:"Specifies_the_root_directory_of_input_files_Use_to_control_the_output_directory_structure_with_outDi_6058",message:"Specifies the root directory of input files. Use to control the output directory structure with --outDir."},File_0_is_not_under_rootDir_1_rootDir_is_expected_to_contain_all_source_files:{code:6059,category:e.DiagnosticCategory.Error,key:"File_0_is_not_under_rootDir_1_rootDir_is_expected_to_contain_all_source_files_6059",message:"File '{0}' is not under 'rootDir' '{1}'. 'rootDir' is expected to contain all source files."},Specifies_the_end_of_line_sequence_to_be_used_when_emitting_files_Colon_CRLF_dos_or_LF_unix:{code:6060,category:e.DiagnosticCategory.Message,key:"Specifies_the_end_of_line_sequence_to_be_used_when_emitting_files_Colon_CRLF_dos_or_LF_unix_6060",message:"Specifies the end of line sequence to be used when emitting files: 'CRLF' (dos) or 'LF' (unix)."},NEWLINE:{code:6061,category:e.DiagnosticCategory.Message,key:"NEWLINE_6061",message:"NEWLINE"},Argument_for_newLine_option_must_be_CRLF_or_LF:{code:6062,category:e.DiagnosticCategory.Error,key:"Argument_for_newLine_option_must_be_CRLF_or_LF_6062",message:"Argument for '--newLine' option must be 'CRLF' or 'LF'."},Argument_for_moduleResolution_option_must_be_node_or_classic:{code:6063,category:e.DiagnosticCategory.Error,key:"Argument_for_moduleResolution_option_must_be_node_or_classic_6063",message:"Argument for '--moduleResolution' option must be 'node' or 'classic'."},Enables_experimental_support_for_ES7_decorators:{code:6065,category:e.DiagnosticCategory.Message,key:"Enables_experimental_support_for_ES7_decorators_6065",message:"Enables experimental support for ES7 decorators."},Enables_experimental_support_for_emitting_type_metadata_for_decorators:{code:6066,category:e.DiagnosticCategory.Message,key:"Enables_experimental_support_for_emitting_type_metadata_for_decorators_6066",message:"Enables experimental support for emitting type metadata for decorators."},Enables_experimental_support_for_ES7_async_functions:{code:6068,category:e.DiagnosticCategory.Message,key:"Enables_experimental_support_for_ES7_async_functions_6068",message:"Enables experimental support for ES7 async functions."},Specifies_module_resolution_strategy_Colon_node_Node_js_or_classic_TypeScript_pre_1_6:{code:6069,category:e.DiagnosticCategory.Message,key:"Specifies_module_resolution_strategy_Colon_node_Node_js_or_classic_TypeScript_pre_1_6_6069",message:"Specifies module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6)."},Initializes_a_TypeScript_project_and_creates_a_tsconfig_json_file:{code:6070,category:e.DiagnosticCategory.Message,key:"Initializes_a_TypeScript_project_and_creates_a_tsconfig_json_file_6070",message:"Initializes a TypeScript project and creates a tsconfig.json file."},Successfully_created_a_tsconfig_json_file:{code:6071,category:e.DiagnosticCategory.Message,key:"Successfully_created_a_tsconfig_json_file_6071",message:"Successfully created a tsconfig.json file."},Suppress_excess_property_checks_for_object_literals:{code:6072,category:e.DiagnosticCategory.Message,key:"Suppress_excess_property_checks_for_object_literals_6072",message:"Suppress excess property checks for object literals."},Stylize_errors_and_messages_using_color_and_context_experimental:{code:6073,category:e.DiagnosticCategory.Message,key:"Stylize_errors_and_messages_using_color_and_context_experimental_6073",message:"Stylize errors and messages using color and context. (experimental)"},Do_not_report_errors_on_unused_labels:{code:6074,category:e.DiagnosticCategory.Message,key:"Do_not_report_errors_on_unused_labels_6074",message:"Do not report errors on unused labels."},Report_error_when_not_all_code_paths_in_function_return_a_value:{code:6075,category:e.DiagnosticCategory.Message,key:"Report_error_when_not_all_code_paths_in_function_return_a_value_6075",message:"Report error when not all code paths in function return a value."},Report_errors_for_fallthrough_cases_in_switch_statement:{code:6076,category:e.DiagnosticCategory.Message,key:"Report_errors_for_fallthrough_cases_in_switch_statement_6076",message:"Report errors for fallthrough cases in switch statement."},Do_not_report_errors_on_unreachable_code:{code:6077,category:e.DiagnosticCategory.Message,key:"Do_not_report_errors_on_unreachable_code_6077",message:"Do not report errors on unreachable code."},Disallow_inconsistently_cased_references_to_the_same_file:{code:6078,category:e.DiagnosticCategory.Message,key:"Disallow_inconsistently_cased_references_to_the_same_file_6078",message:"Disallow inconsistently-cased references to the same file."},Specify_JSX_code_generation_Colon_preserve_or_react:{code:6080,category:e.DiagnosticCategory.Message,key:"Specify_JSX_code_generation_Colon_preserve_or_react_6080",message:"Specify JSX code generation: 'preserve' or 'react'"},Argument_for_jsx_must_be_preserve_or_react:{code:6081,category:e.DiagnosticCategory.Message,key:"Argument_for_jsx_must_be_preserve_or_react_6081",message:"Argument for '--jsx' must be 'preserve' or 'react'."},Only_amd_and_system_modules_are_supported_alongside_0:{code:6082,category:e.DiagnosticCategory.Error,key:"Only_amd_and_system_modules_are_supported_alongside_0_6082",message:"Only 'amd' and 'system' modules are supported alongside --{0}."},Allow_javascript_files_to_be_compiled:{code:6083,category:e.DiagnosticCategory.Message,key:"Allow_javascript_files_to_be_compiled_6083",message:"Allow javascript files to be compiled."},Specifies_the_object_invoked_for_createElement_and_spread_when_targeting_react_JSX_emit:{code:6084,category:e.DiagnosticCategory.Message,key:"Specifies_the_object_invoked_for_createElement_and_spread_when_targeting_react_JSX_emit_6084",message:"Specifies the object invoked for createElement and __spread when targeting 'react' JSX emit"},Option_0_should_have_array_of_strings_as_a_value:{code:6103,category:e.DiagnosticCategory.Error,key:"Option_0_should_have_array_of_strings_as_a_value_6103",message:"Option '{0}' should have array of strings as a value."},Do_not_emit_use_strict_directives_in_module_output:{code:6112,category:e.DiagnosticCategory.Message,key:"Do_not_emit_use_strict_directives_in_module_output_6112",message:"Do not emit 'use strict' directives in module output."},Variable_0_implicitly_has_an_1_type:{code:7005,category:e.DiagnosticCategory.Error,key:"Variable_0_implicitly_has_an_1_type_7005",message:"Variable '{0}' implicitly has an '{1}' type."},Parameter_0_implicitly_has_an_1_type:{code:7006,category:e.DiagnosticCategory.Error,key:"Parameter_0_implicitly_has_an_1_type_7006",message:"Parameter '{0}' implicitly has an '{1}' type."},Member_0_implicitly_has_an_1_type:{code:7008,category:e.DiagnosticCategory.Error,key:"Member_0_implicitly_has_an_1_type_7008",message:"Member '{0}' implicitly has an '{1}' type."},new_expression_whose_target_lacks_a_construct_signature_implicitly_has_an_any_type:{code:7009,category:e.DiagnosticCategory.Error,key:"new_expression_whose_target_lacks_a_construct_signature_implicitly_has_an_any_type_7009",message:"'new' expression, whose target lacks a construct signature, implicitly has an 'any' type."},_0_which_lacks_return_type_annotation_implicitly_has_an_1_return_type:{code:7010,category:e.DiagnosticCategory.Error,key:"_0_which_lacks_return_type_annotation_implicitly_has_an_1_return_type_7010",message:"'{0}', which lacks return-type annotation, implicitly has an '{1}' return type."},Function_expression_which_lacks_return_type_annotation_implicitly_has_an_0_return_type:{code:7011,category:e.DiagnosticCategory.Error,key:"Function_expression_which_lacks_return_type_annotation_implicitly_has_an_0_return_type_7011",message:"Function expression, which lacks return-type annotation, implicitly has an '{0}' return type."},Construct_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type:{code:7013,category:e.DiagnosticCategory.Error,key:"Construct_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type_7013",message:"Construct signature, which lacks return-type annotation, implicitly has an 'any' return type."},Element_implicitly_has_an_any_type_because_index_expression_is_not_of_type_number:{code:7015,category:e.DiagnosticCategory.Error,key:"Element_implicitly_has_an_any_type_because_index_expression_is_not_of_type_number_7015",message:"Element implicitly has an 'any' type because index expression is not of type 'number'."},Property_0_implicitly_has_type_any_because_its_set_accessor_lacks_a_type_annotation:{code:7016,category:e.DiagnosticCategory.Error,key:"Property_0_implicitly_has_type_any_because_its_set_accessor_lacks_a_type_annotation_7016",message:"Property '{0}' implicitly has type 'any', because its 'set' accessor lacks a type annotation."},Index_signature_of_object_type_implicitly_has_an_any_type:{code:7017,category:e.DiagnosticCategory.Error,key:"Index_signature_of_object_type_implicitly_has_an_any_type_7017",message:"Index signature of object type implicitly has an 'any' type."},Object_literal_s_property_0_implicitly_has_an_1_type:{code:7018,category:e.DiagnosticCategory.Error,key:"Object_literal_s_property_0_implicitly_has_an_1_type_7018",message:"Object literal's property '{0}' implicitly has an '{1}' type."},Rest_parameter_0_implicitly_has_an_any_type:{code:7019,category:e.DiagnosticCategory.Error,key:"Rest_parameter_0_implicitly_has_an_any_type_7019",message:"Rest parameter '{0}' implicitly has an 'any[]' type."},Call_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type:{code:7020,category:e.DiagnosticCategory.Error,key:"Call_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type_7020",message:"Call signature, which lacks return-type annotation, implicitly has an 'any' return type."},_0_implicitly_has_type_any_because_it_does_not_have_a_type_annotation_and_is_referenced_directly_or_indirectly_in_its_own_initializer:{code:7022,category:e.DiagnosticCategory.Error,key:"_0_implicitly_has_type_any_because_it_does_not_have_a_type_annotation_and_is_referenced_directly_or__7022",message:"'{0}' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer."},_0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions:{code:7023,category:e.DiagnosticCategory.Error,key:"_0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_reference_7023",message:"'{0}' implicitly has return type 'any' because it does not have a return type annotation and is referenced directly or indirectly in one of its return expressions."},Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions:{code:7024,category:e.DiagnosticCategory.Error,key:"Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_ref_7024",message:"Function implicitly has return type 'any' because it does not have a return type annotation and is referenced directly or indirectly in one of its return expressions."},Generator_implicitly_has_type_0_because_it_does_not_yield_any_values_Consider_supplying_a_return_type:{code:7025,category:e.DiagnosticCategory.Error,key:"Generator_implicitly_has_type_0_because_it_does_not_yield_any_values_Consider_supplying_a_return_typ_7025",message:"Generator implicitly has type '{0}' because it does not yield any values. Consider supplying a return type."},JSX_element_implicitly_has_type_any_because_no_interface_JSX_0_exists:{code:7026,category:e.DiagnosticCategory.Error,key:"JSX_element_implicitly_has_type_any_because_no_interface_JSX_0_exists_7026",message:"JSX element implicitly has type 'any' because no interface 'JSX.{0}' exists"},Unreachable_code_detected:{code:7027,category:e.DiagnosticCategory.Error,key:"Unreachable_code_detected_7027",message:"Unreachable code detected."},Unused_label:{code:7028,category:e.DiagnosticCategory.Error,key:"Unused_label_7028",message:"Unused label."},Fallthrough_case_in_switch:{code:7029,category:e.DiagnosticCategory.Error,key:"Fallthrough_case_in_switch_7029",message:"Fallthrough case in switch."},Not_all_code_paths_return_a_value:{code:7030,category:e.DiagnosticCategory.Error,key:"Not_all_code_paths_return_a_value_7030",message:"Not all code paths return a value."},You_cannot_rename_this_element:{code:8e3,category:e.DiagnosticCategory.Error,key:"You_cannot_rename_this_element_8000",message:"You cannot rename this element."},You_cannot_rename_elements_that_are_defined_in_the_standard_TypeScript_library:{code:8001,category:e.DiagnosticCategory.Error,key:"You_cannot_rename_elements_that_are_defined_in_the_standard_TypeScript_library_8001",message:"You cannot rename elements that are defined in the standard TypeScript library."},import_can_only_be_used_in_a_ts_file:{code:8002,category:e.DiagnosticCategory.Error,key:"import_can_only_be_used_in_a_ts_file_8002",message:"'import ... =' can only be used in a .ts file."},export_can_only_be_used_in_a_ts_file:{code:8003,category:e.DiagnosticCategory.Error,key:"export_can_only_be_used_in_a_ts_file_8003",message:"'export=' can only be used in a .ts file."},type_parameter_declarations_can_only_be_used_in_a_ts_file:{code:8004,category:e.DiagnosticCategory.Error,key:"type_parameter_declarations_can_only_be_used_in_a_ts_file_8004",message:"'type parameter declarations' can only be used in a .ts file."},implements_clauses_can_only_be_used_in_a_ts_file:{code:8005,category:e.DiagnosticCategory.Error,key:"implements_clauses_can_only_be_used_in_a_ts_file_8005",message:"'implements clauses' can only be used in a .ts file."},interface_declarations_can_only_be_used_in_a_ts_file:{code:8006,category:e.DiagnosticCategory.Error,key:"interface_declarations_can_only_be_used_in_a_ts_file_8006",message:"'interface declarations' can only be used in a .ts file."},module_declarations_can_only_be_used_in_a_ts_file:{code:8007,category:e.DiagnosticCategory.Error,key:"module_declarations_can_only_be_used_in_a_ts_file_8007",message:"'module declarations' can only be used in a .ts file."},type_aliases_can_only_be_used_in_a_ts_file:{code:8008,category:e.DiagnosticCategory.Error,key:"type_aliases_can_only_be_used_in_a_ts_file_8008",message:"'type aliases' can only be used in a .ts file."},_0_can_only_be_used_in_a_ts_file:{code:8009,category:e.DiagnosticCategory.Error,key:"_0_can_only_be_used_in_a_ts_file_8009",message:"'{0}' can only be used in a .ts file."},types_can_only_be_used_in_a_ts_file:{code:8010,category:e.DiagnosticCategory.Error,key:"types_can_only_be_used_in_a_ts_file_8010",message:"'types' can only be used in a .ts file."},type_arguments_can_only_be_used_in_a_ts_file:{code:8011,category:e.DiagnosticCategory.Error,key:"type_arguments_can_only_be_used_in_a_ts_file_8011",message:"'type arguments' can only be used in a .ts file."},parameter_modifiers_can_only_be_used_in_a_ts_file:{code:8012,category:e.DiagnosticCategory.Error,key:"parameter_modifiers_can_only_be_used_in_a_ts_file_8012",message:"'parameter modifiers' can only be used in a .ts file."},property_declarations_can_only_be_used_in_a_ts_file:{code:8014,category:e.DiagnosticCategory.Error,key:"property_declarations_can_only_be_used_in_a_ts_file_8014",message:"'property declarations' can only be used in a .ts file."},enum_declarations_can_only_be_used_in_a_ts_file:{code:8015,category:e.DiagnosticCategory.Error,key:"enum_declarations_can_only_be_used_in_a_ts_file_8015",message:"'enum declarations' can only be used in a .ts file."},type_assertion_expressions_can_only_be_used_in_a_ts_file:{code:8016,category:e.DiagnosticCategory.Error,key:"type_assertion_expressions_can_only_be_used_in_a_ts_file_8016",message:"'type assertion expressions' can only be used in a .ts file."},Only_identifiers_Slashqualified_names_with_optional_type_arguments_are_currently_supported_in_a_class_extends_clauses:{code:9002,category:e.DiagnosticCategory.Error,key:"Only_identifiers_Slashqualified_names_with_optional_type_arguments_are_currently_supported_in_a_clas_9002",message:"Only identifiers/qualified-names with optional type arguments are currently supported in a class 'extends' clauses."},class_expressions_are_not_currently_supported:{code:9003,category:e.DiagnosticCategory.Error,key:"class_expressions_are_not_currently_supported_9003",message:"'class' expressions are not currently supported."},JSX_attributes_must_only_be_assigned_a_non_empty_expression:{code:17e3,category:e.DiagnosticCategory.Error,key:"JSX_attributes_must_only_be_assigned_a_non_empty_expression_17000",message:"JSX attributes must only be assigned a non-empty 'expression'."},JSX_elements_cannot_have_multiple_attributes_with_the_same_name:{code:17001,category:e.DiagnosticCategory.Error,key:"JSX_elements_cannot_have_multiple_attributes_with_the_same_name_17001",message:"JSX elements cannot have multiple attributes with the same name."},Expected_corresponding_JSX_closing_tag_for_0:{code:17002,category:e.DiagnosticCategory.Error,key:"Expected_corresponding_JSX_closing_tag_for_0_17002",message:"Expected corresponding JSX closing tag for '{0}'."},JSX_attribute_expected:{code:17003,category:e.DiagnosticCategory.Error,key:"JSX_attribute_expected_17003",message:"JSX attribute expected."},Cannot_use_JSX_unless_the_jsx_flag_is_provided:{code:17004,category:e.DiagnosticCategory.Error,key:"Cannot_use_JSX_unless_the_jsx_flag_is_provided_17004",message:"Cannot use JSX unless the '--jsx' flag is provided."},A_constructor_cannot_contain_a_super_call_when_its_class_extends_null:{code:17005,category:e.DiagnosticCategory.Error,key:"A_constructor_cannot_contain_a_super_call_when_its_class_extends_null_17005",message:"A constructor cannot contain a 'super' call when its class extends 'null'"},An_unary_expression_with_the_0_operator_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses:{code:17006,category:e.DiagnosticCategory.Error,key:"An_unary_expression_with_the_0_operator_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_ex_17006",message:"An unary expression with the '{0}' operator is not allowed in the left-hand side of an exponentiation expression. Consider enclosing the expression in parentheses."},A_type_assertion_expression_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses:{code:17007,category:e.DiagnosticCategory.Error,key:"A_type_assertion_expression_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Con_17007",message:"A type assertion expression is not allowed in the left-hand side of an exponentiation expression. Consider enclosing the expression in parentheses."},JSX_element_0_has_no_corresponding_closing_tag:{code:17008,category:e.DiagnosticCategory.Error,key:"JSX_element_0_has_no_corresponding_closing_tag_17008",message:"JSX element '{0}' has no corresponding closing tag."},super_must_be_called_before_accessing_this_in_the_constructor_of_a_derived_class:{code:17009,category:e.DiagnosticCategory.Error,key:"super_must_be_called_before_accessing_this_in_the_constructor_of_a_derived_class_17009",message:"'super' must be called before accessing 'this' in the constructor of a derived class."},Unknown_typing_option_0:{code:17010,category:e.DiagnosticCategory.Error,key:"Unknown_typing_option_0_17010",message:"Unknown typing option '{0}'."},Too_many_JavaScript_files_in_the_project_Consider_specifying_the_exclude_setting_in_project_configuration_to_limit_included_source_folders_The_likely_folder_to_exclude_is_0_To_disable_the_project_size_limit_set_the_disableSizeLimit_compiler_option_to_true:{code:17012,category:e.DiagnosticCategory.Error,key:"Too_many_JavaScript_files_in_the_project_Consider_specifying_the_exclude_setting_in_project_configur_17012",message:"Too many JavaScript files in the project. Consider specifying the 'exclude' setting in project configuration to limit included source folders. The likely folder to exclude is '{0}'. To disable the project size limit, set the 'disableSizeLimit' compiler option to 'true'."}}}(ts||(ts={})),function(e){function t(e){return e>=69}function n(e,t){if(e<t[0])return!1
for(var n,r=0,a=t.length;a>r+1;){if(n=r+(a-r)/2,t[n-=n%2]<=e&&e<=t[n+1])return!0
e<t[n]?a=n:r=n+2}return!1}function r(e,t){return n(e,t>=1?x:k)}function a(e){for(var t=new Array,n=0,r=0;n<e.length;){var a=e.charCodeAt(n)
switch(n++,a){case 13:10===e.charCodeAt(n)&&n++
case 10:t.push(r),r=n
break
default:a>127&&_(a)&&(t.push(r),r=n)}}return t.push(r),t}function i(t,n,r){return e.Debug.assert(n>=0&&n<t.length),t[n]+r}function o(e){return e.lineMap||(e.lineMap=a(e.text))}function s(t,n){var r=e.binarySearch(t,n)
return 0>r&&(r=~r-1,e.Debug.assert(-1!==r,"position cannot precede the beginning of the file")),{line:r,character:n-t[r]}}function c(e){return 32===e||9===e||11===e||12===e||160===e||133===e||5760===e||e>=8192&&8203>=e||8239===e||8287===e||12288===e||65279===e}function _(e){return 10===e||13===e||8232===e||8233===e}function u(e){return e>=48&&57>=e}function l(e){return e>=48&&55>=e}function d(t,n){if(e.Debug.assert(n>=0),0===n||_(t.charCodeAt(n-1))){var r=t.charCodeAt(n)
if(n+T<t.length){for(var a=0,i=T;i>a;a++)if(t.charCodeAt(n+a)!==r)return!1
return 61===r||32===t.charCodeAt(n+T)}}return!1}function p(t,n,r){r&&r(e.Diagnostics.Merge_conflict_marker_encountered,T)
var a=t.charCodeAt(n),i=t.length
if(60===a||62===a)for(;i>n&&!_(t.charCodeAt(n));)n++
else for(e.Debug.assert(61===a);i>n;){if(62===t.charCodeAt(n)&&d(t,n))break
n++}return n}function f(t,n){return e.Debug.assert(0===n),E.test(t)}function m(e,t){return t+E.exec(e)[0].length}function g(t,n,r){for(var a,i=r||0===n;n<t.length;){var o=t.charCodeAt(n)
switch(o){case 13:10===t.charCodeAt(n+1)&&n++
case 10:if(n++,r)return a
i=!0,a&&a.length&&(e.lastOrUndefined(a).hasTrailingNewLine=!0)
continue
case 9:case 11:case 12:case 32:n++
continue
case 47:var s=t.charCodeAt(n+1),u=!1
if(47===s||42===s){var l=47===s?2:3,d=n
if(n+=2,47===s)for(;n<t.length;){if(_(t.charCodeAt(n))){u=!0
break}n++}else for(;n<t.length;){if(42===t.charCodeAt(n)&&47===t.charCodeAt(n+1)){n+=2
break}n++}i&&(a||(a=[]),a.push({pos:d,end:n,hasTrailingNewLine:u,kind:l}))
continue}break
default:if(o>127&&(c(o)||_(o))){a&&a.length&&_(o)&&(e.lastOrUndefined(a).hasTrailingNewLine=!0),n++
continue}}return a}return a}function y(e,t){return e>=65&&90>=e||e>=97&&122>=e||36===e||95===e||e>127&&r(e,t)}function h(e,t){return e>=65&&90>=e||e>=97&&122>=e||e>=48&&57>=e||36===e||95===e||e>127&&function(e,t){return n(e,t>=1?C:b)}(e,t)}e.tokenIsIdentifierOrKeyword=t
var v={abstract:115,any:117,as:116,boolean:120,break:70,case:71,catch:72,class:73,continue:75,const:74,constructor:121,debugger:76,declare:122,default:77,delete:78,do:79,else:80,enum:81,export:82,extends:83,false:84,finally:85,for:86,from:133,function:87,get:123,if:88,implements:106,import:89,in:90,instanceof:91,interface:107,is:124,let:108,module:125,namespace:126,new:92,null:93,number:128,package:109,private:110,protected:111,public:112,require:127,global:134,return:94,set:129,static:113,string:130,super:95,switch:96,symbol:131,this:97,throw:98,true:99,try:100,type:132,typeof:101,var:102,void:103,while:104,with:105,yield:114,async:118,await:119,of:135,"{":15,"}":16,"(":17,")":18,"[":19,"]":20,".":21,"...":22,";":23,",":24,"<":25,">":27,"<=":28,">=":29,"==":30,"!=":31,"===":32,"!==":33,"=>":34,"+":35,"-":36,"**":38,"*":37,"/":39,"%":40,"++":41,"--":42,"<<":43,"</":26,">>":44,">>>":45,"&":46,"|":47,"^":48,"!":49,"~":50,"&&":51,"||":52,"?":53,":":54,"=":56,"+=":57,"-=":58,"*=":59,"**=":60,"/=":61,"%=":62,"<<=":63,">>=":64,">>>=":65,"&=":66,"|=":67,"^=":68,"@":55},k=[170,170,181,181,186,186,192,214,216,246,248,543,546,563,592,685,688,696,699,705,720,721,736,740,750,750,890,890,902,902,904,906,908,908,910,929,931,974,976,983,986,1011,1024,1153,1164,1220,1223,1224,1227,1228,1232,1269,1272,1273,1329,1366,1369,1369,1377,1415,1488,1514,1520,1522,1569,1594,1600,1610,1649,1747,1749,1749,1765,1766,1786,1788,1808,1808,1810,1836,1920,1957,2309,2361,2365,2365,2384,2384,2392,2401,2437,2444,2447,2448,2451,2472,2474,2480,2482,2482,2486,2489,2524,2525,2527,2529,2544,2545,2565,2570,2575,2576,2579,2600,2602,2608,2610,2611,2613,2614,2616,2617,2649,2652,2654,2654,2674,2676,2693,2699,2701,2701,2703,2705,2707,2728,2730,2736,2738,2739,2741,2745,2749,2749,2768,2768,2784,2784,2821,2828,2831,2832,2835,2856,2858,2864,2866,2867,2870,2873,2877,2877,2908,2909,2911,2913,2949,2954,2958,2960,2962,2965,2969,2970,2972,2972,2974,2975,2979,2980,2984,2986,2990,2997,2999,3001,3077,3084,3086,3088,3090,3112,3114,3123,3125,3129,3168,3169,3205,3212,3214,3216,3218,3240,3242,3251,3253,3257,3294,3294,3296,3297,3333,3340,3342,3344,3346,3368,3370,3385,3424,3425,3461,3478,3482,3505,3507,3515,3517,3517,3520,3526,3585,3632,3634,3635,3648,3654,3713,3714,3716,3716,3719,3720,3722,3722,3725,3725,3732,3735,3737,3743,3745,3747,3749,3749,3751,3751,3754,3755,3757,3760,3762,3763,3773,3773,3776,3780,3782,3782,3804,3805,3840,3840,3904,3911,3913,3946,3976,3979,4096,4129,4131,4135,4137,4138,4176,4181,4256,4293,4304,4342,4352,4441,4447,4514,4520,4601,4608,4614,4616,4678,4680,4680,4682,4685,4688,4694,4696,4696,4698,4701,4704,4742,4744,4744,4746,4749,4752,4782,4784,4784,4786,4789,4792,4798,4800,4800,4802,4805,4808,4814,4816,4822,4824,4846,4848,4878,4880,4880,4882,4885,4888,4894,4896,4934,4936,4954,5024,5108,5121,5740,5743,5750,5761,5786,5792,5866,6016,6067,6176,6263,6272,6312,7680,7835,7840,7929,7936,7957,7960,7965,7968,8005,8008,8013,8016,8023,8025,8025,8027,8027,8029,8029,8031,8061,8064,8116,8118,8124,8126,8126,8130,8132,8134,8140,8144,8147,8150,8155,8160,8172,8178,8180,8182,8188,8319,8319,8450,8450,8455,8455,8458,8467,8469,8469,8473,8477,8484,8484,8486,8486,8488,8488,8490,8493,8495,8497,8499,8505,8544,8579,12293,12295,12321,12329,12337,12341,12344,12346,12353,12436,12445,12446,12449,12538,12540,12542,12549,12588,12593,12686,12704,12727,13312,19893,19968,40869,40960,42124,44032,55203,63744,64045,64256,64262,64275,64279,64285,64285,64287,64296,64298,64310,64312,64316,64318,64318,64320,64321,64323,64324,64326,64433,64467,64829,64848,64911,64914,64967,65008,65019,65136,65138,65140,65140,65142,65276,65313,65338,65345,65370,65382,65470,65474,65479,65482,65487,65490,65495,65498,65500],b=[170,170,181,181,186,186,192,214,216,246,248,543,546,563,592,685,688,696,699,705,720,721,736,740,750,750,768,846,864,866,890,890,902,902,904,906,908,908,910,929,931,974,976,983,986,1011,1024,1153,1155,1158,1164,1220,1223,1224,1227,1228,1232,1269,1272,1273,1329,1366,1369,1369,1377,1415,1425,1441,1443,1465,1467,1469,1471,1471,1473,1474,1476,1476,1488,1514,1520,1522,1569,1594,1600,1621,1632,1641,1648,1747,1749,1756,1759,1768,1770,1773,1776,1788,1808,1836,1840,1866,1920,1968,2305,2307,2309,2361,2364,2381,2384,2388,2392,2403,2406,2415,2433,2435,2437,2444,2447,2448,2451,2472,2474,2480,2482,2482,2486,2489,2492,2492,2494,2500,2503,2504,2507,2509,2519,2519,2524,2525,2527,2531,2534,2545,2562,2562,2565,2570,2575,2576,2579,2600,2602,2608,2610,2611,2613,2614,2616,2617,2620,2620,2622,2626,2631,2632,2635,2637,2649,2652,2654,2654,2662,2676,2689,2691,2693,2699,2701,2701,2703,2705,2707,2728,2730,2736,2738,2739,2741,2745,2748,2757,2759,2761,2763,2765,2768,2768,2784,2784,2790,2799,2817,2819,2821,2828,2831,2832,2835,2856,2858,2864,2866,2867,2870,2873,2876,2883,2887,2888,2891,2893,2902,2903,2908,2909,2911,2913,2918,2927,2946,2947,2949,2954,2958,2960,2962,2965,2969,2970,2972,2972,2974,2975,2979,2980,2984,2986,2990,2997,2999,3001,3006,3010,3014,3016,3018,3021,3031,3031,3047,3055,3073,3075,3077,3084,3086,3088,3090,3112,3114,3123,3125,3129,3134,3140,3142,3144,3146,3149,3157,3158,3168,3169,3174,3183,3202,3203,3205,3212,3214,3216,3218,3240,3242,3251,3253,3257,3262,3268,3270,3272,3274,3277,3285,3286,3294,3294,3296,3297,3302,3311,3330,3331,3333,3340,3342,3344,3346,3368,3370,3385,3390,3395,3398,3400,3402,3405,3415,3415,3424,3425,3430,3439,3458,3459,3461,3478,3482,3505,3507,3515,3517,3517,3520,3526,3530,3530,3535,3540,3542,3542,3544,3551,3570,3571,3585,3642,3648,3662,3664,3673,3713,3714,3716,3716,3719,3720,3722,3722,3725,3725,3732,3735,3737,3743,3745,3747,3749,3749,3751,3751,3754,3755,3757,3769,3771,3773,3776,3780,3782,3782,3784,3789,3792,3801,3804,3805,3840,3840,3864,3865,3872,3881,3893,3893,3895,3895,3897,3897,3902,3911,3913,3946,3953,3972,3974,3979,3984,3991,3993,4028,4038,4038,4096,4129,4131,4135,4137,4138,4140,4146,4150,4153,4160,4169,4176,4185,4256,4293,4304,4342,4352,4441,4447,4514,4520,4601,4608,4614,4616,4678,4680,4680,4682,4685,4688,4694,4696,4696,4698,4701,4704,4742,4744,4744,4746,4749,4752,4782,4784,4784,4786,4789,4792,4798,4800,4800,4802,4805,4808,4814,4816,4822,4824,4846,4848,4878,4880,4880,4882,4885,4888,4894,4896,4934,4936,4954,4969,4977,5024,5108,5121,5740,5743,5750,5761,5786,5792,5866,6016,6099,6112,6121,6160,6169,6176,6263,6272,6313,7680,7835,7840,7929,7936,7957,7960,7965,7968,8005,8008,8013,8016,8023,8025,8025,8027,8027,8029,8029,8031,8061,8064,8116,8118,8124,8126,8126,8130,8132,8134,8140,8144,8147,8150,8155,8160,8172,8178,8180,8182,8188,8255,8256,8319,8319,8400,8412,8417,8417,8450,8450,8455,8455,8458,8467,8469,8469,8473,8477,8484,8484,8486,8486,8488,8488,8490,8493,8495,8497,8499,8505,8544,8579,12293,12295,12321,12335,12337,12341,12344,12346,12353,12436,12441,12442,12445,12446,12449,12542,12549,12588,12593,12686,12704,12727,13312,19893,19968,40869,40960,42124,44032,55203,63744,64045,64256,64262,64275,64279,64285,64296,64298,64310,64312,64316,64318,64318,64320,64321,64323,64324,64326,64433,64467,64829,64848,64911,64914,64967,65008,65019,65056,65059,65075,65076,65101,65103,65136,65138,65140,65140,65142,65276,65296,65305,65313,65338,65343,65343,65345,65370,65381,65470,65474,65479,65482,65487,65490,65495,65498,65500],x=[170,170,181,181,186,186,192,214,216,246,248,705,710,721,736,740,748,748,750,750,880,884,886,887,890,893,902,902,904,906,908,908,910,929,931,1013,1015,1153,1162,1319,1329,1366,1369,1369,1377,1415,1488,1514,1520,1522,1568,1610,1646,1647,1649,1747,1749,1749,1765,1766,1774,1775,1786,1788,1791,1791,1808,1808,1810,1839,1869,1957,1969,1969,1994,2026,2036,2037,2042,2042,2048,2069,2074,2074,2084,2084,2088,2088,2112,2136,2208,2208,2210,2220,2308,2361,2365,2365,2384,2384,2392,2401,2417,2423,2425,2431,2437,2444,2447,2448,2451,2472,2474,2480,2482,2482,2486,2489,2493,2493,2510,2510,2524,2525,2527,2529,2544,2545,2565,2570,2575,2576,2579,2600,2602,2608,2610,2611,2613,2614,2616,2617,2649,2652,2654,2654,2674,2676,2693,2701,2703,2705,2707,2728,2730,2736,2738,2739,2741,2745,2749,2749,2768,2768,2784,2785,2821,2828,2831,2832,2835,2856,2858,2864,2866,2867,2869,2873,2877,2877,2908,2909,2911,2913,2929,2929,2947,2947,2949,2954,2958,2960,2962,2965,2969,2970,2972,2972,2974,2975,2979,2980,2984,2986,2990,3001,3024,3024,3077,3084,3086,3088,3090,3112,3114,3123,3125,3129,3133,3133,3160,3161,3168,3169,3205,3212,3214,3216,3218,3240,3242,3251,3253,3257,3261,3261,3294,3294,3296,3297,3313,3314,3333,3340,3342,3344,3346,3386,3389,3389,3406,3406,3424,3425,3450,3455,3461,3478,3482,3505,3507,3515,3517,3517,3520,3526,3585,3632,3634,3635,3648,3654,3713,3714,3716,3716,3719,3720,3722,3722,3725,3725,3732,3735,3737,3743,3745,3747,3749,3749,3751,3751,3754,3755,3757,3760,3762,3763,3773,3773,3776,3780,3782,3782,3804,3807,3840,3840,3904,3911,3913,3948,3976,3980,4096,4138,4159,4159,4176,4181,4186,4189,4193,4193,4197,4198,4206,4208,4213,4225,4238,4238,4256,4293,4295,4295,4301,4301,4304,4346,4348,4680,4682,4685,4688,4694,4696,4696,4698,4701,4704,4744,4746,4749,4752,4784,4786,4789,4792,4798,4800,4800,4802,4805,4808,4822,4824,4880,4882,4885,4888,4954,4992,5007,5024,5108,5121,5740,5743,5759,5761,5786,5792,5866,5870,5872,5888,5900,5902,5905,5920,5937,5952,5969,5984,5996,5998,6e3,6016,6067,6103,6103,6108,6108,6176,6263,6272,6312,6314,6314,6320,6389,6400,6428,6480,6509,6512,6516,6528,6571,6593,6599,6656,6678,6688,6740,6823,6823,6917,6963,6981,6987,7043,7072,7086,7087,7098,7141,7168,7203,7245,7247,7258,7293,7401,7404,7406,7409,7413,7414,7424,7615,7680,7957,7960,7965,7968,8005,8008,8013,8016,8023,8025,8025,8027,8027,8029,8029,8031,8061,8064,8116,8118,8124,8126,8126,8130,8132,8134,8140,8144,8147,8150,8155,8160,8172,8178,8180,8182,8188,8305,8305,8319,8319,8336,8348,8450,8450,8455,8455,8458,8467,8469,8469,8473,8477,8484,8484,8486,8486,8488,8488,8490,8493,8495,8505,8508,8511,8517,8521,8526,8526,8544,8584,11264,11310,11312,11358,11360,11492,11499,11502,11506,11507,11520,11557,11559,11559,11565,11565,11568,11623,11631,11631,11648,11670,11680,11686,11688,11694,11696,11702,11704,11710,11712,11718,11720,11726,11728,11734,11736,11742,11823,11823,12293,12295,12321,12329,12337,12341,12344,12348,12353,12438,12445,12447,12449,12538,12540,12543,12549,12589,12593,12686,12704,12730,12784,12799,13312,19893,19968,40908,40960,42124,42192,42237,42240,42508,42512,42527,42538,42539,42560,42606,42623,42647,42656,42735,42775,42783,42786,42888,42891,42894,42896,42899,42912,42922,43e3,43009,43011,43013,43015,43018,43020,43042,43072,43123,43138,43187,43250,43255,43259,43259,43274,43301,43312,43334,43360,43388,43396,43442,43471,43471,43520,43560,43584,43586,43588,43595,43616,43638,43642,43642,43648,43695,43697,43697,43701,43702,43705,43709,43712,43712,43714,43714,43739,43741,43744,43754,43762,43764,43777,43782,43785,43790,43793,43798,43808,43814,43816,43822,43968,44002,44032,55203,55216,55238,55243,55291,63744,64109,64112,64217,64256,64262,64275,64279,64285,64285,64287,64296,64298,64310,64312,64316,64318,64318,64320,64321,64323,64324,64326,64433,64467,64829,64848,64911,64914,64967,65008,65019,65136,65140,65142,65276,65313,65338,65345,65370,65382,65470,65474,65479,65482,65487,65490,65495,65498,65500],C=[170,170,181,181,186,186,192,214,216,246,248,705,710,721,736,740,748,748,750,750,768,884,886,887,890,893,902,902,904,906,908,908,910,929,931,1013,1015,1153,1155,1159,1162,1319,1329,1366,1369,1369,1377,1415,1425,1469,1471,1471,1473,1474,1476,1477,1479,1479,1488,1514,1520,1522,1552,1562,1568,1641,1646,1747,1749,1756,1759,1768,1770,1788,1791,1791,1808,1866,1869,1969,1984,2037,2042,2042,2048,2093,2112,2139,2208,2208,2210,2220,2276,2302,2304,2403,2406,2415,2417,2423,2425,2431,2433,2435,2437,2444,2447,2448,2451,2472,2474,2480,2482,2482,2486,2489,2492,2500,2503,2504,2507,2510,2519,2519,2524,2525,2527,2531,2534,2545,2561,2563,2565,2570,2575,2576,2579,2600,2602,2608,2610,2611,2613,2614,2616,2617,2620,2620,2622,2626,2631,2632,2635,2637,2641,2641,2649,2652,2654,2654,2662,2677,2689,2691,2693,2701,2703,2705,2707,2728,2730,2736,2738,2739,2741,2745,2748,2757,2759,2761,2763,2765,2768,2768,2784,2787,2790,2799,2817,2819,2821,2828,2831,2832,2835,2856,2858,2864,2866,2867,2869,2873,2876,2884,2887,2888,2891,2893,2902,2903,2908,2909,2911,2915,2918,2927,2929,2929,2946,2947,2949,2954,2958,2960,2962,2965,2969,2970,2972,2972,2974,2975,2979,2980,2984,2986,2990,3001,3006,3010,3014,3016,3018,3021,3024,3024,3031,3031,3046,3055,3073,3075,3077,3084,3086,3088,3090,3112,3114,3123,3125,3129,3133,3140,3142,3144,3146,3149,3157,3158,3160,3161,3168,3171,3174,3183,3202,3203,3205,3212,3214,3216,3218,3240,3242,3251,3253,3257,3260,3268,3270,3272,3274,3277,3285,3286,3294,3294,3296,3299,3302,3311,3313,3314,3330,3331,3333,3340,3342,3344,3346,3386,3389,3396,3398,3400,3402,3406,3415,3415,3424,3427,3430,3439,3450,3455,3458,3459,3461,3478,3482,3505,3507,3515,3517,3517,3520,3526,3530,3530,3535,3540,3542,3542,3544,3551,3570,3571,3585,3642,3648,3662,3664,3673,3713,3714,3716,3716,3719,3720,3722,3722,3725,3725,3732,3735,3737,3743,3745,3747,3749,3749,3751,3751,3754,3755,3757,3769,3771,3773,3776,3780,3782,3782,3784,3789,3792,3801,3804,3807,3840,3840,3864,3865,3872,3881,3893,3893,3895,3895,3897,3897,3902,3911,3913,3948,3953,3972,3974,3991,3993,4028,4038,4038,4096,4169,4176,4253,4256,4293,4295,4295,4301,4301,4304,4346,4348,4680,4682,4685,4688,4694,4696,4696,4698,4701,4704,4744,4746,4749,4752,4784,4786,4789,4792,4798,4800,4800,4802,4805,4808,4822,4824,4880,4882,4885,4888,4954,4957,4959,4992,5007,5024,5108,5121,5740,5743,5759,5761,5786,5792,5866,5870,5872,5888,5900,5902,5908,5920,5940,5952,5971,5984,5996,5998,6e3,6002,6003,6016,6099,6103,6103,6108,6109,6112,6121,6155,6157,6160,6169,6176,6263,6272,6314,6320,6389,6400,6428,6432,6443,6448,6459,6470,6509,6512,6516,6528,6571,6576,6601,6608,6617,6656,6683,6688,6750,6752,6780,6783,6793,6800,6809,6823,6823,6912,6987,6992,7001,7019,7027,7040,7155,7168,7223,7232,7241,7245,7293,7376,7378,7380,7414,7424,7654,7676,7957,7960,7965,7968,8005,8008,8013,8016,8023,8025,8025,8027,8027,8029,8029,8031,8061,8064,8116,8118,8124,8126,8126,8130,8132,8134,8140,8144,8147,8150,8155,8160,8172,8178,8180,8182,8188,8204,8205,8255,8256,8276,8276,8305,8305,8319,8319,8336,8348,8400,8412,8417,8417,8421,8432,8450,8450,8455,8455,8458,8467,8469,8469,8473,8477,8484,8484,8486,8486,8488,8488,8490,8493,8495,8505,8508,8511,8517,8521,8526,8526,8544,8584,11264,11310,11312,11358,11360,11492,11499,11507,11520,11557,11559,11559,11565,11565,11568,11623,11631,11631,11647,11670,11680,11686,11688,11694,11696,11702,11704,11710,11712,11718,11720,11726,11728,11734,11736,11742,11744,11775,11823,11823,12293,12295,12321,12335,12337,12341,12344,12348,12353,12438,12441,12442,12445,12447,12449,12538,12540,12543,12549,12589,12593,12686,12704,12730,12784,12799,13312,19893,19968,40908,40960,42124,42192,42237,42240,42508,42512,42539,42560,42607,42612,42621,42623,42647,42655,42737,42775,42783,42786,42888,42891,42894,42896,42899,42912,42922,43e3,43047,43072,43123,43136,43204,43216,43225,43232,43255,43259,43259,43264,43309,43312,43347,43360,43388,43392,43456,43471,43481,43520,43574,43584,43597,43600,43609,43616,43638,43642,43643,43648,43714,43739,43741,43744,43759,43762,43766,43777,43782,43785,43790,43793,43798,43808,43814,43816,43822,43968,44010,44012,44013,44016,44025,44032,55203,55216,55238,55243,55291,63744,64109,64112,64217,64256,64262,64275,64279,64285,64296,64298,64310,64312,64316,64318,64318,64320,64321,64323,64324,64326,64433,64467,64829,64848,64911,64914,64967,65008,65019,65024,65039,65056,65062,65075,65076,65101,65103,65136,65140,65142,65276,65296,65305,65313,65338,65343,65343,65345,65370,65382,65470,65474,65479,65482,65487,65490,65495,65498,65500]
e.isUnicodeIdentifierStart=r
var D=function(e){var t=[]
for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n)
return t}(v)
e.tokenToString=function(e){return D[e]},e.stringToToken=function(e){return v[e]},e.computeLineStarts=a,e.getPositionOfLineAndCharacter=function(e,t,n){return i(o(e),t,n)},e.computePositionOfLineAndCharacter=i,e.getLineStarts=o,e.computeLineAndCharacterOfPosition=s,e.getLineAndCharacterOfPosition=function(e,t){return s(o(e),t)}
var S=Object.prototype.hasOwnProperty
e.isWhiteSpace=c,e.isLineBreak=_,e.isOctalDigit=l,e.couldStartTrivia=function(e,t){var n=e.charCodeAt(t)
switch(n){case 13:case 10:case 9:case 11:case 12:case 32:case 47:case 60:case 61:case 62:return!0
case 35:return 0===t
default:return n>127}},e.skipTrivia=function(e,t,n){if(!(t>=0))return t
for(;;){var r=e.charCodeAt(t)
switch(r){case 13:10===e.charCodeAt(t+1)&&t++
case 10:if(t++,n)return t
continue
case 9:case 11:case 12:case 32:t++
continue
case 47:if(47===e.charCodeAt(t+1)){for(t+=2;t<e.length&&!_(e.charCodeAt(t));)t++
continue}if(42===e.charCodeAt(t+1)){for(t+=2;t<e.length;){if(42===e.charCodeAt(t)&&47===e.charCodeAt(t+1)){t+=2
break}t++}continue}break
case 60:case 61:case 62:if(d(e,t)){t=p(e,t)
continue}break
case 35:if(0===t&&f(e,t)){t=m(e,t)
continue}break
default:if(r>127&&(c(r)||_(r))){t++
continue}}return t}}
var T="<<<<<<<".length,E=/^#!.*/
e.getLeadingCommentRanges=function(e,t){return g(e,t,!1)},e.getTrailingCommentRanges=function(e,t){return g(e,t,!0)},e.getShebang=function(e){return E.test(e)?E.exec(e)[0]:void 0},e.isIdentifierStart=y,e.isIdentifierPart=h,e.isIdentifier=function(e,t){if(!y(e.charCodeAt(0),t))return!1
for(var n=1,r=e.length;r>n;n++)if(!h(e.charCodeAt(n),t))return!1
return!0},e.createScanner=function(n,r,a,i,o,s,g){function k(e,t){o&&o(e,t||0)}function b(){for(var t=z;u(i.charCodeAt(z));)z++
if(46===i.charCodeAt(z))for(z++;u(i.charCodeAt(z));)z++
var n=z
if(69===i.charCodeAt(z)||101===i.charCodeAt(z))if(z++,43!==i.charCodeAt(z)&&45!==i.charCodeAt(z)||z++,u(i.charCodeAt(z))){for(z++;u(i.charCodeAt(z));)z++
n=z}else k(e.Diagnostics.Digit_expected)
return""+ +i.substring(t,n)}function x(){for(var e=z;l(i.charCodeAt(z));)z++
return+i.substring(e,z)}function C(e){return T(e,!1)}function D(e){return T(e,!0)}function T(e,t){for(var n=0,r=0;e>n||t;){var a=i.charCodeAt(z)
if(a>=48&&57>=a)r=16*r+a-48
else if(a>=65&&70>=a)r=16*r+a-65+10
else{if(!(a>=97&&102>=a))break
r=16*r+a-97+10}z++,n++}return e>n&&(r=-1),r}function E(){for(var t=i.charCodeAt(z),n="",r=++z;;){if(z>=K){n+=i.substring(r,z),H=!0,k(e.Diagnostics.Unterminated_string_literal)
break}var a=i.charCodeAt(z)
if(a===t){n+=i.substring(r,z),z++
break}if(92!==a){if(_(a)){n+=i.substring(r,z),H=!0,k(e.Diagnostics.Unterminated_string_literal)
break}z++}else n+=i.substring(r,z),n+=A(),r=z}return n}function w(){for(var t,n=96===i.charCodeAt(z),r=++z,a="";;){if(z>=K){a+=i.substring(r,z),H=!0,k(e.Diagnostics.Unterminated_template_literal),t=n?11:14
break}var o=i.charCodeAt(z)
if(96===o){a+=i.substring(r,z),z++,t=n?11:14
break}if(36===o&&K>z+1&&123===i.charCodeAt(z+1)){a+=i.substring(r,z),z+=2,t=n?12:13
break}92!==o?13!==o?z++:(a+=i.substring(r,z),K>++z&&10===i.charCodeAt(z)&&z++,a+="\n",r=z):(a+=i.substring(r,z),a+=A(),r=z)}return e.Debug.assert(void 0!==t),q=a,t}function A(){if(++z>=K)return k(e.Diagnostics.Unexpected_end_of_text),""
var t=i.charCodeAt(z)
switch(z++,t){case 48:return"\0"
case 98:return"\b"
case 116:return"\t"
case 110:return"\n"
case 118:return"\v"
case 102:return"\f"
case 114:return"\r"
case 39:return"'"
case 34:return'"'
case 117:return K>z&&123===i.charCodeAt(z)?(V=!0,z++,function(){var t=D(1),n=!1
return 0>t?(k(e.Diagnostics.Hexadecimal_digit_expected),n=!0):t>1114111&&(k(e.Diagnostics.An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive),n=!0),z>=K?(k(e.Diagnostics.Unexpected_end_of_text),n=!0):125===i.charCodeAt(z)?z++:(k(e.Diagnostics.Unterminated_Unicode_escape_sequence),n=!0),n?"":function(t){if(e.Debug.assert(t>=0&&1114111>=t),65535>=t)return String.fromCharCode(t)
var n=Math.floor((t-65536)/1024)+55296,r=(t-65536)%1024+56320
return String.fromCharCode(n,r)}(t)}()):P(4)
case 120:return P(2)
case 13:K>z&&10===i.charCodeAt(z)&&z++
case 10:case 8232:case 8233:return""
default:return String.fromCharCode(t)}}function P(t){var n=C(t)
return n>=0?String.fromCharCode(n):(k(e.Diagnostics.Hexadecimal_digit_expected),"")}function N(){if(K>z+5&&117===i.charCodeAt(z+1)){var e=z
z+=2
var t=C(4)
return z=e,t}return-1}function O(){for(var e="",t=z;K>z;){var r=i.charCodeAt(z)
if(h(r,n))z++
else{if(92!==r)break
if(!((r=N())>=0&&h(r,n)))break
e+=i.substring(t,z),e+=String.fromCharCode(r),t=z+=6}}return e+i.substring(t,z)}function R(){var e=q.length
if(e>=2&&11>=e){var t=q.charCodeAt(0)
if(t>=97&&122>=t&&S.call(v,q))return U=v[q]}return U=69}function I(t){e.Debug.assert(2!==t||8!==t,"Expected either base 2 or base 8")
for(var n=0,r=0;;){var a=i.charCodeAt(z),o=a-48
if(!u(a)||o>=t)break
n=n*t+o,z++,r++}return 0===r?-1:n}function F(){if(j=J=z,z>=K)return U=1
var e=i.charCodeAt(z)
if(60===e)return 47===i.charCodeAt(z+1)?(z+=2,U=26):(z++,U=25)
if(123===e)return z++,U=15
for(;K>z&&(z++,123!==(e=i.charCodeAt(z))&&60!==e););return U=239}function L(e,t){var n=z,r=j,a=J,i=U,o=q,s=W,c=e()
return c&&!t||(z=n,j=r,J=a,U=i,q=o,W=s),c}function M(e,t,n){i=e||"",K=void 0===n?i.length:t+n,B(t||0)}function B(t){e.Debug.assert(t>=0),z=t,j=t,J=t,U=0,W=!1,q=void 0,V=!1,H=!1}var z,K,j,J,U,q,W,V,H
return void 0===a&&(a=0),M(i,s,g),{getStartPos:function(){return j},getTextPos:function(){return z},getToken:function(){return U},getTokenPos:function(){return J},getTokenText:function(){return i.substring(J,z)},getTokenValue:function(){return q},hasExtendedUnicodeEscape:function(){return V},hasPrecedingLineBreak:function(){return W},isIdentifier:function(){return 69===U||U>105},isReservedWord:function(){return U>=70&&105>=U},isUnterminated:function(){return H},reScanGreaterToken:function(){if(27===U){if(62===i.charCodeAt(z))return 62===i.charCodeAt(z+1)?61===i.charCodeAt(z+2)?(z+=3,U=65):(z+=2,U=45):61===i.charCodeAt(z+1)?(z+=2,U=64):(z++,U=44)
if(61===i.charCodeAt(z))return z++,U=29}return U},reScanSlashToken:function(){if(39===U||61===U){for(var t=J+1,r=!1,a=!1;;){if(t>=K){H=!0,k(e.Diagnostics.Unterminated_regular_expression_literal)
break}var o=i.charCodeAt(t)
if(_(o)){H=!0,k(e.Diagnostics.Unterminated_regular_expression_literal)
break}if(r)r=!1
else{if(47===o&&!a){t++
break}91===o?a=!0:92===o?r=!0:93===o&&(a=!1)}t++}for(;K>t&&h(i.charCodeAt(t),n);)t++
z=t,q=i.substring(J,z),U=10}return U},reScanTemplateToken:function(){return e.Debug.assert(16===U,"'reScanTemplateToken' should only be called on a '}'"),z=J,U=w()},scanJsxIdentifier:function(){if(t(U)){for(var e=z;K>z;){var r=i.charCodeAt(z)
if(45!==r&&(e===z?!y(r,n):!h(r,n)))break
z++}q+=i.substr(e,z-e)}return U},reScanJsxToken:function(){return z=J=j,U=F()},scanJsxToken:F,scanJSDocToken:function(){if(z>=K)return U=1
j=z
for(var e=i.charCodeAt(z);K>z&&c(e=i.charCodeAt(z));)z++
switch(J=z,e){case 64:return z+=1,U=55
case 10:case 13:return z+=1,U=4
case 42:return z+=1,U=37
case 123:return z+=1,U=15
case 125:return z+=1,U=16
case 91:return z+=1,U=19
case 93:return z+=1,U=20
case 61:return z+=1,U=56
case 44:return z+=1,U=24}if(y(e,2)){for(z++;h(i.charCodeAt(z),2)&&K>z;)z++
return U=69}return z+=1,U=0},scan:function(){for(j=z,V=!1,W=!1,H=!1;;){if(J=z,z>=K)return U=1
var t=i.charCodeAt(z)
if(35===t&&0===z&&f(i,z)){if(z=m(i,z),r)continue
return U=6}switch(t){case 10:case 13:if(W=!0,r){z++
continue}return 13===t&&K>z+1&&10===i.charCodeAt(z+1)?z+=2:z++,U=4
case 9:case 11:case 12:case 32:if(r){z++
continue}for(;K>z&&c(i.charCodeAt(z));)z++
return U=5
case 33:return 61===i.charCodeAt(z+1)?61===i.charCodeAt(z+2)?(z+=3,U=33):(z+=2,U=31):(z++,U=49)
case 34:case 39:return q=E(),U=9
case 96:return U=w()
case 37:return 61===i.charCodeAt(z+1)?(z+=2,U=62):(z++,U=40)
case 38:return 38===i.charCodeAt(z+1)?(z+=2,U=51):61===i.charCodeAt(z+1)?(z+=2,U=66):(z++,U=46)
case 40:return z++,U=17
case 41:return z++,U=18
case 42:return 61===i.charCodeAt(z+1)?(z+=2,U=59):42===i.charCodeAt(z+1)?61===i.charCodeAt(z+2)?(z+=3,U=60):(z+=2,U=38):(z++,U=37)
case 43:return 43===i.charCodeAt(z+1)?(z+=2,U=41):61===i.charCodeAt(z+1)?(z+=2,U=57):(z++,U=35)
case 44:return z++,U=24
case 45:return 45===i.charCodeAt(z+1)?(z+=2,U=42):61===i.charCodeAt(z+1)?(z+=2,U=58):(z++,U=36)
case 46:return u(i.charCodeAt(z+1))?(q=b(),U=8):46===i.charCodeAt(z+1)&&46===i.charCodeAt(z+2)?(z+=3,U=22):(z++,U=21)
case 47:if(47===i.charCodeAt(z+1)){for(z+=2;K>z&&!_(i.charCodeAt(z));)z++
if(r)continue
return U=2}if(42===i.charCodeAt(z+1)){z+=2
for(var o=!1;K>z;){var s=i.charCodeAt(z)
if(42===s&&47===i.charCodeAt(z+1)){z+=2,o=!0
break}_(s)&&(W=!0),z++}if(o||k(e.Diagnostics.Asterisk_Slash_expected),r)continue
return H=!o,U=3}return 61===i.charCodeAt(z+1)?(z+=2,U=61):(z++,U=39)
case 48:var g
if(K>z+2&&(88===i.charCodeAt(z+1)||120===i.charCodeAt(z+1)))return z+=2,0>(g=D(1))&&(k(e.Diagnostics.Hexadecimal_digit_expected),g=0),q=""+g,U=8
if(K>z+2&&(66===i.charCodeAt(z+1)||98===i.charCodeAt(z+1)))return z+=2,0>(g=I(2))&&(k(e.Diagnostics.Binary_digit_expected),g=0),q=""+g,U=8
if(K>z+2&&(79===i.charCodeAt(z+1)||111===i.charCodeAt(z+1)))return z+=2,0>(g=I(8))&&(k(e.Diagnostics.Octal_digit_expected),g=0),q=""+g,U=8
if(K>z+1&&l(i.charCodeAt(z+1)))return q=""+x(),U=8
case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return q=b(),U=8
case 58:return z++,U=54
case 59:return z++,U=23
case 60:if(d(i,z)){if(z=p(i,z,k),r)continue
return U=7}return 60===i.charCodeAt(z+1)?61===i.charCodeAt(z+2)?(z+=3,U=63):(z+=2,U=43):61===i.charCodeAt(z+1)?(z+=2,U=28):1===a&&47===i.charCodeAt(z+1)&&42!==i.charCodeAt(z+2)?(z+=2,U=26):(z++,U=25)
case 61:if(d(i,z)){if(z=p(i,z,k),r)continue
return U=7}return 61===i.charCodeAt(z+1)?61===i.charCodeAt(z+2)?(z+=3,U=32):(z+=2,U=30):62===i.charCodeAt(z+1)?(z+=2,U=34):(z++,U=56)
case 62:if(d(i,z)){if(z=p(i,z,k),r)continue
return U=7}return z++,U=27
case 63:return z++,U=53
case 91:return z++,U=19
case 93:return z++,U=20
case 94:return 61===i.charCodeAt(z+1)?(z+=2,U=68):(z++,U=48)
case 123:return z++,U=15
case 124:return 124===i.charCodeAt(z+1)?(z+=2,U=52):61===i.charCodeAt(z+1)?(z+=2,U=67):(z++,U=47)
case 125:return z++,U=16
case 126:return z++,U=50
case 64:return z++,U=55
case 92:var v=N()
return v>=0&&y(v,n)?(z+=6,q=String.fromCharCode(v)+O(),U=R()):(k(e.Diagnostics.Invalid_character),z++,U=0)
default:if(y(t,n)){for(z++;K>z&&h(t=i.charCodeAt(z),n);)z++
return q=i.substring(J,z),92===t&&(q+=O()),U=R()}if(c(t)){z++
continue}if(_(t)){W=!0,z++
continue}return k(e.Diagnostics.Invalid_character),z++,U=0}}},setText:M,setScriptTarget:function(e){n=e},setLanguageVariant:function(e){a=e},setOnError:function(e){o=e},setTextPos:B,tryScan:function(e){return L(e,!1)},lookAhead:function(e){return L(e,!0)},scanRange:function(e,t,n){var r=K,a=z,o=j,s=J,c=U,_=W,u=q,l=V,d=H
M(i,e,t)
var p=n()
return K=r,z=a,j=o,J=s,U=c,W=_,q=u,V=l,H=d,p}}}}(ts||(ts={})),function(e){function t(e){return e.end-e.pos}function n(t,n){return t.resolvedModules&&e.hasProperty(t.resolvedModules,n)}function r(e){return a(e),0!=(64&e.parserContextFlags)}function a(t){128&t.parserContextFlags||((0!=(16&t.parserContextFlags)||e.forEachChild(t,r))&&(t.parserContextFlags|=64),t.parserContextFlags|=128)}function i(e){for(;e&&251!==e.kind;)e=e.parent
return e}function o(e){return!e||e.pos===e.end&&e.pos>=0&&1!==e.kind}function s(e){return!o(e)}function c(t,n){return o(t)?t.pos:e.skipTrivia((n||i(t)).text,t.pos)}function _(t,n,r){if(void 0===r&&(r=!1),o(n))return""
var a=t.text
return a.substring(r?n.pos:e.skipTrivia(a,n.pos),n.end)}function u(t,n){return o(n)?"":t.substring(e.skipTrivia(t,n.pos),n.end)}function l(e,t){return void 0===t&&(t=!1),_(i(e),e,t)}function d(e){return e&&221===e.kind&&(9===e.name.kind||p(e))}function p(e){return!!(2097152&e.flags)}function f(e){return e&&214===e.kind&&e.parent&&247===e.parent.kind}function m(t,n){var r=e.createScanner(t.languageVersion,!0,t.languageVariant,t.text,void 0,n)
r.scan()
var a=r.getTokenPos()
return e.createTextSpanFromBounds(a,r.getTextPos())}function g(t,n){var r=n
switch(n.kind){case 251:var a=e.skipTrivia(t.text,0,!1)
return a===t.text.length?e.createTextSpan(0,0):m(t,a)
case 214:case 166:case 217:case 189:case 218:case 221:case 220:case 250:case 216:case 176:case 144:case 219:r=n.name}if(void 0===r)return m(t,n.pos)
var i=o(r)?r.pos:e.skipTrivia(t.text,r.pos)
return e.createTextSpanFromBounds(i,r.end)}function y(e){return void 0!==e.externalModuleIndicator}function h(e){return 0!=(4096&e.flags)}function v(e){var t=(e=function(e){for(;e&&(166===e.kind||B(e));)e=e.parent
return e}(e)).flags
return 214===e.kind&&(e=e.parent),e&&215===e.kind&&(t|=e.flags,e=e.parent),e&&196===e.kind&&(t|=e.flags),t}function k(e){return!!(16384&v(e))}function b(t,n){return e.getLeadingCommentRanges(n,t.pos)}function x(t,n){var r=139===t.kind||138===t.kind?e.concatenate(e.getTrailingCommentRanges(n,t.pos),e.getLeadingCommentRanges(n,t.pos)):b(t,n)
return e.filter(r,function(e){return 42===n.charCodeAt(e.pos+1)&&42===n.charCodeAt(e.pos+2)&&47!==n.charCodeAt(e.pos+3)})}function C(t){if(151<=t.kind&&t.kind<=163)return!0
switch(t.kind){case 117:case 128:case 130:case 120:case 131:return!0
case 103:return 180!==t.parent.kind
case 191:return!de(t)
case 69:136===t.parent.kind&&t.parent.right===t?t=t.parent:169===t.parent.kind&&t.parent.name===t&&(t=t.parent),e.Debug.assert(69===t.kind||136===t.kind||169===t.kind,"'node' was expected to be a qualified name, identifier or property access in 'isTypeNode'.")
case 136:case 169:case 97:var n=t.parent
if(155===n.kind)return!1
if(151<=n.kind&&n.kind<=163)return!0
switch(n.kind){case 191:return!de(n)
case 138:return t===n.constraint
case 142:case 141:case 139:case 214:return t===n.type
case 216:case 176:case 177:case 145:case 144:case 143:case 146:case 147:return t===n.type
case 148:case 149:case 150:case 174:return t===n.type
case 171:case 172:return n.typeArguments&&e.indexOf(n.typeArguments,t)>=0
case 173:return!1}}return!1}function D(e){return e&&(146===e.kind||147===e.kind)}function S(e){return e&&(217===e.kind||189===e.kind)}function T(e){return e&&E(e.kind)}function E(e){switch(e){case 145:case 176:case 216:case 177:case 144:case 143:case 146:case 147:case 148:case 149:case 150:case 153:case 154:return!0}}function w(e){return e&&195===e.kind&&T(e.parent)}function A(e){switch(e.kind){case 217:return!0
case 142:return 217===e.parent.kind
case 146:case 147:case 144:return void 0!==e.body&&217===e.parent.kind
case 139:return void 0!==e.parent.body&&(145===e.parent.kind||144===e.parent.kind||147===e.parent.kind)&&217===e.parent.parent.kind}return!1}function P(e){return 169===e.kind}function N(e){return 224===e.kind&&235===e.moduleReference.kind}function O(e){return R(e)}function R(e){return e&&!!(32&e.parserContextFlags)}function I(e,t,n){if(e){var r=F(e,n)
if(r)for(var a=0,i=r.tags;a<i.length;a++){var o=i[a]
if(o.kind===t)return o}}}function F(e,t){if(e.jsDocComment)return e.jsDocComment
if(t){var n=214===e.parent.kind&&e.parent.initializer===e&&196===e.parent.parent.parent.kind?e.parent.parent.parent:void 0
if(n)return n.jsDocComment
var r=e.parent
if(r&&r.parent&&184===r.kind&&56===r.operatorToken.kind&&198===r.parent.kind)return r.parent.jsDocComment
if(r&&248===r.kind)return r.jsDocComment}}function L(e){if(e.name&&69===e.name.kind){var t=e.name.text,n=F(e.parent,!0)
if(n)for(var r=0,a=n.tags;r<a.length;r++){var i=a[r]
if(270===i.kind){var o=i
if((o.preParameterName||o.postParameterName).text===t)return o}}}}function M(e){if(e){if(32&e.parserContextFlags){if(e.type&&265===e.type.kind)return!0
var t=L(e)
if(t&&t.typeExpression)return 265===t.typeExpression.type.kind}return void 0!==e.dotDotDotToken}return!1}function B(e){return!!e&&(165===e.kind||164===e.kind)}function z(e){switch(e.kind){case 177:case 166:case 217:case 189:case 145:case 220:case 250:case 233:case 216:case 176:case 146:case 226:case 224:case 229:case 218:case 144:case 143:case 221:case 227:case 139:case 248:case 142:case 141:case 147:case 249:case 219:case 138:case 214:return!0}return!1}function K(e){switch(e.kind){case 145:case 142:case 144:case 146:case 147:case 143:case 150:return!0
default:return!1}}function j(e,t){if(e)for(var n=0,r=e;n<r.length;n++){var a=r[n]
if(a.token===t)return a}}function J(e){return 9===e||8===e}function U(e){return e.name&&q(e.name)}function q(e){return 137===e.kind&&!J(e.expression.kind)&&!W(e.expression)}function W(e){return P(e)&&G(e.expression)}function V(e){if(69===e.kind||9===e.kind||8===e.kind)return e.text
if(137===e.kind){var t=e.expression
if(W(t))return H(t.name.text)}}function H(e){return"__@"+e}function G(e){return 69===e.kind&&"Symbol"===e.text}function X(e){for(;166===e.kind;)e=e.parent.parent
return e}function Q(t,n,r,a){var i=void 0!==n?e.createNode(t.kind,n.pos,n.end):$(t.kind)
for(var o in t)!i.hasOwnProperty(o)&&t.hasOwnProperty(o)&&(i[o]=t[o])
return void 0!==r&&(i.flags=r),void 0!==a&&(i.parent=a),i}function Y(e){return 136===e.kind}function $(t,n){var r=e.createNode(t,-1,-1)
return r.startsOnNewLine=n,r}function Z(e){return be.test(e)?e.replace(be,function(e){return xe[e]||ee(e.charCodeAt(0))}):e}function ee(e){return"\\u"+("0000"+e.toString(16).toUpperCase()).slice(-4)}function te(e){return void 0===De[e]&&(De[e]=te(e-1)+De[1]),De[e]}function ne(){return De[1].length}function re(t,n,r){var a=n.getCompilerOptions()
return(a.outDir?e.removeFileExtension(oe(t,n,a.outDir)):e.removeFileExtension(t.fileName))+r}function ae(e){return e.target||0}function ie(e){return"number"==typeof e.module?e.module:2===ae(e)?5:1}function oe(t,n,r){var a=e.getNormalizedAbsolutePath(t.fileName,n.getCurrentDirectory())
return a=a.replace(n.getCommonSourceDirectory(),""),e.combinePaths(r,a)}function se(t,n){return e.computeLineAndCharacterOfPosition(t,n).line}function ce(e,t,n,r){r&&r.length&&n.pos!==r[0].pos&&se(e,n.pos)!==se(e,r[0].pos)&&t.writeLine()}function _e(t,n,r,a,i,o,s){var c=!i
e.forEach(a,function(e){c&&(r.write(" "),c=!1),s(t,n,r,e,o),e.hasTrailingNewLine?r.writeLine():i?r.write(" "):c=!0})}function ue(e,t,n,r,a,i){var o=Math.min(t.end,i-1),s=e.substring(a,o).replace(/^\s+|\s+$/g,"")
s?(n.write(s),o!==t.end&&n.writeLine()):n.writeLiteral(r)}function le(t,n,r){for(var a=0;r>n&&e.isWhiteSpace(t.charCodeAt(n));n++)9===t.charCodeAt(n)?a+=ne()-a%ne():a++
return a}function de(e){return 191===e.kind&&83===e.parent.token&&S(e.parent.parent)}function pe(t){for(var n=[],r=t.length,a=0;r>a;a++){var i=t.charCodeAt(a)
128>i?n.push(i):2048>i?(n.push(i>>6|192),n.push(63&i|128)):65536>i?(n.push(i>>12|224),n.push(i>>6&63|128),n.push(63&i|128)):131072>i?(n.push(i>>18|240),n.push(i>>12&63|128),n.push(i>>6&63|128),n.push(63&i|128)):e.Debug.assert(!1,"Unexpected code point")}return n}function fe(t){return"string"==typeof t?'"'+Z(t)+'"':"number"==typeof t?isFinite(t)?String(t):"null":"boolean"==typeof t?t?"true":"false":"object"==typeof t&&t?e.isArray(t)?me(ge,t):me(he,t):"null"}function me(t,n){e.Debug.assert(!n.hasOwnProperty("__cycle"),"Converting circular structure to JSON"),n.__cycle=!0
var r=t(n)
return delete n.__cycle,r}function ge(t){return"["+e.reduceLeft(t,ye,"")+"]"}function ye(e,t){return(e?e+",":e)+fe(t)}function he(t){return"{"+e.reduceProperties(t,ve,"")+"}"}function ve(e,t,n){return void 0===t||"function"==typeof t||"__cycle"===n?e:(e?e+",":e)+'"'+Z(n)+'":'+fe(t)}e.getDeclarationOfKind=function(e,t){var n=e.declarations
if(n)for(var r=0,a=n;r<a.length;r++){var i=a[r]
if(i.kind===t)return i}}
var ke=[]
e.getSingleLineStringWriter=function(){if(0===ke.length){var e="",t=function(t){return e+=t}
return{string:function(){return e},writeKeyword:t,writeOperator:t,writePunctuation:t,writeSpace:t,writeStringLiteral:t,writeParameter:t,writeSymbol:t,writeLine:function(){return e+=" "},increaseIndent:function(){},decreaseIndent:function(){},clear:function(){return e=""},trackSymbol:function(){},reportInaccessibleThisError:function(){}}}return ke.pop()},e.releaseStringWriter=function(e){e.clear(),ke.push(e)},e.getFullWidth=t,e.arrayIsEqualTo=function(e,t,n){if(!e||!t)return e===t
if(e.length!==t.length)return!1
for(var r=0;r<e.length;r++)if(!(n?n(e[r],t[r]):e[r]===t[r]))return!1
return!0},e.hasResolvedModule=n,e.getResolvedModule=function(e,t){return n(e,t)?e.resolvedModules[t]:void 0},e.setResolvedModule=function(e,t,n){e.resolvedModules||(e.resolvedModules={}),e.resolvedModules[t]=n},e.containsParseError=r,e.getSourceFileOfNode=i,e.isStatementWithLocals=function(e){switch(e.kind){case 195:case 223:case 202:case 203:case 204:return!0}return!1},e.getStartPositionOfLine=function(t,n){return e.Debug.assert(t>=0),e.getLineStarts(n)[t]},e.nodePosToString=function(t){var n=i(t),r=e.getLineAndCharacterOfPosition(n,t.pos)
return n.fileName+"("+(r.line+1)+","+(r.character+1)+")"},e.getStartPosOfNode=function(e){return e.pos},e.nodeIsMissing=o,e.nodeIsPresent=s,e.getTokenPosOfNode=c,e.getNonDecoratorTokenPosOfNode=function(t,n){return o(t)||!t.decorators?c(t,n):e.skipTrivia((n||i(t)).text,t.decorators.end)},e.getSourceTextOfNodeFromSourceFile=_,e.getTextOfNodeFromSourceText=u,e.getTextOfNode=l,e.escapeIdentifier=function(e){return e.length>=2&&95===e.charCodeAt(0)&&95===e.charCodeAt(1)?"_"+e:e},e.unescapeIdentifier=function(e){return e.length>=3&&95===e.charCodeAt(0)&&95===e.charCodeAt(1)&&95===e.charCodeAt(2)?e.substr(1):e},e.makeIdentifierFromModuleName=function(t){return e.getBaseFileName(t).replace(/^(\d)/,"_$1").replace(/\W/g,"_")},e.isBlockOrCatchScoped=function(e){return 0!=(24576&v(e))||f(e)},e.isAmbientModule=d,e.isBlockScopedContainerTopLevel=function(e){return 251===e.kind||221===e.kind||T(e)||w(e)},e.isGlobalScopeAugmentation=p,e.isExternalModuleAugmentation=function(e){if(!e||!d(e))return!1
switch(e.parent.kind){case 251:return y(e.parent)
case 222:return d(e.parent.parent)&&!y(e.parent.parent.parent)}return!1},e.getEnclosingBlockScopeContainer=function(e){for(var t=e.parent;t;){if(T(t))return t
switch(t.kind){case 251:case 223:case 247:case 221:case 202:case 203:case 204:return t
case 195:if(!T(t.parent))return t}t=t.parent}},e.isCatchClauseVariableDeclaration=f,e.declarationNameToString=function(e){return 0===t(e)?"(Missing)":l(e)},e.createDiagnosticForNode=function(t,n,r,a,o){var s=i(t),c=g(s,t)
return e.createFileDiagnostic(s,c.start,c.length,n,r,a,o)},e.createDiagnosticForNodeFromMessageChain=function(e,t){var n=i(e),r=g(n,e)
return{file:n,start:r.start,length:r.length,code:t.code,category:t.category,messageText:t.next?t:t.messageText}},e.getSpanOfTokenAtPosition=m,e.getErrorSpanForNode=g,e.isExternalModule=y,e.isExternalOrCommonJsModule=function(e){return void 0!==(e.externalModuleIndicator||e.commonJsModuleIndicator)},e.isDeclarationFile=h,e.isConstEnumDeclaration=function(e){return 220===e.kind&&k(e)},e.getCombinedNodeFlags=v,e.isConst=k,e.isLet=function(e){return!!(8192&v(e))},e.isSuperCallExpression=function(e){return 171===e.kind&&95===e.expression.kind},e.isPrologueDirective=function(e){return 198===e.kind&&9===e.expression.kind},e.getLeadingCommentRangesOfNode=function(t,n){return e.getLeadingCommentRanges(n.text,t.pos)},e.getLeadingCommentRangesOfNodeFromText=b,e.getJsDocComments=function(e,t){return x(e,t.text)},e.getJsDocCommentsFromText=x,e.fullTripleSlashReferencePathRegEx=/^(\/\/\/\s*<reference\s+path\s*=\s*)('|")(.+?)\2.*?\/>/,e.fullTripleSlashAMDReferencePathRegEx=/^(\/\/\/\s*<amd-dependency\s+path\s*=\s*)('|")(.+?)\2.*?\/>/,e.isTypeNode=C,e.forEachReturnStatement=function(t,n){return function t(r){switch(r.kind){case 207:return n(r)
case 223:case 195:case 199:case 200:case 201:case 202:case 203:case 204:case 208:case 209:case 244:case 245:case 210:case 212:case 247:return e.forEachChild(r,t)}}(t)},e.forEachYieldExpression=function(t,n){return function t(r){switch(r.kind){case 187:n(r)
var a=r.expression
a&&t(a)
case 220:case 218:case 221:case 219:case 217:case 189:return
default:if(T(r)){var i=r.name
if(i&&137===i.kind)return void t(i.expression)}else C(r)||e.forEachChild(r,t)}}(t)},e.isVariableLike=function(e){if(e)switch(e.kind){case 166:case 250:case 139:case 248:case 142:case 141:case 249:case 214:return!0}return!1},e.isAccessor=D,e.isClassLike=S,e.isFunctionLike=T,e.isFunctionLikeKind=E,e.introducesArgumentsExoticObject=function(e){switch(e.kind){case 144:case 143:case 145:case 146:case 147:case 216:case 176:return!0}return!1},e.isIterationStatement=function e(t,n){switch(t.kind){case 202:case 203:case 204:case 200:case 201:return!0
case 210:return n&&e(t.statement,n)}return!1},e.isFunctionBlock=w,e.isObjectLiteralMethod=function(e){return e&&144===e.kind&&168===e.parent.kind},e.isIdentifierTypePredicate=function(e){return e&&1===e.kind},e.isThisTypePredicate=function(e){return e&&0===e.kind},e.getContainingFunction=function(e){for(;;)if(!(e=e.parent)||T(e))return e},e.getContainingClass=function(e){for(;;)if(!(e=e.parent)||S(e))return e},e.getThisContainer=function(e,t){for(;;){if(!(e=e.parent))return
switch(e.kind){case 137:if(S(e.parent.parent))return e
e=e.parent
break
case 140:139===e.parent.kind&&K(e.parent.parent)?e=e.parent.parent:K(e.parent)&&(e=e.parent)
break
case 177:if(!t)continue
case 216:case 176:case 221:case 142:case 141:case 144:case 143:case 145:case 146:case 147:case 148:case 149:case 150:case 220:case 251:return e}}},e.getSuperContainer=function(e,t){for(;;){if(!(e=e.parent))return e
switch(e.kind){case 137:e=e.parent
break
case 216:case 176:case 177:if(!t)continue
case 142:case 141:case 144:case 143:case 145:case 146:case 147:return e
case 140:139===e.parent.kind&&K(e.parent.parent)?e=e.parent.parent:K(e.parent)&&(e=e.parent)}}},e.isSuperPropertyOrElementAccess=function(e){return(169===e.kind||170===e.kind)&&95===e.expression.kind},e.getEntityNameFromTypeNode=function(e){if(e)switch(e.kind){case 152:return e.typeName
case 191:return e.expression
case 69:case 136:return e}},e.getInvokedExpression=function(e){return 173===e.kind?e.tag:e.expression},e.nodeCanBeDecorated=A,e.nodeIsDecorated=function(e){return void 0!==e.decorators&&A(e)},e.isPropertyAccessExpression=P,e.isElementAccessExpression=function(e){return 170===e.kind},e.isExpression=function e(t){switch(t.kind){case 95:case 93:case 99:case 84:case 10:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 192:case 174:case 175:case 176:case 189:case 177:case 180:case 178:case 179:case 182:case 183:case 184:case 185:case 188:case 186:case 11:case 190:case 236:case 237:case 187:case 181:return!0
case 136:for(;136===t.parent.kind;)t=t.parent
return 155===t.parent.kind
case 69:if(155===t.parent.kind)return!0
case 8:case 9:case 97:var n=t.parent
switch(n.kind){case 214:case 139:case 142:case 141:case 250:case 248:case 166:return n.initializer===t
case 198:case 199:case 200:case 201:case 207:case 208:case 209:case 244:case 211:case 209:return n.expression===t
case 202:var r=n
return r.initializer===t&&215!==r.initializer.kind||r.condition===t||r.incrementor===t
case 203:case 204:var a=n
return a.initializer===t&&215!==a.initializer.kind||a.expression===t
case 174:case 192:case 193:case 137:return t===n.expression
case 140:case 243:case 242:return!0
case 191:return n.expression===t&&de(n)
default:if(e(n))return!0}}return!1},e.isExternalModuleNameRelative=function(e){return"./"===e.substr(0,2)||"../"===e.substr(0,3)||".\\"===e.substr(0,2)||"..\\"===e.substr(0,3)},e.isInstantiatedModule=function(t,n){var r=e.getModuleInstanceState(t)
return 1===r||n&&2===r},e.isExternalModuleImportEqualsDeclaration=N,e.getExternalModuleImportEqualsDeclarationExpression=function(t){return e.Debug.assert(N(t)),t.moduleReference.expression},e.isInternalModuleImportEqualsDeclaration=function(e){return 224===e.kind&&235!==e.moduleReference.kind},e.isSourceFileJavaScript=O,e.isInJavaScriptFile=R,e.isRequireCall=function(e,t){return 171===e.kind&&69===e.expression.kind&&"require"===e.expression.text&&1===e.arguments.length&&(!t||9===e.arguments[0].kind)},e.getSpecialPropertyAssignmentKind=function(e){if(!R(e))return 0
if(184!==e.kind)return 0
var t=e
if(56!==t.operatorToken.kind||169!==t.left.kind)return 0
var n=t.left
if(69===n.expression.kind){var r=n.expression
if("exports"===r.text)return 1
if("module"===r.text&&"exports"===n.name.text)return 2}else{if(97===n.expression.kind)return 4
if(169===n.expression.kind){var a=n.expression
if(69===a.expression.kind&&"prototype"===a.name.text)return 3}}return 0},e.getExternalModuleName=function(e){if(225===e.kind)return e.moduleSpecifier
if(224===e.kind){var t=e.moduleReference
if(235===t.kind)return t.expression}return 231===e.kind?e.moduleSpecifier:221===e.kind&&9===e.name.kind?e.name:void 0},e.hasQuestionToken=function(e){if(e)switch(e.kind){case 139:case 144:case 143:case 249:case 248:case 142:case 141:return void 0!==e.questionToken}return!1},e.isJSDocConstructSignature=function(e){return 264===e.kind&&e.parameters.length>0&&266===e.parameters[0].type.kind},e.getJSDocTypeTag=function(e){return I(e,272,!1)},e.getJSDocReturnTag=function(e){return I(e,271,!0)},e.getJSDocTemplateTag=function(e){return I(e,273,!1)},e.getCorrespondingJSDocParameterTag=L,e.hasRestParameter=function(t){return M(e.lastOrUndefined(t.parameters))},e.isRestParameter=M,e.isLiteralKind=function(e){return e>=8&&11>=e},e.isTextualLiteralKind=function(e){return 9===e||11===e},e.isTemplateLiteralKind=function(e){return e>=11&&14>=e},e.isBindingPattern=B,e.isNodeDescendentOf=function(e,t){for(;e;){if(e===t)return!0
e=e.parent}return!1},e.isInAmbientContext=function(e){for(;e;){if(4100&e.flags)return!0
e=e.parent}return!1},e.isDeclaration=z,e.isStatement=function(e){switch(e.kind){case 206:case 205:case 213:case 200:case 198:case 197:case 203:case 204:case 202:case 199:case 210:case 207:case 209:case 211:case 212:case 196:case 201:case 208:case 230:return!0
default:return!1}},e.isClassElement=K,e.isDeclarationName=function(e){if(69!==e.kind&&9!==e.kind&&8!==e.kind)return!1
var t=e.parent
return!(229!==t.kind&&233!==t.kind||!t.propertyName)||!!z(t)&&t.name===e},e.isIdentifierName=function(e){var t=e.parent
switch(t.kind){case 142:case 141:case 144:case 143:case 146:case 147:case 250:case 248:case 169:return t.name===e
case 136:if(t.right===e){for(;136===t.kind;)t=t.parent
return 155===t.kind}return!1
case 166:case 229:return t.propertyName===e
case 233:return!0}return!1},e.isAliasSymbolDeclaration=function(e){return 224===e.kind||226===e.kind&&!!e.name||227===e.kind||229===e.kind||233===e.kind||230===e.kind&&69===e.expression.kind},e.getClassExtendsHeritageClauseElement=function(e){var t=j(e.heritageClauses,83)
return t&&t.types.length>0?t.types[0]:void 0},e.getClassImplementsHeritageClauseElements=function(e){var t=j(e.heritageClauses,106)
return t?t.types:void 0},e.getInterfaceBaseTypeNodes=function(e){var t=j(e.heritageClauses,83)
return t?t.types:void 0},e.getHeritageClause=j,e.tryResolveScriptReference=function(t,n,r){if(!t.getCompilerOptions().noResolve){var a=e.isRootedDiskPath(r.fileName)?r.fileName:e.combinePaths(e.getDirectoryPath(n.fileName),r.fileName)
return t.getSourceFile(a)}},e.getAncestor=function(e,t){for(;e;){if(e.kind===t)return e
e=e.parent}},e.getFileReferenceFromReferencePath=function(t,n){if(/^\/\/\/\s*<reference\s+/gim.test(t)){if(/^(\/\/\/\s*<reference\s+no-default-lib\s*=\s*)('|")(.+?)\2\s*\/>/gim.test(t))return{isNoDefaultLib:!0}
var r=e.fullTripleSlashReferencePathRegEx.exec(t)
return r?{fileReference:{pos:n.pos,end:n.end,fileName:r[3]},isNoDefaultLib:!1}:{diagnosticMessage:e.Diagnostics.Invalid_reference_directive_syntax,isNoDefaultLib:!1}}},e.isKeyword=function(e){return e>=70&&135>=e},e.isTrivia=function(e){return e>=2&&7>=e},e.isAsyncFunctionLike=function(e){return T(e)&&0!=(256&e.flags)&&!D(e)},e.isStringOrNumericLiteral=J,e.hasDynamicName=U,e.isDynamicName=q,e.isWellKnownSymbolSyntactically=W,e.getPropertyNameForPropertyNameNode=V,e.getPropertyNameForKnownSymbolName=H,e.isESSymbolIdentifier=G,e.isModifierKind=function(e){switch(e){case 115:case 118:case 74:case 122:case 77:case 82:case 112:case 110:case 111:case 113:return!0}return!1},e.isParameterDeclaration=function(e){return 139===X(e).kind},e.getRootDeclaration=X,e.nodeStartsNewLexicalEnvironment=function(e){return T(e)||221===e.kind||251===e.kind},e.cloneNode=Q,e.cloneEntityName=function e(t,n){var r=Q(t,t,t.flags,n)
if(Y(r)){var a=r.left,i=r.right
r.left=e(a,r),r.right=Q(i,i,i.flags,n)}return r},e.isQualifiedName=Y,e.nodeIsSynthesized=function(e){return-1===e.pos},e.createSynthesizedNode=$,e.createSynthesizedNodeArray=function(){var e=[]
return e.pos=-1,e.end=-1,e},e.createDiagnosticCollection=function(){function t(){if(a)for(var t in a=!1,n=e.sortAndDeduplicateDiagnostics(n),r)e.hasProperty(r,t)&&(r[t]=e.sortAndDeduplicateDiagnostics(r[t]))}var n=[],r={},a=!1,i=0
return{add:function(e){var t
e.file?(t=r[e.file.fileName])||(t=[],r[e.file.fileName]=t):t=n,t.push(e),a=!0,i++},getGlobalDiagnostics:function(){return t(),n},getDiagnostics:function(a){function i(e){o.push(e)}if(t(),a)return r[a]||[]
var o=[]
for(var s in e.forEach(n,i),r)e.hasProperty(r,s)&&e.forEach(r[s],i)
return e.sortAndDeduplicateDiagnostics(o)},getModificationCount:function(){return i},reattachFileDiagnostics:function(t){if(e.hasProperty(r,t.fileName))for(var n=0,a=r[t.fileName];n<a.length;n++)a[n].file=t}}}
var be=/[\\\"\u0000-\u001f\t\v\f\b\r\n\u2028\u2029\u0085]/g,xe={"\0":"\\0","\t":"\\t","\v":"\\v","\f":"\\f","\b":"\\b","\r":"\\r","\n":"\\n","\\":"\\\\",'"':'\\"',"\u2028":"\\u2028","\u2029":"\\u2029","":"\\u0085"}
e.escapeString=Z,e.isIntrinsicJsxName=function(e){var t=e.substr(0,1)
return t.toLowerCase()===t}
var Ce=/[^\u0000-\u007F]/g
e.escapeNonAsciiCharacters=function(e){return Ce.test(e)?e.replace(Ce,function(e){return ee(e.charCodeAt(0))}):e}
var De=["","    "]
e.getIndentString=te,e.getIndentSize=ne,e.createTextWriter=function(t){function n(e){e&&e.length&&(o&&(a+=te(i),o=!1),a+=e)}function r(){a="",i=0,o=!0,s=0,c=0}var a,i,o,s,c
return r(),{write:n,rawWrite:function(e){void 0!==e&&(o&&(o=!1),a+=e)},writeTextOfNode:function(e,t){n(u(e,t))},writeLiteral:function(t){if(t&&t.length){n(t)
var r=e.computeLineStarts(t)
r.length>1&&(s=s+r.length-1,c=a.length-t.length+e.lastOrUndefined(r))}},writeLine:function(){o||(s++,c=(a+=t).length,o=!0)},increaseIndent:function(){i++},decreaseIndent:function(){i--},getIndent:function(){return i},getTextPos:function(){return a.length},getLine:function(){return s+1},getColumn:function(){return o?i*ne()+1:a.length-c+1},getText:function(){return a},reset:r}},e.getExternalModuleNameFromPath=function(t,n){var r=function(e){return t.getCanonicalFileName(e)},a=e.toPath(t.getCommonSourceDirectory(),t.getCurrentDirectory(),r),i=e.getNormalizedAbsolutePath(n,t.getCurrentDirectory()),o=e.getRelativePathToDirectoryOrUrl(a,i,a,r,!1)
return e.removeFileExtension(o)},e.getOwnEmitOutputFilePath=re,e.getEmitScriptTarget=ae,e.getEmitModuleKind=ie,e.forEachExpectedEmitFile=function(t,n,r){function a(t,r){var a=".js"
1===s.jsx&&(O(r)?e.fileExtensionIs(r.fileName,".jsx")&&(a=".jsx"):1===r.languageVariant&&(a=".jsx"))
var c=re(r,t,a),_={jsFilePath:c,sourceMapFilePath:i(c,s),declarationFilePath:O(r)?void 0:o(c,s)}
n(_,[r],!1)}function i(e,t){return t.sourceMap?e+".map":void 0}function o(t,n){return n.declaration?e.removeFileExtension(t)+".d.ts":void 0}var s=t.getCompilerOptions()
if(s.outFile||s.out)(function(t){var r=e.filter(t.getSourceFiles(),function(e){return!h(e)&&(!y(e)||ie(s)&&y(e))})
if(r.length){var a=s.outFile||s.out,c={jsFilePath:a,sourceMapFilePath:i(a,s),declarationFilePath:o(a,s)}
n(c,r,!0)}})(t)
else for(var c=0,_=void 0===r?t.getSourceFiles():[r];c<_.length;c++){var u=_[c]
h(u)||a(t,u)}},e.getSourceFilePathInNewDir=oe,e.writeFile=function(t,n,r,a,i){t.writeFile(r,a,i,function(t){n.add(e.createCompilerDiagnostic(e.Diagnostics.Could_not_write_file_0_Colon_1,r,t))})},e.getLineOfLocalPosition=function(t,n){return e.getLineAndCharacterOfPosition(t,n).line},e.getLineOfLocalPositionFromLineMap=se,e.getFirstConstructorWithBody=function(t){return e.forEach(t.members,function(e){return 145===e.kind&&s(e.body)?e:void 0})},e.getSetAccessorTypeAnnotationNode=function(e){return e&&e.parameters.length>0&&e.parameters[0].type},e.getAllAccessorDeclarations=function(t,n){var r,a,i,o
return U(n)?(r=n,146===n.kind?i=n:147===n.kind?o=n:e.Debug.fail("Accessor has wrong kind")):e.forEach(t,function(e){146!==e.kind&&147!==e.kind||(64&e.flags)!=(64&n.flags)||V(e.name)===V(n.name)&&(r?a||(a=e):r=e,146!==e.kind||i||(i=e),147!==e.kind||o||(o=e))}),{firstAccessor:r,secondAccessor:a,getAccessor:i,setAccessor:o}},e.emitNewLineBeforeLeadingComments=ce,e.emitComments=_e,e.emitDetachedComments=function(t,n,r,a,i,o,s){var c,_
if(s?0===i.pos&&(c=e.filter(e.getLeadingCommentRanges(t,i.pos),function(e){return 42===t.charCodeAt(e.pos+1)&&33===t.charCodeAt(e.pos+2)})):c=e.getLeadingCommentRanges(t,i.pos),c){for(var u=[],l=void 0,d=0,p=c;d<p.length;d++){var f=p[d]
if(l){var m=se(n,l.end)
if(se(n,f.pos)>=m+2)break}u.push(f),l=f}u.length&&(m=se(n,e.lastOrUndefined(u).end),se(n,e.skipTrivia(t,i.pos))>=m+2&&(ce(n,r,i,c),_e(t,n,r,u,!0,o,a),_={nodePos:i.pos,detachedCommentEndPos:e.lastOrUndefined(u).end}))}return _},e.writeCommentRange=function(t,n,r,a,i){if(42===t.charCodeAt(a.pos+1))for(var o=e.computeLineAndCharacterOfPosition(n,a.pos),s=n.length,c=void 0,_=a.pos,u=o.line;_<a.end;u++){var l=u+1===s?t.length+1:n[u+1]
if(_!==a.pos){void 0===c&&(c=le(t,n[o.line],a.pos))
var d=r.getIndent()*ne()-c+le(t,_,l)
if(d>0){var p=d%ne(),f=te((d-p)/ne())
for(r.rawWrite(f);p;)r.rawWrite(" "),p--}else r.rawWrite("")}ue(t,a,r,i,_,l),_=l}else r.write(t.substring(a.pos,a.end))},e.modifierToFlag=function(e){switch(e){case 113:return 64
case 112:return 8
case 111:return 32
case 110:return 16
case 115:return 128
case 82:return 2
case 122:return 4
case 74:return 16384
case 77:return 512
case 118:return 256}return 0},e.isLeftHandSideExpression=function(e){if(e)switch(e.kind){case 169:case 170:case 172:case 171:case 236:case 237:case 173:case 167:case 175:case 168:case 189:case 176:case 69:case 10:case 8:case 9:case 11:case 186:case 84:case 93:case 97:case 99:case 95:return!0}return!1},e.isAssignmentOperator=function(e){return e>=56&&68>=e},e.isExpressionWithTypeArgumentsInClassExtendsClause=de,e.isSupportedExpressionWithTypeArguments=function(e){return function e(t){return 69===t.kind||!!P(t)&&e(t.expression)}(e.expression)},e.isRightSideOfQualifiedNameOrPropertyAccess=function(e){return 136===e.parent.kind&&e.parent.right===e||169===e.parent.kind&&e.parent.name===e},e.isEmptyObjectLiteralOrArrayLiteral=function(e){var t=e.kind
return 168===t?0===e.properties.length:167===t&&0===e.elements.length},e.getLocalSymbolForExportDefault=function(e){return e&&e.valueDeclaration&&512&e.valueDeclaration.flags?e.valueDeclaration.localSymbol:void 0},e.hasJavaScriptFileExtension=function(t){return e.forEach(e.supportedJavascriptExtensions,function(n){return e.fileExtensionIs(t,n)})},e.hasTypeScriptFileExtension=function(t){return e.forEach(e.supportedTypeScriptExtensions,function(n){return e.fileExtensionIs(t,n)})},e.stringify="undefined"!=typeof JSON&&JSON.stringify?JSON.stringify:function(e){return void 0===e?void 0:fe(e)}
var Se="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
e.convertToBase64=function(e){for(var t,n,r,a,i="",o=pe(e),s=0,c=o.length;c>s;)t=o[s]>>2,n=(3&o[s])<<4|o[s+1]>>4,r=(15&o[s+1])<<2|o[s+2]>>6,a=63&o[s+2],s+1>=c?r=a=64:s+2>=c&&(a=64),i+=Se.charAt(t)+Se.charAt(n)+Se.charAt(r)+Se.charAt(a),s+=3
return i},e.convertToRelativePath=function(t,n,r){return e.isRootedDiskPath(t)?e.getRelativePathToDirectoryOrUrl(n,t,n,r,!1):t}
var Te="\r\n",Ee="\n"
e.getNewLineCharacter=function(t){return 0===t.newLine?Te:1===t.newLine?Ee:e.sys?e.sys.newLine:Te}}(ts||(ts={})),function(e){function t(e){return e.start+e.length}function n(e){return 0===e.length}function r(e,t){if(0>e)throw new Error("start < 0")
if(0>t)throw new Error("length < 0")
return{start:e,length:t}}function a(e,t){return r(e,t-e)}function i(e,t){if(0>t)throw new Error("newLength < 0")
return{span:e,newLength:t}}e.getDefaultLibFileName=function(e){return 2===e.target?"lib.es6.d.ts":"lib.d.ts"},e.textSpanEnd=t,e.textSpanIsEmpty=n,e.textSpanContainsPosition=function(e,n){return n>=e.start&&n<t(e)},e.textSpanContainsTextSpan=function(e,n){return n.start>=e.start&&t(n)<=t(e)},e.textSpanOverlapsWith=function(e,n){var r=Math.max(e.start,n.start)
return Math.min(t(e),t(n))>r},e.textSpanOverlap=function(e,n){var r=Math.max(e.start,n.start),i=Math.min(t(e),t(n))
return i>r?a(r,i):void 0},e.textSpanIntersectsWithTextSpan=function(e,n){return n.start<=t(e)&&t(n)>=e.start},e.textSpanIntersectsWith=function(e,n,r){var a=n+r
return n<=t(e)&&a>=e.start},e.decodedTextSpanIntersectsWith=function(e,t,n,r){return e+t>=n&&n+r>=e},e.textSpanIntersectsWithPosition=function(e,n){return n<=t(e)&&n>=e.start},e.textSpanIntersection=function(e,n){var r=Math.max(e.start,n.start),i=Math.min(t(e),t(n))
return i>=r?a(r,i):void 0},e.createTextSpan=r,e.createTextSpanFromBounds=a,e.textChangeRangeNewSpan=function(e){return r(e.span.start,e.newLength)},e.textChangeRangeIsUnchanged=function(e){return n(e.span)&&0===e.newLength},e.createTextChangeRange=i,e.unchangedTextChangeRange=i(r(0,0),0),e.collapseTextChangeRangesAcrossMultipleVersions=function(n){if(0===n.length)return e.unchangedTextChangeRange
if(1===n.length)return n[0]
for(var r=n[0],o=r.span.start,s=t(r.span),c=o+r.newLength,_=1;_<n.length;_++){var u=n[_],l=o,d=s,p=c,f=u.span.start,m=t(u.span),g=f+u.newLength
o=Math.min(l,f),s=Math.max(d,d+(m-p)),c=Math.max(g,g+(p-m))}return i(a(o,s),c-o)},e.getTypeParameterOwner=function(t){if(t&&138===t.kind)for(var n=t;n;n=n.parent)if(e.isFunctionLike(n)||e.isClassLike(n)||218===n.kind)return n},e.isParameterPropertyDeclaration=function(t){return 56&t.flags&&145===t.parent.kind&&e.isClassLike(t.parent.parent)}}(ts||(ts={})),function(e){function t(e,t){return t?e(t):void 0}function n(e,t){return t?e(t):void 0}function r(e,t){if(t)for(var n=0,r=t;n<r.length;n++){var a=e(r[n])
if(a)return a}}function a(e,a,i){if(e){var o=i?n:r,s=i||a
switch(e.kind){case 136:return t(a,e.left)||t(a,e.right)
case 138:return t(a,e.name)||t(a,e.constraint)||t(a,e.expression)
case 249:return o(s,e.decorators)||o(s,e.modifiers)||t(a,e.name)||t(a,e.questionToken)||t(a,e.equalsToken)||t(a,e.objectAssignmentInitializer)
case 139:case 142:case 141:case 248:case 214:case 166:return o(s,e.decorators)||o(s,e.modifiers)||t(a,e.propertyName)||t(a,e.dotDotDotToken)||t(a,e.name)||t(a,e.questionToken)||t(a,e.type)||t(a,e.initializer)
case 153:case 154:case 148:case 149:case 150:return o(s,e.decorators)||o(s,e.modifiers)||o(s,e.typeParameters)||o(s,e.parameters)||t(a,e.type)
case 144:case 143:case 145:case 146:case 147:case 176:case 216:case 177:return o(s,e.decorators)||o(s,e.modifiers)||t(a,e.asteriskToken)||t(a,e.name)||t(a,e.questionToken)||o(s,e.typeParameters)||o(s,e.parameters)||t(a,e.type)||t(a,e.equalsGreaterThanToken)||t(a,e.body)
case 152:return t(a,e.typeName)||o(s,e.typeArguments)
case 151:return t(a,e.parameterName)||t(a,e.type)
case 155:return t(a,e.exprName)
case 156:return o(s,e.members)
case 157:return t(a,e.elementType)
case 158:return o(s,e.elementTypes)
case 159:case 160:return o(s,e.types)
case 161:return t(a,e.type)
case 164:case 165:case 167:return o(s,e.elements)
case 168:return o(s,e.properties)
case 169:return t(a,e.expression)||t(a,e.dotToken)||t(a,e.name)
case 170:return t(a,e.expression)||t(a,e.argumentExpression)
case 171:case 172:return t(a,e.expression)||o(s,e.typeArguments)||o(s,e.arguments)
case 173:return t(a,e.tag)||t(a,e.template)
case 174:return t(a,e.type)||t(a,e.expression)
case 175:case 178:case 179:case 180:return t(a,e.expression)
case 182:return t(a,e.operand)
case 187:return t(a,e.asteriskToken)||t(a,e.expression)
case 181:return t(a,e.expression)
case 183:return t(a,e.operand)
case 184:return t(a,e.left)||t(a,e.operatorToken)||t(a,e.right)
case 192:return t(a,e.expression)||t(a,e.type)
case 185:return t(a,e.condition)||t(a,e.questionToken)||t(a,e.whenTrue)||t(a,e.colonToken)||t(a,e.whenFalse)
case 188:return t(a,e.expression)
case 195:case 222:return o(s,e.statements)
case 251:return o(s,e.statements)||t(a,e.endOfFileToken)
case 196:return o(s,e.decorators)||o(s,e.modifiers)||t(a,e.declarationList)
case 215:return o(s,e.declarations)
case 198:return t(a,e.expression)
case 199:return t(a,e.expression)||t(a,e.thenStatement)||t(a,e.elseStatement)
case 200:return t(a,e.statement)||t(a,e.expression)
case 201:return t(a,e.expression)||t(a,e.statement)
case 202:return t(a,e.initializer)||t(a,e.condition)||t(a,e.incrementor)||t(a,e.statement)
case 203:case 204:return t(a,e.initializer)||t(a,e.expression)||t(a,e.statement)
case 205:case 206:return t(a,e.label)
case 207:return t(a,e.expression)
case 208:return t(a,e.expression)||t(a,e.statement)
case 209:return t(a,e.expression)||t(a,e.caseBlock)
case 223:return o(s,e.clauses)
case 244:return t(a,e.expression)||o(s,e.statements)
case 245:return o(s,e.statements)
case 210:return t(a,e.label)||t(a,e.statement)
case 211:return t(a,e.expression)
case 212:return t(a,e.tryBlock)||t(a,e.catchClause)||t(a,e.finallyBlock)
case 247:return t(a,e.variableDeclaration)||t(a,e.block)
case 140:return t(a,e.expression)
case 217:case 189:case 218:return o(s,e.decorators)||o(s,e.modifiers)||t(a,e.name)||o(s,e.typeParameters)||o(s,e.heritageClauses)||o(s,e.members)
case 219:return o(s,e.decorators)||o(s,e.modifiers)||t(a,e.name)||o(s,e.typeParameters)||t(a,e.type)
case 220:return o(s,e.decorators)||o(s,e.modifiers)||t(a,e.name)||o(s,e.members)
case 250:return t(a,e.name)||t(a,e.initializer)
case 221:return o(s,e.decorators)||o(s,e.modifiers)||t(a,e.name)||t(a,e.body)
case 224:return o(s,e.decorators)||o(s,e.modifiers)||t(a,e.name)||t(a,e.moduleReference)
case 225:return o(s,e.decorators)||o(s,e.modifiers)||t(a,e.importClause)||t(a,e.moduleSpecifier)
case 226:return t(a,e.name)||t(a,e.namedBindings)
case 227:return t(a,e.name)
case 228:case 232:return o(s,e.elements)
case 231:return o(s,e.decorators)||o(s,e.modifiers)||t(a,e.exportClause)||t(a,e.moduleSpecifier)
case 229:case 233:return t(a,e.propertyName)||t(a,e.name)
case 230:return o(s,e.decorators)||o(s,e.modifiers)||t(a,e.expression)
case 186:return t(a,e.head)||o(s,e.templateSpans)
case 193:return t(a,e.expression)||t(a,e.literal)
case 137:return t(a,e.expression)
case 246:return o(s,e.types)
case 191:return t(a,e.expression)||o(s,e.typeArguments)
case 235:return t(a,e.expression)
case 234:return o(s,e.decorators)
case 236:return t(a,e.openingElement)||o(s,e.children)||t(a,e.closingElement)
case 237:case 238:return t(a,e.tagName)||o(s,e.attributes)
case 241:return t(a,e.name)||t(a,e.initializer)
case 242:case 243:return t(a,e.expression)
case 240:return t(a,e.tagName)
case 252:return t(a,e.type)
case 256:case 257:return o(s,e.types)
case 255:return t(a,e.elementType)
case 259:case 258:return t(a,e.type)
case 260:return o(s,e.members)
case 262:return t(a,e.name)||o(s,e.typeArguments)
case 263:return t(a,e.type)
case 264:return o(s,e.parameters)||t(a,e.type)
case 265:case 266:case 267:return t(a,e.type)
case 261:return t(a,e.name)||t(a,e.type)
case 268:return o(s,e.tags)
case 270:return t(a,e.preParameterName)||t(a,e.typeExpression)||t(a,e.postParameterName)
case 271:case 272:return t(a,e.typeExpression)
case 273:return o(s,e.typeParameters)}}}var i,o,s,c
e.parseTime=0,e.createNode=function(t,n,r){return 251===t?new(o||(o=e.objectAllocator.getSourceFileConstructor()))(t,n,r):new(i||(i=e.objectAllocator.getNodeConstructor()))(t,n,r)},e.forEachChild=a,e.createSourceFile=function(t,n,r,a,i){void 0===a&&(a=!1)
var o=(new Date).getTime(),c=s.parseSourceFile(t,n,r,void 0,a,i)
return e.parseTime+=(new Date).getTime()-o,c},e.updateSourceFile=function(e,t,n,r){return c.updateSourceFile(e,t,n,r)},e.parseIsolatedJSDocComment=function(e,t,n){return s.JSDocParser.parseIsolatedJSDocComment(e,t,n)},e.parseJSDocTypeExpressionForTests=function(e,t,n){return s.JSDocParser.parseJSDocTypeExpressionForTests(e,t,n)},function(t){function n(e){return 4===e||2===e||1===e?1:0}function r(t,r,a,i,o){Un=e.objectAllocator.getNodeConstructor(),qn=e.objectAllocator.getSourceFileConstructor(),Xn=r,Hn=i,Vn=[],Zn=0,Yn={},$n=0,Qn=0,er=1===o||2===o?32:0,or=!1,ar.setText(Xn),ar.setOnError(E),ar.setScriptTarget(a),ar.setLanguageVariant(n(o))}function i(){ar.setText(""),ar.setOnError(void 0),Vn=void 0,Wn=void 0,Yn=void 0,Hn=void 0,Xn=void 0}function o(t,n,r,a){return Wn=_(t,n,a),32&er&&(Wn.parserContextFlags=32),Gn=P(),function(t){for(var n,r=e.createScanner(t.languageVersion,!1,0,Xn),a=[],i=[];;){var o=r.scan()
if(2!==o){if(e.isTrivia(o))continue
break}var s={pos:r.getTokenPos(),end:r.getTextPos(),kind:r.getToken()},c=Xn.substring(s.pos,s.end),_=e.getFileReferenceFromReferencePath(c,s)
if(_){var u=_.fileReference
t.hasNoDefaultLib=_.isNoDefaultLib
var l=_.diagnosticMessage
u&&a.push(u),l&&Vn.push(e.createFileDiagnostic(t,s.pos,s.end-s.pos,l))}else{var d=/^\/\/\/\s*<amd-module\s+name\s*=\s*('|")(.+?)\1/gim.exec(c)
d&&(n&&Vn.push(e.createFileDiagnostic(t,s.pos,s.end-s.pos,e.Diagnostics.An_AMD_module_cannot_have_multiple_name_assignments)),n=d[2])
var p=/^\/\/\/\s*<amd-dependency\s/gim.exec(c)
if(p){var f=/\spath\s*=\s*('|")(.+?)\1/gim.exec(c),m=/\sname\s*=\s*('|")(.+?)\1/gim.exec(c)
if(f){var g={path:f[2],name:m?m[2]:void 0}
i.push(g)}}}}t.referencedFiles=a,t.amdDependencies=i,t.moduleName=n}(Wn),Wn.statements=pe(0,an),e.Debug.assert(1===Gn),Wn.endOfFileToken=J(),function(t){t.externalModuleIndicator=e.forEach(t.statements,function(e){return 2&e.flags||224===e.kind&&235===e.moduleReference.kind||225===e.kind||230===e.kind||231===e.kind?e:void 0})}(Wn),Wn.nodeCount=Qn,Wn.identifierCount=$n,Wn.identifiers=Yn,Wn.parseDiagnostics=Vn,r&&c(Wn),Wn}function s(t){if(32&er){var n=e.getLeadingCommentRangesOfNode(t,Wn)
if(n)for(var r=0,a=n;r<a.length;r++){var i=a[r],o=rr.parseJSDocComment(t,i.pos,i.end-i.pos)
o&&(t.jsDocComment=o)}}return t}function c(e){var t=e
a(e,function e(n){if(n.parent!==t){n.parent=t
var r=t
t=n,a(n,e),t=r}})}function _(t,r,a){var i=new qn(251,0,Xn.length)
return Qn++,i.text=Xn,i.bindDiagnostics=[],i.languageVersion=r,i.fileName=e.normalizePath(t),i.flags=e.fileExtensionIs(i.fileName,".d.ts")?4096:0,i.languageVariant=n(a),i.scriptKind=a,i}function u(e,t){e?er|=t:er&=~t}function l(e){u(e,1)}function d(e){u(e,2)}function p(e){u(e,4)}function f(e){u(e,8)}function m(e,t){var n=e&er
if(n){u(!1,n)
var r=t()
return u(!0,n),r}return t()}function g(e,t){var n=e&~er
if(n){u(!0,n)
var r=t()
return u(!1,n),r}return t()}function y(e){return m(1,e)}function h(e){return g(4,e)}function v(e){return g(8,e)}function k(e){return 0!=(er&e)}function b(){return k(2)}function x(){return k(1)}function C(){return k(4)}function D(){return k(8)}function S(e,t){var n=ar.getTokenPos()
T(n,ar.getTextPos()-n,e,t)}function T(t,n,r,a){var i=e.lastOrUndefined(Vn)
i&&t===i.start||Vn.push(e.createFileDiagnostic(Wn,t,n,r,a)),or=!0}function E(e,t){T(ar.getTextPos(),t||0,e)}function w(){return ar.getStartPos()}function A(){return ar.getStartPos()}function P(){return Gn=ar.scan()}function N(){return Gn=ar.reScanGreaterToken()}function O(){return Gn=ar.scanJsxIdentifier()}function R(){return Gn=ar.scanJsxToken()}function I(t,n){var r=Gn,a=Vn.length,i=or,o=er,s=n?ar.lookAhead(t):ar.tryScan(t)
return e.Debug.assert(o===er),s&&!n||(Gn=r,Vn.length=a,or=i),s}function F(e){return I(e,!0)}function L(e){return I(e,!1)}function M(){return 69===Gn||(114!==Gn||!b())&&((119!==Gn||!D())&&Gn>105)}function B(t,n,r){return void 0===r&&(r=!0),Gn===t?(r&&P(),!0):(n?S(n):S(e.Diagnostics._0_expected,e.tokenToString(t)),!1)}function z(e){return Gn===e&&(P(),!0)}function K(e){return Gn===e?J():void 0}function j(e,t,n,r){return K(e)||H(e,t,n,r)}function J(){var e=W(Gn)
return P(),V(e)}function U(){return 23===Gn||(16===Gn||1===Gn||ar.hasPrecedingLineBreak())}function q(){return U()?(23===Gn&&P(),!0):B(23)}function W(e,t){return Qn++,t>=0||(t=ar.getStartPos()),new Un(e,t,t)}function V(e,t){return e.end=void 0===t?ar.getStartPos():t,er&&(e.parserContextFlags=er),or&&(or=!1,e.parserContextFlags|=16),e}function H(e,t,n,r){t?T(ar.getStartPos(),0,n,r):S(n,r)
var a=W(e,ar.getStartPos())
return a.text="",V(a)}function G(t){return t=e.escapeIdentifier(t),e.hasProperty(Yn,t)?Yn[t]:Yn[t]=t}function X(t,n){if($n++,t){var r=W(69)
return 69!==Gn&&(r.originalKeywordKind=Gn),r.text=G(ar.getTokenValue()),P(),V(r)}return H(69,!1,n||e.Diagnostics.Identifier_expected)}function Q(e){return X(M(),e)}function Y(){return X(e.tokenIsIdentifierOrKeyword(Gn))}function $(){return e.tokenIsIdentifierOrKeyword(Gn)||9===Gn||8===Gn}function Z(e){return 9===Gn||8===Gn?Se(!0):e&&19===Gn?function(){var e=W(137)
return B(19),e.expression=y(ut),B(20),V(e)}():Y()}function ee(){return Z(!0)}function te(){return Z(!1)}function ne(e){return Gn===e&&L(ae)}function re(){return P(),!ar.hasPrecedingLineBreak()&&ie()}function ae(){return 74===Gn?81===P():82===Gn?(P(),77===Gn?F(oe):37!==Gn&&15!==Gn&&ie()):77===Gn?oe():113===Gn?(P(),ie()):re()}function ie(){return 19===Gn||15===Gn||37===Gn||$()}function oe(){return P(),73===Gn||87===Gn}function se(t,n){if(me(t))return!0
switch(t){case 0:case 1:case 3:return!(23===Gn&&n)&&nn()
case 2:return 71===Gn||77===Gn
case 4:return function(){switch(Gn){case 17:case 25:case 19:return!0
default:if(e.isModifierKind(Gn)){var t=F(Je)
if(t)return t}return $()&&F(Ue)}}()
case 5:return F(xn)||23===Gn&&!n
case 6:return 19===Gn||$()
case 12:return 19===Gn||37===Gn||$()
case 9:return 19===Gn||$()
case 7:return 15===Gn?F(ce):n?M()&&!ue():ct()&&!ue()
case 8:return un()
case 10:return 24===Gn||22===Gn||un()
case 17:return M()
case 11:case 15:return 24===Gn||22===Gn||_t()
case 16:return Ne()
case 18:case 19:return 24===Gn||Ye()
case 20:return On()
case 21:return e.tokenIsIdentifierOrKeyword(Gn)
case 13:return e.tokenIsIdentifierOrKeyword(Gn)||15===Gn
case 14:return!0
case 22:case 23:case 25:return rr.isJSDocType()
case 24:return 9===Gn||8===Gn||e.tokenIsIdentifierOrKeyword(Gn)}e.Debug.fail("Non-exhaustive case in 'isListElement'.")}function ce(){if(e.Debug.assert(15===Gn),16===P()){var t=P()
return 24===t||15===t||83===t||106===t}return!0}function _e(){return P(),e.tokenIsIdentifierOrKeyword(Gn)}function ue(){return(106===Gn||83===Gn)&&F(le)}function le(){return P(),_t()}function de(e){if(1===Gn)return!0
switch(e){case 1:case 2:case 4:case 5:case 6:case 12:case 9:case 21:return 16===Gn
case 3:return 16===Gn||71===Gn||77===Gn
case 7:return 15===Gn||83===Gn||106===Gn
case 8:return!!U()||!!vt(Gn)||34===Gn
case 17:return 27===Gn||17===Gn||15===Gn||83===Gn||106===Gn
case 11:return 18===Gn||23===Gn
case 15:case 19:case 10:return 20===Gn
case 16:return 18===Gn||20===Gn
case 18:return 27===Gn||17===Gn
case 20:return 15===Gn||16===Gn
case 13:return 27===Gn||39===Gn
case 14:return 25===Gn&&F(Mn)
case 22:return 18===Gn||54===Gn||16===Gn
case 23:return 27===Gn||16===Gn
case 25:return 20===Gn||16===Gn
case 24:return 16===Gn}}function pe(e,t){var n=Zn
Zn|=1<<e
var r=[]
for(r.pos=w();!de(e);)if(se(e,!1)){var a=fe(e,t)
r.push(a)}else if(ge(e))break
return r.end=A(),Zn=n,r}function fe(e,t){var n=me(e)
return n?function(e){return ar.setTextPos(e.end),P(),e}(n):t()}function me(t){if(!or&&Hn){var n=Hn.currentNode(ar.getStartPos())
if(!e.nodeIsMissing(n)&&!n.intersectsChange&&!e.containsParseError(n))if((63&n.parserContextFlags)===er&&function(e,t){switch(t){case 5:return function(e){if(e)switch(e.kind){case 145:case 150:case 146:case 147:case 142:case 194:return!0
case 144:var t=e,n=69===t.name.kind&&121===t.name.originalKeywordKind
return!n}return!1}(e)
case 2:return function(e){if(e)switch(e.kind){case 244:case 245:return!0}return!1}(e)
case 0:case 1:case 3:return function(e){if(e)switch(e.kind){case 216:case 196:case 195:case 199:case 198:case 211:case 207:case 209:case 206:case 205:case 203:case 204:case 202:case 201:case 208:case 197:case 212:case 210:case 200:case 213:case 225:case 224:case 231:case 230:case 221:case 217:case 218:case 220:case 219:return!0}return!1}(e)
case 6:return function(e){return 250===e.kind}(e)
case 4:return function(e){if(e)switch(e.kind){case 149:case 143:case 150:case 141:case 148:return!0}return!1}(e)
case 8:return function(e){return 214===e.kind&&void 0===e.initializer}(e)
case 16:return function(e){return 139===e.kind&&void 0===e.initializer}(e)}return!1}(n,t))return n}}function ge(e){return S(ye(e)),!!function(){for(var e=0;26>e;e++)if(Zn&1<<e&&(se(e,!0)||de(e)))return!0
return!1}()||(P(),!1)}function ye(t){switch(t){case 0:case 1:return e.Diagnostics.Declaration_or_statement_expected
case 2:return e.Diagnostics.case_or_default_expected
case 3:return e.Diagnostics.Statement_expected
case 4:return e.Diagnostics.Property_or_signature_expected
case 5:return e.Diagnostics.Unexpected_token_A_constructor_method_accessor_or_property_was_expected
case 6:return e.Diagnostics.Enum_member_expected
case 7:return e.Diagnostics.Expression_expected
case 8:return e.Diagnostics.Variable_declaration_expected
case 9:return e.Diagnostics.Property_destructuring_pattern_expected
case 10:return e.Diagnostics.Array_element_destructuring_pattern_expected
case 11:return e.Diagnostics.Argument_expression_expected
case 12:return e.Diagnostics.Property_assignment_expected
case 15:return e.Diagnostics.Expression_or_comma_expected
case 16:return e.Diagnostics.Parameter_declaration_expected
case 17:return e.Diagnostics.Type_parameter_declaration_expected
case 18:return e.Diagnostics.Type_argument_expected
case 19:return e.Diagnostics.Type_expected
case 20:return e.Diagnostics.Unexpected_token_expected
case 21:case 13:case 14:return e.Diagnostics.Identifier_expected
case 22:return e.Diagnostics.Parameter_declaration_expected
case 23:return e.Diagnostics.Type_argument_expected
case 25:return e.Diagnostics.Type_expected
case 24:return e.Diagnostics.Property_assignment_expected}}function he(e,t,n){var r=Zn
Zn|=1<<e
var a=[]
a.pos=w()
for(var i=-1;;)if(se(e,!1)){if(a.push(fe(e,t)),i=ar.getTokenPos(),z(24))continue
if(i=-1,de(e))break
B(24),n&&23===Gn&&!ar.hasPrecedingLineBreak()&&P()}else{if(de(e))break
if(ge(e))break}return i>=0&&(a.hasTrailingComma=!0),a.end=A(),Zn=r,a}function ve(){var e=w(),t=[]
return t.pos=e,t.end=e,t}function ke(e,t,n,r){if(B(n)){var a=he(e,t)
return B(r),a}return ve()}function be(e,t){for(var n=Q(t);z(21);){var r=W(136,n.pos)
r.left=n,r.right=xe(e),n=V(r)}return n}function xe(t){if(ar.hasPrecedingLineBreak()&&e.tokenIsIdentifierOrKeyword(Gn)&&F(Yt))return H(69,!0,e.Diagnostics.Identifier_expected)
return t?Y():Q()}function Ce(){var t=W(186)
t.head=Te(),e.Debug.assert(12===t.head.kind,"Template head has wrong token kind")
var n=[]
n.pos=w()
do{n.push(De())}while(13===e.lastOrUndefined(n).literal.kind)
return n.end=A(),t.templateSpans=n,V(t)}function De(){var t,n=W(193)
return n.expression=y(ut),16===Gn?(Gn=ar.reScanTemplateToken(),t=Te()):t=j(14,!1,e.Diagnostics._0_expected,e.tokenToString(16)),n.literal=t,V(n)}function Se(e){return Ee(Gn,e)}function Te(){return Ee(Gn,!1)}function Ee(t,n){var r=W(t),a=ar.getTokenValue()
r.text=n?G(a):a,ar.hasExtendedUnicodeEscape()&&(r.hasExtendedUnicodeEscape=!0),ar.isUnterminated()&&(r.isUnterminated=!0)
var i=ar.getTokenPos()
return P(),V(r),8===r.kind&&48===Xn.charCodeAt(i)&&e.isOctalDigit(Xn.charCodeAt(i+1))&&(r.flags|=32768),r}function we(){var t=be(!1,e.Diagnostics.Type_expected),n=W(152,t.pos)
return n.typeName=t,ar.hasPrecedingLineBreak()||25!==Gn||(n.typeArguments=ke(18,it,25,27)),V(n)}function Ae(){var e=W(138)
return e.name=Q(),z(83)&&(Ye()||!_t()?e.constraint=it():e.expression=Dt()),V(e)}function Pe(){return 25===Gn?ke(17,Ae,25,27):void 0}function Ne(){return 22===Gn||un()||e.isModifierKind(Gn)||55===Gn}function Oe(e,t){t&&(e.flags|=t.flags,e.modifiers=t)}function Re(){var t=W(139)
return t.decorators=Cn(),Oe(t,Dn()),t.dotDotDotToken=K(22),t.name=ln(),0===e.getFullWidth(t.name)&&0===t.flags&&e.isModifierKind(Gn)&&P(),t.questionToken=K(53),t.type=z(54)?it():void 0,t.initializer=Ie(!0),s(V(t))}function Ie(e){return e?lt(!0):vn()}function Fe(e,t,n,r,a){var i=34===e
a.typeParameters=Pe(),a.parameters=function(e,t,n){if(B(17)){var r=b(),a=D()
d(e),f(t)
var i=he(16,Re)
if(d(r),f(a),!B(18)&&n)return
return i}return n?void 0:ve()}(t,n,r),i?(B(e),a.type=rt()):z(e)&&(a.type=rt())}function Le(){z(24)||q()}function Me(e){var t=W(e)
return 149===e&&B(92),Fe(54,!1,!1,!1,t),Le(),V(t)}function Be(){return 19===Gn&&F(ze)}function ze(){if(P(),22===Gn||20===Gn)return!0
if(e.isModifierKind(Gn)){if(P(),M())return!0}else{if(!M())return!1
P()}return 54===Gn||24===Gn||53===Gn&&(P(),54===Gn||24===Gn||20===Gn)}function Ke(e,t,n){var r=W(150,e)
return r.decorators=t,Oe(r,n),r.parameters=ke(16,Re,19,20),r.type=st(),Le(),V(r)}function je(){var e=ar.getStartPos(),t=ee(),n=K(53)
if(17===Gn||25===Gn){var r=W(143,e)
return r.name=t,r.questionToken=n,Fe(54,!1,!1,!1,r),Le(),V(r)}var a=W(141,e)
return a.name=t,a.questionToken=n,a.type=st(),56===Gn&&(a.initializer=vn()),Le(),V(a)}function Je(){for(;e.isModifierKind(Gn);)P()
return Be()}function Ue(){return P(),17===Gn||25===Gn||53===Gn||54===Gn||U()}function qe(){switch(Gn){case 17:case 25:return Me(148)
case 19:return Be()?Ke(ar.getStartPos(),void 0,void 0):je()
case 92:if(F(Ve))return Me(149)
case 9:case 8:return je()
default:if(e.isModifierKind(Gn)){var t=L(We)
if(t)return t}if(e.tokenIsIdentifierOrKeyword(Gn))return je()}}function We(){var e=ar.getStartPos(),t=Cn(),n=Dn()
return Be()?Ke(e,t,n):void 0}function Ve(){return P(),17===Gn||25===Gn}function He(){var e
return B(15)?(e=pe(4,qe),B(16)):e=ve(),e}function Ge(e){var t=W(e)
return 154===e&&B(92),Fe(34,!1,!1,!1,t),V(t)}function Xe(){var e=J()
return 21===Gn?void 0:e}function Qe(){switch(Gn){case 117:case 130:case 128:case 120:case 131:return L(Xe)||we()
case 9:return Ee(163,!0)
case 103:return J()
case 97:var e=function(){var e=W(162)
return P(),V(e)}()
return 124!==Gn||ar.hasPrecedingLineBreak()?e:function(e){P()
var t=W(151,e.pos)
return t.parameterName=e,t.type=it(),V(t)}(e)
case 101:return function(){var e=W(155)
return B(101),e.exprName=be(!0),V(e)}()
case 15:return function(){var e=W(156)
return e.members=He(),V(e)}()
case 19:return function(){var e=W(158)
return e.elementTypes=ke(19,it,19,20),V(e)}()
case 17:return function(){var e=W(161)
return B(17),e.type=it(),B(18),V(e)}()
default:return we()}}function Ye(){switch(Gn){case 117:case 130:case 128:case 120:case 131:case 103:case 97:case 101:case 15:case 19:case 25:case 92:case 9:return!0
case 17:return F($e)
default:return M()}}function $e(){return P(),18===Gn||Ne()||Ye()}function Ze(){for(var e=Qe();!ar.hasPrecedingLineBreak()&&z(19);){B(20)
var t=W(157,e.pos)
t.elementType=e,e=V(t)}return e}function et(e,t,n){var r=t()
if(Gn===n){var a=[r]
for(a.pos=r.pos;z(n);)a.push(t())
a.end=A()
var i=W(e,r.pos)
i.types=a,r=V(i)}return r}function tt(){return et(160,Ze,46)}function nt(){if(P(),18===Gn||22===Gn)return!0
if(M()||e.isModifierKind(Gn)){if(P(),54===Gn||24===Gn||53===Gn||56===Gn||M()||e.isModifierKind(Gn))return!0
if(18===Gn&&(P(),34===Gn))return!0}return!1}function rt(){var e=M()&&L(at),t=it()
if(e){var n=W(151,e.pos)
return n.parameterName=e,n.type=t,V(n)}return t}function at(){var e=Q()
return 124!==Gn||ar.hasPrecedingLineBreak()?void 0:(P(),e)}function it(){return m(10,ot)}function ot(){return 25===Gn||17===Gn&&F(nt)?Ge(153):92===Gn?Ge(154):et(159,tt,47)}function st(){return z(54)?it():void 0}function ct(){switch(Gn){case 97:case 95:case 93:case 99:case 84:case 8:case 9:case 11:case 12:case 17:case 19:case 15:case 87:case 73:case 92:case 39:case 61:case 69:return!0
default:return M()}}function _t(){if(ct())return!0
switch(Gn){case 35:case 36:case 50:case 49:case 78:case 101:case 103:case 41:case 42:case 25:case 119:case 114:return!0
default:return(!x()||90!==Gn)&&bt()>0||M()}}function ut(){var e=C()
e&&p(!1)
for(var t,n=dt();t=K(24);)n=xt(n,t,dt())
return e&&p(!0),n}function lt(e){return 56===Gn||!(ar.hasPrecedingLineBreak()||e&&15===Gn)&&_t()?(B(56),dt()):void 0}function dt(){if(114===Gn&&(b()||F(Zt)))return function(){var e=W(187)
return P(),ar.hasPrecedingLineBreak()||37!==Gn&&!_t()?V(e):(e.asteriskToken=K(37),e.expression=dt(),V(e))}()
var t=function(){var t=17===Gn||25===Gn||118===Gn?F(ft):34===Gn?1:0
if(0!==t){var n=1===t?gt(!0):L(mt)
if(n){var r=!!(256&n.flags),a=Gn
return n.equalsGreaterThanToken=j(34,!1,e.Diagnostics._0_expected,"=>"),n.body=34===a||15===a?yt(r):Q(),V(n)}}}()
if(t)return t
var n=ht(0)
return 69===n.kind&&34===Gn?function(t){e.Debug.assert(34===Gn,"parseSimpleArrowFunctionExpression should only have been called if we had a =>")
var n=W(177,t.pos),r=W(139,t.pos)
return r.name=t,V(r),n.parameters=[r],n.parameters.pos=r.pos,n.parameters.end=r.end,n.equalsGreaterThanToken=j(34,!1,e.Diagnostics._0_expected,"=>"),n.body=yt(!1),V(n)}(n):e.isLeftHandSideExpression(n)&&e.isAssignmentOperator(N())?xt(n,J(),dt()):function(t){var n=K(53)
if(!n)return t
var r=W(185,t.pos)
return r.condition=t,r.questionToken=n,r.whenTrue=m(ir,dt),r.colonToken=j(54,!1,e.Diagnostics._0_expected,e.tokenToString(54)),r.whenFalse=dt(),V(r)}(n)}function pt(){return P(),!ar.hasPrecedingLineBreak()&&M()}function ft(){if(118===Gn){if(P(),ar.hasPrecedingLineBreak())return 0
if(17!==Gn&&25!==Gn)return 0}var t=Gn,n=P()
if(17===t){if(18===n)switch(P()){case 34:case 54:case 15:return 1
default:return 0}return 19===n||15===n?2:22===n?1:M()?54===P()?1:2:0}return e.Debug.assert(25===t),M()?1===Wn.languageVariant?F(function(){var e=P()
if(83===e)switch(P()){case 56:case 27:return!1
default:return!0}else if(24===e)return!0
return!1})?1:0:2:0}function mt(){return gt(!1)}function gt(e){var t=W(177)
return Oe(t,Sn()),Fe(54,!1,!!(256&t.flags),!e,t),t.parameters&&(e||34===Gn||15===Gn)?t:void 0}function yt(e){return 15===Gn?Vt(!1,e,!1):23===Gn||87===Gn||73===Gn||!nn()||15!==Gn&&87!==Gn&&73!==Gn&&55!==Gn&&_t()?e?v(dt):function(e){return m(8,e)}(dt):Vt(!1,e,!0)}function ht(e){return kt(e,Dt())}function vt(e){return 90===e||135===e}function kt(e,t){for(;;){N()
var n=bt()
if(!(38===Gn?n>=e:n>e))break
if(90===Gn&&x())break
if(116===Gn){if(ar.hasPrecedingLineBreak())break
P(),t=Ct(t,it())}else t=xt(t,J(),ht(n))}return t}function bt(){switch(Gn){case 52:return 1
case 51:return 2
case 47:return 3
case 48:return 4
case 46:return 5
case 30:case 31:case 32:case 33:return 6
case 25:case 27:case 28:case 29:case 91:case 90:case 116:return 7
case 43:case 44:case 45:return 8
case 35:case 36:return 9
case 37:case 39:case 40:return 10
case 38:return 11}return-1}function xt(e,t,n){var r=W(184,e.pos)
return r.left=e,r.operatorToken=t,r.right=n,V(r)}function Ct(e,t){var n=W(192,e.pos)
return n.expression=e,n.type=t,V(n)}function Dt(){if(119===Gn&&(D()||F(pt)))return function(){var e=W(181)
return P(),e.expression=St(),V(e)}()
if(function(){switch(Gn){case 35:case 36:case 50:case 49:case 78:case 101:case 103:return!1
case 25:if(1!==Wn.languageVariant)return!1
default:return!0}}()){var t=Tt()
return 38===Gn?kt(bt(),t):t}var n=Gn,r=St()
if(38===Gn){var a=e.skipTrivia(Xn,r.pos)
174===r.kind?T(a,r.end-a,e.Diagnostics.A_type_assertion_expression_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses):T(a,r.end-a,e.Diagnostics.An_unary_expression_with_the_0_operator_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses,e.tokenToString(n))}return r}function St(){switch(Gn){case 35:case 36:case 50:case 49:return(e=W(182)).operator=Gn,P(),e.operand=St(),V(e)
case 78:return function(){var e=W(178)
return P(),e.expression=St(),V(e)}()
case 101:return function(){var e=W(179)
return P(),e.expression=St(),V(e)}()
case 103:return function(){var e=W(180)
return P(),e.expression=St(),V(e)}()
case 25:return function(){var e=W(174)
return B(25),e.type=it(),B(27),e.expression=St(),V(e)}()
default:return Tt()}var e}function Tt(){if(41===Gn||42===Gn)return(t=W(182)).operator=Gn,P(),t.operand=Et(),V(t)
if(1===Wn.languageVariant&&25===Gn&&F(_e))return Pt(!0)
var t,n=Et()
return e.Debug.assert(e.isLeftHandSideExpression(n)),41!==Gn&&42!==Gn||ar.hasPrecedingLineBreak()?n:((t=W(183,n.pos)).operand=n,t.operator=Gn,P(),V(t))}function Et(){return function(e){for(;;)if(e=Ft(e),25!==Gn){if(17!==Gn)return e
var t=W(171,e.pos)
t.expression=e,t.arguments=Lt(),e=V(t)}else{var n=L(Mt)
if(!n)return e
var t=W(171,e.pos)
t.expression=e,t.typeArguments=n,t.arguments=Lt(),e=V(t)}}(95===Gn?At():wt())}function wt(){return Ft(Bt())}function At(){var t=J()
if(17===Gn||21===Gn||19===Gn)return t
var n=W(169,t.pos)
return n.expression=t,n.dotToken=j(21,!1,e.Diagnostics.super_must_be_followed_by_an_argument_list_or_member_access),n.name=xe(!0),V(n)}function Pt(t){var n,r=function(e){var t=ar.getStartPos()
B(25)
var n,r=Ot(),a=pe(13,It)
return 27===Gn?(n=W(238,t),R()):(B(39),e?B(27):(B(27,void 0,!1),R()),n=W(237,t)),n.tagName=r,n.attributes=a,V(n)}(t)
if(238===r.kind){var a=W(236,r.pos)
a.openingElement=r,a.children=function(t){var n=[]
n.pos=ar.getStartPos()
var r=Zn
for(Zn|=16384;26!==(Gn=ar.reScanJsxToken());){if(1===Gn){T(t.pos,t.end-t.pos,e.Diagnostics.JSX_element_0_has_no_corresponding_closing_tag,e.getTextOfNodeFromSourceText(Xn,t))
break}n.push(Nt())}return n.end=ar.getTokenPos(),Zn=r,n}(a.openingElement.tagName),a.closingElement=function(e){var t=W(240)
return B(26),t.tagName=Ot(),e?B(27):(B(27,void 0,!1),R()),V(t)}(t),function e(t,n){return t.kind===n.kind&&(69===t.kind?t.text===n.text:t.right.text===n.right.text&&e(t.left,n.left))}(a.openingElement.tagName,a.closingElement.tagName)||T(a.closingElement.pos,a.closingElement.end-a.closingElement.pos,e.Diagnostics.Expected_corresponding_JSX_closing_tag_for_0,e.getTextOfNodeFromSourceText(Xn,a.openingElement.tagName)),n=V(a)}else e.Debug.assert(237===r.kind),n=r
if(t&&25===Gn){var i=L(function(){return Pt(!0)})
if(i){S(e.Diagnostics.JSX_expressions_must_have_one_parent_element)
var o=W(184,n.pos)
return o.end=i.end,o.left=n,o.right=i,o.operatorToken=H(24,!1,void 0),o.operatorToken.pos=o.operatorToken.end=o.right.pos,o}}return n}function Nt(){switch(Gn){case 239:return function(){var e=W(239,ar.getStartPos())
return Gn=ar.scanJsxToken(),V(e)}()
case 15:return Rt(!1)
case 25:return Pt(!1)}e.Debug.fail("Unknown JSX child kind "+Gn)}function Ot(){O()
for(var e=Y();z(21);){O()
var t=W(136,e.pos)
t.left=e,t.right=Y(),e=V(t)}return e}function Rt(e){var t=W(243)
return B(15),16!==Gn&&(t.expression=dt()),e?B(16):(B(16,void 0,!1),R()),V(t)}function It(){if(15===Gn)return function(){var e=W(242)
return B(15),B(22),e.expression=ut(),B(16),V(e)}()
O()
var e=W(241)
if(e.name=Y(),z(56))switch(Gn){case 9:e.initializer=Se()
break
default:e.initializer=Rt(!0)}return V(e)}function Ft(e){for(;;){var t=K(21)
if(t){var n=W(169,e.pos)
n.expression=e,n.dotToken=t,n.name=xe(!0),e=V(n)}else if(C()||!z(19)){if(11!==Gn&&12!==Gn)return e
var r=W(173,e.pos)
r.tag=e,r.template=11===Gn?Se():Ce(),e=V(r)}else{var a=W(170,e.pos)
if(a.expression=e,20!==Gn&&(a.argumentExpression=y(ut),9===a.argumentExpression.kind||8===a.argumentExpression.kind)){var i=a.argumentExpression
i.text=G(i.text)}B(20),e=V(a)}}}function Lt(){B(17)
var e=he(11,Kt)
return B(18),e}function Mt(){if(z(25)){var e=he(18,it)
if(B(27))return e&&function(){switch(Gn){case 17:case 21:case 18:case 20:case 54:case 23:case 53:case 30:case 32:case 31:case 33:case 51:case 52:case 48:case 46:case 47:case 16:case 1:return!0
case 24:case 15:default:return!1}}()?e:void 0}}function Bt(){switch(Gn){case 8:case 9:case 11:return Se()
case 97:case 95:case 93:case 99:case 84:return J()
case 17:return function(){var e=W(175)
return B(17),e.expression=y(ut),B(18),V(e)}()
case 19:return function(){var e=W(167)
return B(19),ar.hasPrecedingLineBreak()&&(e.flags|=1024),e.elements=he(15,zt),B(20),V(e)}()
case 15:return function(){var e=W(168)
return B(15),ar.hasPrecedingLineBreak()&&(e.flags|=1024),e.properties=he(12,Jt,!0),B(16),V(e)}()
case 118:if(!F($t))break
return Ut()
case 73:return wn(ar.getStartPos(),void 0,void 0,189)
case 87:return Ut()
case 92:return function(){var e=W(172)
return B(92),e.expression=wt(),e.typeArguments=L(Mt),(e.typeArguments||17===Gn)&&(e.arguments=Lt()),V(e)}()
case 39:case 61:if(10===(Gn=ar.reScanSlashToken()))return Se()
break
case 12:return Ce()}return Q(e.Diagnostics.Expression_expected)}function zt(){return 22===Gn?(e=W(188),B(22),e.expression=dt(),V(e)):24===Gn?W(190):dt()
var e}function Kt(){return m(ir,zt)}function jt(e,t,n){return ne(123)?kn(146,e,t,n):ne(129)?kn(147,e,t,n):void 0}function Jt(){var e=ar.getStartPos(),t=Cn(),n=Dn(),r=jt(e,t,n)
if(r)return r
var a=K(37),i=M(),o=ee(),c=K(53)
if(a||17===Gn||25===Gn)return yn(e,t,n,a,o,c)
if(i&&(24===Gn||16===Gn||56===Gn)){var _=W(249,e)
_.name=o,_.questionToken=c
var u=K(56)
return u&&(_.equalsToken=u,_.objectAssignmentInitializer=y(dt)),s(V(_))}var l=W(248,e)
return l.modifiers=n,l.name=o,l.questionToken=c,B(54),l.initializer=y(dt),s(V(l))}function Ut(){var e=C()
e&&p(!1)
var t=W(176)
Oe(t,Dn()),B(87),t.asteriskToken=K(37)
var n=!!t.asteriskToken,r=!!(256&t.flags)
return t.name=n&&r?function(e){return g(10,e)}(qt):n?function(e){return g(2,e)}(qt):r?v(qt):qt(),Fe(54,n,r,!1,t),t.body=Vt(n,r,!1),e&&p(!0),s(V(t))}function qt(){return M()?Q():void 0}function Wt(e,t){var n=W(195)
return B(15,t)||e?(n.statements=pe(1,an),B(16)):n.statements=ve(),V(n)}function Vt(e,t,n,r){var a=b()
d(e)
var i=D()
f(t)
var o=C()
o&&p(!1)
var s=Wt(n,r)
return o&&p(!0),d(a),f(i),s}function Ht(){var e=w()
B(86),B(17)
var t,n=void 0
if(23!==Gn&&(n=102===Gn||108===Gn||74===Gn?pn(!0):function(e){return g(1,e)}(ut)),z(90)){var r=W(203,e)
r.initializer=n,r.expression=y(ut),B(18),t=r}else if(z(135)){var a=W(204,e)
a.initializer=n,a.expression=y(dt),B(18),t=a}else{var i=W(202,e)
i.initializer=n,B(23),23!==Gn&&18!==Gn&&(i.condition=y(ut)),B(23),18!==Gn&&(i.incrementor=y(ut)),B(18),t=i}return t.statement=an(),V(t)}function Gt(e){var t=W(e)
return B(206===e?70:75),U()||(t.label=Q()),q(),V(t)}function Xt(){return 71===Gn?(e=W(244),B(71),e.expression=y(ut),B(54),e.statements=pe(3,an),V(e)):function(){var e=W(245)
return B(77),B(54),e.statements=pe(3,an),V(e)}()
var e}function Qt(){var e=W(212)
return B(100),e.tryBlock=Wt(!1),e.catchClause=72===Gn?function(){var e=W(247)
return B(72),B(17)&&(e.variableDeclaration=dn()),B(18),e.block=Wt(!1),V(e)}():void 0,e.catchClause&&85!==Gn||(B(85),e.finallyBlock=Wt(!1)),V(e)}function Yt(){return P(),e.tokenIsIdentifierOrKeyword(Gn)&&!ar.hasPrecedingLineBreak()}function $t(){return P(),87===Gn&&!ar.hasPrecedingLineBreak()}function Zt(){return P(),(e.tokenIsIdentifierOrKeyword(Gn)||8===Gn)&&!ar.hasPrecedingLineBreak()}function en(){for(;;)switch(Gn){case 102:case 108:case 74:case 87:case 73:case 81:return!0
case 107:case 132:return pt()
case 125:case 126:return P(),!ar.hasPrecedingLineBreak()&&(M()||9===Gn)
case 115:case 118:case 122:case 110:case 111:case 112:if(P(),ar.hasPrecedingLineBreak())return!1
continue
case 134:return 15===P()
case 89:return P(),9===Gn||37===Gn||15===Gn||e.tokenIsIdentifierOrKeyword(Gn)
case 82:if(P(),56===Gn||37===Gn||15===Gn||77===Gn)return!0
continue
case 113:P()
continue
default:return!1}}function tn(){return F(en)}function nn(){switch(Gn){case 55:case 23:case 15:case 102:case 108:case 87:case 73:case 81:case 88:case 79:case 104:case 86:case 75:case 70:case 94:case 105:case 96:case 98:case 100:case 76:case 72:case 85:return!0
case 74:case 82:case 89:return tn()
case 118:case 122:case 107:case 125:case 126:case 132:case 134:return!0
case 112:case 110:case 111:case 113:return tn()||!F(Yt)
default:return _t()}}function rn(){return P(),M()||15===Gn||19===Gn}function an(){switch(Gn){case 23:return e=W(197),B(23),V(e)
case 15:return Wt(!1)
case 102:return mn(ar.getStartPos(),void 0,void 0)
case 108:if(F(rn))return mn(ar.getStartPos(),void 0,void 0)
break
case 87:return gn(ar.getStartPos(),void 0,void 0)
case 73:return En(ar.getStartPos(),void 0,void 0)
case 88:return function(){var e=W(199)
return B(88),B(17),e.expression=y(ut),B(18),e.thenStatement=an(),e.elseStatement=z(80)?an():void 0,V(e)}()
case 79:return function(){var e=W(200)
return B(79),e.statement=an(),B(104),B(17),e.expression=y(ut),B(18),z(23),V(e)}()
case 104:return function(){var e=W(201)
return B(104),B(17),e.expression=y(ut),B(18),e.statement=an(),V(e)}()
case 86:return Ht()
case 75:return Gt(205)
case 70:return Gt(206)
case 94:return function(){var e=W(207)
return B(94),U()||(e.expression=y(ut)),q(),V(e)}()
case 105:return function(){var e=W(208)
return B(105),B(17),e.expression=y(ut),B(18),e.statement=an(),V(e)}()
case 96:return function(){var e=W(209)
B(96),B(17),e.expression=y(ut),B(18)
var t=W(223,ar.getStartPos())
return B(15),t.clauses=pe(2,Xt),B(16),e.caseBlock=V(t),V(e)}()
case 98:return function(){var e=W(211)
return B(98),e.expression=ar.hasPrecedingLineBreak()?void 0:y(ut),q(),V(e)}()
case 100:case 72:case 85:return Qt()
case 76:return function(){var e=W(213)
return B(76),q(),V(e)}()
case 55:return on()
case 118:case 107:case 132:case 125:case 126:case 122:case 74:case 81:case 82:case 89:case 110:case 111:case 112:case 115:case 113:case 134:if(tn())return on()}var e
return function(){var e=ar.getStartPos(),t=y(ut)
if(69===t.kind&&z(54)){var n=W(210,e)
return n.label=t,n.statement=an(),s(V(n))}var r=W(198,e)
return r.expression=t,q(),s(V(r))}()}function on(){var t=w(),n=Cn(),r=Dn()
switch(Gn){case 102:case 108:case 74:return mn(t,n,r)
case 87:return gn(t,n,r)
case 73:return En(t,n,r)
case 107:return function(e,t,n){var r=W(218,e)
return r.decorators=t,Oe(r,n),B(107),r.name=Q(),r.typeParameters=Pe(),r.heritageClauses=An(!1),r.members=He(),V(r)}(t,n,r)
case 132:return function(e,t,n){var r=W(219,e)
return r.decorators=t,Oe(r,n),B(132),r.name=Q(),r.typeParameters=Pe(),B(56),r.type=it(),q(),V(r)}(t,n,r)
case 81:return function(e,t,n){var r=W(220,e)
return r.decorators=t,Oe(r,n),B(81),r.name=Q(),B(15)?(r.members=he(6,Rn),B(16)):r.members=ve(),V(r)}(t,n,r)
case 134:case 125:case 126:return function(e,t,n){var r=n?n.flags:0
if(134===Gn)return Fn(e,t,n)
if(z(126))r|=65536
else if(B(125),9===Gn)return Fn(e,t,n)
return function e(t,n,r,a){var i=W(221,t),o=65536&a
return i.decorators=n,Oe(i,r),i.flags|=a,i.name=Q(),i.body=z(21)?e(w(),void 0,void 0,2|o):In(),V(i)}(e,t,n,r)}(t,n,r)
case 89:return function(e,t,n){B(89)
var r,a=ar.getStartPos()
if(M()&&(r=Q(),24!==Gn&&133!==Gn)){var i=W(224,e)
return i.decorators=t,Oe(i,n),i.name=r,B(56),i.moduleReference=function(){return 127===Gn&&F(Ln)?(e=W(235),B(127),B(17),e.expression=Bn(),B(18),V(e)):be(!1)
var e}(),q(),V(i)}var o=W(225,e)
return o.decorators=t,Oe(o,n),(r||37===Gn||15===Gn)&&(o.importClause=function(e,t){var n=W(226,t)
return e&&(n.name=e),n.name&&!z(24)||(n.namedBindings=37===Gn?function(){var e=W(227)
return B(37),B(116),e.name=Q(),V(e)}():zn(228)),V(n)}(r,a),B(133)),o.moduleSpecifier=Bn(),q(),V(o)}(t,n,r)
case 82:return P(),77===Gn||56===Gn?function(e,t,n){var r=W(230,e)
return r.decorators=t,Oe(r,n),z(56)?r.isExportEquals=!0:B(77),r.expression=dt(),q(),V(r)}(t,n,r):function(e,t,n){var r=W(231,e)
return r.decorators=t,Oe(r,n),z(37)?(B(133),r.moduleSpecifier=Bn()):(r.exportClause=zn(232),(133===Gn||9===Gn&&!ar.hasPrecedingLineBreak())&&(B(133),r.moduleSpecifier=Bn())),q(),V(r)}(t,n,r)
default:if(n||r){var a=H(234,!0,e.Diagnostics.Declaration_expected)
return a.pos=t,a.decorators=n,Oe(a,r),V(a)}}}function sn(e,t,n){return 15!==Gn&&U()?void q():Vt(e,t,!1,n)}function cn(){if(24===Gn)return W(190)
var e=W(166)
return e.dotDotDotToken=K(22),e.name=ln(),e.initializer=Ie(!1),V(e)}function _n(){var e=W(166),t=M(),n=ee()
return t&&54!==Gn?e.name=n:(B(54),e.propertyName=n,e.name=ln()),e.initializer=Ie(!1),V(e)}function un(){return 15===Gn||19===Gn||M()}function ln(){return 19===Gn?(e=W(165),B(19),e.elements=he(10,cn),B(20),V(e)):15===Gn?function(){var e=W(164)
return B(15),e.elements=he(9,_n),B(16),V(e)}():Q()
var e}function dn(){var e=W(214)
return e.name=ln(),e.type=st(),vt(Gn)||(e.initializer=lt(!1)),V(e)}function pn(t){var n=W(215)
switch(Gn){case 102:break
case 108:n.flags|=8192
break
case 74:n.flags|=16384
break
default:e.Debug.fail()}if(P(),135===Gn&&F(fn))n.declarations=ve()
else{var r=x()
l(t),n.declarations=he(8,dn),l(r)}return V(n)}function fn(){return P(),M()&&18===P()}function mn(e,t,n){var r=W(196,e)
return r.decorators=t,Oe(r,n),r.declarationList=pn(!1),q(),s(V(r))}function gn(t,n,r){var a=W(216,t)
a.decorators=n,Oe(a,r),B(87),a.asteriskToken=K(37),a.name=512&a.flags?qt():Q()
var i=!!a.asteriskToken,o=!!(256&a.flags)
return Fe(54,i,o,!1,a),a.body=sn(i,o,e.Diagnostics.or_expected),s(V(a))}function yn(e,t,n,r,a,i,o){var c=W(144,e)
c.decorators=t,Oe(c,n),c.asteriskToken=r,c.name=a,c.questionToken=i
var _=!!r,u=!!(256&c.flags)
return Fe(54,_,u,!1,c),c.body=sn(_,u,o),s(V(c))}function hn(e,t,n,r,a){var i=W(142,e)
return i.decorators=t,Oe(i,n),i.name=r,i.questionToken=a,i.type=st(),i.initializer=n&&64&n.flags?y(vn):m(3,vn),q(),V(i)}function vn(){return lt(!1)}function kn(e,t,n,r){var a=W(e,t)
return a.decorators=n,Oe(a,r),a.name=ee(),Fe(54,!1,!1,!1,a),a.body=sn(!1,!1),V(a)}function bn(e){switch(e){case 112:case 110:case 111:case 113:return!0
default:return!1}}function xn(){var t
if(55===Gn)return!0
for(;e.isModifierKind(Gn);){if(bn(t=Gn))return!0
P()}if(37===Gn)return!0
if($()&&(t=Gn,P()),19===Gn)return!0
if(void 0!==t){if(!e.isKeyword(t)||129===t||123===t)return!0
switch(Gn){case 17:case 25:case 54:case 56:case 53:return!0
default:return U()}}return!1}function Cn(){for(var e;;){var t=w()
if(!z(55))break
e||((e=[]).pos=t)
var n=W(140,t)
n.expression=h(Et),e.push(V(n))}return e&&(e.end=A()),e}function Dn(t){for(var n,r=0;;){var a=ar.getStartPos(),i=Gn
if(74===Gn&&t){if(!L(re))break}else if(!e.isModifierKind(Gn)||!L(ae))break
n||((n=[]).pos=a),r|=e.modifierToFlag(i),n.push(V(W(i,a)))}return n&&(n.flags=r,n.end=ar.getStartPos()),n}function Sn(){var t,n=0
if(118===Gn){var r=ar.getStartPos(),a=Gn
P(),(t=[]).pos=r,n|=e.modifierToFlag(a),t.push(V(W(a,r))),t.flags=n,t.end=ar.getStartPos()}return t}function Tn(){if(23===Gn){var t=W(194)
return P(),V(t)}var n=w(),r=Cn(),a=Dn(!0),i=jt(n,r,a)
return i||(121===Gn?function(t,n,r){var a=W(145,t)
return a.decorators=n,Oe(a,r),B(121),Fe(54,!1,!1,!1,a),a.body=sn(!1,!1,e.Diagnostics.or_expected),s(V(a))}(n,r,a):Be()?Ke(n,r,a):e.tokenIsIdentifierOrKeyword(Gn)||9===Gn||8===Gn||37===Gn||19===Gn?function(t,n,r){var a=K(37),i=ee(),o=K(53)
return a||17===Gn||25===Gn?yn(t,n,r,a,i,o,e.Diagnostics.or_expected):hn(t,n,r,i,o)}(n,r,a):r||a?hn(n,r,a,H(69,!0,e.Diagnostics.Declaration_expected),void 0):void e.Debug.fail("Should not have attempted to parse class member declaration."))}function En(e,t,n){return wn(e,t,n,217)}function wn(e,t,n,r){var a=W(r,e)
return a.decorators=t,Oe(a,n),B(73),a.name=!M()||106===Gn&&F(_e)?void 0:Q(),a.typeParameters=Pe(),a.heritageClauses=An(!0),B(15)?(a.members=pe(5,Tn),B(16)):a.members=ve(),V(a)}function An(e){return On()?pe(20,Pn):void 0}function Pn(){if(83===Gn||106===Gn){var e=W(246)
return e.token=Gn,P(),e.types=he(7,Nn),V(e)}}function Nn(){var e=W(191)
return e.expression=Et(),25===Gn&&(e.typeArguments=ke(18,it,25,27)),V(e)}function On(){return 83===Gn||106===Gn}function Rn(){var e=W(250,ar.getStartPos())
return e.name=ee(),e.initializer=y(vn),V(e)}function In(){var e=W(222,ar.getStartPos())
return B(15)?(e.statements=pe(1,an),B(16)):e.statements=ve(),V(e)}function Fn(e,t,n){var r=W(221,e)
return r.decorators=t,Oe(r,n),134===Gn?(r.name=Q(),r.flags|=2097152):r.name=Se(!0),r.body=In(),V(r)}function Ln(){return 17===P()}function Mn(){return 39===P()}function Bn(){if(9===Gn){var e=Se()
return G(e.text),e}return ut()}function zn(e){var t=W(e)
return t.elements=ke(21,228===e?jn:Kn,15,16),V(t)}function Kn(){return Jn(233)}function jn(){return Jn(229)}function Jn(t){var n=W(t),r=e.isKeyword(Gn)&&!M(),a=ar.getTokenPos(),i=ar.getTextPos(),o=Y()
return 116===Gn?(n.propertyName=o,B(116),r=e.isKeyword(Gn)&&!M(),a=ar.getTokenPos(),i=ar.getTextPos(),n.name=Y()):n.name=o,229===t&&r&&T(a,i-a,e.Diagnostics.Identifier_expected),V(n)}var Un,qn,Wn,Vn,Hn,Gn,Xn,Qn,Yn,$n,Zn,er,tr,nr,rr,ar=e.createScanner(2,!0),ir=5,or=!1
t.parseSourceFile=function(t,n,a,s,c,_){r(0,n,a,s,_=e.ensureScriptKind(t,_))
var u=o(t,a,c,_)
return i(),u},t.fixupParentReferences=c,function(e){e[e.SourceElements=0]="SourceElements",e[e.BlockStatements=1]="BlockStatements",e[e.SwitchClauses=2]="SwitchClauses",e[e.SwitchClauseStatements=3]="SwitchClauseStatements",e[e.TypeMembers=4]="TypeMembers",e[e.ClassMembers=5]="ClassMembers",e[e.EnumMembers=6]="EnumMembers",e[e.HeritageClauseElement=7]="HeritageClauseElement",e[e.VariableDeclarations=8]="VariableDeclarations",e[e.ObjectBindingElements=9]="ObjectBindingElements",e[e.ArrayBindingElements=10]="ArrayBindingElements",e[e.ArgumentExpressions=11]="ArgumentExpressions",e[e.ObjectLiteralMembers=12]="ObjectLiteralMembers",e[e.JsxAttributes=13]="JsxAttributes",e[e.JsxChildren=14]="JsxChildren",e[e.ArrayLiteralMembers=15]="ArrayLiteralMembers",e[e.Parameters=16]="Parameters",e[e.TypeParameters=17]="TypeParameters",e[e.TypeArguments=18]="TypeArguments",e[e.TupleElementTypes=19]="TupleElementTypes",e[e.HeritageClauses=20]="HeritageClauses",e[e.ImportOrExportSpecifiers=21]="ImportOrExportSpecifiers",e[e.JSDocFunctionParameters=22]="JSDocFunctionParameters",e[e.JSDocTypeArguments=23]="JSDocTypeArguments",e[e.JSDocRecordMembers=24]="JSDocRecordMembers",e[e.JSDocTupleTypes=25]="JSDocTupleTypes",e[e.Count=26]="Count"}(tr||(tr={})),function(e){e[e.False=0]="False",e[e.True=1]="True",e[e.Unknown=2]="Unknown"}(nr||(nr={})),function(t){function n(){var e=W(252,ar.getTokenPos())
return B(15),e.type=function(){var e=a()
if(47===Gn){var t=W(256,e.pos)
t.types=p(e),e=V(t)}if(56===Gn){var n=W(263,e.pos)
P(),n.type=e,e=V(n)}return e}(),B(16),c(e),V(e)}function a(){for(var e=function(){switch(Gn){case 37:return e=W(253),P(),V(e)
case 53:return function(){var e=ar.getStartPos()
if(P(),24===Gn||16===Gn||18===Gn||27===Gn||56===Gn||47===Gn){var t=W(254,e)
return V(t)}return(t=W(258,e)).type=a(),V(t)}()
case 17:return function(){var e=W(256)
return P(),e.types=p(a()),B(18),V(e)}()
case 19:return function(){var e=W(257)
return P(),e.types=he(25,a),d(e.types),B(20),V(e)}()
case 49:return function(){var e=W(259)
return P(),e.type=a(),V(e)}()
case 15:return function(){var e=W(260)
return P(),e.members=he(24,l),d(e.members),B(16),V(e)}()
case 87:return function(){var e=W(264)
return P(),B(17),e.parameters=he(22,o),d(e.parameters),B(18),54===Gn&&(P(),e.type=a()),V(e)}()
case 22:return function(){var e=W(265)
return P(),e.type=a(),V(e)}()
case 92:return function(){var e=W(266)
return P(),B(54),e.type=a(),V(e)}()
case 97:return function(){var e=W(267)
return P(),B(54),e.type=a(),V(e)}()
case 117:case 130:case 128:case 120:case 131:case 103:return J()}var e
return function(){var e=W(262)
if(e.name=te(),25===Gn)e.typeArguments=s()
else for(;z(21);){if(25===Gn){e.typeArguments=s()
break}e.name=u(e.name)}return V(e)}()}();;)if(19===Gn){var t=W(255,e.pos)
t.elementType=e,P(),B(20),e=V(t)}else if(53===Gn){var n=W(258,e.pos)
n.type=e,P(),e=V(n)}else{if(49!==Gn)break
var r=W(259,e.pos)
r.type=e,P(),e=V(r)}return e}function o(){var e=W(139)
return e.type=a(),z(56)&&(e.questionToken=W(56)),V(e)}function s(){P()
var e=he(23,a)
return d(e),_(e),B(27),e}function _(t){if(0===Vn.length&&t&&0===t.length){var n=t.pos-"<".length
return T(n,e.skipTrivia(Xn,t.end)+">".length-n,e.Diagnostics.Type_argument_list_cannot_be_empty)}}function u(e){var t=W(136,e.pos)
return t.left=e,t.right=Y(),V(t)}function l(){var e=W(261)
return e.name=te(),54===Gn&&(P(),e.type=a()),V(e)}function d(t){0===Vn.length&&t.hasTrailingComma&&T(t.end-",".length,",".length,e.Diagnostics.Trailing_comma_not_allowed)}function p(t){e.Debug.assert(!!t)
var n=[]
for(n.pos=t.pos,n.push(t);z(47);)n.push(a())
return n.end=ar.getStartPos(),n}function f(t,r){function a(){if(f){var e=W(268,t)
return e.tags=f,V(e,g)}}function i(){e.Debug.assert(55===Gn)
var t=W(55,ar.getTokenPos())
t.end=ar.getTextPos(),l()
var n=d()
n&&function(e){e&&(f||((f=[]).pos=e.pos),f.push(e),f.end=e.end)}(function(e,t){if(t)switch(t.text){case"param":return s(e,t)
case"return":case"returns":return c(e,t)
case"template":return u(e,t)
case"type":return _(e,t)}}(t,n)||function(e,t){var n=W(269,e.pos)
return n.atToken=e,n.tagName=t,V(n)}(t,n))}function o(){if(15===Gn)return n()}function s(t,n){var r,a,i=o()
if(function(){for(;5===Gn||4===Gn;)l()}(),K(19)?(r=d(),a=!0,K(56)&&ut(),B(20)):69===Gn&&(r=d()),r){var s,c
i?c=r:s=r,i||(i=o())
var _=W(270,t.pos)
return _.atToken=t,_.tagName=n,_.preParameterName=s,_.typeExpression=i,_.postParameterName=c,_.isBracketed=a,V(_)}T(ar.getStartPos(),0,e.Diagnostics.Identifier_expected)}function c(t,n){e.forEach(f,function(e){return 271===e.kind})&&T(n.pos,ar.getTokenPos()-n.pos,e.Diagnostics._0_tag_already_specified,n.text)
var r=W(271,t.pos)
return r.atToken=t,r.tagName=n,r.typeExpression=o(),V(r)}function _(t,n){e.forEach(f,function(e){return 272===e.kind})&&T(n.pos,ar.getTokenPos()-n.pos,e.Diagnostics._0_tag_already_specified,n.text)
var r=W(272,t.pos)
return r.atToken=t,r.tagName=n,r.typeExpression=o(),V(r)}function u(t,n){e.forEach(f,function(e){return 273===e.kind})&&T(n.pos,ar.getTokenPos()-n.pos,e.Diagnostics._0_tag_already_specified,n.text)
var r=[]
for(r.pos=ar.getStartPos();;){var a=d()
if(!a)return void T(ar.getStartPos(),0,e.Diagnostics.Identifier_expected)
var i=W(138,a.pos)
if(i.name=a,V(i),r.push(i),24!==Gn)break
l()}var o=W(273,t.pos)
return o.atToken=t,o.tagName=n,o.typeParameters=r,V(o),r.end=o.end,o}function l(){return Gn=ar.scanJSDocToken()}function d(){if(69===Gn){var t=ar.getTokenPos(),n=ar.getTextPos(),r=W(69,t)
return r.text=p.substring(t,n),V(r,n),l(),r}S(e.Diagnostics.Identifier_expected)}var p=Xn
t=t||0
var f,m,g=void 0===r?p.length:t+r
return r=g-t,e.Debug.assert(t>=0),e.Debug.assert(g>=t),e.Debug.assert(g<=p.length),47===p.charCodeAt(t)&&42===p.charCodeAt(t+1)&&42===p.charCodeAt(t+2)&&42!==p.charCodeAt(t+3)&&ar.scanRange(t+3,r-5,function(){var e=!0,t=!0
for(l();1!==Gn;){switch(Gn){case 55:e&&i(),t=!1
break
case 4:e=!0,t=!1
break
case 37:t&&(e=!1),t=!0
break
case 69:e=!1}l()}m=a()}),m}t.isJSDocType=function(){switch(Gn){case 37:case 53:case 17:case 19:case 49:case 15:case 87:case 22:case 92:case 97:return!0}return e.tokenIsIdentifierOrKeyword(Gn)},t.parseJSDocTypeExpressionForTests=function(e,t,a){r(0,e,2,void 0,1),ar.setText(e,t,a),Gn=ar.scan()
var o=n(),s=Vn
return i(),o?{jsDocTypeExpression:o,diagnostics:s}:void 0},t.parseJSDocTypeExpression=n,t.parseIsolatedJSDocComment=function(e,t,n){r(0,e,2,void 0,1),Wn={languageVariant:0,text:e}
var a=f(t,n),o=Vn
return i(),a?{jsDocComment:a,diagnostics:o}:void 0},t.parseJSDocComment=function(e,t,n){var r=Gn,a=Vn.length,i=or,o=f(t,n)
return o&&(o.parent=e),Gn=r,Vn.length=a,or=i,o},t.parseJSDocCommentWorker=f}(rr=t.JSDocParser||(t.JSDocParser={}))}(s||(s={})),function(t){function n(t,n,i,s,c,_){function u(t){var n=""
_&&r(t)&&(n=s.substring(t.pos,t.end)),t._children&&(t._children=void 0),t.jsDocComment&&(t.jsDocComment=void 0),t.pos+=i,t.end+=i,_&&r(t)&&e.Debug.assert(n===c.substring(t.pos,t.end)),a(t,u,l),o(t,_)}function l(e){e._children=void 0,e.pos+=i,e.end+=i
for(var t=0,n=e;t<n.length;t++){u(n[t])}}n?l(t):u(t)}function r(e){switch(e.kind){case 9:case 8:case 69:return!0}return!1}function i(t,n,r,a,i){e.Debug.assert(t.end>=n,"Adjusting an element that was entirely before the change range"),e.Debug.assert(t.pos<=r,"Adjusting an element that was entirely after the change range"),e.Debug.assert(t.pos<=t.end),t.pos=Math.min(t.pos,a),t.end>=r?t.end+=i:t.end=Math.min(t.end,a),e.Debug.assert(t.pos<=t.end),t.parent&&(e.Debug.assert(t.pos>=t.parent.pos),e.Debug.assert(t.end<=t.parent.end))}function o(t,n){if(n){var r=t.pos
a(t,function(t){e.Debug.assert(t.pos>=r),r=t.end}),e.Debug.assert(r<=t.end)}}function c(t,r,s,c,_,u,l,d){function p(t){if(e.Debug.assert(t.pos<=t.end),!(t.pos>s)){var m=t.end
return m>=r?(t.intersectsChange=!0,t._children=void 0,i(t,r,s,c,_),a(t,p,f),void o(t,d)):void e.Debug.assert(r>m)}n(t,!1,_,u,l,d)}function f(t){if(e.Debug.assert(t.pos<=t.end),t.pos>s)n(t,!0,_,u,l,d)
else{var a=t.end
if(a>=r){t.intersectsChange=!0,t._children=void 0,i(t,r,s,c,_)
for(var o=0,f=t;o<f.length;o++){p(f[o])}}else e.Debug.assert(r>a)}}p(t)}function _(t,n){for(var r=n.span.start,a=0;r>0&&1>=a;a++){var i=u(t,r)
e.Debug.assert(i.pos<=r)
var o=i.pos
r=Math.max(0,o-1)}var s=e.createTextSpanFromBounds(r,e.textSpanEnd(n.span)),c=n.newLength+(n.span.start-r)
return e.createTextChangeRange(s,c)}function u(t,n){function r(t){var n=void 0
return a(t,function(t){e.nodeIsPresent(t)&&(n=t)}),n}var i,o=t
if(a(t,function t(r){return e.nodeIsMissing(r)?void 0:r.pos<=n?(r.pos>=o.pos&&(o=r),n<r.end?(a(r,t),!0):(e.Debug.assert(r.end<=n),void(i=r))):(e.Debug.assert(r.pos>n),!0)}),i){var s=function(e){for(;;){var t=r(e)
if(!t)return e
e=t}}(i)
s.pos>o.pos&&(o=s)}return o}function l(t,n,r,a){var i=t.text
if(r&&(e.Debug.assert(i.length-r.span.length+r.newLength===n.length),a||e.Debug.shouldAssert(3))){var o=i.substr(0,r.span.start),s=n.substr(0,r.span.start)
e.Debug.assert(o===s)
var c=i.substring(e.textSpanEnd(r.span),i.length),_=n.substring(e.textSpanEnd(e.textChangeRangeNewSpan(r)),n.length)
e.Debug.assert(c===_)}}function d(t){function n(e){function n(t){return e>=t.pos&&e<t.end&&(a(t,n,s),!0)}function s(t){if(e>=t.pos&&e<t.end)for(var c=0,_=t.length;_>c;c++){var u=t[c]
if(u){if(u.pos===e)return r=t,i=c,o=u,!0
if(u.pos<e&&e<u.end)return a(u,n,s),!0}}return!1}r=void 0,i=-1,o=void 0,a(t,n,s)}var r=t.statements,i=0
e.Debug.assert(i<r.length)
var o=r[i],s=-1
return{currentNode:function(t){return t!==s&&(o&&o.end===t&&i<r.length-1&&(o=r[++i]),o&&o.pos===t||n(t)),s=t,e.Debug.assert(!o||o.pos===t),o}}}var p
t.updateSourceFile=function(t,n,r,a){if(l(t,n,r,a=a||e.Debug.shouldAssert(2)),e.textChangeRangeIsUnchanged(r))return t
if(0===t.statements.length)return s.parseSourceFile(t.fileName,n,t.languageVersion,void 0,!0,t.scriptKind)
var i=t
e.Debug.assert(!i.hasBeenIncrementallyParsed),i.hasBeenIncrementallyParsed=!0
var o=t.text,u=d(t),p=_(t,r)
l(t,n,p,a),e.Debug.assert(p.span.start<=r.span.start),e.Debug.assert(e.textSpanEnd(p.span)===e.textSpanEnd(r.span)),e.Debug.assert(e.textSpanEnd(e.textChangeRangeNewSpan(p))===e.textSpanEnd(e.textChangeRangeNewSpan(r)))
var f=e.textChangeRangeNewSpan(p).length-p.span.length
return c(i,p.span.start,e.textSpanEnd(p.span),e.textSpanEnd(e.textChangeRangeNewSpan(p)),f,o,n,a),s.parseSourceFile(t.fileName,n,t.languageVersion,u,!0,t.scriptKind)},function(e){e[e.Value=-1]="Value"}(p||(p={}))}(c||(c={}))}(ts||(ts={})),function(e){function t(e,t){return 2&(e|t)?2:e&t&8?8:4}function n(t){if(218===t.kind||219===t.kind)return 0
if(e.isConstEnumDeclaration(t))return 2
if(225!==t.kind&&224!==t.kind||2&t.flags){if(222===t.kind){var r=0
return e.forEachChild(t,function(e){switch(n(e)){case 0:return!1
case 2:return r=2,!1
case 1:return r=1,!0}}),r}return 221===t.kind?n(t.body):1}return 0}var r,a
e.bindTime=0,function(e){e[e.NonInstantiated=0]="NonInstantiated",e[e.Instantiated=1]="Instantiated",e[e.ConstEnumOnly=2]="ConstEnumOnly"}(e.ModuleInstanceState||(e.ModuleInstanceState={})),e.ModuleInstanceState,function(e){e[e.Unintialized=1]="Unintialized",e[e.Reachable=2]="Reachable",e[e.Unreachable=4]="Unreachable",e[e.ReportedUnreachable=8]="ReportedUnreachable"}(r||(r={})),e.getModuleInstanceState=n,function(e){e[e.None=0]="None",e[e.IsContainer=1]="IsContainer",e[e.IsBlockScopedContainer=2]="IsBlockScopedContainer",e[e.HasLocals=4]="HasLocals",e[e.IsContainerWithLocals=5]="IsContainerWithLocals"}(a||(a={}))
var i=function(){function r(e,t){return ie++,new re(e,t)}function a(e,t,n){if(e.flags|=n,t.symbol=e,e.declarations||(e.declarations=[]),e.declarations.push(t),1952&n&&!e.exports&&(e.exports={}),6240&n&&!e.members&&(e.members={}),107455&n){var r=e.valueDeclaration;(!r||r.kind!==t.kind&&221===r.kind)&&(e.valueDeclaration=t)}}function i(t){if(t.name){if(e.isAmbientModule(t))return e.isGlobalScopeAugmentation(t)?"__global":'"'+t.name.text+'"'
if(137===t.name.kind){var n=t.name.expression
return e.isStringOrNumericLiteral(n.kind)?n.text:(e.Debug.assert(e.isWellKnownSymbolSyntactically(n)),e.getPropertyNameForKnownSymbolName(n.name.text))}return t.name.text}switch(t.kind){case 145:return"__constructor"
case 153:case 148:return"__call"
case 154:case 149:return"__new"
case 150:return"__index"
case 231:return"__export"
case 230:return t.isExportEquals?"export=":"default"
case 184:switch(e.getSpecialPropertyAssignmentKind(t)){case 2:return"export="
case 1:case 4:return t.left.name.text
case 3:return t.left.expression.name.text}e.Debug.fail("Unknown binary declaration kind")
break
case 216:case 217:return 512&t.flags?"default":void 0
case 264:return e.isJSDocConstructSignature(t)?"__new":"__call"
case 139:e.Debug.assert(264===t.parent.kind)
var r=t.parent
return"p"+e.indexOf(r.parameters,t)}}function o(t){return t.name?e.declarationNameToString(t.name):i(t)}function s(t,n,s,c,_){e.Debug.assert(!e.hasDynamicName(s))
var u,l=512&s.flags&&n?"default":i(s)
if(void 0!==l){if(u=e.hasProperty(t,l)?t[l]:t[l]=r(0,l),l&&788448&c&&(ae[l]=l),u.flags&_){s.name&&(s.name.parent=s)
var d=2&u.flags?e.Diagnostics.Cannot_redeclare_block_scoped_variable_0:e.Diagnostics.Duplicate_identifier_0
e.forEach(u.declarations,function(t){512&t.flags&&(d=e.Diagnostics.A_module_cannot_have_multiple_default_exports)}),e.forEach(u.declarations,function(t){z.bindDiagnostics.push(e.createDiagnosticForNode(t.name||t,d,o(t)))}),z.bindDiagnostics.push(e.createDiagnosticForNode(s.name||s,d,o(s))),u=r(0,l)}}else u=r(0,"__missing")
return a(u,s,c),u.parent=n,u}function c(t,n,r){var a=2&e.getCombinedNodeFlags(t)
if(8388608&n)return 233===t.kind||224===t.kind&&a?s(J.symbol.exports,J.symbol,t,n,r):s(J.locals,void 0,t,n,r)
if(!e.isAmbientModule(t)&&(a||131072&J.flags)){var i=(107455&n?1048576:0)|(793056&n?2097152:0)|(1536&n?4194304:0),o=s(J.locals,void 0,t,i,r)
return o.exportSymbol=s(J.symbol.exports,J.symbol,t,n,r),t.localSymbol=o,o}return s(J.locals,void 0,t,n,r)}function _(t){var n=j,r=J,a=U
j=t
var i=function(t){switch(t.kind){case 189:case 217:case 218:case 220:case 168:case 156:case 260:return 1
case 148:case 149:case 150:case 144:case 143:case 216:case 145:case 146:case 147:case 153:case 264:case 154:case 176:case 177:case 221:case 251:case 219:return 5
case 247:case 202:case 203:case 204:case 223:return 2
case 195:return e.isFunctionLike(t.parent)?0:2}return 0}(t)
1&i?(J=U=t,4&i&&(J.locals={}),p(J)):2&i&&((U=t).locals=void 0)
var o,s,c,_,l,d=t.kind,f=t.flags
f&=-1572865,f&=-62914561,218===d&&(W=!1)
var m=251===d||222===d||e.isFunctionLikeKind(d)
m&&(o=H,s=G,c=X,_=Q,l=V,H=2,V=!1,G=X=Q=void 0),e.isInJavaScriptFile(t)&&t.jsDocComment&&D(t.jsDocComment),u(t),2===H&&e.isFunctionLikeKind(d)&&e.nodeIsPresent(t.body)&&(f|=524288,V&&(f|=1048576)),218===d&&(f=W?262144|f:-262145&f),251===d&&(Y&&(f|=4194304),Z&&(f|=8388608),ee&&(f|=16777216),$&&(f|=33554432),te&&(f|=1073741824)),t.flags=f,m&&(V=l,H=o,G=s,X=c,Q=_),J=r,j=n,U=a}function u(t){if(function(t){switch(H){case 4:var r=e.isStatement(t)&&197!==t.kind||217===t.kind||221===t.kind&&function(e){var t=n(e)
return 1===t||2===t&&K.preserveConstEnums}(t)||220===t.kind&&(!e.isConstEnumDeclaration(t)||K.preserveConstEnums)
if(r){H=8
var a=!K.allowUnreachableCode&&!e.isInAmbientContext(t)&&(196!==t.kind||24576&e.getCombinedNodeFlags(t.declarationList)||e.forEach(t.declarationList.declarations,function(e){return e.initializer}))
a&&C(t,e.Diagnostics.Unreachable_code_detected)}case 8:return!0
default:return!1}}(t))e.forEachChild(t,D)
else switch(t.kind){case 201:(function(e){var t=84===e.expression.kind?4:H,n=99===e.expression.kind?4:H
D(e.expression),H=t
var r=R()
D(e.statement),F(r,n)})(t)
break
case 200:(function(e){var t=H,n=R()
D(e.statement)
var r=99===e.expression.kind?4:t
F(n,r),D(e.expression)})(t)
break
case 202:(function(e){var t=H,n=R()
D(e.initializer),D(e.condition),D(e.incrementor),D(e.statement)
var r=!e.condition||99===e.condition.kind
F(n,r?4:t)})(t)
break
case 203:case 204:(function(e){var t=H,n=R()
D(e.initializer),D(e.expression),D(e.statement),F(n,t)})(t)
break
case 199:l(t)
break
case 207:case 211:(function(e){D(e.expression),207===e.kind&&(V=!0),H=4})(t)
break
case 206:case 205:(function(e){D(e.label),M(e.label,206===e.kind?H:4)&&(H=4)})(t)
break
case 212:d(t)
break
case 209:(function(t){var n=H,r=R()
D(t.expression),D(t.caseBlock)
var a=e.forEach(t.caseBlock.clauses,function(e){return 245===e.kind})
F(r,a&&2!==H?4:n)})(t)
break
case 223:(function(t){for(var n=H,r=0,a=t.clauses;r<a.length;r++){var i=a[r]
H=n,D(i),i.statements.length&&2===H&&K.noFallthroughCasesInSwitch&&C(i,e.Diagnostics.Fallthrough_case_in_switch)}})(t)
break
case 210:(function(e){D(e.label)
var t=O(e.label)
D(e.statement),t&&I(e.label,H)})(t)
break
default:e.forEachChild(t,D)}}function l(e){var n=84===e.expression.kind?4:H,r=99===e.expression.kind?4:H
if(H=n,D(e.expression),D(e.thenStatement),e.elseStatement){var a=H
H=r,D(e.elseStatement),H=t(H,a)}else H=t(H,r)}function d(e){var n=H
D(e.tryBlock)
var r=H
H=n,D(e.catchClause)
var a=H
H=n,D(e.finallyBlock),H=t(r,a)}function p(e){q&&(q.nextContainer=e),q=e}function f(e,t,n){(function(e,t,n){switch(J.kind){case 221:return c(e,t,n)
case 251:return m(e,t,n)
case 189:case 217:return function(e,t,n){return 64&e.flags?s(J.symbol.exports,J.symbol,e,t,n):s(J.symbol.members,J.symbol,e,t,n)}(e,t,n)
case 220:return s(J.symbol.exports,J.symbol,e,t,n)
case 156:case 168:case 218:case 260:return s(J.symbol.members,J.symbol,e,t,n)
case 153:case 154:case 148:case 149:case 150:case 144:case 143:case 145:case 146:case 147:case 216:case 176:case 177:case 264:case 219:s(J.locals,void 0,e,t,n)}})(e,t,n)}function m(t,n,r){return e.isExternalModule(z)?c(t,n,r):s(z.locals,void 0,t,n,r)}function g(t){e.isInAmbientContext(t)&&!function(e){var t=251===e.kind?e:e.body
if(251===t.kind||222===t.kind)for(var n=0,r=t.statements;n<r.length;n++){var a=r[n]
if(231===a.kind||230===a.kind)return!0}return!1}(t)?t.flags|=131072:t.flags&=-131073}function y(t){if(g(t),e.isAmbientModule(t))2&t.flags&&C(t,e.Diagnostics.export_modifier_cannot_be_applied_to_ambient_modules_and_module_augmentations_since_they_are_always_visible),f(t,512,106639)
else{var r=n(t)
if(0===r)f(t,1024,0)
else if(f(t,512,106639),304&t.symbol.flags)t.symbol.constEnumOnlyModule=!1
else{var a=2===r
void 0===t.symbol.constEnumOnlyModule?t.symbol.constEnumOnlyModule=a:t.symbol.constEnumOnlyModule=t.symbol.constEnumOnlyModule&&a}}}function h(e,t,n){a(r(t,n),e,t)}function v(t,n,r){switch(U.kind){case 221:c(t,n,r)
break
case 251:if(e.isExternalModule(J)){c(t,n,r)
break}default:U.locals||(U.locals={},p(U)),s(U.locals,void 0,t,n,r)}}function k(t){ne&&t.originalKeywordKind>=106&&t.originalKeywordKind<=114&&!e.isIdentifierName(t)&&(z.parseDiagnostics.length||z.bindDiagnostics.push(e.createDiagnosticForNode(t,function(t){return e.getContainingClass(t)?e.Diagnostics.Identifier_expected_0_is_a_reserved_word_in_strict_mode_Class_definitions_are_automatically_in_strict_mode:z.externalModuleIndicator?e.Diagnostics.Identifier_expected_0_is_a_reserved_word_in_strict_mode_Modules_are_automatically_in_strict_mode:e.Diagnostics.Identifier_expected_0_is_a_reserved_word_in_strict_mode}(t),e.declarationNameToString(t))))}function b(t,n){if(n&&69===n.kind){var r=n
if(function(e){return 69===e.kind&&("eval"===e.text||"arguments"===e.text)}(r)){var a=e.getErrorSpanForNode(z,n)
z.bindDiagnostics.push(e.createFileDiagnostic(z,a.start,a.length,function(t){return e.getContainingClass(t)?e.Diagnostics.Invalid_use_of_0_Class_definitions_are_automatically_in_strict_mode:z.externalModuleIndicator?e.Diagnostics.Invalid_use_of_0_Modules_are_automatically_in_strict_mode:e.Diagnostics.Invalid_use_of_0_in_strict_mode}(t),r.text))}}}function x(e){ne&&b(e,e.name)}function C(t,n,r,a,i){var o=e.getSpanOfTokenAtPosition(z,t.pos)
z.bindDiagnostics.push(e.createFileDiagnostic(z,o.start,o.length,n,r,a,i))}function D(e){if(e){e.parent=j
var t=ne
t||S(e),w(e),_(e),ne=t}}function S(t){switch(t.kind){case 251:case 222:return void T(t.statements)
case 195:return void(e.isFunctionLike(t.parent)&&T(t.statements))
case 217:case 189:return void(ne=!0)}}function T(t){for(var n=0,r=t;n<r.length;n++){var a=r[n]
if(!e.isPrologueDirective(a))return
if(E(a))return void(ne=!0)}}function E(t){var n=e.getTextOfNodeFromSourceText(z.text,t.expression)
return'"use strict"'===n||"'use strict'"===n}function w(t){switch(t.kind){case 69:return k(t)
case 184:if(e.isInJavaScriptFile(t))switch(e.getSpecialPropertyAssignmentKind(t)){case 1:(function(e){P(e),s(z.symbol.exports,z.symbol,e.left,7340036,0)})(t)
break
case 2:(function(e){P(e),s(z.symbol.exports,z.symbol,e,7340548,0)})(t)
break
case 3:(function(e){var t=e.left,n=t.expression,r=n.expression
t.parent=e,r.parent=n,n.parent=t
var a=J.locals[r.text]
a&&16&a.flags&&(a.members||(a.members={}),s(a.members,a,t,4,107451))})(t)
break
case 4:(function(e){176!==J.kind&&216!==J.kind||(J.symbol.members=J.symbol.members||{},s(J.symbol.members,J.symbol,e,4,107451))})(t)
break
case 0:break
default:e.Debug.fail("Unknown special property assignment kind")}return function(t){ne&&e.isLeftHandSideExpression(t.left)&&e.isAssignmentOperator(t.operatorToken.kind)&&b(t,t.left)}(t)
case 247:return function(e){ne&&e.variableDeclaration&&b(e,e.variableDeclaration.name)}(t)
case 178:return function(t){if(ne&&69===t.expression.kind){var n=e.getErrorSpanForNode(z,t.expression)
z.bindDiagnostics.push(e.createFileDiagnostic(z,n.start,n.length,e.Diagnostics.delete_cannot_be_called_on_an_identifier_in_strict_mode))}}(t)
case 8:return function(t){ne&&32768&t.flags&&z.bindDiagnostics.push(e.createDiagnosticForNode(t,e.Diagnostics.Octal_literals_are_not_allowed_in_strict_mode))}(t)
case 183:return function(e){ne&&b(e,e.operand)}(t)
case 182:return function(e){ne&&(41!==e.operator&&42!==e.operator||b(e,e.operand))}(t)
case 208:return function(t){ne&&C(t,e.Diagnostics.with_statements_are_not_allowed_in_strict_mode)}(t)
case 162:return void(W=!0)
case 151:return function(e){var t=e.parameterName,n=e.type
t&&69===t.kind&&k(t),t&&162===t.kind&&(W=!0),D(n)}(t)
case 138:return f(t,262144,530912)
case 139:return function(t){if(e.isDeclarationFile(z)||e.isInAmbientContext(t)||!e.nodeIsDecorated(t)||(Z=!0,ee=!0),ne&&b(t,t.name),e.isBindingPattern(t.name)?h(t,1,function(t){return"__"+e.indexOf(t.parent.parameters,t)}(t)):f(t,1,107455),e.isParameterPropertyDeclaration(t)){var n=t.parent.parent
s(n.symbol.members,n.symbol,t,4,107455)}}(t)
case 214:case 166:return function(t){ne&&b(t,t.name),e.isBindingPattern(t.name)||(e.isBlockOrCatchScoped(t)?function(e){v(e,2,107455)}(t):e.isParameterDeclaration(t)?f(t,1,107455):f(t,1,107454))}(t)
case 142:case 141:case 261:return N(t,4|(t.questionToken?536870912:0),107455)
case 248:case 249:return N(t,4,107455)
case 250:return N(t,8,107455)
case 242:return void(te=!0)
case 148:case 149:case 150:return f(t,131072,0)
case 144:case 143:return N(t,8192|(t.questionToken?536870912:0),e.isObjectLiteralMethod(t)?107455:99263)
case 216:return function(t){return e.isDeclarationFile(z)||e.isInAmbientContext(t)||e.isAsyncFunctionLike(t)&&($=!0),x(t),f(t,16,106927)}(t)
case 145:return f(t,16384,0)
case 146:return N(t,32768,41919)
case 147:return N(t,65536,74687)
case 153:case 154:case 264:return function(e){var t=r(131072,i(e))
a(t,e,131072)
var n,o=r(2048,"__type")
a(o,e,2048),o.members=((n={})[t.name]=t,n)}(t)
case 156:case 260:return h(t,2048,"__type")
case 168:return function(t){var n
if(function(e){e[e.Property=1]="Property",e[e.Accessor=2]="Accessor"}(n||(n={})),ne)for(var r={},a=0,i=t.properties;a<i.length;a++){var o=i[a]
if(69===o.name.kind){var s=o.name,c=248===o.kind||249===o.kind||144===o.kind?1:2,_=r[s.text]
if(_){if(1===c&&1===_){var u=e.getErrorSpanForNode(z,s)
z.bindDiagnostics.push(e.createFileDiagnostic(z,u.start,u.length,e.Diagnostics.An_object_literal_cannot_have_multiple_properties_with_the_same_name_in_strict_mode))}}else r[s.text]=c}}return h(t,4096,"__object")}(t)
case 176:case 177:return function(t){e.isDeclarationFile(z)||e.isInAmbientContext(t)||e.isAsyncFunctionLike(t)&&($=!0),x(t)
var n=t.name?t.name.text:"__function"
return h(t,16,n)}(t)
case 171:e.isInJavaScriptFile(t)&&function(t){!z.commonJsModuleIndicator&&e.isRequireCall(t,!1)&&P(t)}(t)
break
case 189:case 217:return function(t){if(e.isDeclarationFile(z)||e.isInAmbientContext(t)||(void 0!==e.getClassExtendsHeritageClauseElement(t)&&(Y=!0),e.nodeIsDecorated(t)&&(Z=!0)),217===t.kind)v(t,32,899519)
else{var n=t.name?t.name.text:"__class"
h(t,32,n),t.name&&(ae[t.name.text]=t.name.text)}var a=t.symbol,i=r(134217732,"prototype")
e.hasProperty(a.exports,i.name)&&(t.name&&(t.name.parent=t),z.bindDiagnostics.push(e.createDiagnosticForNode(a.exports[i.name].declarations[0],e.Diagnostics.Duplicate_identifier_0,i.name))),a.exports[i.name]=i,i.parent=a}(t)
case 218:return v(t,64,792960)
case 219:return v(t,524288,793056)
case 220:return function(t){return e.isConst(t)?v(t,128,899967):v(t,256,899327)}(t)
case 221:return y(t)
case 224:case 227:case 229:case 233:return f(t,8388608,8388608)
case 226:return function(e){e.name&&f(e,8388608,8388608)}(t)
case 231:return function(e){J.symbol&&J.symbol.exports?e.exportClause||s(J.symbol.exports,J.symbol,e,1073741824,0):h(e,1073741824,i(e))}(t)
case 230:return function(e){var t=230===e.kind?e.expression:e.right
J.symbol&&J.symbol.exports?69===t.kind&&230===e.kind?s(J.symbol.exports,J.symbol,e,8388608,8496063):s(J.symbol.exports,J.symbol,e,4,8496063):h(e,8388608,i(e))}(t)
case 251:return g(z),void(e.isExternalModule(z)&&A())}}function A(){h(z,512,'"'+e.removeFileExtension(z.fileName)+'"')}function P(e){z.commonJsModuleIndicator||(z.commonJsModuleIndicator=e,A())}function N(t,n,r){return e.isDeclarationFile(z)||e.isInAmbientContext(t)||(e.isAsyncFunctionLike(t)&&($=!0),e.nodeIsDecorated(t)&&(Z=!0)),e.hasDynamicName(t)?h(t,n,"__computed"):f(t,n,r)}function O(t){return B(),!e.hasProperty(X,t.text)&&(X[t.text]=G.push(1)-1,!0)}function R(){B()
var e=G.push(1)-1
return Q.push(e),e}function I(t,n){var r=X[t.text]
e.Debug.assert(void 0!==r),e.Debug.assert(G.length==r+1),X[t.text]=void 0,L(G.pop(),n,t)}function F(t,n){G.length!==t+1&&e.Debug.assert(!1,"Label stack: "+G.length+", index:"+t)
var r=Q.pop()
t!==r&&e.Debug.assert(!1,"i: "+r+", index: "+t),L(G.pop(),n,void 0)}function L(n,r,a){1===n?(a&&!K.allowUnusedLabels&&z.bindDiagnostics.push(e.createDiagnosticForNode(a,e.Diagnostics.Unused_label)),H=r):H=t(n,r)}function M(n,r){B()
var a=n?X[n.text]:e.lastOrUndefined(Q)
if(void 0===a)return!1
var i=G[a]
return G[a]=1===i?r:t(i,r),!0}function B(){X||(H=2,X={},G=[],Q=[])}var z,K,j,J,U,q,W,V,H,G,X,Q,Y,$,Z,ee,te,ne,re,ae,ie=0
return function(t,n){K=n,ne=!!(z=t).externalModuleIndicator,ae={},re=e.objectAllocator.getSymbolConstructor(),z.locals||(D(z),z.symbolCount=ie,z.classifiableNames=ae),z=void 0,K=void 0,j=void 0,J=void 0,U=void 0,q=void 0,W=!1,V=!1,G=void 0,X=void 0,Q=void 0,Y=!1,$=!1,Z=!1,ee=!1,te=!1}}()
e.bindSourceFile=function(t,n){var r=(new Date).getTime()
i(t,n),e.bindTime+=(new Date).getTime()-r}}(ts||(ts={})),function(e){function t(e){return e.id||(e.id=a,a++),e.id}function n(e){return e.id||(e.id=r,r++),e.id}var r=1,a=1,i=1
e.getNodeId=t,e.checkTime=0,e.getSymbolId=n,e.createTypeChecker=function(r,a){function o(t,n,r,a,i){var o=t?e.createDiagnosticForNode(t,n,r,a,i):e.createCompilerDiagnostic(n,r,a,i)
R_.add(o)}function s(e,t){return vc++,new mc(e,t)}function c(e,t){t.mergeId||(t.mergeId=i,i++),w_[t.mergeId]=e}function _(e){var t=s(33554432|e.flags,e.name)
return t.declarations=e.declarations.slice(0),t.parent=e.parent,e.valueDeclaration&&(t.valueDeclaration=e.valueDeclaration),e.constEnumOnlyModule&&(t.constEnumOnlyModule=!0),e.members&&(t.members=l(e.members)),e.exports&&(t.exports=l(e.exports)),c(t,e),t}function u(t,n){if(t.flags&function(e){var t=0
return 2&e&&(t|=107455),1&e&&(t|=107454),4&e&&(t|=107455),8&e&&(t|=107455),16&e&&(t|=106927),32&e&&(t|=899519),64&e&&(t|=792960),256&e&&(t|=899327),128&e&&(t|=899967),512&e&&(t|=106639),8192&e&&(t|=99263),32768&e&&(t|=41919),65536&e&&(t|=74687),262144&e&&(t|=530912),524288&e&&(t|=793056),8388608&e&&(t|=8388608),t}(n.flags)){var r=2&t.flags||2&n.flags?e.Diagnostics.Cannot_redeclare_block_scoped_variable_0:e.Diagnostics.Duplicate_identifier_0
e.forEach(n.declarations,function(e){o(e.name?e.name:e,r,fe(n))}),e.forEach(t.declarations,function(e){o(e.name?e.name:e,r,fe(n))})}else 512&n.flags&&512&t.flags&&t.constEnumOnlyModule&&!n.constEnumOnlyModule&&(t.constEnumOnlyModule=!1),t.flags|=n.flags,n.valueDeclaration&&(!t.valueDeclaration||221===t.valueDeclaration.kind&&221!==n.valueDeclaration.kind)&&(t.valueDeclaration=n.valueDeclaration),e.forEach(n.declarations,function(e){t.declarations.push(e)}),n.members&&(t.members||(t.members={}),d(t.members,n.members)),n.exports&&(t.exports||(t.exports={}),d(t.exports,n.exports)),c(t,n)}function l(t){var n={}
for(var r in t)e.hasProperty(t,r)&&(n[r]=t[r])
return n}function d(t,n){for(var r in n)if(e.hasProperty(n,r))if(e.hasProperty(t,r)){var a=t[r]
33554432&a.flags||(t[r]=a=_(a)),u(a,n[r])}else t[r]=n[r]}function p(t){var n=t.parent
if(n.symbol.valueDeclaration===n)if(e.isGlobalScopeAugmentation(n))d(k_,n.symbol.exports)
else{var r=L(t,t,e.Diagnostics.Invalid_module_name_in_augmentation_module_0_cannot_be_found)
if(!r)return
1536&(r=M(r)).flags?u(r=33554432&r.flags?r:_(r),n.symbol):o(t,e.Diagnostics.Cannot_augment_module_0_because_it_resolves_to_a_non_module_entity,t.text)}else e.Debug.assert(n.symbol.declarations.length>1)}function f(e){if(67108864&e.flags)return e
var t=n(e)
return A_[t]||(A_[t]={})}function m(e){var n=t(e)
return P_[n]||(P_[n]={})}function g(t){return 251===t.kind&&!e.isExternalOrCommonJsModule(t)}function y(t,n,r){if(r&&e.hasProperty(t,n)){var a=t[n]
if(e.Debug.assert(0==(16777216&a.flags),"Should never get an instantiated symbol here."),a.flags&r)return a
if(8388608&a.flags){var i=A(a)
if(i===Pc||i.flags&r)return a}}}function h(t,n){var a=e.getSourceFileOfNode(t),i=e.getSourceFileOfNode(n)
if(a!==i){if(Dc||!xc.outFile&&!xc.out)return!0
var o=r.getSourceFiles()
return e.indexOf(o,a)<=e.indexOf(o,i)}return t.pos<=n.pos?214!==t.kind||!function(t,n){var r=e.getEnclosingBlockScopeContainer(t)
return 196===t.parent.parent.kind||202===t.parent.parent.kind?k(n,t,r):204===t.parent.parent.kind||203===t.parent.parent.kind?k(n,t.parent.parent.expression,r):void 0}(t,n):function(t,n){for(var r=e.getEnclosingBlockScopeContainer(t),a=n;a;){if(a===r)return!1
if(e.isFunctionLike(a))return!0
if(a.parent&&142===a.parent.kind&&0==(64&a.parent.flags)&&a.parent.initializer===a)return!0
a=a.parent}return!1}(t,n)}function v(t,n,r,a,i){var s,c,_,u,l=t
e:for(;t;){if(t.locals&&!g(t)&&(s=y(t.locals,n,r))){var d=!0
if(e.isFunctionLike(t)&&c&&c!==t.body&&(r&s.flags&793056&&268!==c.kind&&(d=!!(262144&s.flags)&&(c===t.type||139===c.kind||138===c.kind)),107455&r&&1&s.flags&&(d=139===c.kind||c===t.type&&139===s.valueDeclaration.kind)),d)break e
s=void 0}switch(t.kind){case 251:if(!e.isExternalOrCommonJsModule(t))break
case 221:var p=W(t).exports
if(251===t.kind||e.isAmbientModule(t)){if(s=p.default){var f=e.getLocalSymbolForExportDefault(s)
if(f&&s.flags&r&&f.name===n)break e
s=void 0}if(e.hasProperty(p,n)&&8388608===p[n].flags&&e.getDeclarationOfKind(p[n],233))break}if(s=y(p,n,8914931&r))break e
break
case 220:if(s=y(W(t).exports,n,8&r))break e
break
case 142:case 141:if(e.isClassLike(t.parent)&&!(64&t.flags)){var m=X(t.parent)
m&&m.locals&&y(m.locals,n,107455&r)&&(_=t)}break
case 217:case 189:case 218:if(s=y(W(t).members,n,793056&r)){if(c&&64&c.flags)return void o(l,e.Diagnostics.Static_members_cannot_reference_class_type_parameters)
break e}if(189===t.kind&&32&r){var v=t.name
if(v&&n===v.text){s=t.symbol
break e}}break
case 137:if(u=t.parent.parent,(e.isClassLike(u)||218===u.kind)&&(s=y(W(u).members,n,793056&r)))return void o(l,e.Diagnostics.A_computed_property_name_cannot_reference_a_type_parameter_from_its_containing_type)
break
case 144:case 143:case 145:case 146:case 147:case 216:case 177:if(3&r&&"arguments"===n){s=wc
break e}break
case 176:if(3&r&&"arguments"===n){s=wc
break e}if(16&r){var k=t.name
if(k&&n===k.text){s=t.symbol
break e}}break
case 140:t.parent&&139===t.parent.kind&&(t=t.parent),t.parent&&e.isClassElement(t.parent)&&(t=t.parent)}c=t,t=t.parent}if(s||(s=y(k_,n,r)),s){if(a){if(_){var b=_.name
return void o(l,e.Diagnostics.Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor,e.declarationNameToString(b),"string"==typeof i?i:e.declarationNameToString(i))}if(2&r){var x=H(s)
2&x.flags&&function(t,n){e.Debug.assert(0!=(2&t.flags))
var r=e.forEach(t.declarations,function(t){return e.isBlockOrCatchScoped(t)?t:void 0})
e.Debug.assert(void 0!==r,"Block-scoped variable declaration is undefined"),h(e.getAncestor(r,214),n)||o(n,e.Diagnostics.Block_scoped_variable_0_used_before_its_declaration,e.declarationNameToString(r.name))}(x,l)}}return s}a&&(function(t,n,r){if(!t||69===t.kind&&cs(t)||Pr(t))return!1
for(var a=e.getThisContainer(t,!0),i=a;i;){if(e.isClassLike(i.parent)){var s=W(i.parent)
if(!s)break
var c=je(s)
if(Pt(c,n))return o(t,e.Diagnostics.Cannot_find_name_0_Did_you_mean_the_static_member_1_0,"string"==typeof r?r:e.declarationNameToString(r),fe(s)),!0
if(i===a&&!(64&i.flags)){var _=rt(s).thisType
if(Pt(_,n))return o(t,e.Diagnostics.Cannot_find_name_0_Did_you_mean_the_instance_member_this_0,"string"==typeof r?r:e.declarationNameToString(r)),!0}}i=i.parent}return!1}(l,n,i)||o(l,a,"string"==typeof i?i:e.declarationNameToString(i)))}function k(t,n,r){if(!n)return!1
for(var a=t;a&&a!==r&&!e.isFunctionLike(a);a=a.parent)if(a===n)return!0
return!1}function b(t){if(e.isAliasSymbolDeclaration(t)){if(224===t.kind)return t
for(;t&&225!==t.kind;)t=t.parent
return t}}function x(t){return e.forEach(t.declarations,function(t){return e.isAliasSymbolDeclaration(t)?t:void 0})}function C(t){return 235===t.moduleReference.kind?M(F(t,e.getExternalModuleImportEqualsDeclarationExpression(t))):O(t.moduleReference,t)}function D(t){var n=F(t,t.parent.moduleSpecifier)
if(n){var r=n.exports["export="]?Pt(je(n.exports["export="]),"default"):w(n.exports.default)
if(r||Sc){if(!r&&Sc)return M(n)||w(n)}else o(t.name,e.Diagnostics.Module_0_has_no_default_export,fe(n))
return r}}function S(t,n){if(794592&t.flags)return t
var r=s(t.flags|n.flags,t.name)
return r.declarations=e.concatenate(t.declarations,n.declarations),r.parent=t.parent||n.parent,t.valueDeclaration&&(r.valueDeclaration=t.valueDeclaration),n.members&&(r.members=n.members),t.exports&&(r.exports=t.exports),r}function T(t,n){var r=F(t,t.moduleSpecifier),a=B(r,t.moduleSpecifier)
if(a){var i=n.propertyName||n.name
if(i.text){var s
s=r&&r.exports&&r.exports["export="]?Pt(je(a),i.text):function(e,t){if(3&e.flags){var n=e.valueDeclaration.type
if(n)return w(Pt(Rn(n),t))}}(a,i.text)
var c=function(t,n){if(1536&t.flags){var r=K(t)
if(e.hasProperty(r,n))return w(r[n])}}(a,i.text),_=c&&s?S(s,c):c||s
return _||o(i,e.Diagnostics.Module_0_has_no_exported_member_1,R(r),e.declarationNameToString(i)),_}}}function E(e){switch(e.kind){case 224:return C(e)
case 226:return D(e)
case 227:return function(e){var t=e.parent.parent.moduleSpecifier
return B(F(e,t),t)}(e)
case 229:return function(e){return T(e.parent.parent.parent,e)}(e)
case 233:return function(e){return e.parent.parent.moduleSpecifier?T(e.parent.parent,e):I(e.propertyName||e.name,901119)}(e)
case 230:return function(e){return I(e.expression,901119)}(e)}}function w(e){return e&&8388608&e.flags&&!(901119&e.flags)?A(e):e}function A(t){e.Debug.assert(0!=(8388608&t.flags),"Should only get Alias here.")
var n=f(t)
if(n.target)n.target===Nc&&(n.target=Pc)
else{n.target=Nc
var r=x(t),a=E(r)
n.target===Nc?n.target=a||Pc:o(r,e.Diagnostics.Circular_definition_of_import_alias_0,fe(t))}return n.target}function P(e){var t=W(e),n=A(t)
n&&(n===Pc&&xc.isolatedModules||n!==Pc&&107455&n.flags&&!Ds(n))&&N(t)}function N(t){var n=f(t)
if(!n.referenced){n.referenced=!0
var r=x(t)
230===r.kind?vi(r.expression):233===r.kind?vi(r.propertyName||r.name):e.isInternalModuleImportEqualsDeclaration(r)&&vi(r.moduleReference)}}function O(t,n){return n||(n=e.getAncestor(t,224),e.Debug.assert(void 0!==n)),69===t.kind&&e.isRightSideOfQualifiedNameOrPropertyAccess(t)&&(t=t.parent),69===t.kind||136===t.parent.kind?I(t,1536):(e.Debug.assert(224===t.parent.kind),I(t,901119))}function R(e){return e.parent?R(e.parent)+"."+fe(e):fe(e)}function I(t,n,r){if(!e.nodeIsMissing(t)){var a
if(69===t.kind){var i=1536===n?e.Diagnostics.Cannot_find_namespace_0:e.Diagnostics.Cannot_find_name_0
if(!(a=v(t,t.text,n,r?void 0:i,t)))return}else if(136===t.kind||169===t.kind){var s=136===t.kind?t.left:t.expression,c=136===t.kind?t.right:t.name,_=I(s,1536,r)
if(!_||_===Pc||e.nodeIsMissing(c))return
if(!(a=y(K(_),c.text,n)))return void(r||o(c,e.Diagnostics.Module_0_has_no_exported_member_1,R(_),e.declarationNameToString(c)))}else e.Debug.fail("Unknown entity name kind.")
return e.Debug.assert(0==(16777216&a.flags),"Should never get an instantiated symbol here."),a.flags&n?a:A(a)}}function F(t,n){return L(t,n,e.Diagnostics.Cannot_find_module_0)}function L(t,n,a){if(9===n.kind){var i=n,s=e.escapeIdentifier(i.text)
if(void 0!==s){if(!e.isExternalModuleNameRelative(s)){var c=y(k_,'"'+s+'"',512)
if(c)return q(c)}var _=e.getResolvedModule(e.getSourceFileOfNode(t),i.text),u=_&&r.getSourceFile(_.resolvedFileName)
return u?u.symbol?q(u.symbol):void(a&&o(i,e.Diagnostics.File_0_is_not_a_module,u.fileName)):void(a&&o(i,a,s))}}}function M(e){return e&&q(w(e.exports["export="]))||e}function B(t,n){var r=M(t)
return!r||1539&r.flags||(o(n,e.Diagnostics.Module_0_resolves_to_a_non_module_entity_and_cannot_be_imported_using_this_construct,fe(t)),r=void 0),r}function z(e){return void 0!==e.exports["export="]}function K(e){return 1536&e.flags?j(e):e.exports||bc}function j(e){var t=f(e)
return t.resolvedExports||(t.resolvedExports=U(e))}function J(t,n,r,a){for(var i in n)"default"===i||e.hasProperty(t,i)?r&&a&&"default"!==i&&e.hasProperty(t,i)&&w(t[i])!==w(n[i])&&(r[i].exportsWithDuplicate?r[i].exportsWithDuplicate.push(a):r[i].exportsWithDuplicate=[a]):(t[i]=n[i],r&&a&&(r[i]={specifierText:e.getTextOfNode(a.moduleSpecifier)}))}function U(t){var n=[]
return function t(r){if(r&&1952&r.flags&&!e.contains(n,r)){n.push(r)
var a=l(r.exports),i=r.exports.__export
if(i){for(var o={},s={},c=0,_=i.declarations;c<_.length;c++)J(o,t(F(m=_[c],m.moduleSpecifier)),s,m)
for(var u in s){var d=s[u].exportsWithDuplicate
if("export="!==u&&d&&d.length&&!e.hasProperty(a,u))for(var p=0,f=d;p<f.length;p++){var m=f[p]
R_.add(e.createDiagnosticForNode(m,e.Diagnostics.Module_0_has_already_exported_a_member_named_1_Consider_explicitly_re_exporting_to_resolve_the_ambiguity,s[u].specifierText,u))}}J(a,o)}return a}}(t)||t.exports}function q(e){var t
return e&&e.mergeId&&(t=w_[e.mergeId])?t:e}function W(e){return q(e.symbol)}function V(e){return q(e.parent)}function H(e){return e&&0!=(1048576&e.flags)?q(e.exportSymbol):e}function G(e){return 16777216&e.flags?G(f(e).target):!!(107455&e.flags)||!!(8388608&e.flags)&&0!=(107455&A(e).flags)}function X(t){for(var n=0,r=t.members;n<r.length;n++){var a=r[n]
if(145===a.kind&&e.nodeIsPresent(a.body))return a}}function Q(e){var t=new gc(Ac,e)
return t.id=hc,hc++,t}function Y(e,t){var n=Q(e)
return n.intrinsicName=t,n}function $(e,t){var n=Q(e)
return n.symbol=t,n}function Z(e){return 95===e.charCodeAt(0)&&95===e.charCodeAt(1)&&95!==e.charCodeAt(2)&&64!==e.charCodeAt(2)}function ee(t){var n
for(var r in t)if(e.hasProperty(t,r)&&!Z(r)){n||(n=[])
var a=t[r]
G(a)&&n.push(a)}return n||kc}function te(e,t,n,r,a,i){return e.members=t,e.properties=ee(t),e.callSignatures=n,e.constructSignatures=r,a&&(e.stringIndexType=a),i&&(e.numberIndexType=i),e}function ne(e,t,n,r,a,i){return te($(65536,e),t,n,r,a,i)}function re(t,n){for(var r,a=t;a;a=a.parent){if(a.locals&&!g(a)&&(r=n(a.locals)))return r
switch(a.kind){case 251:if(!e.isExternalOrCommonJsModule(a))break
case 221:if(r=n(W(a).exports))return r
break
case 217:case 218:if(r=n(W(a).members))return r}}return n(k_)}function ae(e){return 107455===e?107455:1536}function ie(t,n,r,a){return t?re(n,function i(o){function s(e,t){return!oe(e,n,t)||!!ie(e.parent,n,ae(t),a)}function c(n,a){return t===(a||n)?!e.forEach(n.declarations,ce)&&s(n,r):void 0}return c(e.lookUp(o,t.name))?[t]:e.forEachValue(o,function(t){if(8388608&t.flags&&"export="!==t.name&&!e.getDeclarationOfKind(t,233)&&(!a||e.forEach(t.declarations,e.isExternalModuleImportEqualsDeclaration))){var n=A(t)
if(c(t,A(t)))return[t]
var o=n.exports?i(n.exports):void 0
if(o&&s(t,ae(r)))return[t].concat(o)}})}):void 0}function oe(t,n,r){var a=!1
return re(n,function(n){if(!e.hasProperty(n,t.name))return!1
var i=n[t.name]
return i===t||!!((i=8388608&i.flags&&!e.getDeclarationOfKind(i,233)?A(i):i).flags&r)&&(a=!0,!0)}),a}function se(t,n,r){function a(e){for(;e;e=e.parent)if(ce(e))return W(e)}if(t&&n&&!(262144&t.flags)){for(var i=t,o=r;t;){var s=ie(t,n,o,!1)
if(s){var c=_e(s[0])
return c||{accessibility:1,errorSymbolName:fe(i,n,r),errorModuleName:t!==i?fe(t,n,1536):void 0}}o=ae(r),t=V(t)}var _=e.forEach(i.declarations,a)
return _&&_!==a(n)?{accessibility:2,errorSymbolName:fe(i,n,r),errorModuleName:fe(_)}:{accessibility:1,errorSymbolName:fe(i,n,r)}}return{accessibility:0}}function ce(t){return e.isAmbientModule(t)||251===t.kind&&e.isExternalOrCommonJsModule(t)}function _e(t){function n(t){if(!ke(t)){var n=b(t)
return!(!n||2&n.flags||!ke(n.parent)||(m(t).isVisible=!0,r?e.contains(r,n)||r.push(n):r=[n],0))}return!0}var r
if(!e.forEach(t.declarations,function(e){return!n(e)}))return{accessibility:0,aliasesToMakeVisible:r}}function ue(t,n){var r
r=155===t.parent.kind?1156031:136===t.kind||169===t.kind||224===t.parent.kind?1536:793056
var a=Uo(t),i=v(n,a.text,r,void 0,void 0)
return i&&_e(i)||{accessibility:1,errorSymbolName:e.getTextOfNode(a),errorNode:a}}function le(t,n){t.writeKeyword(e.tokenToString(n))}function de(t,n){t.writePunctuation(e.tokenToString(n))}function pe(e){e.writeSpace(" ")}function fe(t,n,r){var a=e.getSingleLineStringWriter()
ve().buildSymbolDisplay(t,a,n,r)
var i=a.string()
return e.releaseStringWriter(a),i}function me(t,n,r,a){var i=e.getSingleLineStringWriter()
ve().buildSignatureDisplay(t,i,n,r,a)
var o=i.string()
return e.releaseStringWriter(i),o}function ge(t,n,r){var a=e.getSingleLineStringWriter()
ve().buildTypeDisplay(t,a,n,r)
var i=a.string()
e.releaseStringWriter(a)
var o=xc.noErrorTruncation||4&r?void 0:100
return o&&i.length>=o&&(i=i.substr(0,o-"...".length)+"..."),i}function ye(t,n,r){var a=e.getSingleLineStringWriter()
ve().buildTypePredicateDisplay(t,a,n,r)
var i=a.string()
return e.releaseStringWriter(a),i}function he(t){return t&&t.parent&&222===t.parent.kind&&e.isExternalModuleAugmentation(t.parent.parent)}function ve(){function t(t){if(t.declarations&&t.declarations.length){var n=t.declarations[0]
if(n.name)return e.declarationNameToString(n.name)
switch(n.kind){case 189:return"(Anonymous class)"
case 176:case 177:return"(Anonymous function)"}}return t.name}function n(e,n){n.writeSymbol(t(e),e)}function r(t,r,a,o,s,c){function u(e){l&&(1&s&&(16777216&e.flags?_(He(l),e.mapper,r,a):i(l,r,a)),de(r,21)),l=e,n(e,r)}var l
return r.trackSymbol(t,a,o),262144&t.flags||!a&&!(128&c)?u(t):void function t(n,r){if(n){var i=ie(n,a,r,!!(2&s))
if(i&&!oe(i[0],a,1===i.length?r:ae(r))||t(V(i?i[0]:n),ae(r)),i)for(var o=0,c=i;o<c.length;o++)u(c[o])
else{if(!l&&e.forEach(n.declarations,ce))return
if(2048&n.flags||4096&n.flags)return
u(n)}}}(t,o)}function a(t,n,a,i,o){function s(t,o){16777343&t.flags?n.writeKeyword(16&i||!Ee(t)?t.intrinsicName:"any"):33554432&t.flags?(g&&n.reportInaccessibleThisError(),n.writeKeyword("this")):4096&t.flags?function(t,r){var a=t.typeArguments||kc
if(t.target!==Gc||1&r){var i=t.target.outerTypeParameters,o=0
if(i)for(var c=i.length;c>o;){var u=o,l=Xt(i[o])
do{o++}while(c>o&&Xt(i[o])===l)
e.rangeEquals(i,a,u,o)||(_(l,a,u,o,r),de(n,21))}var d=(t.target.typeParameters||kc).length
_(t.symbol,a,o,d,r)}else s(a[0],64),de(n,19),de(n,20)}(t,o):3712&t.flags?r(t.symbol,n,a,793056,0,o):8192&t.flags?function(e){de(n,19),c(e.elementTypes,24),de(n,20)}(t):49152&t.flags?function(e,t){64&t&&de(n,17),c(e.types,16384&e.flags?47:46),64&t&&de(n,18)}(t,o):65536&t.flags?u(t,o):256&t.flags?n.writeStringLiteral('"'+e.escapeString(t.text)+'"'):(de(n,15),pe(n),de(n,22),pe(n),de(n,16))}function c(e,t){for(var r=0;r<e.length;r++)r>0&&(24!==t&&pe(n),de(n,t),pe(n)),s(e[r],24===t?0:64)}function _(e,t,i,o,c){if((32&e.flags||!Z(e.name))&&r(e,n,a,793056,0,c),o>i){for(de(n,25),s(t[i],0),i++;o>i;)de(n,24),pe(n),s(t[i],0),i++
de(n,27)}}function u(t,i){var s=t.symbol
if(s)if(928&s.flags)l(t,i)
else if(function(){var t=!!(8192&s.flags&&e.forEach(s.declarations,function(e){return 64&e.flags})),n=!!(16&s.flags)&&(s.parent||e.forEach(s.declarations,function(e){return 251===e.parent.kind||222===e.parent.kind}))
return t||n?!!(2&i)||e.contains(o,s):void 0}())l(t,i)
else if(e.contains(o,s)){var c=function(e){if(e.symbol&&2048&e.symbol.flags){for(var t=e.symbol.declarations[0].parent;161===t.kind;)t=t.parent
if(219===t.kind)return W(t)}}(t)
c?r(c,n,a,793056,0,i):le(n,117)}else o||(o=[]),o.push(s),f(t,i),o.pop()
else f(t,i)}function l(e,t){le(n,101),pe(n),r(e.symbol,n,a,107455,0,t)}function d(t,n,r){var a=Wt(t.symbol,n)
return a?(e.Debug.assert(0!==a.parameters.length),e.declarationNameToString(a.parameters[0].name)):r}function f(e,t){var i=Dt(e)
if(!i.properties.length&&!i.stringIndexType&&!i.numberIndexType){if(!i.callSignatures.length&&!i.constructSignatures.length)return de(n,15),void de(n,16)
if(1===i.callSignatures.length&&!i.constructSignatures.length)return 64&t&&de(n,17),p(i.callSignatures[0],n,a,8|m,void 0,o),void(64&t&&de(n,18))
if(1===i.constructSignatures.length&&!i.callSignatures.length)return 64&t&&de(n,17),le(n,92),pe(n),p(i.constructSignatures[0],n,a,8|m,void 0,o),void(64&t&&de(n,18))}var c=g
g=!0,de(n,15),n.writeLine(),n.increaseIndent()
for(var _=0,u=i.callSignatures;_<u.length;_++)p(C=u[_],n,a,m,void 0,o),de(n,23),n.writeLine()
for(var l=0,f=i.constructSignatures;l<f.length;l++)p(C=f[l],n,a,m,1,o),de(n,23),n.writeLine()
i.stringIndexType&&(de(n,19),n.writeParameter(d(i,0,"x")),de(n,54),pe(n),le(n,130),de(n,20),de(n,54),pe(n),s(i.stringIndexType,0),de(n,23),n.writeLine()),i.numberIndexType&&(de(n,19),n.writeParameter(d(i,1,"x")),de(n,54),pe(n),le(n,128),de(n,20),de(n,54),pe(n),s(i.numberIndexType,0),de(n,23),n.writeLine())
for(var y=0,h=i.properties;y<h.length;y++){var v=h[y],k=je(v)
if(8208&v.flags&&!St(k).length)for(var b=0,x=Ot(k,0);b<x.length;b++){var C=x[b]
r(v,n),536870912&v.flags&&de(n,53),p(C,n,a,m,void 0,o),de(n,23),n.writeLine()}else r(v,n),536870912&v.flags&&de(n,53),de(n,54),pe(n),s(k,0),de(n,23),n.writeLine()}n.decreaseIndent(),de(n,16),g=c}var m=16&i,g=!1
return s(t,i)}function i(e,t,n,r){var a=Fo(e);(32&a.flags||64&a.flags||524288&a.flags)&&c(Ve(e),t,n,r)}function o(e,t,r,i,o){n(e.symbol,t)
var s=Gt(e)
s&&(pe(t),le(t,83),pe(t),a(s,t,r,i,o))}function s(t,r,i,o,s){var c=t.valueDeclaration
e.isRestParameter(c)&&de(r,22),n(t,r),Mt(c)&&de(r,53),de(r,54),pe(r),a(je(t),r,i,o,s)}function c(e,t,n,r,a){if(e&&e.length){de(t,25)
for(var i=0;i<e.length;i++)i>0&&(de(t,24),pe(t)),o(e[i],t,n,r,a)
de(t,27)}}function _(e,t,n,r,i,o){if(e&&e.length){de(n,25)
for(var s=0;s<e.length;s++)s>0&&(de(n,24),pe(n)),a(t(e[s]),n,r,0)
de(n,27)}}function u(e,t,n,r,a){de(t,17)
for(var i=0;i<e.length;i++)i>0&&(de(t,24),pe(t)),s(e[i],t,n,r,a)
de(t,18)}function l(t,n,r,i,o){e.isIdentifierTypePredicate(t)?n.writeParameter(t.parameterName):le(n,97),pe(n),le(n,124),pe(n),a(t.type,n,r,i,o)}function d(e,t,n,r,i){8&r?(pe(t),de(t,34)):de(t,54),pe(t),e.typePredicate?l(e.typePredicate,t,n,r,i):a(Kt(e),t,n,r,i)}function p(e,t,n,r,a,i){1===a&&(le(t,92),pe(t)),e.target&&32&r?_(e.target.typeParameters,e.mapper,t,n):c(e.typeParameters,t,n,r,i),u(e.parameters,t,n,r,i),d(e,t,n,r,i)}return m_||(m_={buildSymbolDisplay:r,buildTypeDisplay:a,buildTypeParameterDisplay:o,buildTypePredicateDisplay:l,buildParameterDisplay:s,buildDisplayForParametersAndDelimiters:u,buildDisplayForTypeParametersAndDelimiters:c,buildTypeParameterDisplayFromSymbol:i,buildSignatureDisplay:p,buildReturnTypeDisplay:d})}function ke(t){if(t){var n=m(t)
return void 0===n.isVisible&&(n.isVisible=!!function(){switch(t.kind){case 166:return ke(t.parent.parent)
case 214:if(e.isBindingPattern(t.name)&&!t.name.elements.length)return!1
case 221:case 217:case 218:case 219:case 216:case 220:case 224:if(e.isExternalModuleAugmentation(t))return!0
var n=Se(t)
return 2&e.getCombinedNodeFlags(t)||224!==t.kind&&251!==n.kind&&e.isInAmbientContext(n)?ke(n):g(n)
case 142:case 141:case 146:case 147:case 144:case 143:if(48&t.flags)return!1
case 145:case 149:case 148:case 150:case 139:case 222:case 153:case 154:case 156:case 152:case 157:case 158:case 159:case 160:case 161:return ke(t.parent)
case 226:case 227:case 229:return!1
case 138:case 251:return!0
case 230:return!1
default:e.Debug.fail("isDeclarationVisible unknown: SyntaxKind: "+t.kind)}}()),n.isVisible}return!1}function be(t){var n
if(t.parent&&230===t.parent.kind)n=v(t.parent,t.text,9289727,e.Diagnostics.Cannot_find_name_0,t)
else if(233===t.parent.kind){var r=t.parent
n=r.parent.parent.moduleSpecifier?T(r.parent.parent,r):I(r.propertyName||r.name,9289727)}var a=[]
return n&&function t(n){e.forEach(n,function(n){m(n).isVisible=!0
var r=b(n)||n
if(e.contains(a,r)||a.push(r),e.isInternalModuleImportEqualsDeclaration(n)){var i=Uo(n.moduleReference),o=v(n,i.text,901119,e.Diagnostics.Cannot_find_name_0,i)
o&&t(o.declarations)}})}(n.declarations),a}function xe(e,t){var n=function(e,t){for(var n=S_.length-1;n>=0;n--){if(Ce(S_[n],E_[n]))return-1
if(S_[n]===e&&E_[n]===t)return n}return-1}(e,t)
if(n>=0){for(var r=S_.length,a=n;r>a;a++)T_[a]=!1
return!1}return S_.push(e),T_.push(!0),E_.push(t),!0}function Ce(t,n){return 0===n?f(t).type:2===n?f(t).declaredType:1===n?(e.Debug.assert(!!(1024&t.flags)),t.resolvedBaseConstructorType):3===n?t.resolvedReturnType:void e.Debug.fail("Unhandled TypeSystemPropertyName "+n)}function De(){return S_.pop(),E_.pop(),T_.pop()}function Se(t){for(t=e.getRootDeclaration(t);t;)switch(t.kind){case 214:case 215:case 229:case 228:case 227:case 226:t=t.parent
break
default:return t.parent}}function Te(e,t){var n=Pt(e,t)
return n?je(n):void 0}function Ee(e){return e&&0!=(1&e.flags)}function we(t){switch(t.kind){case 69:return t.text
case 9:case 8:return t.text
case 137:if(e.isStringOrNumericLiteral(t.expression.kind))return t.expression.text}}function Ae(t){return 137===t.kind&&!e.isStringOrNumericLiteral(t.expression.kind)}function Pe(t){var n,r=t.parent,a=function(e){var t=W(e)
return t&&f(t).type||Oe(e)}(r.parent)
if(a===Kc)return Kc
if(!a||Ee(a))return t.initializer?vi(t.initializer):a
if(164===r.kind){var i=t.propertyName||t.name
if(Ae(i))return Oc
var s=we(i)
if(!(n=Te(a,s)||_a(s)&&It(a,1)||It(a,0)))return o(i,e.Diagnostics.Type_0_has_no_property_1_and_no_string_index_signature,ge(a),e.declarationNameToString(i)),Kc}else{var c=ho(a,r,!1)
if(t.dotDotDotToken)n=mn(c)
else{var _=""+e.indexOf(r.elements,t)
if(!(n=dr(a)?Te(a,_):c))return fr(a)?o(t,e.Diagnostics.Tuple_type_0_with_length_1_cannot_be_assigned_to_tuple_with_length_2,ge(a),a.elementTypes.length,r.elements.length):o(t,e.Diagnostics.Type_0_has_no_property_1,ge(a),_),Kc}}return n}function Ne(t){var n=e.getJSDocTypeTag(t)
if(n&&n.typeExpression)return n.typeExpression.type
if(214===t.kind&&215===t.parent.kind&&196===t.parent.parent.kind){var r=e.getJSDocTypeTag(t.parent.parent)
if(r&&r.typeExpression)return r.typeExpression.type}else if(139===t.kind){var a=e.getCorrespondingJSDocParameterTag(t)
if(a&&a.typeExpression)return a.typeExpression.type}}function Oe(t){if(32&t.parserContextFlags&&(n=function(e){var t=Ne(e)
return t?Rn(t):void 0}(t))&&n!==Kc)return n
if(203===t.parent.parent.kind)return Rc
if(204===t.parent.parent.kind)return yo(t.parent.parent.expression)||Oc
if(e.isBindingPattern(t.parent))return Pe(t)
if(t.type)return Rn(t.type)
if(139===t.kind){var n,r=t.parent
if(147===r.kind&&!e.hasDynamicName(r)){var a=e.getDeclarationOfKind(t.parent.symbol,146)
if(a)return Kt(Bt(a))}if(n=Jr(t))return n}return t.initializer?vi(t.initializer):249===t.kind?Ir(t.name):e.isBindingPattern(t.name)?Le(t.name,!1):void 0}function Re(t,n){return t.initializer?gr(vi(t.initializer)):e.isBindingPattern(t.name)?Le(t.name,n):Oc}function Ie(t,n){var r={},a=!1
e.forEach(t.elements,function(e){var t=e.propertyName||e.name
if(Ae(t))a=!0
else{var i=we(t),o=s(67108868|(e.initializer?536870912:0),i)
o.type=Re(e,n),o.bindingElement=e,r[o.name]=o}})
var i=ne(void 0,r,kc,kc,void 0,void 0)
return n&&(i.pattern=t),a&&(i.flags|=67108864),i}function Fe(t,n){var r=t.elements
if(0===r.length||r[r.length-1].dotDotDotToken)return Cc>=2?pn(Oc):a_
var a=e.map(r,function(e){return 190===e.kind?Oc:Re(e,n)})
if(n){var i=yn(a)
return i.pattern=t,i}return gn(a)}function Le(e,t){return 164===e.kind?Ie(e,t):Fe(e,t)}function Me(t,n){var r=Oe(t)
if(r)return n&&vr(t,r),248===t.kind?r:gr(r)
if(r=t.dotDotDotToken?a_:Oc,n&&xc.noImplicitAny){var a=e.getRootDeclaration(t)
zi(a)||139===a.kind&&zi(a.parent)||hr(t,r)}return r}function Be(t){var n=f(t)
if(!n.type){if(134217728&t.flags)return n.type=function(t){var n=rt(V(t))
return n.typeParameters?$t(n,e.map(n.typeParameters,function(e){return Oc})):n}(t)
var r=t.valueDeclaration
if(247===r.parent.kind)return n.type=Oc
if(230===r.kind)return n.type=Ci(r.expression)
if(184===r.kind)return n.type=Dn(e.map(t.declarations,function(e){return vi(e.right)}))
if(169===r.kind&&184===r.parent.kind)return n.type=vi(r.parent.right)
if(!xe(t,0))return Kc
var a=Me(r,!0)
De()||(t.valueDeclaration.type?(a=Kc,o(t.valueDeclaration,e.Diagnostics._0_is_referenced_directly_or_indirectly_in_its_own_type_annotation,fe(t))):(a=Oc,xc.noImplicitAny&&o(t.valueDeclaration,e.Diagnostics._0_implicitly_has_type_any_because_it_does_not_have_a_type_annotation_and_is_referenced_directly_or_indirectly_in_its_own_initializer,fe(t)))),n.type=a}return n.type}function ze(t){if(t){if(146===t.kind)return t.type&&Rn(t.type)
var n=e.getSetAccessorTypeAnnotationNode(t)
return n&&Rn(n)}}function Ke(t){var n=f(t)
if(!n.type){if(!xe(t,0))return Kc
var r=e.getDeclarationOfKind(t,146),a=e.getDeclarationOfKind(t,147),i=void 0,s=ze(r)
if(s)i=s
else{var c=ze(a)
c?i=c:r&&r.body?i=ti(r):(xc.noImplicitAny&&o(a,e.Diagnostics.Property_0_implicitly_has_type_any_because_its_set_accessor_lacks_a_type_annotation,fe(t)),i=Oc)}!De()&&(i=Oc,xc.noImplicitAny)&&o(e.getDeclarationOfKind(t,146),e.Diagnostics._0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions,fe(t)),n.type=i}return n.type}function je(e){return 16777216&e.flags?function(e){var t=f(e)
return t.type||(t.type=Jn(je(t.target),t.mapper)),t.type}(e):7&e.flags?Be(e):9136&e.flags?function(e){var t=f(e)
return t.type||(t.type=$(65536,e)),t.type}(e):8&e.flags?function(e){var t=f(e)
return t.type||(t.type=tt(V(e))),t.type}(e):98304&e.flags?Ke(e):8388608&e.flags?function(e){var t=f(e)
if(!t.type){var n=A(e)
t.type=107455&n.flags?je(n):Kc}return t.type}(e):Kc}function Je(e){return 4096&e.flags?e.target:e}function Ue(t,n){return function t(r){var a=Je(r)
return a===n||e.forEach(Ze(a),t)}(t)}function qe(t,n){for(var r=0,a=n;r<a.length;r++){var i=nt(W(a[r]))
t?e.contains(t,i)||t.push(i):t=[i]}return t}function We(t){return function e(t,n){for(;;){if(!(n=n.parent))return t
if(217===n.kind||189===n.kind||216===n.kind||176===n.kind||144===n.kind||177===n.kind){var r=n.typeParameters
if(r)return qe(e(t,n),r)}}}(void 0,32&t.flags?t.valueDeclaration:e.getDeclarationOfKind(t,218))}function Ve(e){for(var t,n=0,r=e.declarations;n<r.length;n++){var a=r[n]
if(218===a.kind||217===a.kind||189===a.kind||219===a.kind){var i=a
i.typeParameters&&(t=qe(t,i.typeParameters))}}return t}function He(t){return e.concatenate(We(t),Ve(t))}function Ge(e){return 80896&e.flags&&Ot(e,1).length>0}function Xe(t){return e.getClassExtendsHeritageClauseElement(t.symbol.valueDeclaration)}function Qe(t,n){var r=n?n.length:0
return e.filter(Ot(t,1),function(e){return(e.typeParameters?e.typeParameters.length:0)===r})}function Ye(t,n){var r=Qe(t,n)
if(n){var a=e.map(n,Rn)
r=e.map(r,function(e){return Jt(e,a)})}return r}function $e(t){if(!t.resolvedBaseConstructorType){var n=Xe(t)
if(!n)return t.resolvedBaseConstructorType=Bc
if(!xe(t,1))return Kc
var r=Ci(n.expression)
if(80896&r.flags&&Dt(r),!De())return o(t.symbol.valueDeclaration,e.Diagnostics._0_is_referenced_directly_or_indirectly_in_its_own_base_expression,fe(t.symbol)),t.resolvedBaseConstructorType=Kc
if(r!==Kc&&r!==zc&&!Ge(r))return o(n.expression,e.Diagnostics.Type_0_is_not_a_constructor_function_type,ge(r)),t.resolvedBaseConstructorType=Kc
t.resolvedBaseConstructorType=r}return t.resolvedBaseConstructorType}function Ze(t){var n=32&t.symbol.flags,r=64&t.symbol.flags
return t.resolvedBaseTypes||(n||r||e.Debug.fail("type must be class or interface"),n&&function(t){t.resolvedBaseTypes=t.resolvedBaseTypes||kc
var n=$e(t)
if(80896&n.flags){var r,a=Xe(t),i=n&&n.symbol?rt(n.symbol):void 0
if(n.symbol&&32&n.symbol.flags&&function(e){var t=e.outerTypeParameters
if(t){var n=t.length-1,r=e.typeArguments
return t[n].symbol!==r[n].symbol}return!0}(i))r=Zt(a,n.symbol)
else{var s=Ye(n,a.typeArguments)
if(!s.length)return void o(a.expression,e.Diagnostics.No_base_constructor_has_the_specified_number_of_type_arguments)
r=Kt(s[0])}r!==Kc&&(3072&Je(r).flags?t===r||Ue(r,t)?o(t.symbol.valueDeclaration,e.Diagnostics.Type_0_recursively_references_itself_as_a_base_type,ge(t,void 0,1)):t.resolvedBaseTypes===kc?t.resolvedBaseTypes=[r]:t.resolvedBaseTypes.push(r):o(a.expression,e.Diagnostics.Base_constructor_return_type_0_is_not_a_class_or_interface_type,ge(r)))}}(t),r&&function(t){t.resolvedBaseTypes=t.resolvedBaseTypes||kc
for(var n=0,r=t.symbol.declarations;n<r.length;n++){var a=r[n]
if(218===a.kind&&e.getInterfaceBaseTypeNodes(a))for(var i=0,s=e.getInterfaceBaseTypeNodes(a);i<s.length;i++){var c=s[i],_=Rn(c)
_!==Kc&&(3072&Je(_).flags?t===_||Ue(_,t)?o(a,e.Diagnostics.Type_0_recursively_references_itself_as_a_base_type,ge(t,void 0,1)):t.resolvedBaseTypes===kc?t.resolvedBaseTypes=[_]:t.resolvedBaseTypes.push(_):o(c,e.Diagnostics.An_interface_may_only_extend_a_class_or_another_interface))}}}(t)),t.resolvedBaseTypes}function et(t){var n=f(t)
if(!n.declaredType){var r=32&t.flags?1024:2048,a=n.declaredType=$(r,t),i=We(t),o=Ve(t);(i||o||1024===r||!function(t){for(var n=0,r=t.declarations;n<r.length;n++){var a=r[n]
if(218===a.kind){if(262144&a.flags)return!1
var i=e.getInterfaceBaseTypeNodes(a)
if(i)for(var o=0,s=i;o<s.length;o++){var c=s[o]
if(e.isSupportedExpressionWithTypeArguments(c)){var _=I(c.expression,793056,!0)
if(!_||!(64&_.flags)||et(_).thisType)return!1}}}}return!0}(t))&&(a.flags|=4096,a.typeParameters=e.concatenate(i,o),a.outerTypeParameters=i,a.localTypeParameters=o,a.instantiations={},a.instantiations[Qt(a.typeParameters)]=a,a.target=a,a.typeArguments=a.typeParameters,a.thisType=Q(33554944),a.thisType.symbol=t,a.thisType.constraint=a)}return n.declaredType}function tt(e){var t=f(e)
if(!t.declaredType){var n=Q(128)
n.symbol=e,t.declaredType=n}return t.declaredType}function nt(t){var n=f(t)
if(!n.declaredType){var r=Q(512)
r.symbol=t,e.getDeclarationOfKind(t,138).constraint||(r.constraint=y_),n.declaredType=r}return n.declaredType}function rt(t){return e.Debug.assert(0==(16777216&t.flags)),96&t.flags?et(t):524288&t.flags?function(t){var n=f(t)
if(!n.declaredType){if(!xe(t,2))return Kc
var r=e.getDeclarationOfKind(t,219),a=Rn(r.type)
De()?(n.typeParameters=Ve(t),n.typeParameters&&(n.instantiations={},n.instantiations[Qt(n.typeParameters)]=a)):(a=Kc,o(r.name,e.Diagnostics.Type_alias_0_circularly_references_itself,fe(t))),n.declaredType=a}return n.declaredType}(t):384&t.flags?tt(t):262144&t.flags?nt(t):8388608&t.flags?function(e){var t=f(e)
return t.declaredType||(t.declaredType=rt(A(e))),t.declaredType}(t):Kc}function at(e){switch(e.kind){case 117:case 130:case 128:case 120:case 131:case 103:case 163:return!0
case 157:return at(e.elementType)
case 152:return function(e){if(e.typeArguments)for(var t=0,n=e.typeArguments;t<n.length;t++)if(!at(n[t]))return!1
return!0}(e)}return!1}function it(e){return e.type&&at(e.type)||!e.type&&!e.initializer}function ot(e){if(e.declarations&&1===e.declarations.length){var t=e.declarations[0]
if(t)switch(t.kind){case 142:case 141:return it(t)
case 144:case 143:case 145:return function(e){if(!(145===e.kind||e.type&&at(e.type)))return!1
for(var t=0,n=e.parameters;t<n.length;t++)if(!it(n[t]))return!1
return!0}(t)}}return!1}function st(e){for(var t={},n=0,r=e;n<r.length;n++){var a=r[n]
t[a.name]=a}return t}function ct(e,t,n){for(var r={},a=0,i=e;a<i.length;a++){var o=i[a]
r[o.name]=n&&ot(o)?o:jn(o,t)}return r}function _t(t,n){for(var r=0,a=n;r<a.length;r++){var i=a[r]
e.hasProperty(t,i.name)||(t[i.name]=i)}}function ut(e){if(!e.declaredProperties){var t=e.symbol
e.declaredProperties=ee(t.members),e.declaredCallSignatures=zt(t.members.__call),e.declaredConstructSignatures=zt(t.members.__new),e.declaredStringIndexType=Vt(t,0),e.declaredNumberIndexType=Vt(t,1)}return e}function lt(t,n){return 4096&t.flags?$t(t.target,e.concatenate(t.typeArguments,[n||t.target.thisType])):t}function dt(t,n,r,a){var i=Mn,o=n.symbol.members,s=n.declaredCallSignatures,c=n.declaredConstructSignatures,_=n.declaredStringIndexType,u=n.declaredNumberIndexType
e.rangeEquals(r,a,0,r.length)||(i=Fn(r,a),o=ct(n.declaredProperties,i,1===r.length),s=In(n.declaredCallSignatures,i,Kn),c=In(n.declaredConstructSignatures,i,Kn),_=Jn(n.declaredStringIndexType,i),u=Jn(n.declaredNumberIndexType,i))
var l=Ze(n)
if(l.length){o===n.symbol.members&&(o=st(n.declaredProperties))
for(var d=e.lastOrUndefined(a),p=0,f=l;p<f.length;p++){var m=f[p],g=d?lt(Jn(m,i),d):m
_t(o,St(g)),s=e.concatenate(s,Ot(g,0)),c=e.concatenate(c,Ot(g,1)),_=_||It(g,0),u=u||It(g,1)}}te(t,o,s,c,_,u)}function pt(t){var n=ut(t.target),r=e.concatenate(n.typeParameters,[n.thisType])
dt(t,n,r,t.typeArguments&&t.typeArguments.length===r.length?t.typeArguments:e.concatenate(t.typeArguments,[t]))}function ft(e,t,n,r,a,i,o,s){var c=new yc(Ac)
return c.declaration=e,c.typeParameters=t,c.parameters=n,c.resolvedReturnType=r,c.typePredicate=a,c.minArgumentCount=i,c.hasRestParameter=o,c.hasStringLiterals=s,c}function mt(e){return ft(e.declaration,e.typeParameters,e.parameters,e.resolvedReturnType,e.typePredicate,e.minArgumentCount,e.hasRestParameter,e.hasStringLiterals)}function gt(t){var n=Ot($e(t),1)
if(0===n.length)return[ft(void 0,t.localTypeParameters,kc,t,void 0,0,!1,!1)]
for(var r=Xe(t),a=e.map(r.typeArguments,Rn),i=a?a.length:0,o=[],s=0,c=n;s<c.length;s++){var _=c[s],u=_.typeParameters?_.typeParameters.length:0
if(u===i){var l=u?Jt(_,a):mt(_)
l.typeParameters=t.localTypeParameters,l.resolvedReturnType=t,o.push(l)}}return o}function yt(e){var t=Dn(e.elementTypes,!0),n=Dt(dn(Gc,[t,e])),r=function(e){for(var t={},n=0;n<e.length;n++){var r=s(67108868,""+n)
r.type=e[n],t[n]=r}return t}(e.elementTypes)
_t(r,n.properties),te(e,r,n.callSignatures,n.constructSignatures,n.stringIndexType,n.numberIndexType)}function ht(e,t,n,r){for(var a=0,i=e;a<i.length;a++){var o=i[a]
if(sr(o,t,n,r,Vn))return o}}function vt(t,n,r){if(n.typeParameters){if(r>0)return
for(var a=1;a<t.length;a++)if(!ht(t[a],n,!1,!1))return
return[n]}var i=void 0
for(a=0;a<t.length;a++){var o=a===r?n:ht(t[a],n,!0,!0)
if(!o)return
e.contains(i,o)||(i||(i=[])).push(o)}return i}function kt(t,n){for(var r=e.map(t,function(e){return Ot(e,n)}),a=void 0,i=0;i<r.length;i++)for(var o=0,s=r[i];o<s.length;o++){var c=s[o]
if(!a||!ht(a,c,!1,!0)){var _=vt(r,c,i)
if(_){var u=c
_.length>1&&((u=mt(c)).resolvedReturnType=void 0,u.unionSignatures=_),(a||(a=[])).push(u)}}}return a||kc}function bt(e,t){for(var n=[],r=0,a=e;r<a.length;r++){var i=It(a[r],t)
if(!i)return
n.push(i)}return Dn(n)}function xt(e,t){return e?t?Tn([e,t]):e:t}function Ct(t){for(var n=kc,r=kc,a=void 0,i=void 0,o=0,s=t.types;o<s.length;o++){var c=s[o]
n=e.concatenate(n,Ot(c,0)),r=e.concatenate(r,Ot(c,1)),a=xt(a,It(c,0)),i=xt(i,It(c,1))}te(t,bc,n,r,a,i)}function Dt(e){return e.members||(4096&e.flags?pt(e):3072&e.flags?function(e){dt(e,ut(e),kc,kc)}(e):65536&e.flags?function(e){var t=e.symbol
if(e.target)te(e,n=ct(St(e.target),e.mapper,!1),In(Ot(e.target,0),e.mapper,Kn),r=In(Ot(e.target,1),e.mapper,Kn),Jn(It(e.target,0),e.mapper),o=Jn(It(e.target,1),e.mapper))
else if(2048&t.flags)te(e,n=t.members,zt(n.__call),r=zt(n.__new),Vt(t,0),o=Vt(t,1))
else{var n=bc,r=kc
if(1952&t.flags&&(n=K(t)),32&t.flags){var a=et(t);(r=zt(t.members.__constructor)).length||(r=gt(a))
var i=$e(a)
80896&i.flags&&_t(n=st(ee(n)),St(i))}var o=384&t.flags?Rc:void 0
te(e,n,kc,r,void 0,o),8208&t.flags&&(e.callSignatures=zt(t))}}(e):8192&e.flags?yt(e):16384&e.flags?function(e){var t=kt(e.types,0),n=kt(e.types,1),r=bt(e.types,0),a=bt(e.types,1)
te(e,bc,t,n,r,a)}(e):32768&e.flags&&Ct(e)),e}function St(e){return 80896&e.flags?Dt(e).properties:kc}function Tt(t,n){if(80896&t.flags){var r=Dt(t)
if(e.hasProperty(r.members,n)){var a=r.members[n]
if(G(a))return a}}}function Et(e){return 49152&(e=wt(e)).flags?function(e){for(var t=0,n=e.types;t<n.length;t++){for(var r=0,a=Et(n[t]);r<a.length;r++)At(e,a[r].name)
if(16384&e.flags)break}return e.resolvedProperties?Lt(e.resolvedProperties):kc}(e):St(e)}function wt(e){return 512&e.flags&&(e=function(e){if(!e.resolvedApparentType){for(var t=Gt(e);t&&512&t.flags;)t=Gt(t)
e.resolvedApparentType=lt(t||jc,e)}return e.resolvedApparentType}(e)),258&e.flags?e=Xc:132&e.flags?e=Qc:8&e.flags?e=Yc:16777216&e.flags&&(e=e_),e}function At(t,n){var r=t.resolvedProperties||(t.resolvedProperties={})
if(e.hasProperty(r,n))return r[n]
var a=function(t,n){for(var r,a=t.types,i=32768&t.flags?536870912:0,o=0,c=a;o<c.length;o++){var _=wt(c[o])
if(_!==Kc)if(!(f=Pt(_,n))||48&xa(f)){if(16384&t.flags)return}else i&=f.flags,r?e.contains(r,f)||r.push(f):r=[f]}if(r){if(1===r.length)return r[0]
for(var u=[],l=[],d=0,p=r;d<p.length;d++){var f;(f=p[d]).declarations&&e.addRange(l,f.declarations),u.push(je(f))}var m=s(335544324|i,n)
return m.containingType=t,m.declarations=l,m.type=16384&t.flags?Dn(u):Tn(u),m}}(t,n)
return a&&(r[n]=a),a}function Pt(t,n){if(80896&(t=wt(t)).flags){var r,a=Dt(t)
return e.hasProperty(a.members,n)&&G(r=a.members[n])?r:(a===qc||a.callSignatures.length||a.constructSignatures.length)&&(r=Tt(Hc,n))?r:Tt(Vc,n)}return 49152&t.flags?At(t,n):void 0}function Nt(e,t){if(130048&e.flags){var n=Dt(e)
return 0===t?n.callSignatures:n.constructSignatures}return kc}function Ot(e,t){return Nt(wt(e),t)}function Rt(e,t){if(130048&e.flags){var n=Dt(e)
return 0===t?n.stringIndexType:n.numberIndexType}}function It(e,t){return Rt(wt(e),t)}function Ft(t){var n=[]
return e.forEach(t,function(t){var r=nt(t.symbol)
e.contains(n,r)||n.push(r)}),n}function Lt(e){var t=[]
for(var n in e)Z(n)||t.push(e[n])
return t}function Mt(t){if(32&t.parserContextFlags){if(t.type&&263===t.type.kind)return!0
var n=e.getCorrespondingJSDocParameterTag(t)
if(n){if(n.isBracketed)return!0
if(n.typeExpression)return 263===n.typeExpression.type.kind}}if(e.hasQuestionToken(t))return!0
if(t.initializer){var r=t.parent,a=Bt(r),i=e.indexOf(r.parameters,t)
return e.Debug.assert(i>=0),i>=a.minArgumentCount}return!1}function Bt(t){var n=m(t)
if(!n.resolvedSignature){for(var r=145===t.kind?et(q(t.parent.symbol)):void 0,a=r?r.localTypeParameters:t.typeParameters?Ft(t.typeParameters):function(t){if(32&t.parserContextFlags){var n=e.getJSDocTemplateTag(t)
if(n)return Ft(n.typeParameters)}}(t),i=[],o=!1,s=-1,c=e.isJSDocConstructSignature(t),_=void 0,u=void 0,l=c?1:0,d=t.parameters.length;d>l;l++){var p=t.parameters[l],f=p.symbol
f&&4&f.flags&&!e.isBindingPattern(p.name)&&(f=v(p,f.name,107455,void 0,void 0)),i.push(f),p.type&&163===p.type.kind&&(o=!0),p.initializer||p.questionToken||p.dotDotDotToken?0>s&&(s=l):s=-1}if(0>s&&(s=t.parameters.length),c)s--,_=Rn(t.parameters[0].type)
else if(r)_=r
else if(t.type)_=Rn(t.type),151===t.type.kind&&(u=function(e){if(69===e.parameterName.kind){var t=e.parameterName
return{kind:1,parameterName:t?t.text:void 0,parameterIndex:t?function(e,t){if(e)for(var n=0;n<e.length;n++){var r=e[n]
if(69===r.name.kind&&r.name.text===t.text)return n}return-1}(e.parent.parameters,t):void 0,type:Rn(e.type)}}return{kind:0,type:Rn(e.type)}}(t.type))
else{if(32&t.parserContextFlags){var g=function(t){var n=e.getJSDocReturnTag(t)
return n&&n.typeExpression?Rn(n.typeExpression.type):void 0}(t)
g&&g!==Kc&&(_=g)}146!==t.kind||e.hasDynamicName(t)||(_=ze(e.getDeclarationOfKind(t.symbol,147))),!_&&e.nodeIsMissing(t.body)&&(_=Oc)}n.resolvedSignature=ft(t,a,i,_,u,s,e.hasRestParameter(t),o)}return n.resolvedSignature}function zt(e){if(!e)return kc
for(var t=[],n=0,r=e.declarations.length;r>n;n++){var a=e.declarations[n]
switch(a.kind){case 153:case 154:case 216:case 144:case 143:case 145:case 148:case 149:case 150:case 146:case 147:case 176:case 177:case 264:if(n>0&&a.body){var i=e.declarations[n-1]
if(a.parent===i.parent&&a.kind===i.kind&&a.pos===i.end)break}t.push(Bt(a))}}return t}function Kt(t){if(!t.resolvedReturnType){if(!xe(t,3))return Kc
var n=void 0
if(n=t.target?Jn(Kt(t.target),t.mapper):t.unionSignatures?Dn(e.map(t.unionSignatures,Kt)):ti(t.declaration),!De()&&(n=Oc,xc.noImplicitAny)){var r=t.declaration
r.name?o(r.name,e.Diagnostics._0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions,e.declarationNameToString(r.name)):o(r,e.Diagnostics.Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions)}t.resolvedReturnType=n}return t.resolvedReturnType}function jt(t){if(t.hasRestParameter){var n=je(e.lastOrUndefined(t.parameters))
if(4096&n.flags&&n.target===Gc)return n.typeArguments[0]}return Oc}function Jt(e,t){return Kn(e,Fn(e.typeParameters,t),!0)}function Ut(e){return e.typeParameters?(e.erasedSignatureCache||(e.target?e.erasedSignatureCache=Kn(Ut(e.target),e.mapper):e.erasedSignatureCache=Kn(e,function(e){switch(e.length){case 1:return function(e){return function(t){return t===e?Oc:t}}(e[0])
case 2:return function(e,t){return function(n){return n===e||n===t?Oc:n}}(e[0],e[1])}return function(t){for(var n=0,r=e;n<r.length;n++){var a=r[n]
if(t===a)return Oc}return t}}(e.typeParameters),!0)),e.erasedSignatureCache):e}function qt(e){return e.members.__index}function Wt(e,t){var n=1===t?128:130,r=qt(e)
if(r)for(var a=0,i=r.declarations;a<i.length;a++){var o=i[a]
if(1===o.parameters.length){var s=o.parameters[0]
if(s&&s.type&&s.type.kind===n)return o}}}function Vt(e,t){var n=Wt(e,t)
return n?n.type?Rn(n.type):Oc:void 0}function Ht(t){return e.getDeclarationOfKind(t.symbol,138).constraint}function Gt(t){if(!t.constraint)if(t.target){var n=Gt(t.target)
t.constraint=n?Jn(n,t.mapper):y_}else{var r=Ht(t),a=Rn(r);(function(t,n){for(var r;t&&!(33554432&t.flags)&&512&t.flags&&!e.contains(r,t);){if(t===n)return!0;(r||(r=[])).push(t)
var a=Ht(t)
t=a&&Rn(a)}return!1})(a,t)&&(o(r,e.Diagnostics.Type_parameter_0_has_a_circular_constraint,ge(t)),a=Kc),t.constraint=a}return t.constraint===y_?void 0:t.constraint}function Xt(t){return W(e.getDeclarationOfKind(t.symbol,138).parent)}function Qt(e){if(e)switch(e.length){case 1:return""+e[0].id
case 2:return e[0].id+","+e[1].id
default:for(var t="",n=0;n<e.length;n++)n>0&&(t+=","),t+=e[n].id
return t}return""}function Yt(e){for(var t=0,n=0,r=e;n<r.length;n++)t|=r[n].flags
return 14680064&t}function $t(e,t){var n=Qt(t),r=e.instantiations[n]
if(!r){var a=4096|(t?Yt(t):0);(r=e.instantiations[n]=$(a,e.symbol)).target=e,r.typeArguments=t}return r}function Zt(t,n){var r=rt(n),a=r.localTypeParameters
return a?t.typeArguments&&t.typeArguments.length===a.length?$t(r,e.concatenate(r.outerTypeParameters,e.map(t.typeArguments,Rn))):(o(t,e.Diagnostics.Generic_type_0_requires_1_type_argument_s,ge(r,void 0,1),a.length),Kc):t.typeArguments?(o(t,e.Diagnostics.Type_0_is_not_generic,ge(r)),Kc):r}function en(t,n){var r=rt(n),a=f(n),i=a.typeParameters
if(i){if(!t.typeArguments||t.typeArguments.length!==i.length)return o(t,e.Diagnostics.Generic_type_0_requires_1_type_argument_s,fe(n),i.length),Kc
var s=e.map(t.typeArguments,Rn),c=Qt(s)
return a.instantiations[c]||(a.instantiations[c]=Jn(r,Fn(i,s)))}return t.typeArguments?(o(t,e.Diagnostics.Type_0_is_not_generic,fe(n)),Kc):r}function tn(t,n){return t.typeArguments?(o(t,e.Diagnostics.Type_0_is_not_generic,fe(n)),Kc):rt(n)}function nn(t){var n=m(t)
if(!n.resolvedType){var r=void 0,a=void 0
if(262===t.kind)a=function(e,t){return t===Pc?Kc:96&t.flags?Zt(e,t):524288&t.flags?en(e,t):107455&t.flags&&262===e.kind?je(t):tn(e,t)}(t,r=function(e,t){return t&&I(t,793056)||Pc}(0,function(t){switch(t.kind){case 152:return t.typeName
case 262:return t.name
case 191:if(e.isSupportedExpressionWithTypeArguments(t))return t.expression}}(t))),n.resolvedSymbol=r,n.resolvedType=a
else{var i=152===t.kind?t.typeName:e.isSupportedExpressionWithTypeArguments(t)?t.expression:void 0
a=(r=i&&I(i,793056)||Pc)===Pc?Kc:96&r.flags?Zt(t,r):524288&r.flags?en(t,r):tn(t,r)}n.resolvedSymbol=r,n.resolvedType=a}return n.resolvedType}function rn(e){var t=m(e)
return t.resolvedType||(t.resolvedType=gr(Ci(e.exprName))),t.resolvedType}function an(t,n){function r(e){for(var t=0,n=e.declarations;t<n.length;t++){var r=n[t]
switch(r.kind){case 217:case 218:case 220:return r}}}if(!t)return n?Uc:jc
var a=rt(t)
return 80896&a.flags?(a.typeParameters?a.typeParameters.length:0)!==n?(o(r(t),e.Diagnostics.Global_type_0_must_have_1_type_parameter_s,t.name,n),n?Uc:jc):a:(o(r(t),e.Diagnostics.Global_type_0_must_be_a_class_or_interface_type,t.name),n?Uc:jc)}function on(t){return cn(t,107455,e.Diagnostics.Cannot_find_global_value_0)}function sn(t){return cn(t,793056,e.Diagnostics.Cannot_find_global_type_0)}function cn(e,t,n){return v(void 0,e,t,n,e)}function _n(e,t){return void 0===t&&(t=0),an(sn(e),t)}function un(e,t){var n=cn(e,1536,void 0),r=n&&y(n.exports,t,793056)
return r&&rt(r)}function ln(e){var t=i_()
return t!==Uc?$t(t,[e]):jc}function dn(e,t){return e!==Uc?$t(e,t):jc}function pn(e){return dn(t_,[e])}function fn(e){return dn(r_,[e])}function mn(e){return dn(Gc,[e])}function gn(e){var t=Qt(e)
return b_[t]||(b_[t]=yn(e))}function yn(e){var t=$(8192|Yt(e))
return t.elementTypes=e,t}function hn(t){var n=m(t)
return n.resolvedType||(n.resolvedType=gn(e.map(t.elementTypes,Rn))),n.resolvedType}function vn(t,n,r){n.flags&r?kn(t,n.types,r):e.contains(t,n)||t.push(n)}function kn(e,t,n){for(var r=0,a=t;r<a.length;r++)vn(e,a[r],n)}function bn(e,t){for(var n=0,r=t.length;r>n;n++)if(e!==t[n]&&Gn(e,t[n]))return!0
return!1}function xn(e){for(var t=0,n=e;t<n.length;t++)if(Ee(n[t]))return!0
return!1}function Cn(e,t){for(var n=e.length;n>0&&e.length>1;)e[--n]===t&&e.splice(n,1)}function Dn(e,t){if(0===e.length)return Jc
var n=[]
if(kn(n,e,16384),xn(n))return Oc
if(t?(Cn(n,Bc),Cn(n,zc)):function(e){for(var t=e.length;t>0;)bn(e[--t],e)&&e.splice(t,1)}(n),1===n.length)return n[0]
var r=Qt(n),a=x_[r]
return a||((a=x_[r]=$(16384|Yt(n))).types=n),a}function Sn(t){var n=m(t)
return n.resolvedType||(n.resolvedType=Dn(e.map(t.types,Rn),!0)),n.resolvedType}function Tn(e){if(0===e.length)return jc
var t=[]
if(kn(t,e,32768),xn(t))return Oc
if(1===t.length)return t[0]
var n=Qt(t),r=C_[n]
return r||((r=C_[n]=$(32768|Yt(t))).types=t),r}function En(t){var n=m(t)
return n.resolvedType||(n.resolvedType=Tn(e.map(t.types,Rn))),n.resolvedType}function wn(e){var t=m(e)
return t.resolvedType||(t.resolvedType=$(65536,e.symbol)),t.resolvedType}function An(t){if(e.hasProperty(D_,t))return D_[t]
var n=D_[t]=Q(256)
return n.text=t,n}function Pn(t){var n=m(t)
if(!n.resolvedType){var r=e.map(t.types,Rn)
n.resolvedType=gn(r)}return n.resolvedType}function Nn(t){var n=e.getThisContainer(t,!1),r=n&&n.parent
return!r||!e.isClassLike(r)&&218!==r.kind||64&n.flags||145===n.kind&&!e.isNodeDescendentOf(t,n.body)?(o(t,e.Diagnostics.A_this_type_is_available_only_in_a_non_static_member_of_a_class_or_interface),Kc):et(W(r)).thisType}function On(e){var t=m(e)
return t.resolvedType||(t.resolvedType=Nn(e)),t.resolvedType}function Rn(e){switch(e.kind){case 117:case 253:case 254:return Oc
case 130:return Rc
case 128:return Ic
case 120:return Fc
case 131:return Lc
case 103:return Mc
case 162:return On(e)
case 163:return function(e){var t=m(e)
return t.resolvedType||(t.resolvedType=An(e.text)),t.resolvedType}(e)
case 152:case 262:return nn(e)
case 151:return Fc
case 191:return nn(e)
case 155:return rn(e)
case 157:case 255:return function(e){var t=m(e)
return t.resolvedType||(t.resolvedType=mn(Rn(e.elementType))),t.resolvedType}(e)
case 158:return hn(e)
case 159:case 256:return Sn(e)
case 160:return En(e)
case 161:case 258:case 259:case 266:case 267:case 263:return Rn(e.type)
case 153:case 154:case 156:case 264:case 260:return wn(e)
case 69:case 136:var t=ls(e)
return t&&rt(t)
case 257:return Pn(e)
case 265:return function(e){var t=m(e)
if(!t.resolvedType){var n=Rn(e.type)
t.resolvedType=n?mn(n):Kc}return t.resolvedType}(e)
default:return Kc}}function In(e,t,n){if(e&&e.length){for(var r=[],a=0,i=e;a<i.length;a++){var o=i[a]
r.push(n(o,t))}return r}return e}function Fn(e,t){switch(e.length){case 1:return function(e,t){return function(n){return n===e?t:n}}(e[0],t[0])
case 2:return function(e,t,n,r){return function(a){return a===e?t:a===n?r:a}}(e[0],t[0],e[1],t[1])}return function(n){for(var r=0;r<e.length;r++)if(n===e[r])return t[r]
return n}}function Ln(e){if(!e.mapper){var t=function(t){for(var n=e.typeParameters,r=0;r<n.length;r++)if(t===n[r])return e.inferences[r].isFixed=!0,Er(e,r)
return t}
t.context=e,e.mapper=t}return e.mapper}function Mn(e){return e}function Bn(e,t){return function(n){return Jn(e(n),t)}}function zn(e){var t=Q(512)
return t.symbol=e.symbol,t.target=e,t}function Kn(t,n,r){var a,i
if(t.typeParameters&&!r){a=e.map(t.typeParameters,zn),n=Bn(Fn(t.typeParameters,a),n)
for(var o=0,s=a;o<s.length;o++)s[o].mapper=n}t.typePredicate&&(i=function(t,n){return e.isIdentifierTypePredicate(t)?{kind:1,parameterName:t.parameterName,parameterIndex:t.parameterIndex,type:Jn(t.type,n)}:{kind:0,type:Jn(t.type,n)}}(t.typePredicate,n))
var c=ft(t.declaration,a,In(t.parameters,n,jn),Jn(t.resolvedReturnType,n),i,t.minArgumentCount,t.hasRestParameter,t.hasStringLiterals)
return c.target=t,c.mapper=n,c}function jn(e,t){if(16777216&e.flags){var n=f(e)
e=n.target,t=Bn(n.mapper,t)}var r=s(83886080|e.flags,e.name)
return r.declarations=e.declarations,r.parent=e.parent,r.target=e,r.mapper=t,e.valueDeclaration&&(r.valueDeclaration=e.valueDeclaration),r}function Jn(e,t){if(e&&t!==Mn){if(512&e.flags)return t(e)
if(65536&e.flags)return e.symbol&&14384&e.symbol.flags?function(e,t){if(t.instantiations){var n=t.instantiations[e.id]
if(n)return n}else t.instantiations=[]
var r=$(196608,e.symbol)
return r.target=e,r.mapper=t,t.instantiations[e.id]=r,r}(e,t):e
if(4096&e.flags)return $t(e.target,In(e.typeArguments,t,Jn))
if(8192&e.flags)return gn(In(e.elementTypes,t,Jn))
if(16384&e.flags)return Dn(In(e.types,t,Jn),!0)
if(32768&e.flags)return Tn(In(e.types,t,Jn))}return e}function Un(t){switch(e.Debug.assert(144!==t.kind||e.isObjectLiteralMethod(t)),t.kind){case 176:case 177:return qn(t)
case 168:return e.forEach(t.properties,Un)
case 167:return e.forEach(t.elements,Un)
case 185:return Un(t.whenTrue)||Un(t.whenFalse)
case 184:return 52===t.operatorToken.kind&&(Un(t.left)||Un(t.right))
case 248:return Un(t.initializer)
case 144:case 143:return qn(t)
case 175:return Un(t.expression)}return!1}function qn(t){return!t.typeParameters&&t.parameters.length&&!e.forEach(t.parameters,function(e){return e.type})}function Wn(e,t){return nr(e,t,z_,void 0)}function Vn(e,t){return nr(e,t,z_,void 0)?-1:0}function Hn(e,t){return nr(e,t,B_,void 0)?-1:0}function Gn(e,t){return Qn(e,t,void 0)}function Xn(e,t){return Yn(e,t,void 0)}function Qn(e,t,n,r,a){return nr(e,t,M_,n,r,a)}function Yn(e,t,n,r,a){return nr(e,t,B_,n,r,a)}function $n(e,t,n){return 0!==Zn(e,t,n,!1,void 0,Hn)}function Zn(t,n,r,a,i,o){if(t===n)return-1
if(!n.hasRestParameter&&t.minArgumentCount>n.parameters.length)return 0
t=Ut(t),n=Ut(n)
for(var s=-1,c=tr(t),_=tr(n),u=function(e,t,n,r){return e.hasRestParameter===n.hasRestParameter?e.hasRestParameter?Math.max(t,r)+1:Math.min(t,r):e.hasRestParameter?r:t}(t,c,n,_),l=t.parameters,d=n.parameters,p=0;u>p;p++){var f=c>p?je(l[p]):jt(t),m=_>p?je(d[p]):jt(n),g=o(f,m,!1)||o(m,f,a)
if(!g)return a&&i(e.Diagnostics.Types_of_parameters_0_and_1_are_incompatible,l[c>p?p:c].name,d[_>p?p:_].name),0
s&=g}if(!r){var y=Kt(n)
if(y===Mc)return s
var h=Kt(t)
if(n.typePredicate){if(t.typePredicate)s&=function(t,n,r,a,i){if(t.kind!==n.kind)return r&&(a(e.Diagnostics.A_this_based_type_guard_is_not_compatible_with_a_parameter_based_type_guard),a(e.Diagnostics.Type_predicate_0_is_not_assignable_to_1,ye(t),ye(n))),0
if(1===t.kind){var o=t,s=n
if(o.parameterIndex!==s.parameterIndex)return r&&(a(e.Diagnostics.Parameter_0_is_not_in_the_same_position_as_parameter_1,o.parameterName,s.parameterName),a(e.Diagnostics.Type_predicate_0_is_not_assignable_to_1,ye(t),ye(n))),0}var c=i(t.type,n.type,r)
return 0===c&&r&&a(e.Diagnostics.Type_predicate_0_is_not_assignable_to_1,ye(t),ye(n)),c}(t.typePredicate,n.typePredicate,a,i,o)
else if(e.isIdentifierTypePredicate(n.typePredicate))return a&&i(e.Diagnostics.Signature_0_must_have_a_type_predicate,me(t)),0}else s&=o(h,y,a)}return s}function er(e,t){var n=Ut(e),r=Ut(t),a=Kt(n),i=Kt(r)
return!(i!==Mc&&!nr(i,a,B_,void 0)&&!nr(a,i,B_,void 0))&&$n(n,r,!0)}function tr(e){var t=e.parameters.length
return e.hasRestParameter?t-1:t}function nr(t,n,r,a,i,s){function c(t,n,r,i){e.Debug.assert(!!a),T=e.chainDiagnosticMessages(T,t,n,r,i)}function _(t,n,r){var a=ge(n),i=ge(r)
a===i&&(a=ge(n,void 0,128),i=ge(r,void 0,128)),c(t||e.Diagnostics.Type_0_is_not_assignable_to_type_1,a,i)}function u(e,t,n,a){var i
if(e===t)return-1
if(r===z_)return l(e,t)
if(Ee(t))return-1
if(e===Bc)return-1
if(e===zc&&t!==Bc)return-1
if(128&e.flags&&t===Ic)return-1
if(128&e.flags&&128&t.flags&&(i=S(e,t)))return i
if(256&e.flags&&t===Rc)return-1
if(r===B_){if(Ee(e))return-1
if(e===Ic&&128&t.flags)return-1}if(8&e.flags&&8&t.flags)return-1
if(1048576&e.flags){if(p(e,t,n))return n&&_(a,e,t),0
49152&t.flags&&(e=mr(e))}var o=T
if(16384&e.flags){if(i=function(e,t,n){for(var r=-1,a=e.types,i=0,o=a;i<o.length;i++){var s=o[i],c=u(s,t,n)
if(!c)return 0
r&=c}return r}(e,t,n))return i}else if(32768&t.flags){if(i=function(e,t,n){for(var r=-1,a=t.types,i=0,o=a;i<o.length;i++){var s=o[i],c=u(e,s,n)
if(!c)return 0
r&=c}return r}(e,t,n))return i}else{if(32768&e.flags&&(i=function(e,t,n){for(var r=e.types,a=0,i=r.length;i>a;a++){var o=u(r[a],t,n&&a===i-1)
if(o)return o}return 0}(e,t,n&&!(16384&t.flags))))return i
if(16384&t.flags&&(i=m(e,t,n)))return i}if(512&e.flags){var s=Gt(e)
if((!s||1&s.flags)&&(s=jc),i=u(s,t,n&&s!==jc))return T=o,i}else{if(4096&e.flags&&4096&t.flags&&e.target===t.target&&(i=g(e,t,n)))return i
var c=wt(e)
if(113664&c.flags&&80896&t.flags&&(i=y(c,e,t,n&&T===o&&!(16777726&e.flags))))return T=o,i}return n&&_(a,e,t),0}function l(e,t){var n
return 80896&e.flags&&80896&t.flags?4096&e.flags&&4096&t.flags&&e.target===t.target&&(n=g(e,t,!1))?n:y(e,e,t,!1):(16384&e.flags&&16384&t.flags||32768&e.flags&&32768&t.flags)&&(n=f(e,t))&&(n&=f(t,e))?n:0}function d(e,t){if(80896&e.flags){var n=Dt(e)
if(r===B_&&(e===Vc||0===n.properties.length)||n.stringIndexType||n.numberIndexType||Pt(e,t))return!0}else if(49152&e.flags)for(var a=0,i=e.types;a<i.length;a++)if(d(i[a],t))return!0
return!1}function p(t,n,r){if(!(67108864&n.flags)&&si(n,80896))for(var i=0,o=St(t);i<o.length;i++){var s=o[i]
if(!d(n,s.name))return r&&(e.Debug.assert(!!a),a=s.valueDeclaration,c(e.Diagnostics.Object_literal_may_only_specify_known_properties_and_0_does_not_exist_in_type_1,fe(s),ge(n))),!0}return!1}function f(e,t){for(var n=-1,r=0,a=e.types;r<a.length;r++){var i=m(a[r],t,!1)
if(!i)return 0
n&=i}return n}function m(e,t,n){for(var r=t.types,a=0,i=r.length;i>a;a++){var o=u(e,r[a],n&&a===i-1)
if(o)return o}return 0}function g(e,t,n){var a=e.typeArguments||kc,i=t.typeArguments||kc
if(a.length!==i.length&&r===z_)return 0
for(var o=a.length<=i.length?a.length:i.length,s=-1,c=0;o>c;c++){var _=u(a[c],i[c],n)
if(!_)return 0
s&=_}return s}function y(t,n,a,i){if(O)return 0
var o=r!==z_||t.id<a.id?t.id+","+a.id:a.id+","+t.id,s=r[o]
if(void 0!==s){if(!i||2!==s)return 1===s?-1:0
r[o]=3}if(N>0){for(var c=0;N>c;c++)if(A[c][o])return 1
if(100===N)return O=!0,0}else E=[],w=[],A=[],P=0
E[N]=t,w[N]=a,A[N]={},A[N][o]=1,N++
var _,u=P
if(1&P||!ar(t,E,N)||(P|=1),2&P||!ar(a,w,N)||(P|=2),3===P?_=1:(_=h(t,a,i))&&(_&=v(t,a,0,i))&&(_&=v(t,a,1,i))&&(_&=x(t,n,a,i))&&(_&=C(t,n,a,i)),P=u,N--,_){var l=A[N],d=-1===_||0===N?r:A[N-1]
e.copyMap(l,d)}else r[o]=i?3:2
return _}function h(t,n,a){if(r===z_)return function(e,t){if(!(80896&e.flags&&80896&t.flags))return 0
var n=St(e),r=St(t)
if(n.length!==r.length)return 0
for(var a=-1,i=0,o=n;i<o.length;i++){var s=o[i],c=Tt(t,s.name)
if(!c)return 0
var _=or(s,c,u)
if(!_)return 0
a&=_}return a}(t,n)
for(var i=-1,o=St(n),s=r===M_&&!(524288&t.flags),_=0,l=o;_<l.length;_++){var d=l[_],p=Pt(t,d.name)
if(p!==d)if(p){if(!(134217728&d.flags)){var f=xa(p),m=xa(d)
if(16&f||16&m){if(p.valueDeclaration!==d.valueDeclaration)return a&&(16&f&&16&m?c(e.Diagnostics.Types_have_separate_declarations_of_a_private_property_0,fe(d)):c(e.Diagnostics.Property_0_is_private_in_type_1_but_not_in_type_2,fe(d),ge(16&f?t:n),ge(16&f?n:t))),0}else if(32&m){var g=p.parent&&32&p.parent.flags?rt(V(p)):void 0,y=rt(V(d))
if(!g||!Ue(g,y))return a&&c(e.Diagnostics.Property_0_is_protected_but_type_1_is_not_a_class_derived_from_2,fe(d),ge(g||t),ge(y)),0}else if(32&f)return a&&c(e.Diagnostics.Property_0_is_protected_in_type_1_but_public_in_type_2,fe(d),ge(t),ge(n)),0
var h=u(je(p),je(d),a)
if(!h)return a&&c(e.Diagnostics.Types_of_property_0_are_incompatible,fe(d)),0
if(i&=h,536870912&p.flags&&!(536870912&d.flags))return a&&c(e.Diagnostics.Property_0_is_optional_in_type_1_but_required_in_type_2,fe(d),ge(t),ge(n)),0}}else if(!(536870912&d.flags)||s)return a&&c(e.Diagnostics.Property_0_is_missing_in_type_1,fe(d),ge(t)),0}return i}function v(t,n,a,i){if(r===z_)return b(t,n,a)
if(n===qc||t===qc)return-1
var o=Ot(t,a),s=Ot(n,a)
if(1===a&&o.length&&s.length&&rr(t)&&!rr(n))return i&&c(e.Diagnostics.Cannot_assign_an_abstract_constructor_type_to_a_non_abstract_constructor_type),0
var _=-1,u=T
e:for(var l=0,d=s;l<d.length;l++){var p=d[l]
if(!p.hasStringLiterals||262144&n.flags){for(var f=i,m=0,g=o;m<g.length;m++){var y=g[m]
if(!y.hasStringLiterals||262144&t.flags){var h=k(y,p,f)
if(h){_&=h,T=u
continue e}f=!1}}return f&&c(e.Diagnostics.Type_0_provides_no_match_for_the_signature_1,ge(t),me(p,void 0,void 0,a)),0}}return _}function k(e,t,n){return Zn(e,t,!1,n,c,u)}function b(e,t,n){var r=Ot(e,n),a=Ot(t,n)
if(r.length!==a.length)return 0
for(var i=-1,o=0,s=r.length;s>o;o++){var c=sr(r[o],a[o],!1,!1,u)
if(!c)return 0
i&=c}return i}function x(t,n,a,i){if(r===z_)return D(0,t,a)
var o=It(a,0)
if(o){if(1&o.flags&&!(16777726&n.flags))return-1
var s=It(t,0)
if(!s)return i&&c(e.Diagnostics.Index_signature_is_missing_in_type_0,ge(t)),0
var _=u(s,o,i)
return _||(i&&c(e.Diagnostics.Index_signatures_are_incompatible),0)}return-1}function C(t,n,a,i){if(r===z_)return D(1,t,a)
var o=It(a,1)
if(o){if(1&o.flags&&!(16777726&n.flags))return-1
var s=It(t,0),_=It(t,1)
return s||_?(s&&_?u(s,o,!1)||u(_,o,i):u(s||_,o,i))||(i&&c(e.Diagnostics.Index_signatures_are_incompatible),0):(i&&c(e.Diagnostics.Index_signature_is_missing_in_type_0,ge(t)),0)}return-1}function D(e,t,n){var r=It(n,e),a=It(t,e)
return a||r?a&&r?u(a,r):0:-1}function S(t,n){if(t.symbol.name!==n.symbol.name||128&t.symbol.flags||128&n.symbol.flags)return 0
for(var r=je(n.symbol),a=0,i=Et(je(t.symbol));a<i.length;a++){var o=i[a]
if(8&o.flags){var s=Pt(r,o.name)
if(!(s&&8&s.flags))return c(e.Diagnostics.Property_0_is_missing_in_type_1,o.name,ge(n,void 0,128)),0}}return-1}var T,E,w,A,P,N=0,O=!1
e.Debug.assert(r!==z_||!a,"no error reporting in identity checking")
var R=u(t,n,!!a,i)
return O?o(a,e.Diagnostics.Excessive_stack_depth_comparing_types_0_and_1,ge(t),ge(n)):T&&(s&&(T=e.concatenateDiagnosticMessageChains(s,T)),R_.add(e.createDiagnosticForNodeFromMessageChain(a,T))),0!==R}function rr(e){if(65536&e.flags){var t=e.symbol
if(t&&32&t.flags){var n=Lo(t)
if(n&&128&n.flags)return!0}}return!1}function ar(e,t,n){if(135168&e.flags&&n>=5)for(var r=e.symbol,a=0,i=0;n>i;i++){var o=t[i]
if(135168&o.flags&&o.symbol===r&&++a>=5)return!0}return!1}function ir(e,t){return 0!==or(e,t,Vn)}function or(e,t,n){if(e===t)return-1
var r=48&xa(e)
if(r!==(48&xa(t)))return 0
if(r){if(Fo(e)!==Fo(t))return 0}else if((536870912&e.flags)!=(536870912&t.flags))return 0
return n(je(e),je(t))}function sr(e,t,n,r,a){if(e===t)return-1
if(!function(e,t,n){return e.parameters.length===t.parameters.length&&e.minArgumentCount===t.minArgumentCount&&e.hasRestParameter===t.hasRestParameter||!!(n&&e.minArgumentCount<=t.minArgumentCount&&(e.hasRestParameter&&!t.hasRestParameter||e.hasRestParameter===t.hasRestParameter&&e.parameters.length>=t.parameters.length))}(e,t,n))return 0
if((e.typeParameters?e.typeParameters.length:0)!==(t.typeParameters?t.typeParameters.length:0))return 0
e=Ut(e)
for(var i=-1,o=(t=Ut(t)).parameters.length,s=0;o>s;s++){var c=a(cr(e,s)?jt(e):je(e.parameters[s]),cr(t,s)?jt(t):je(t.parameters[s]))
if(!c)return 0
i&=c}return r||(i&=a(Kt(e),Kt(t))),i}function cr(e,t){return e.hasRestParameter&&t>=e.parameters.length-1}function _r(t){return e.forEach(t,function(e){return function(e,t){for(var n=0,r=t;n<r.length;n++){var a=r[n]
if(e!==a&&!Gn(a,e))return!1}return!0}(e,t)?e:void 0})}function ur(e){return 4096&e.flags&&e.target===Gc}function lr(e){return!(96&e.flags)&&Xn(e,a_)}function dr(e){return!!Pt(e,"0")}function pr(e){return 256&e.flags}function fr(e){return!!(8192&e.flags)}function mr(e){if(1048576&e.flags){var t=e.regularType
return t||((t=Q(-1048577&e.flags)).symbol=e.symbol,t.members=e.members,t.properties=e.properties,t.callSignatures=e.callSignatures,t.constructSignatures=e.constructSignatures,t.stringIndexType=e.stringIndexType,t.numberIndexType=e.numberIndexType,e.regularType=t),t}return e}function gr(t){if(6291456&t.flags){if(96&t.flags)return Oc
if(524288&t.flags)return function(t){var n=St(t),r={}
e.forEach(n,function(e){var t=je(e),n=gr(t)
if(t!==n){var a=s(67108864|e.flags,e.name)
a.declarations=e.declarations,a.parent=e.parent,a.type=n,a.target=e,e.valueDeclaration&&(a.valueDeclaration=e.valueDeclaration),e=a}r[e.name]=e})
var a=It(t,0),i=It(t,1)
return a&&(a=gr(a)),i&&(i=gr(i)),ne(t.symbol,r,kc,kc,a,i)}(t)
if(16384&t.flags)return Dn(e.map(t.types,gr),!0)
if(ur(t))return mn(gr(t.typeArguments[0]))
if(fr(t))return gn(e.map(t.elementTypes,gr))}return t}function yr(t){var n=!1
if(16384&t.flags)for(var r=0,a=t.types;r<a.length;r++)yr(u=a[r])&&(n=!0)
if(ur(t))return yr(t.typeArguments[0])
if(fr(t))for(var i=0,s=t.elementTypes;i<s.length;i++)yr(u=s[i])&&(n=!0)
if(524288&t.flags)for(var c=0,_=St(t);c<_.length;c++){var u,l=_[c]
2097152&(u=je(l)).flags&&(yr(u)||o(l.valueDeclaration,e.Diagnostics.Object_literal_s_property_0_implicitly_has_an_1_type,l.name,ge(gr(u))),n=!0)}return n}function hr(t,n){var r,a=ge(gr(n))
switch(t.kind){case 142:case 141:r=e.Diagnostics.Member_0_implicitly_has_an_1_type
break
case 139:r=t.dotDotDotToken?e.Diagnostics.Rest_parameter_0_implicitly_has_an_any_type:e.Diagnostics.Parameter_0_implicitly_has_an_1_type
break
case 216:case 144:case 143:case 146:case 147:case 176:case 177:if(!t.name)return void o(t,e.Diagnostics.Function_expression_which_lacks_return_type_annotation_implicitly_has_an_0_return_type,a)
r=e.Diagnostics._0_which_lacks_return_type_annotation_implicitly_has_an_1_return_type
break
default:r=e.Diagnostics.Variable_0_implicitly_has_an_1_type}o(t,r,e.declarationNameToString(t.name),a)}function vr(e,t){a&&xc.noImplicitAny&&2097152&t.flags&&(yr(t)||hr(e,t))}function kr(e,t,n){var r,a=e.parameters.length,i=t.parameters.length
e.hasRestParameter&&t.hasRestParameter?(r=a>i?a:i,a--,i--):e.hasRestParameter?(a--,r=i):t.hasRestParameter?(i--,r=a):r=i>a?a:i
for(var o=0;r>o;o++)n(a>o?je(e.parameters[o]):jt(e),i>o?je(t.parameters[o]):jt(t))}function br(t,n){return{typeParameters:t,inferUnionTypes:n,inferences:e.map(t,xr),inferredTypes:new Array(t.length)}}function xr(){return{primary:void 0,secondary:void 0,isFixed:!1}}function Cr(t,n,r){function a(n,r){if(16384&n.flags&&16384&r.flags||32768&n.flags&&32768&r.flags){for(var o=void 0,f=0,m=r.types;f<m.length;f++)Dr(E=m[f],n.types)&&((o||(o=[])).push(E),a(E,E))
o&&(n=Sr(n,o),r=Sr(r,o))}if(512&r.flags){if(8388608&n.flags)return
for(var g=t.typeParameters,y=0;y<g.length;y++)if(r===g[y]){var h=t.inferences[y]
if(!h.isFixed){var v=d?h.secondary||(h.secondary=[]):h.primary||(h.primary=[])
e.contains(v,n)||v.push(n)}return}}else if(4096&n.flags&&4096&r.flags&&n.target===r.target){var k=n.typeArguments||kc,b=r.typeArguments||kc,x=k.length<b.length?k.length:b.length
for(y=0;x>y;y++)a(k[y],b[y])}else if(8192&n.flags&&8192&r.flags&&n.elementTypes.length===r.elementTypes.length)for(k=n.elementTypes,b=r.elementTypes,y=0;y<k.length;y++)a(k[y],b[y])
else if(49152&r.flags){for(var C=0,D=void 0,S=0,T=b=r.types;S<T.length;S++){var E
512&(E=T[S]).flags&&e.contains(t.typeParameters,E)?(D=E,C++):a(n,E)}16384&r.flags&&1===C&&(d++,a(n,D),d--)}else if(49152&n.flags)for(var w=0,A=k=n.types;w<A.length;w++)a(A[w],r)
else if(80896&(n=wt(n)).flags&&(4096&r.flags&&r.typeArguments||8192&r.flags||65536&r.flags&&r.symbol&&10272&r.symbol.flags)){if(function(e,t){for(var n=0;l>n;n++)if(e===c[n]&&t===_[n])return!0
return!1}(n,r))return
if(l>u)return
if(ar(n,c,l)&&ar(r,_,l))return
var P=n.id+","+r.id
if(e.hasProperty(p,P))return
p[P]=!0,0===l&&(c=[],_=[]),c[l]=n,_[l]=r,l++,function(e,t){for(var n=St(t),r=0,i=n;r<i.length;r++){var o=i[r],s=Tt(e,o.name)
s&&a(je(s),je(o))}}(n,r),i(n,r,0),i(n,r,1),s(n,r,0,0),s(n,r,1,1),s(n,r,0,1),l--}}function i(e,t,n){for(var r=Ot(e,n),a=Ot(t,n),i=r.length,s=a.length,c=s>i?i:s,_=0;c>_;_++)o(Ut(r[i-c+_]),Ut(a[s-c+_]))}function o(e,t){kr(e,t,a),e.typePredicate&&t.typePredicate&&e.typePredicate.kind===t.typePredicate.kind?a(e.typePredicate.type,t.typePredicate.type):a(Kt(e),Kt(t))}function s(e,t,n,r){var i=It(t,r)
if(i){var o=It(e,n)
o&&a(o,i)}}var c,_,u=5,l=0,d=0,p={}
a(n,r)}function Dr(e,t){for(var n=0,r=t;n<r.length;n++)if(Wn(r[n],e))return!0
return!1}function Sr(e,t){for(var n=[],r=0,a=e.types;r<a.length;r++){var i=a[r]
Dr(i,t)||n.push(i)}return 16384&e.flags?Dn(n,!0):Tn(n)}function Tr(e,t){var n=e.inferences[t]
return n.primary||n.secondary||kc}function Er(e,t){var n,r=e.inferredTypes[t]
if(!r){var a=Tr(e,t)
if(a.length){var i=e.inferUnionTypes?Dn(a):_r(a)
r=i?gr(i):Kc,n=!!i}else r=jc,n=!0
if(e.inferredTypes[t]=r,n){var o=Gt(e.typeParameters[t])
if(o){var s=Jn(o,Ln(e))
Xn(r,lt(s,r))||(e.inferredTypes[t]=r=s)}}else(void 0===e.failedTypeParameterIndex||e.failedTypeParameterIndex>t)&&(e.failedTypeParameterIndex=t)}return r}function wr(e){for(var t=0;t<e.inferredTypes.length;t++)Er(e,t)
return e.inferredTypes}function Ar(t){var n=m(t)
return n.resolvedSymbol||(n.resolvedSymbol=!e.nodeIsMissing(t)&&v(t,t.text,1156031,e.Diagnostics.Cannot_find_name_0,t)||Pc),n.resolvedSymbol}function Pr(t){for(;t;)switch(t.kind){case 155:return!0
case 69:case 136:t=t.parent
continue
default:return!1}e.Debug.fail("should not get here")}function Nr(t,n){function r(n){if(n.operatorToken.kind>=56&&n.operatorToken.kind<=68){var r=Rr(n.left)
if(69===r.kind&&Ar(r)===t)return!0}return e.forEachChild(n,i)}function a(n){return!(e.isBindingPattern(n.name)||W(n)!==t||!function t(n){return!!(n.initializer||e.isBindingPattern(n.parent)&&t(n.parent.parent))}(n))||e.forEachChild(n,i)}function i(t){switch(t.kind){case 184:return r(t)
case 214:case 166:return a(t)
case 164:case 165:case 167:case 168:case 169:case 170:case 171:case 172:case 174:case 192:case 175:case 182:case 178:case 181:case 179:case 180:case 183:case 187:case 185:case 188:case 195:case 196:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 207:case 208:case 209:case 244:case 245:case 210:case 211:case 212:case 247:case 236:case 237:case 241:case 242:case 238:case 243:return e.forEachChild(t,i)}return!1}var o=m(n)
if(o.assignmentChecks){var s=o.assignmentChecks[t.id]
if(void 0!==s)return s}else o.assignmentChecks={}
return o.assignmentChecks[t.id]=i(n)}function Or(t,n){function r(n,r,a){function i(e){return a===!!(e.flags&c)}if(179!==r.left.kind||9!==r.right.kind)return n
var o=r.left,s=r.right
if(69!==o.expression.kind||Ar(o.expression)!==t)return n
33===r.operatorToken.kind&&(a=!a)
var c,_=I_[s.text]
return _&&_.type===Bc?n:(_?c=_.flags:(a=!a,c=16777614),16384&n.flags?Dn(e.filter(n.types,i),!0):a&&_&&Gn(_.type,n)?_.type:i(n)?n:Jc)}function a(n,r,a){if(Ee(n)||69!==r.left.kind||Ar(r.left)!==t)return n
var o=Ci(r.right)
if(!Gn(o,Hc))return n
var s,c=Pt(o,"prototype")
if(c){var _=je(c)
Ee(_)||(s=_)}if(!s){var u=void 0
2048&o.flags?u=ut(o).declaredConstructSignatures:65536&o.flags&&(u=Ot(o,1)),u&&u.length&&(s=Dn(e.map(u,function(e){return Kt(Ut(e))})))}return s?i(n,s,a):n}function i(t,n,r){if(!r)return 16384&t.flags?Dn(e.filter(t.types,function(e){return!Gn(e,n)})):t
if(16384&t.flags){var a=e.filter(t.types,function(e){return Xn(e,n)})
if(a.length)return Dn(a)}return Xn(n,t)?n:t}function o(n,r,a){if(1&n.flags)return n
var o=Ga(r).typePredicate
return o?e.isIdentifierTypePredicate(o)?r.arguments[o.parameterIndex]&&s(r.arguments[o.parameterIndex])===t?i(n,o.type,a):n:function(e,n,r,a){if(170===r.kind||169===r.kind){var o=r,c=Rr(o.expression)
if(69===c.kind&&s(c)===t)return i(e,n.type,a)}return e}(n,o,Rr(r.expression),a):n}function s(e){switch((e=Rr(e)).kind){case 69:case 169:return us(e)}}function c(e,t,n){switch(t.kind){case 171:return o(e,t,n)
case 175:return c(e,t.expression,n)
case 184:var i=t.operatorToken.kind
if(32===i||33===i)return r(e,t,n)
if(51===i)return function(e,t,n){return n?c(c(e,t.left,!0),t.right,!0):Dn([c(e,t.left,!1),c(e,t.right,!1)])}(e,t,n)
if(52===i)return function(e,t,n){return n?Dn([c(e,t.left,!0),c(e,t.right,!0)]):c(c(e,t.left,!1),t.right,!1)}(e,t,n)
if(91===i)return a(e,t,n)
break
case 182:if(49===t.operator)return c(e,t.operand,!n)}return e}var _=je(t)
if(n&&3&t.flags&&(Ee(_)||97792&_.flags)){var u=e.getDeclarationOfKind(t,214),l=u&&Se(u),d=_,p=[]
e:for(;n.parent;){var f=n
switch((n=n.parent).kind){case 199:case 185:case 184:p.push({node:n,child:f})
break
case 251:case 221:break e}if(n===l)break}for(var m=void 0;m=p.pop();){var g=m.node
switch(f=m.child,g.kind){case 199:f!==g.expression&&(_=c(_,g.expression,f===g.thenStatement))
break
case 185:f!==g.condition&&(_=c(_,g.condition,f===g.whenTrue))
break
case 184:f===g.right&&(51===g.operatorToken.kind?_=c(_,g.left,!0):52===g.operatorToken.kind&&(_=c(_,g.left,!1)))
break
default:e.Debug.fail("Unreachable!")}_!==d&&Nr(t,g)&&(_=d)}_===Jc&&(_=d)}return _}function Rr(e){for(;175===e.kind;)e=e.expression
return e}function Ir(t){var n=Ar(t)
n===wc&&(177===(a=e.getContainingFunction(t)).kind&&2>Cc&&o(t,e.Diagnostics.The_arguments_object_cannot_be_referenced_in_an_arrow_function_in_ES3_and_ES5_Consider_using_a_standard_function_expression),8&t.parserContextFlags&&(m(a).flags|=8192)),8388608&n.flags&&!Pr(t)&&!Ds(A(n))&&N(n)
var r=H(n)
if(2===Cc&&32&r.flags&&217===r.valueDeclaration.kind&&e.nodeIsDecorated(r.valueDeclaration))for(var a=e.getContainingClass(t);void 0!==a;){if(a===r.valueDeclaration&&a.name!==t){m(a).flags|=524288,m(t).flags|=1048576
break}a=e.getContainingClass(a)}return ao(t,t),no(t,t),function(t,n){if(!(Cc>=2||0==(34&n.flags)||247===n.valueDeclaration.parent.kind)){for(var r=e.getEnclosingBlockScopeContainer(n.valueDeclaration),a=function(t,n){for(var r=t;r&&r!==n;){if(e.isFunctionLike(r))return!0
r=r.parent}return!1}(t.parent,r),i=r,o=!1;i&&!e.nodeStartsNewLexicalEnvironment(i);){if(e.isIterationStatement(i,!1)){o=!0
break}i=i.parent}o&&(a&&(m(i).flags|=65536),202===r.kind&&e.getAncestor(n.valueDeclaration,215).parent===r&&function(t,n){for(var r=t;175===r.parent.kind;)r=r.parent
var a=!1
if(184===r.parent.kind&&(a=r.parent.left===r&&e.isAssignmentOperator(r.parent.operatorToken.kind)),182===r.parent.kind||183===r.parent.kind){var i=r.parent
a=41===i.operator||42===i.operator}if(!a)return!1
for(;r!==n;){if(r===n.statement)return!0
r=r.parent}return!1}(t,r)&&(m(n.valueDeclaration).flags|=2097152),m(n.valueDeclaration).flags|=262144),a&&(m(n.valueDeclaration).flags|=131072)}}(t,n),Or(r,t)}function Fr(e,t){m(e).flags|=2,142===t.kind||145===t.kind?m(t.parent).flags|=4:m(t).flags|=4}function Lr(t){return e.isSuperCallExpression(t)?t:e.isFunctionLike(t)?void 0:e.forEachChild(t,Lr)}function Mr(e){var t=m(e)
return void 0===t.hasSuperCall&&(t.superCall=Lr(e.body),t.hasSuperCall=!!t.superCall),t.superCall}function Br(e){return $e(rt(W(e)))===zc}function zr(t){var n=e.getThisContainer(t,!0),r=!1
if(145===n.kind){var a=n.parent
if(e.getClassExtendsHeritageClauseElement(a)&&!Br(a)){var i=Mr(n);(!i||i.end>t.pos)&&o(t,e.Diagnostics.super_must_be_called_before_accessing_this_in_the_constructor_of_a_derived_class)}}switch(177===n.kind&&(n=e.getThisContainer(n,!1),r=2>Cc),n.kind){case 221:o(t,e.Diagnostics.this_cannot_be_referenced_in_a_module_or_namespace_body)
break
case 220:o(t,e.Diagnostics.this_cannot_be_referenced_in_current_location)
break
case 145:Kr(t,n)&&o(t,e.Diagnostics.this_cannot_be_referenced_in_constructor_arguments)
break
case 142:case 141:64&n.flags&&o(t,e.Diagnostics.this_cannot_be_referenced_in_a_static_property_initializer)
break
case 137:o(t,e.Diagnostics.this_cannot_be_referenced_in_a_computed_property_name)}if(r&&Fr(t,n),e.isClassLike(n.parent)){var s=W(n.parent)
return 64&n.flags?je(s):rt(s).thisType}if(e.isInJavaScriptFile(t)){var c=function(t){var n=e.getJSDocTypeTag(t)
if(n&&n.typeExpression&&n.typeExpression.type&&264===n.typeExpression.type.kind){var r=n.typeExpression.type
if(r.parameters.length>0&&267===r.parameters[0].type.kind)return Rn(r.parameters[0].type)}}(n)
if(c&&c!==Kc)return c
if(176===n.kind&&3===e.getSpecialPropertyAssignmentKind(n.parent)){var _=Ci(n.parent.left.expression.expression).symbol
if(_&&_.members&&16&_.flags)return Xa(_)}}return Oc}function Kr(e,t){for(var n=e;n&&n!==t;n=n.parent)if(139===n.kind)return!0
return!1}function jr(t){var n,r=171===t.parent.kind&&t.parent.expression===t,a=e.getSuperContainer(t,!0),i=!1
if(!r)for(;a&&177===a.kind;)a=e.getSuperContainer(a,!0),i=2>Cc
if(!function(t){return!(!t||(r?145!==t.kind:!e.isClassLike(t.parent)&&168!==t.parent.kind||(64&t.flags?144!==t.kind&&143!==t.kind&&146!==t.kind&&147!==t.kind:144!==t.kind&&143!==t.kind&&146!==t.kind&&147!==t.kind&&142!==t.kind&&141!==t.kind&&145!==t.kind)))}(a)){for(var s=t;s&&s!==a&&137!==s.kind;)s=s.parent
return s&&137===s.kind?o(t,e.Diagnostics.super_cannot_be_referenced_in_a_computed_property_name):r?o(t,e.Diagnostics.Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors):a&&a.parent&&(e.isClassLike(a.parent)||168===a.parent.kind)?o(t,e.Diagnostics.super_property_access_is_permitted_only_in_a_constructor_member_function_or_member_accessor_of_a_derived_class):o(t,e.Diagnostics.super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions),Kc}if(n=64&a.flags||r?512:256,m(t).flags|=n,144===a.kind&&256&a.flags&&(e.isSuperPropertyOrElementAccess(t.parent)&&aa(t.parent)?m(a).flags|=4096:m(a).flags|=2048),i&&Fr(t.parent,a),168===a.parent.kind)return 2>Cc?(o(t,e.Diagnostics.super_is_only_allowed_in_members_of_object_literal_expressions_when_option_target_is_ES2015_or_higher),Kc):Oc
var c=a.parent,_=rt(W(c)),u=_&&Ze(_)[0]
return u?145===a.kind&&Kr(t,a)?(o(t,e.Diagnostics.super_cannot_be_referenced_in_constructor_arguments),Kc):512===n?$e(_):u:(e.getClassExtendsHeritageClauseElement(c)||o(t,e.Diagnostics.super_can_only_be_referenced_in_a_derived_class),Kc)}function Jr(t){var n=t.parent
if((ea(n)||e.isObjectLiteralMethod(n))&&Un(n)){var r=na(n)
if(r){var a=e.hasRestParameter(n),i=n.parameters.length-(a?1:0),o=e.indexOf(n.parameters,t)
if(i>o)return Ya(r,o)
if(a&&o===n.parameters.length-1&&cr(r,n.parameters.length-1))return je(e.lastOrUndefined(r.parameters))}}}function Ur(t){for(;t.parent&&!e.isFunctionLike(t.parent);){if(139===t.parent.kind&&t.parent.initializer===t)return!0
t=t.parent}return!1}function qr(t){if(t.type||145===t.kind||146===t.kind&&e.getSetAccessorTypeAnnotationNode(e.getDeclarationOfKind(t.symbol,147)))return Kt(Bt(t))
var n=ta(t)
return n?Kt(n):void 0}function Wr(t,n){var r=za(t),a=e.indexOf(r,n)
if(a>=0)return Ya(Ga(t),a)}function Vr(e,t){if(!(16384&e.flags))return t(e)
for(var n,r,a=0,i=e.types;a<i.length;a++){var o=t(i[a])
o&&(n?r?r.push(o):r=[n,o]:n=o)}return r?Dn(r):n}function Hr(e,t){return Vr(e,function(e){var n=130048&e.flags?Pt(e,t):void 0
return n?je(n):void 0})}function Gr(e,t){return Vr(e,function(e){return Rt(e,t)})}function Xr(t){return!!(16384&t.flags?e.forEach(t.types,pr):pr(t))}function Qr(t){var n=Yr(t.parent)
if(n){if(!e.hasDynamicName(t)){var r=Hr(n,W(t).name)
if(r)return r}return sa(t.name)&&Gr(n,1)||Gr(n,0)}}function Yr(e){var t=$r(e)
return t&&wt(t)}function $r(t){if(!os(t)){if(t.contextualType)return t.contextualType
var n=t.parent
switch(n.kind){case 214:case 139:case 142:case 141:case 166:return function(t){var n=t.parent
if(t===n.initializer){if(n.type)return Rn(n.type)
if(139===n.kind){var r=Jr(n)
if(r)return r}if(e.isBindingPattern(n.name))return Le(n.name,!0)}}(t)
case 177:case 207:return function(t){var n=e.getContainingFunction(t)
return n&&!n.asteriskToken?qr(n):void 0}(t)
case 187:return function(t){var n=e.getContainingFunction(t)
if(n){var r=qr(n)
if(r)return t.asteriskToken?r:xo(r)}}(n)
case 171:case 172:return Wr(n,t)
case 174:case 192:return Rn(n.type)
case 184:return function(e){var t=e.parent,n=t.operatorToken.kind
if(n>=56&&68>=n){if(e===t.right)return Ci(t.left)}else{if(52===n){var r=$r(t)
return r||e!==t.right||(r=Ci(t.left)),r}if((51===n||24===n)&&e===t.right)return $r(t)}}(t)
case 248:return Qr(n)
case 167:return function(t){var n=t.parent,r=Yr(n)
if(r)return Hr(r,""+e.indexOf(n.elements,t))||Gr(r,1)||(Cc>=2?ko(r,void 0):void 0)}(t)
case 185:return function(e){var t=e.parent
return e===t.whenTrue||e===t.whenFalse?$r(t):void 0}(t)
case 193:return e.Debug.assert(186===n.parent.kind),function(e,t){return 173===e.parent.kind?Wr(e.parent,t):void 0}(n.parent,t)
case 175:case 243:return $r(n)
case 241:case 242:return function(t){var n=t.kind,r=va(t.parent)
if(241===t.kind){if(!r||Ee(r))return
return Te(r,t.name.text)}return 242===t.kind?r:void e.Debug.fail("Expected JsxAttribute or JsxSpreadAttribute, got ts.SyntaxKind["+n+"]")}(n)}}}function Zr(e){var t=Nt(e,0)
if(1===t.length){var n=t[0]
if(!n.typeParameters)return n}}function ea(e){return 176===e.kind||177===e.kind}function ta(t){return ea(t)||e.isObjectLiteralMethod(t)?na(t):void 0}function na(t){e.Debug.assert(144!==t.kind||e.isObjectLiteralMethod(t))
var n=e.isObjectLiteralMethod(t)?function(t){return e.Debug.assert(e.isObjectLiteralMethod(t)),os(t)?void 0:Qr(t)}(t):Yr(t)
if(n){if(!(16384&n.flags))return Zr(n)
for(var r,a=0,i=n.types;a<i.length;a++){var o=Zr(i[a])
if(o)if(r){if(!sr(r[0],o,!1,!0,Vn))return
r.push(o)}else r=[o]}var s
return r&&((s=mt(r[0])).resolvedReturnType=void 0,s.unionSignatures=r),s}}function ra(e){return e&&e.context}function aa(e){var t=e.parent
return 184===t.kind&&56===t.operatorToken.kind&&t.left===e||(248===t.kind?aa(t.parent):167===t.kind&&aa(t))}function ia(e){return 166===e.kind&&!!e.initializer||184===e.kind&&56===e.operatorToken.kind}function oa(t,n){for(var r=t.elements,a=!1,i=[],s=aa(t),c=0,_=r;c<_.length;c++){var u=_[c]
if(s&&188===u.kind){var l=Ci(u.expression,n),d=It(l,1)||(Cc>=2?ko(l,void 0):void 0)
d&&i.push(d)}else{var p=Ci(u,n)
i.push(p)}a=a||188===u.kind}if(!a){if(s&&i.length)return(p=yn(i)).pattern=t,p
var f=Yr(t)
if(f&&function(t){return!!(16384&t.flags?e.forEach(t.types,dr):dr(t))}(f)){var m=f.pattern
if(m&&(165===m.kind||167===m.kind))for(var g=m.elements,y=i.length;y<g.length;y++){var h=g[y]
ia(h)?i.push(f.elementTypes[y]):(190!==h.kind&&o(h,e.Diagnostics.Initializer_provides_no_value_for_this_binding_element_and_the_binding_element_has_no_default_value),i.push(Kc))}if(i.length)return gn(i)}}return mn(i.length?Dn(i):Bc)}function sa(e){return 137===e.kind?function(e){return ca(ua(e),132)}(e):_a(e.text)}function ca(e,t){return Ee(e)||ci(e,t)}function _a(e){return(+e).toString()===e}function ua(t){var n=m(t.expression)
return n.resolvedType||(n.resolvedType=Ci(t.expression),ca(n.resolvedType,16777606)?Pa(t.expression,n.resolvedType,!0):o(t,e.Diagnostics.A_computed_property_name_must_be_of_type_string_number_symbol_or_any)),n.resolvedType}function la(t,n){function r(n){if(_&&function(t,n){return!!(16384&t.flags?e.forEach(t.types,function(e){return Rt(e,n)}):Rt(t,n))}(_,n)){for(var r=[],a=0;a<c.length;a++){var i=t.properties[a]
if(0===n||sa(i.name)){var o=je(c[a])
e.contains(r,o)||r.push(o)}}var s=r.length?Dn(r):Bc
return l|=s.flags,s}}var a=aa(t);(function(t,n){for(var r={},a=function(t){var a=t.name
if(190===t.kind||137===a.kind)return Qs(a),"continue"
if(249===t.kind&&!n&&t.objectAssignmentInitializer)return{value:_c(t.equalsToken,e.Diagnostics.can_only_be_used_in_an_object_literal_property_inside_a_destructuring_assignment)}
e.forEach(t.modifiers,function(n){118===n.kind&&144===t.kind||_c(n,e.Diagnostics._0_modifier_cannot_be_used_here,e.getTextOfNode(n))})
var i=void 0
if(248===t.kind||249===t.kind?($s(0,t.questionToken,e.Diagnostics.An_object_member_cannot_be_declared_optional),8===a.kind&&pc(a),i=1):144===t.kind?i=1:146===t.kind?i=2:147===t.kind?i=4:e.Debug.fail("Unexpected syntax kind:"+t.kind),e.hasProperty(r,a.text)){var o=r[a.text]
if(1===i&&1===o)return"continue"
if(!(6&i&&6&o))return{value:_c(a,e.Diagnostics.An_object_literal_cannot_have_property_and_accessor_with_the_same_name)}
if(6===o||i===o)return{value:_c(a,e.Diagnostics.An_object_literal_cannot_have_multiple_get_Slashset_accessors_with_the_same_name)}
r[a.text]=i|o}else r[a.text]=i},i=0,o=t.properties;i<o.length;i++){var s=o[i],c=a(s)
if("object"==typeof c)return c.value}})(t,a)
for(var i={},c=[],_=Yr(t),u=_&&_.pattern&&(164===_.pattern.kind||168===_.pattern.kind),l=0,d=!1,p=0,f=t.properties;p<f.length;p++){var m=f[p],g=m.symbol
if(248===m.kind||249===m.kind||e.isObjectLiteralMethod(m)){var y=void 0
248===m.kind?y=ki(m,n):144===m.kind?y=bi(m,n):(e.Debug.assert(249===m.kind),y=Ci(m.name,n)),l|=y.flags
var h=s(67108868|g.flags,g.name)
if(a)(248===m.kind&&ia(m.initializer)||249===m.kind&&m.objectAssignmentInitializer)&&(h.flags|=536870912),e.hasDynamicName(m)&&(d=!0)
else if(u&&!(67108864&_.flags)){var v=Pt(_,g.name)
v?h.flags|=536870912&v.flags:xc.suppressExcessPropertyErrors||o(m.name,e.Diagnostics.Object_literal_may_only_specify_known_properties_and_0_does_not_exist_in_type_1,fe(g),ge(_))}h.declarations=g.declarations,h.parent=g.parent,g.valueDeclaration&&(h.valueDeclaration=g.valueDeclaration),h.type=y,h.target=g,g=h}else e.Debug.assert(146===m.kind||147===m.kind),Oi(m)
e.hasDynamicName(m)||(i[g.name]=g),c.push(g)}if(u)for(var k=0,b=Et(_);k<b.length;k++)h=b[k],e.hasProperty(i,h.name)||(536870912&h.flags||o(h.valueDeclaration||h.bindingElement,e.Diagnostics.Initializer_provides_no_value_for_this_binding_element_and_the_binding_element_has_no_default_value),i[h.name]=h,c.push(h))
var x=r(0),C=r(1),D=ne(t.symbol,i,kc,kc,x,C),S=xc.suppressExcessPropertyErrors?0:1048576
return D.flags|=4718592|S|14680064&l|(d?67108864:0),a&&(D.pattern=t),D}function da(e){return ka(e),f_||Oc}function pa(e){return e.indexOf("-")<0}function fa(t,n,r){var a,i=void 0
if(n===jc&&pa(t.name.text))o(t.parent,e.Diagnostics.JSX_element_class_does_not_support_attributes_because_it_does_not_have_a_0_property,ha())
else if(n&&!Ee(n)){var s=Pt(n,t.name.text)
if(i=s&&je(s),pa(t.name.text)){var c=It(n,0)
if(c)i=c
else if(!i)return o(t.name,e.Diagnostics.Property_0_does_not_exist_on_type_1,t.name.text,ge(n)),Kc}}return a=t.initializer?Ci(t.initializer):Fc,i&&Yn(a,i,t),r[t.name.text]=!0,a}function ma(t,n,r){for(var a=Ci(t.expression),i=0,o=Et(a);i<o.length;i++){var s=o[i]
if(!r[s.name]){var c=Pt(n,s.name)
if(c){var _=e.chainDiagnosticMessages(void 0,e.Diagnostics.Property_0_of_JSX_spread_attribute_is_not_assignable_to_target_property,s.name)
Yn(je(s),je(c),t,void 0,_)}r[s.name]=!0}}return a}function ga(e){return void 0===F_[e]?F_[e]=un(L_.JSX,e)||Kc:F_[e]}function ya(t){var n=m(t)
return n.resolvedSymbol||(function(t){return 136!==t.kind&&e.isIntrinsicJsxName(t.text)}(t.tagName)?n.resolvedSymbol=function(t){var r=ga(L_.IntrinsicElements)
if(r!==Kc){var a=Pt(r,t.tagName.text)
return a?(n.jsxFlags|=1,a):It(r,0)?(n.jsxFlags|=2,r.symbol):(o(t,e.Diagnostics.Property_0_does_not_exist_on_type_1,t.tagName.text,"JSX."+L_.IntrinsicElements),Pc)}return xc.noImplicitAny&&o(t,e.Diagnostics.JSX_element_implicitly_has_type_any_because_no_interface_JSX_0_exists,L_.IntrinsicElements),Pc}(t):n.resolvedSymbol=function(e){var t=function(e){if(69===e.tagName.kind){var t=e.tagName,n=Ar(t)
return n.exportSymbol||n}return Sa(e.tagName).symbol}(e)
return t&&t!==Pc&&(n.jsxFlags|=4,8388608&t.flags&&N(t)),t||Pc}(t)),n.resolvedSymbol}function ha(){var t=cn(L_.JSX,1536,void 0),n=t&&y(t.exports,L_.ElementAttributesPropertyNameContainer,793056),r=n&&rt(n),a=r&&Et(r)
return a?0===a.length?"":1===a.length?a[0].name:void o(n.declarations[0],e.Diagnostics.The_global_type_JSX_0_may_not_have_more_than_one_property,L_.ElementAttributesPropertyNameContainer):void 0}function va(t){var n=m(t)
if(!n.resolvedJsxType){var r=ya(t)
if(4&n.jsxFlags){var a=function(t){e.Debug.assert(!!(4&m(t).jsxFlags),"Should not call getJsxElementInstanceType on non-class Element")
var n=ya(t)
if(n===Pc)return Oc
var r=je(n)
if(Ee(r))return Oc
var a=Ot(r,1)
return 0===a.length&&0===(a=Ot(r,0)).length?(o(t.tagName,e.Diagnostics.JSX_element_type_0_does_not_have_any_construct_or_call_signatures,e.getTextOfNode(t.tagName)),Kc):Dn(a.map(Kt))}(t),i=(d_||(d_=un(L_.JSX,L_.ElementClass)),d_)
if(!i||!Xn(a,i)){var s=je(r),c=s&&Ot(s,0),_=c&&c.length>0&&c[0],u=_&&Kt(_),l=u&&(0===_.parameters.length?jc:je(_.parameters[0]))
if(u&&Xn(u,f_)){var d=ga(L_.IntrinsicAttributes)
return d!==Kc&&(l=xt(d,l)),n.resolvedJsxType=l}}if(i&&nr(a,i,B_,t,e.Diagnostics.JSX_element_type_0_is_not_a_constructor_function_for_JSX_elements),Ee(a))return n.resolvedJsxType=a
var p=ha()
if(void 0===p)return n.resolvedJsxType=Oc
if(""===p)return n.resolvedJsxType=a
var f=Te(a,p)
if(f){if(Ee(f)||f===Kc)return n.resolvedJsxType=f
if(16384&f.flags)return o(t.tagName,e.Diagnostics.JSX_element_attributes_type_0_may_not_be_a_union_type,ge(f)),n.resolvedJsxType=Oc
var g=f,y=ga(L_.IntrinsicClassAttributes)
if(y!==Kc){var h=Ve(y.symbol)
h?1===h.length&&(g=xt($t(y,[a]),g)):g=xt(f,y)}var v=ga(L_.IntrinsicAttributes)
return v!==Kc&&(g=xt(v,g)),n.resolvedJsxType=g}return n.resolvedJsxType=jc}return 1&n.jsxFlags?n.resolvedJsxType=je(r):2&n.jsxFlags?n.resolvedJsxType=Vt(r,0):n.resolvedJsxType=Oc}return n.resolvedJsxType}function ka(t){(function(t){for(var n={},r=0,a=t.attributes;r<a.length;r++){var i=a[r]
if(242!==i.kind){var o=i,s=o.name
if(e.hasProperty(n,s.text))return _c(s,e.Diagnostics.JSX_elements_cannot_have_multiple_attributes_with_the_same_name)
n[s.text]=!0
var c=o.initializer
if(c&&243===c.kind&&!c.expression)return _c(o.initializer,e.Diagnostics.JSX_attributes_must_only_be_assigned_a_non_empty_expression)}}})(t),function(t){0===(xc.jsx||0)&&o(t,e.Diagnostics.Cannot_use_JSX_unless_the_jsx_flag_is_provided),void 0===f_&&xc.noImplicitAny&&o(t,e.Diagnostics.JSX_element_implicitly_has_type_any_because_the_global_type_JSX_Element_does_not_exist)}(t)
var n=2===xc.jsx?e.Diagnostics.Cannot_find_name_0:void 0,r=xc.reactNamespace?xc.reactNamespace:"React",a=v(t.tagName,r,107455,n,r)
a&&(f(a).referenced=!0)
for(var i=va(t),s={},c=!1,_=t.attributes.length-1;_>=0;_--)241===t.attributes[_].kind?fa(t.attributes[_],i,s):(e.Debug.assert(242===t.attributes[_].kind),Ee(ma(t.attributes[_],i,s))&&(c=!0))
if(i&&!c){var u=Et(i)
for(_=0;_<u.length;_++)536870912&u[_].flags||void 0!==s[u[_].name]||o(t,e.Diagnostics.Property_0_is_missing_in_type_1,u[_].name,ge(i))}}function ba(e){return e.expression?Ci(e.expression):Kc}function xa(t){return t.valueDeclaration?e.getCombinedNodeFlags(t.valueDeclaration):134217728&t.flags?72:0}function Ca(t,n,r,a){var i=xa(a),s=rt(V(a))
if(95===n.kind){var c=169===t.kind?t.name:t.right
if(2>Cc&&144!==function(e){return e.valueDeclaration?e.valueDeclaration.kind:142}(a))return o(c,e.Diagnostics.Only_public_and_protected_methods_of_the_base_class_are_accessible_via_the_super_keyword),!1
if(128&i)return o(c,e.Diagnostics.Abstract_method_0_in_class_1_cannot_be_accessed_via_super_expression,fe(a),ge(s)),!1}if(!(48&i))return!0
var _=e.getContainingClass(t),u=_?rt(W(_)):void 0
return 16&i?s===u||(o(t,e.Diagnostics.Property_0_is_private_and_only_accessible_within_class_1,fe(a),ge(s)),!1):!(95!==n.kind&&(u&&Ue(u,s)?!(64&i)&&(33554432&r.flags&&(r=Gt(r)),!(3072&Je(r).flags&&Ue(r,u))&&(o(t,e.Diagnostics.Property_0_is_protected_and_only_accessible_through_an_instance_of_class_1,fe(a),ge(u)),1)):(o(t,e.Diagnostics.Property_0_is_protected_and_only_accessible_within_class_1_and_its_subclasses,fe(a),ge(s)),1)))}function Da(e){return Ta(e,e.expression,e.name)}function Sa(e){return Ta(e,e.left,e.right)}function Ta(t,n,r){var a=Ci(n)
if(Ee(a))return a
var i=wt(gr(a))
if(i===Kc)return Kc
var s=Pt(i,r.text)
return s?(m(t).resolvedSymbol=s,s.parent&&32&s.parent.flags&&Ca(t,n,i,s),je(s)):(r.text&&o(r,e.Diagnostics.Property_0_does_not_exist_on_type_1,e.declarationNameToString(r),ge(33554432&a.flags?i:a)),Kc)}function Ea(t){var n=t.initializer
if(215===n.kind){var r=n.declarations[0]
if(r&&!e.isBindingPattern(r.name))return W(r)}else if(69===n.kind)return Ar(n)}function wa(e){return It(e,1)&&!It(e,0)}function Aa(t){if(!t.argumentExpression){var n,r=e.getSourceFileOfNode(t)
172===t.parent.kind&&t.parent.expression===t?cc(r,n=e.skipTrivia(r.text,t.expression.end),t.end-n,e.Diagnostics.new_T_cannot_be_used_to_create_an_array_Use_new_Array_T_instead):cc(r,n=t.end-"]".length,t.end-n,e.Diagnostics.Expression_expected)}var a=wt(Ci(t.expression)),i=t.argumentExpression?Ci(t.argumentExpression):Kc
if(a===Kc)return Kc
var s=_i(a)
if(s&&(!t.argumentExpression||9!==t.argumentExpression.kind))return o(t.argumentExpression,e.Diagnostics.A_const_enum_member_can_only_be_accessed_using_a_string_literal),Kc
if(t.argumentExpression){var c=function(t,n){if(9===t.kind||8===t.kind)return t.text
if(170===t.kind||169===t.kind){var r=As(t)
if(void 0!==r)return r.toString()}if(Pa(t,n,!1)){var a=t.name.text
return e.getPropertyNameForKnownSymbolName(a)}}(t.argumentExpression,i)
if(void 0!==c){var _=Pt(a,c)
if(_)return m(t).resolvedSymbol=_,je(_)
if(s)return o(t.argumentExpression,e.Diagnostics.Property_0_does_not_exist_on_const_enum_1,c,fe(a.symbol)),Kc}}if(ca(i,16777606)){if(ca(i,132)||function(e){var t=Rr(e)
if(69===t.kind){var n=Ar(t)
if(3&n.flags)for(var r=e,a=e.parent;a;){if(203===a.kind&&r===a.statement&&Ea(a)===n&&wa(Ci(a.expression)))return!0
r=a,a=a.parent}}return!1}(t.argumentExpression)){var u=It(a,1)
if(u)return u}var l=It(a,0)
return l||(!xc.noImplicitAny||xc.suppressImplicitAnyIndexErrors||Ee(a)||o(t,It(a,1)?e.Diagnostics.Element_implicitly_has_an_any_type_because_index_expression_is_not_of_type_number:e.Diagnostics.Index_signature_of_object_type_implicitly_has_an_any_type),Oc)}return o(t,e.Diagnostics.An_index_expression_argument_must_be_of_type_string_number_symbol_or_any),Kc}function Pa(t,n,r){if(n===Kc)return!1
if(!e.isWellKnownSymbolSyntactically(t))return!1
if(0==(16777216&n.flags))return r&&o(t,e.Diagnostics.A_computed_property_name_of_the_form_0_must_be_of_type_symbol,e.getTextOfNode(t)),!1
var a=t.expression,i=Ar(a)
if(!i)return!1
var s=Wc||(Wc=on("Symbol"))
return!(!s||i!==s&&(r&&o(a,e.Diagnostics.Symbol_reference_does_not_refer_to_the_global_Symbol_constructor_object),1))}function Na(t){return 173===t.kind?Ci(t.template):140!==t.kind&&e.forEach(t.arguments,function(e){Ci(e)}),h_}function Oa(e){return Na(e),v_}function Ra(e){for(var t=0;t<e.length;t++){var n=e[t]
if(n&&188===n.kind)return t}return-1}function Ia(t,n,r){var a,i,o,s=-1
if(173===t.kind){var c=t
if(a=n.length,i=void 0,186===c.template.kind){var _=c.template,u=e.lastOrUndefined(_.templateSpans)
e.Debug.assert(void 0!==u),o=e.nodeIsMissing(u.literal)||!!u.literal.isUnterminated}else{var l=c.template
e.Debug.assert(11===l.kind),o=!!l.isUnterminated}}else if(140===t.kind)i=void 0,a=Ka(t,void 0,r)
else{var d=t
if(!d.arguments)return e.Debug.assert(172===d.kind),0===r.minArgumentCount
a=d.arguments.hasTrailingComma?n.length+1:n.length,o=d.arguments.end===d.end,i=d.typeArguments,s=Ra(n)}if(i&&(!r.typeParameters||i.length!==r.typeParameters.length))return!1
if(s>=0)return cr(r,s)
if(!r.hasRestParameter&&a>r.parameters.length)return!1
var p=a>=r.minArgumentCount
return o||p}function Fa(e){if(80896&e.flags){var t=Dt(e)
if(1===t.callSignatures.length&&0===t.constructSignatures.length&&0===t.properties.length&&!t.stringIndexType&&!t.numberIndexType)return t.callSignatures[0]}}function La(e,t,n,r,a){for(var i=t.typeParameters,o=Ln(a),s=0;s<i.length;s++)a.inferences[s].isFixed||(a.inferredTypes[s]=void 0)
void 0===a.failedTypeParameterIndex||a.inferences[a.failedTypeParameterIndex].isFixed||(a.failedTypeParameterIndex=void 0)
var c=Ka(e,n,t)
for(s=0;c>s;s++)if(void 0===(l=qa(e,n,s))||190!==l.kind){var _=Ya(t,s),u=Ua(e,s)
void 0===u&&(u=hi(l,_,r&&void 0!==r[s]?Mn:o)),Cr(a,u,_)}if(r)for(s=0;c>s;s++)if(!1===r[s]){var l
Cr(a,hi(l=n[s],_=Ya(t,s),o),_)}wr(a)}function Ma(t,n,r,a,i){for(var o,s=t.typeParameters,c=!0,_=0;_<s.length;_++)if(c){var u=Gt(s[_])
if(u){var l=void 0,d=e.Diagnostics.Type_0_does_not_satisfy_the_constraint_1
a&&i&&(l=e.chainDiagnosticMessages(l,d),d=i),o||(o=Fn(s,r))
var p=r[_]
c=Yn(p,lt(Jn(u,o),p),a?n[_]:void 0,d,l)}}return c}function Ba(t,n,r,a,i,o){for(var s=Ka(t,n,r),c=0;s>c;c++){var _=qa(t,n,c)
if(void 0===_||190!==_.kind){var u=Ya(r,c),l=Ua(t,c)
if(void 0===l&&(l=9!==_.kind||o?hi(_,u,i&&i[c]?Mn:void 0):An(_.text)),!nr(l,u,a,o?Wa(t,c,_):void 0,e.Diagnostics.Argument_of_type_0_is_not_assignable_to_parameter_of_type_1))return!1}}return!0}function za(t){var n
if(173===t.kind){var r=t.template
n=[void 0],186===r.kind&&e.forEach(r.templateSpans,function(e){n.push(e.expression)})}else{if(140===t.kind)return
n=t.arguments||kc}return n}function Ka(e,t,n){if(140!==e.kind)return t.length
switch(e.parent.kind){case 217:case 189:return 1
case 142:return 2
case 144:case 146:case 147:return 0===Cc?2:n.parameters.length>=3?3:2
case 139:return 3}}function ja(t){return 217===t.kind?je(W(t)):139===t.kind&&145===(t=t.parent).kind?je(W(t)):142===t.kind||144===t.kind||146===t.kind||147===t.kind?function(e){var t=W(e.parent)
return 64&e.flags?je(t):rt(t)}(t):(e.Debug.fail("Unsupported decorator target."),Kc)}function Ja(t,n){return 0===n?ja(t.parent):1===n?function(t){if(217===t.kind)return e.Debug.fail("Class decorators should not have a second synthetic argument."),Kc
if(139===t.kind&&145===(t=t.parent).kind)return Oc
if(142===t.kind||144===t.kind||146===t.kind||147===t.kind){var n=t
switch(n.name.kind){case 69:case 8:case 9:return An(n.name.text)
case 137:var r=ua(n.name)
return ci(r,16777216)?r:Rc
default:return e.Debug.fail("Unsupported property name."),Kc}}return e.Debug.fail("Unsupported decorator target."),Kc}(t.parent):2===n?function(t){return 217===t.kind?(e.Debug.fail("Class decorators should not have a third synthetic argument."),Kc):139===t.kind?Ic:142===t.kind?(e.Debug.fail("Property decorators should not have a third synthetic argument."),Kc):144===t.kind||146===t.kind||147===t.kind?ln(ds(t)):(e.Debug.fail("Unsupported decorator target."),Kc)}(t.parent):(e.Debug.fail("Decorators should not have a fourth synthetic argument."),Kc)}function Ua(e,t,n){return 140===e.kind?Ja(e,t):0===t&&173===e.kind?Zc:void 0}function qa(e,t,n){return 140===e.kind||0===n&&173===e.kind?void 0:t[n]}function Wa(e,t,n){return 140===e.kind?e.expression:0===t&&173===e.kind?e.template:n}function Va(t,n,r,i){function o(n,r,a,o){var s
s=e.chainDiagnosticMessages(s,n,r,a,o),i&&(s=e.chainDiagnosticMessages(s,i)),R_.add(e.createDiagnosticForNodeFromMessageChain(t,s))}function s(n,r){for(var a=0,i=n;a<i.length;a++){var o=i[a]
if(Ia(t,y,o)){for(var s=void 0,_=void 0,u=o.typeParameters?br(o.typeParameters,!1):void 0;;){if((s=o).typeParameters){var l=void 0
if(c?(l=e.map(c,Rn),_=Ma(s,c,l,!1)):(La(t,s,y,d,u),_=void 0===u.failedTypeParameterIndex,l=u.inferredTypes),!_)break
s=Jt(s,l)}if(!Ba(t,y,s,r,d,!1))break
var g=d?e.indexOf(d,!0):-1
if(0>g)return s
d[g]=!1}o.typeParameters?_?p=s:(f=o,c||(m=u)):(e.Debug.assert(o===s),p=o)}}}var c,_=173===t.kind,u=140===t.kind
_||u||(c=t.typeArguments,95!==t.expression.kind&&e.forEach(c,es))
var l=r||[]
if(function(t,n){var r,a,i,o,s=0,c=-1
e.Debug.assert(!n.length)
for(var _=0,u=t;_<u.length;_++){var l=u[_],d=l.declaration&&W(l.declaration),p=l.declaration&&l.declaration.parent
a&&d!==a?(i=s=n.length,r=p):r&&p===r?i++:(r=p,i=s),a=d,l.hasStringLiterals?(o=++c,s++):o=i,n.splice(o,0,l)}}(n,l),!l.length)return o(e.Diagnostics.Supplied_parameters_do_not_match_any_signature_of_call_target),Oa(t)
var d,p,f,m,g,y=za(t)
if(!u)for(var h=_?1:0;h<y.length;h++)Un(y[h])&&(d||(d=new Array(y.length)),d[h]=!0)
if(l.length>1&&(g=s(l,M_)),g||(p=void 0,f=void 0,m=void 0,g=s(l,B_)),g)return g
if(p)Ba(t,y,p,B_,void 0,!0)
else if(f)if(_||u||!c){e.Debug.assert(m.failedTypeParameterIndex>=0)
var v=f.typeParameters[m.failedTypeParameterIndex],k=Tr(m,m.failedTypeParameterIndex),b=e.chainDiagnosticMessages(void 0,e.Diagnostics.The_type_argument_for_type_parameter_0_cannot_be_inferred_from_the_usage_Consider_specifying_the_type_arguments_explicitly,ge(v))
i&&(b=e.chainDiagnosticMessages(b,i)),function(t,n,r){for(var a,i,o=0,s=0;s<t.length;s++){for(var c=0,_=void 0,u=0;u<t.length;u++)Gn(t[u],t[s])?c++:_||(_=t[u])
if(e.Debug.assert(!!_,"If there is no common supertype, each type should have a downfallType"),c>o&&(a=t[s],i=_,o=c),o===t.length-1)break}Qn(i,a,n,e.Diagnostics.Type_argument_candidate_1_is_not_a_valid_type_argument_because_it_is_not_a_supertype_of_candidate_0,r)}(k,t.expression||t.tag,b)}else{var x=t.typeArguments
Ma(f,x,e.map(x,Rn),!0,i)}else o(e.Diagnostics.Supplied_parameters_do_not_match_any_signature_of_call_target)
if(!a)for(var C=0,D=l;C<D.length;C++){var S=D[C]
if(Ia(t,y,S))return S.typeParameters&&c&&(S=Jt(S,e.map(c,Rn))),S}return Oa(t)}function Ha(t){switch(t.parent.kind){case 217:case 189:return e.Diagnostics.Unable_to_resolve_signature_of_class_decorator_when_called_as_an_expression
case 139:return e.Diagnostics.Unable_to_resolve_signature_of_parameter_decorator_when_called_as_an_expression
case 142:return e.Diagnostics.Unable_to_resolve_signature_of_property_decorator_when_called_as_an_expression
case 144:case 146:case 147:return e.Diagnostics.Unable_to_resolve_signature_of_method_decorator_when_called_as_an_expression}}function Ga(t,n){var r=m(t)
return r.resolvedSignature&&!n||(r.resolvedSignature=h_,171===t.kind?r.resolvedSignature=function(t,n){if(95===t.expression.kind){var r=jr(t.expression)
return r!==Kc?Va(t,Ye(r,e.getClassExtendsHeritageClauseElement(e.getContainingClass(t)).typeArguments),n):Na(t)}var a=Ci(t.expression),i=wt(a)
if(i===Kc)return Oa(t)
var s=Ot(i,0),c=Ot(i,1)
return Ee(a)||!(s.length||c.length||16384&a.flags)&&Xn(a,Hc)?(a!==Kc&&t.typeArguments&&o(t,e.Diagnostics.Untyped_function_calls_may_not_accept_type_arguments),Na(t)):s.length?Va(t,s,n):(c.length?o(t,e.Diagnostics.Value_of_type_0_is_not_callable_Did_you_mean_to_include_new,ge(a)):o(t,e.Diagnostics.Cannot_invoke_an_expression_whose_type_lacks_a_call_signature),Oa(t))}(t,n):172===t.kind?r.resolvedSignature=function(t,n){if(t.arguments&&1>Cc){var r=Ra(t.arguments)
r>=0&&o(t.arguments[r],e.Diagnostics.Spread_operator_in_new_expressions_is_only_available_when_targeting_ECMAScript_5_and_higher)}var a=Ci(t.expression)
if((a=wt(a))===Kc)return Oa(t)
var i=a.symbol&&Lo(a.symbol)
if(i&&128&i.flags)return o(t,e.Diagnostics.Cannot_create_an_instance_of_the_abstract_class_0,e.declarationNameToString(i.name)),Oa(t)
if(Ee(a))return t.typeArguments&&o(t,e.Diagnostics.Untyped_function_calls_may_not_accept_type_arguments),Na(t)
var s=Ot(a,1)
if(s.length)return Va(t,s,n)
var c=Ot(a,0)
if(c.length){var _=Va(t,c,n)
return Kt(_)!==Mc&&o(t,e.Diagnostics.Only_a_void_function_can_be_called_with_the_new_keyword),_}return o(t,e.Diagnostics.Cannot_use_new_with_an_expression_whose_type_lacks_a_call_or_construct_signature),Oa(t)}(t,n):173===t.kind?r.resolvedSignature=function(t,n){var r=Ci(t.tag),a=wt(r)
if(a===Kc)return Oa(t)
var i=Ot(a,0)
return Ee(r)||!i.length&&!(16384&r.flags)&&Xn(r,Hc)?Na(t):i.length?Va(t,i,n):(o(t,e.Diagnostics.Cannot_invoke_an_expression_whose_type_lacks_a_call_signature),Oa(t))}(t,n):140===t.kind?r.resolvedSignature=function(t,n){var r=Ci(t.expression),a=wt(r)
if(a===Kc)return Oa(t)
var i=Ot(a,0)
if(r===Oc||!i.length&&!(16384&r.flags)&&Xn(r,Hc))return Na(t)
var o=Ha(t)
if(!i.length){var s=void 0
return s=e.chainDiagnosticMessages(s,e.Diagnostics.Cannot_invoke_an_expression_whose_type_lacks_a_call_signature),s=e.chainDiagnosticMessages(s,o),R_.add(e.createDiagnosticForNodeFromMessageChain(t,s)),Oa(t)}return Va(t,i,n,o)}(t,n):e.Debug.fail("Branch in 'getResolvedSignature' should be unreachable.")),r.resolvedSignature}function Xa(e){var t=f(e)
return t.inferredClassType||(t.inferredClassType=ne(void 0,e.members,kc,kc,void 0,void 0)),t.inferredClassType}function Qa(t){Hs(t,t.typeArguments)||function(e,t){Js(t)||Gs(e,t)}(t,t.arguments)
var n=Ga(t)
if(95===t.expression.kind)return Mc
if(172===t.kind){var r=n.declaration
if(r&&145!==r.kind&&149!==r.kind&&154!==r.kind&&!e.isJSDocConstructSignature(r)){var a=Ci(t.expression).symbol
return a&&a.members&&16&a.flags?Xa(a):(xc.noImplicitAny&&o(t,e.Diagnostics.new_expression_whose_target_lacks_a_construct_signature_implicitly_has_an_any_type),Oc)}}return e.isInJavaScriptFile(t)&&e.isRequireCall(t,!0)?function(e){var t=F(e,e)
if(t){var n=M(t)
if(n)return je(n)}return Oc}(t.arguments[0]):Kt(n)}function Ya(e,t){return e.hasRestParameter?t<e.parameters.length-1?je(e.parameters[t]):jt(e):t<e.parameters.length?je(e.parameters[t]):Oc}function $a(t){if(e.isBindingPattern(t.name))for(var n=0,r=t.name.elements;n<r.length;n++){var a=r[n]
190!==a.kind&&(69===a.name.kind&&(f(W(a)).type=Pe(a)),$a(a))}}function Za(e,t,n){var r=f(e)
r.type?ra(n)&&Cr(n.context,r.type,Jn(t,n)):(r.type=Jn(t,n),$a(e.valueDeclaration))}function ei(e){var t=o_()
return t!==Uc?$t(t,[e=function(e){return Wi(e,void 0,void 0)}(e)]):jc}function ti(t,n){var r=ta(t)
if(!t.body)return Kc
var a,i=e.isAsyncFunctionLike(t)
if(195!==t.body.kind)a=vi(t.body,n),i&&(a=Wi(a,t,e.Diagnostics.Return_expression_in_async_function_does_not_have_a_valid_callable_then_member))
else{var s=void 0,c=!!t.asteriskToken
if(c){if(0===(s=function(t,n){var r=[]
return e.forEachYieldExpression(t,function(t){var a=t.expression
if(a){var i=vi(a,n)
t.asteriskToken&&(i=vo(i,t.expression)),e.contains(r,i)||r.push(i)}}),r}(t.body,n)).length){var _=fn(Oc)
return xc.noImplicitAny&&o(t.asteriskToken,e.Diagnostics.Generator_implicitly_has_type_0_because_it_does_not_yield_any_values_Consider_supplying_a_return_type,ge(_)),_}}else if(0===(s=function(t,n,r){var a=[]
return e.forEachReturnStatement(t,function(i){var o=i.expression
if(o){var s=vi(o,n)
r&&(s=Wi(s,t.parent,e.Diagnostics.Return_expression_in_async_function_does_not_have_a_valid_callable_then_member)),e.contains(a,s)||a.push(s)}}),a}(t.body,n,i)).length)return i?(u=ei(Mc))===jc?(o(t,e.Diagnostics.An_async_function_or_method_must_have_a_valid_awaitable_return_type),Kc):u:Mc
if(!(a=r?Dn(s):_r(s)))return c?(o(t,e.Diagnostics.No_best_common_type_exists_among_yield_expressions),fn(Kc)):(o(t,e.Diagnostics.No_best_common_type_exists_among_return_expressions),Dn(s))
c&&(a=fn(a))}r||vr(t,a)
var u,l=gr(a)
return i?(u=ei(l))===jc?(o(t,e.Diagnostics.An_async_function_or_method_must_have_a_valid_awaitable_return_type),Kc):u:l}function ni(t,n){if(a&&!(n===Mc||Ee(n)||n&&16384&n.flags&&si(n,17))&&!e.nodeIsMissing(t.body)&&195===t.body.kind&&524288&t.flags){var r=1048576&t.flags
if(n&&!r)o(t.type,e.Diagnostics.A_function_whose_declared_type_is_neither_void_nor_any_must_return_a_value)
else if(xc.noImplicitReturns){if(!n){var i=r?Kt(Bt(t)):Mc
if(i===Mc||Ee(i))return}o(t.type||t,e.Diagnostics.Not_all_code_paths_return_a_value)}}}function ri(t,n){if(e.Debug.assert(144!==t.kind||e.isObjectLiteralMethod(t)),Us(t)||176!==t.kind||Ys(t),n===Mn&&Un(t))return ts(t),qc
var r=m(t),i=je(t.symbol),o=Un(t),s=o&&ra(n)
if(s||!(1024&r.flags)){var c=na(t),_=!!(1024&r.flags)
if(s||!_){if(r.flags|=1024,c){var u=Ot(i,0)[0]
if(o&&function(t,n,r){for(var a=t.parameters.length-(t.hasRestParameter?1:0),i=0;a>i;i++)Za(t.parameters[i],Ya(n,i),r)
t.hasRestParameter&&cr(n,t.parameters.length-1)&&Za(e.lastOrUndefined(t.parameters),je(e.lastOrUndefined(n.parameters)),r)}(u,c,n||Mn),s||!t.type&&!u.resolvedReturnType){var l=ti(t,n)
u.resolvedReturnType||(u.resolvedReturnType=l)}}_||(wi(t),ts(t))}}return a&&144!==t.kind&&143!==t.kind&&(ao(t,t.name),no(t,t.name)),i}function ai(t){e.Debug.assert(144!==t.kind||e.isObjectLiteralMethod(t))
var n=e.isAsyncFunctionLike(t),r=t.type&&(n?Vi(t):Rn(t.type))
if(t.asteriskToken||ni(t,r),t.body)if(t.type||Kt(Bt(t)),195===t.body.kind)es(t.body)
else{var a=Ci(t.body)
r&&Yn(n?Wi(a,t.body,e.Diagnostics.Expression_body_for_async_arrow_function_does_not_have_a_valid_callable_then_member):a,r,t.body)}}function ii(e,t,n){return!!ca(t,132)||(o(e,n),!1)}function oi(e,t,n){function r(e){var t=m(e).resolvedSymbol
return t&&H(t)}return function e(t){switch(t.kind){case 69:return!(n=r(t))||n===Pc||n===wc||0!=(3&n.flags)
case 169:var n
return!(n=r(t))||n===Pc||0!=(-9&n.flags)
case 170:return!0
case 175:return e(t.expression)
default:return!1}}(e)?!function e(t){switch(t.kind){case 69:case 169:return(n=r(t))&&0!=(3&n.flags)&&0!=(16384&xa(n))
case 170:var n,a=t.argumentExpression
if((n=r(t.expression))&&a&&9===a.kind){var i=a.text,o=Pt(je(n),i)
return o&&0!=(3&o.flags)&&0!=(16384&xa(o))}return!1
case 175:return e(t.expression)
default:return!1}}(e)||(o(e,n),!1):(o(e,t),!1)}function si(e,t){if(e.flags&t)return!0
if(49152&e.flags){for(var n=0,r=e.types;n<r.length;n++)if(r[n].flags&t)return!0
return!1}return!1}function ci(e,t){if(e.flags&t)return!0
if(49152&e.flags){for(var n=0,r=e.types;n<r.length;n++)if(!(r[n].flags&t))return!1
return!0}return!1}function _i(e){return 80896&e.flags&&e.symbol&&ui(e.symbol)}function ui(e){return 0!=(128&e.flags)}function li(t,n,r){for(var a=0,i=t.properties;a<i.length;a++){var s=i[a]
if(248===s.kind||249===s.kind){var c=s.name
if(137===c.kind&&ua(c),Ae(c))continue
var _=we(c),u=Ee(n)?n:Te(n,_)||_a(_)&&It(n,1)||It(n,0)
u?249===s.kind?pi(s,u):pi(s.initializer,u):o(c,e.Diagnostics.Type_0_has_no_property_1_and_no_string_index_signature,ge(n),e.declarationNameToString(c))}else o(s,e.Diagnostics.Property_assignment_expected)}return n}function di(t,n,r){for(var a=ho(n,t,!1)||Kc,i=t.elements,s=0;s<i.length;s++){var c=i[s]
if(190!==c.kind)if(188!==c.kind){var _=""+s,u=Ee(n)?n:dr(n)?Te(n,_):a
u?pi(c,u,r):fr(n)?o(c,e.Diagnostics.Tuple_type_0_with_length_1_cannot_be_assigned_to_tuple_with_length_2,ge(n),n.elementTypes.length,i.length):o(c,e.Diagnostics.Type_0_has_no_property_1,ge(n),_)}else if(s<i.length-1)o(c,e.Diagnostics.A_rest_element_must_be_last_in_an_array_destructuring_pattern)
else{var l=c.expression
184===l.kind&&56===l.operatorToken.kind?o(l.operatorToken,e.Diagnostics.A_rest_element_cannot_have_an_initializer):pi(l,mn(a),r)}}return n}function pi(e,t,n){var r
if(249===e.kind){var a=e
a.objectAssignmentInitializer&&gi(a.name,a.equalsToken,a.objectAssignmentInitializer,n),r=e.name}else r=e
return 184===r.kind&&56===r.operatorToken.kind&&(mi(r,n),r=r.left),168===r.kind?li(r,t):167===r.kind?di(r,t,n):fi(r,t,n)}function fi(t,n,r){var a=Ci(t,r)
return oi(t,e.Diagnostics.Invalid_left_hand_side_of_assignment_expression,e.Diagnostics.Left_hand_side_of_assignment_expression_cannot_be_a_constant)&&Yn(n,a,t,void 0),n}function mi(e,t){return gi(e.left,e.operatorToken,e.right,t,e)}function gi(t,n,r,i,s){function c(n){var a=si(d,16777216)?t:si(p,16777216)?r:void 0
return!a||(o(a,e.Diagnostics.The_0_operator_cannot_be_applied_to_type_symbol,e.tokenToString(n)),!1)}function _(n){a&&l>=56&&68>=l&&oi(t,e.Diagnostics.Invalid_left_hand_side_of_assignment_expression,e.Diagnostics.Left_hand_side_of_assignment_expression_cannot_be_a_constant)&&Yn(n,d,t,void 0)}function u(){o(s||n,e.Diagnostics.Operator_0_cannot_be_applied_to_types_1_and_2,e.tokenToString(n.kind),ge(d),ge(p))}var l=n.kind
if(56===l&&(168===t.kind||167===t.kind))return pi(t,Ci(r,i),i)
var d=Ci(t,i),p=Ci(r,i)
switch(l){case 37:case 38:case 59:case 60:case 39:case 61:case 40:case 62:case 36:case 58:case 43:case 63:case 44:case 64:case 45:case 65:case 47:case 67:case 48:case 68:case 46:case 66:96&d.flags&&(d=p),96&p.flags&&(p=d)
var f=void 0
if(8&d.flags&&8&p.flags&&void 0!==(f=function(e){switch(e){case 47:case 67:return 52
case 48:case 68:return 33
case 46:case 66:return 51
default:return}}(n.kind)))o(s||n,e.Diagnostics.The_0_operator_is_not_allowed_for_boolean_types_Consider_using_1_instead,e.tokenToString(n.kind),e.tokenToString(f))
else{var m=ii(t,d,e.Diagnostics.The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type),g=ii(r,p,e.Diagnostics.The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type)
m&&g&&_(Ic)}return Ic
case 35:case 57:96&d.flags&&(d=p),96&p.flags&&(p=d)
var y=void 0
if(ci(d,132)&&ci(p,132))y=Ic
else if(ci(d,258)||ci(p,258)?y=Rc:(Ee(d)||Ee(p))&&(y=d===Kc||p===Kc?Kc:Oc),y&&!c(l))return y
return y?(57===l&&_(y),y):(u(),Oc)
case 25:case 27:case 28:case 29:if(!c(l))return Fc
case 30:case 31:case 32:case 33:return si(d,258)&&si(p,258)?Fc:(Xn(d,p)||Xn(p,d)||u(),Fc)
case 91:return function(t,n,r,a){return ci(r,16777726)&&o(t,e.Diagnostics.The_left_hand_side_of_an_instanceof_expression_must_be_of_type_any_an_object_type_or_a_type_parameter),Ee(a)||Gn(a,Hc)||o(n,e.Diagnostics.The_right_hand_side_of_an_instanceof_expression_must_be_of_type_any_or_of_a_type_assignable_to_the_Function_interface_type),Fc}(t,r,d,p)
case 90:return function(t,n,r,a){return ca(r,16777606)||o(t,e.Diagnostics.The_left_hand_side_of_an_in_expression_must_be_of_type_any_string_number_or_symbol),ca(a,81408)||o(n,e.Diagnostics.The_right_hand_side_of_an_in_expression_must_be_of_type_any_an_object_type_or_a_type_parameter),Fc}(t,r,d,p)
case 51:return p
case 52:return Dn([d,p])
case 56:return _(p),mr(p)
case 24:return p}}function yi(t){if(a&&(2&t.parserContextFlags&&!function(t){for(var n=t,r=t.parent;r;){if(e.isFunctionLike(r)&&n===r.body)return!1
if(e.isClassLike(n))return!0
n=r,r=r.parent}return!1}(t)||sc(t,e.Diagnostics.A_yield_expression_is_only_allowed_in_a_generator_body),Ur(t)&&o(t,e.Diagnostics.yield_expressions_cannot_be_used_in_a_parameter_initializer)),t.expression){var n=e.getContainingFunction(t)
if(n&&n.asteriskToken){var r=vi(t.expression,void 0),i=void 0,s=!!t.asteriskToken
if(s&&(i=vo(r,t.expression)),n.type){var c=xo(Rn(n.type))||Oc
Yn(s?i:r,c,t.expression,void 0)}}}return Oc}function hi(e,t,n){var r=e.contextualType
e.contextualType=t
var a=Ci(e,n)
return e.contextualType=r,a}function vi(e,t){var n=m(e)
return n.resolvedType||(n.resolvedType=Ci(e,t)),n.resolvedType}function ki(e,t){return 137===e.name.kind&&ua(e.name),Ci(e.initializer,t)}function bi(e,t){return tc(e),137===e.name.kind&&ua(e.name),xi(e,ri(e,t),t)}function xi(e,t,n){if(ra(n)){var r=Fa(t)
if(r&&r.typeParameters){var a=Yr(e)
if(a){var i=Fa(a)
if(i&&!i.typeParameters)return function(e){if(!e.isolatedSignatureType){var t=145===e.declaration.kind||149===e.declaration.kind,n=$(327680)
n.members=bc,n.properties=kc,n.callSignatures=t?kc:[e],n.constructSignatures=t?[e]:kc,e.isolatedSignatureType=n}return e.isolatedSignatureType}(function(e,t,n){var r=br(e.typeParameters,!0)
return kr(t,e,function(e,t){Cr(r,Jn(e,n),t)}),Jt(e,wr(r))}(r,i,n))}}}return t}function Ci(t,n){var r
if(136===t.kind)r=Sa(t)
else{var a=function(t,n){switch(t.kind){case 69:return Ir(t)
case 97:return zr(t)
case 95:return jr(t)
case 93:return zc
case 99:case 84:return Fc
case 8:return function(e){return pc(e),Ic}(t)
case 186:return function(t){return e.forEach(t.templateSpans,function(e){Ci(e.expression)}),Rc}(t)
case 9:return function(e){var t=$r(e)
return t&&Xr(t)?An(e.text):Rc}(t)
case 11:return Rc
case 10:return $c
case 167:return oa(t,n)
case 168:return la(t,n)
case 169:return Da(t)
case 170:return Aa(t)
case 171:case 172:return Qa(t)
case 173:return function(e){return Kt(Ga(e))}(t)
case 175:return Ci(t.expression,n)
case 189:return function(e){return Io(e),ts(e),je(W(e))}(t)
case 176:case 177:return ri(t,n)
case 179:return function(e){return Ci(e.expression),Rc}(t)
case 174:case 192:return function(t){var n=mr(Ci(t.expression)),r=Rn(t.type)
if(a&&r!==Kc){var i=gr(n)
si(r,258)&&si(i,258)||Xn(r,i)||Yn(n,r,t,e.Diagnostics.Neither_type_0_nor_type_1_is_assignable_to_the_other)}return r}(t)
case 178:return function(e){return Ci(e.expression),Fc}(t)
case 180:return function(e){return Ci(e.expression),Bc}(t)
case 181:return function(t){return a&&(8&t.parserContextFlags||sc(t,e.Diagnostics.await_expression_is_only_allowed_within_an_async_function),Ur(t)&&o(t,e.Diagnostics.await_expressions_cannot_be_used_in_a_parameter_initializer)),Wi(Ci(t.expression),t)}(t)
case 182:return function(t){var n=Ci(t.operand)
switch(t.operator){case 35:case 36:case 50:return si(n,16777216)&&o(t.operand,e.Diagnostics.The_0_operator_cannot_be_applied_to_type_symbol,e.tokenToString(t.operator)),Ic
case 49:return Fc
case 41:case 42:return ii(t.operand,n,e.Diagnostics.An_arithmetic_operand_must_be_of_type_any_number_or_an_enum_type)&&oi(t.operand,e.Diagnostics.The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_property_or_indexer,e.Diagnostics.The_operand_of_an_increment_or_decrement_operator_cannot_be_a_constant),Ic}return Kc}(t)
case 183:return function(t){var n=Ci(t.operand)
return ii(t.operand,n,e.Diagnostics.An_arithmetic_operand_must_be_of_type_any_number_or_an_enum_type)&&oi(t.operand,e.Diagnostics.The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_property_or_indexer,e.Diagnostics.The_operand_of_an_increment_or_decrement_operator_cannot_be_a_constant),Ic}(t)
case 184:return mi(t,n)
case 185:return function(e,t){return Ci(e.condition),Dn([Ci(e.whenTrue,t),Ci(e.whenFalse,t)])}(t,n)
case 188:return function(e,t){return ho(vi(e.expression,t),e.expression,!1)}(t,n)
case 190:return Bc
case 187:return yi(t)
case 243:return ba(t)
case 236:return function e(t){ka(t.openingElement),ya(t.closingElement)
for(var n=0,r=t.children;n<r.length;n++){var a=r[n]
switch(a.kind){case 243:ba(a)
break
case 236:e(a)
break
case 237:da(a)}}return f_||Oc}(t)
case 237:return da(t)
case 238:e.Debug.fail("Shouldn't ever directly check a JsxOpeningElement")}return Kc}(t,n)
r=xi(t,a,n)}return _i(r)&&(169===t.parent.kind&&t.parent.expression===t||170===t.parent.kind&&t.parent.expression===t||(69===t.kind||136===t.kind)&&_s(t)||o(t,e.Diagnostics.const_enums_can_only_be_used_in_property_or_index_access_expressions_or_the_right_hand_side_of_an_import_declaration_or_export_assignment)),r}function Di(t){t.expression&&sc(t.expression,e.Diagnostics.Type_expected),es(t.constraint),Gt(nt(W(t))),a&&Po(t.name,e.Diagnostics.Type_parameter_name_cannot_be_0)}function Si(t){Ks(t)||js(t),co(t)
var n=e.getContainingFunction(t)
56&t.flags&&(145===(n=e.getContainingFunction(t)).kind&&e.nodeIsPresent(n.body)||o(t,e.Diagnostics.A_parameter_property_is_only_allowed_in_a_constructor_implementation)),t.questionToken&&e.isBindingPattern(t.name)&&n.body&&o(t,e.Diagnostics.A_binding_pattern_parameter_cannot_be_optional_in_an_implementation_signature),!t.dotDotDotToken||e.isBindingPattern(t.name)||ur(je(t.symbol))||o(t,e.Diagnostics.A_rest_parameter_must_be_of_an_array_type)}function Ti(t){var n=function(e){switch(e.parent.kind){case 177:case 148:case 216:case 176:case 153:case 144:case 143:var t=e.parent
if(e===t.type)return t}}(t)
if(n){var r=Bt(n).typePredicate
if(r){var a=t.parameterName
if(e.isThisTypePredicate(r))On(a)
else if(r.parameterIndex>=0)n.parameters[r.parameterIndex].dotDotDotToken?o(a,e.Diagnostics.A_type_predicate_cannot_reference_a_rest_parameter):Yn(r.type,ds(n.parameters[r.parameterIndex]),t.type)
else if(a){for(var i=!1,s=0,c=n.parameters;s<c.length;s++){var _=c[s].name
if(e.isBindingPattern(_)&&Ei(_,a,r.parameterName)){i=!0
break}}i||o(t.parameterName,e.Diagnostics.Cannot_find_parameter_0,r.parameterName)}}}else o(t,e.Diagnostics.A_type_predicate_is_only_allowed_in_return_type_position_for_functions_and_methods)}function Ei(t,n,r){for(var a=0,i=t.elements;a<i.length;a++){var s=i[a].name
if(69===s.kind&&s.text===r)return o(n,e.Diagnostics.A_type_predicate_cannot_reference_element_0_in_a_binding_pattern,r),!0
if((165===s.kind||164===s.kind)&&Ei(s,n,r))return!0}}function wi(t){if(150===t.kind?function(e){Ks(e)||js(e)||qs(e)||Ws(e)}(t):153!==t.kind&&216!==t.kind&&154!==t.kind&&148!==t.kind&&145!==t.kind&&149!==t.kind||Us(t),No(t.typeParameters),e.forEach(t.parameters,Si),t.type&&es(t.type),a){if(function(t){!e.hasRestParameter(t)||e.isInAmbientContext(t)||e.nodeIsMissing(t.body)||e.forEach(t.parameters,function(t){t.name&&!e.isBindingPattern(t.name)&&t.name.text===wc.name&&o(t,e.Diagnostics.Duplicate_identifier_arguments_Compiler_uses_arguments_to_initialize_rest_parameters)})}(t),xc.noImplicitAny&&!t.type)switch(t.kind){case 149:o(t,e.Diagnostics.Construct_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type)
break
case 148:o(t,e.Diagnostics.Call_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type)}if(t.type)if(Cc>=2&&function(e){return!(!e.asteriskToken||!e.body||144!==e.kind&&216!==e.kind&&176!==e.kind)}(t)){var n=Rn(t.type)
n===Mc?o(t.type,e.Diagnostics.A_generator_cannot_have_a_void_type_annotation):Yn(fn(xo(n)||Oc),n,t.type)}else e.isAsyncFunctionLike(t)&&Vi(t)}(function(t){if(a){var n=Bt(t)
if(n.hasStringLiterals){if(e.nodeIsPresent(t.body))return void o(t,e.Diagnostics.A_signature_with_an_implementation_cannot_use_a_string_literal_type)
var r
if(!t.name&&t.parent&&218===t.parent.kind){e.Debug.assert(148===t.kind||149===t.kind)
var i=148===t.kind?0:1,s=W(t.parent),c=rt(s)
r=Ot(c,i)}else r=zt(W(t))
for(var _=0,u=r;_<u.length;_++){var l=u[_]
if(!l.hasStringLiterals&&$n(n,l,!1))return}o(t,e.Diagnostics.Specialized_overload_signature_is_not_assignable_to_any_non_specialized_signature)}}})(t)}function Ai(t){if(218===t.kind){var n=W(t)
if(n.declarations.length>0&&n.declarations[0]!==t)return}var r=qt(W(t))
if(r)for(var a=!1,i=!1,s=0,c=r.declarations;s<c.length;s++){var _=c[s]
if(1===_.parameters.length&&_.parameters[0].type)switch(_.parameters[0].type.kind){case 130:i?o(_,e.Diagnostics.Duplicate_string_index_signature):i=!0
break
case 128:a?o(_,e.Diagnostics.Duplicate_number_index_signature):a=!0}}}function Pi(t){tc(t)||Qs(t.name),Zi(t),128&t.flags&&t.body&&o(t,e.Diagnostics.Method_0_cannot_have_an_implementation_because_it_is_marked_abstract,e.declarationNameToString(t.name))}function Ni(t){wi(t),function(t){return t.typeParameters?cc(e.getSourceFileOfNode(t),t.typeParameters.pos,t.typeParameters.end-t.typeParameters.pos,e.Diagnostics.Type_parameters_cannot_appear_on_a_constructor_declaration):void 0}(t)||function(t){t.type&&_c(t.type,e.Diagnostics.Type_annotation_cannot_appear_on_a_constructor_declaration)}(t),es(t.body)
var n=W(t)
if(t===e.getDeclarationOfKind(n,t.kind)&&ji(n),!e.nodeIsMissing(t.body)&&a){var r=t.parent
if(e.getClassExtendsHeritageClauseElement(r)){var i=Br(r),s=Mr(t)
if(s){if(i&&o(s,e.Diagnostics.A_constructor_cannot_contain_a_super_call_when_its_class_extends_null),e.forEach(t.parent.members,function(e){return!(142!==e.kind||64&e.flags||!e.initializer)})||e.forEach(t.parameters,function(e){return 56&e.flags})){for(var c=void 0,_=0,u=t.body.statements;_<u.length;_++){var l=u[_]
if(198===l.kind&&e.isSuperCallExpression(l.expression)){c=l
break}if(!e.isPrologueDirective(l))break}c||o(t,e.Diagnostics.A_super_call_must_be_the_first_statement_in_the_constructor_when_a_class_contains_initialized_properties_or_has_parameter_properties)}}else i||o(t,e.Diagnostics.Constructors_for_derived_classes_must_contain_a_super_call)}}}function Oi(t){if(a){if(Us(t)||function(t){var n=t.kind
if(1>Cc)return _c(t.name,e.Diagnostics.Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher)
if(e.isInAmbientContext(t))return _c(t.name,e.Diagnostics.An_accessor_cannot_be_declared_in_an_ambient_context)
if(void 0===t.body)return cc(e.getSourceFileOfNode(t),t.end-1,";".length,e.Diagnostics._0_expected,"{")
if(t.typeParameters)return _c(t.name,e.Diagnostics.An_accessor_cannot_have_type_parameters)
if(146===n&&t.parameters.length)return _c(t.name,e.Diagnostics.A_get_accessor_cannot_have_parameters)
if(147===n){if(t.type)return _c(t.name,e.Diagnostics.A_set_accessor_cannot_have_a_return_type_annotation)
if(1!==t.parameters.length)return _c(t.name,e.Diagnostics.A_set_accessor_must_have_exactly_one_parameter)
var r=t.parameters[0]
if(r.dotDotDotToken)return _c(r.dotDotDotToken,e.Diagnostics.A_set_accessor_cannot_have_rest_parameter)
if(1022&r.flags)return _c(t.name,e.Diagnostics.A_parameter_property_is_only_allowed_in_a_constructor_implementation)
if(r.questionToken)return _c(r.questionToken,e.Diagnostics.A_set_accessor_cannot_have_an_optional_parameter)
if(r.initializer)return _c(t.name,e.Diagnostics.A_set_accessor_parameter_cannot_have_an_initializer)}}(t)||Qs(t.name),$i(t),wi(t),146===t.kind&&!e.isInAmbientContext(t)&&e.nodeIsPresent(t.body)&&524288&t.flags&&(1048576&t.flags?xc.noImplicitReturns&&o(t.name,e.Diagnostics.Not_all_code_paths_return_a_value):o(t.name,e.Diagnostics.A_get_accessor_must_return_a_value)),137===t.name.kind&&ua(t.name),!e.hasDynamicName(t)){var n=146===t.kind?147:146,r=e.getDeclarationOfKind(t.symbol,n)
if(r){(56&t.flags)!=(56&r.flags)&&o(t.name,e.Diagnostics.Getter_and_setter_accessors_do_not_agree_in_visibility)
var i=ze(t),s=ze(r)
i&&s&&(Wn(i,s)||o(t,e.Diagnostics.get_and_set_accessor_must_have_the_same_type))}}Ke(W(t))}168!==t.parent.kind?es(t.body):ts(t)}function Ri(e){es(e.body)}function Ii(t,n){for(var r,a,i=!0,o=0;o<t.length;o++){var s=Gt(t[o])
if(s){r||(a=Fn(t,r=e.map(n,Rn)))
var c=r[o]
i=i&&Yn(c,lt(Jn(s,a),c),n[o],e.Diagnostics.Type_0_does_not_satisfy_the_constraint_1)}}return i}function Fi(t){Hs(t,t.typeArguments)
var n=nn(t)
if(n!==Kc&&t.typeArguments&&(e.forEach(t.typeArguments,es),a)){var r=m(t).resolvedSymbol
Ii(524288&r.flags?f(r).typeParameters:n.target.localTypeParameters,t.typeArguments)}}function Li(t){e.forEach(t.members,es),a&&(Ao(wn(t)),Ai(t))}function Mi(t){Js(t.elementTypes)||0!==t.elementTypes.length||_c(t,e.Diagnostics.A_tuple_type_element_list_cannot_be_empty),e.forEach(t.elementTypes,es)}function Bi(t){e.forEach(t.types,es)}function zi(t){return 16&t.flags&&e.isInAmbientContext(t)}function Ki(t,n){var r=e.getCombinedNodeFlags(t)
return 218!==t.parent.kind&&217!==t.parent.kind&&189!==t.parent.kind&&e.isInAmbientContext(t)&&(4&r||(r|=2),r|=4),r&n}function ji(t){function n(e,t){return void 0!==t&&t.parent===e[0].parent?t:e[0]}function r(t){if(!t.name||!e.nodeIsMissing(t.name)){var n=!1,r=e.forEachChild(t.parent,function(e){return n?e:void(n=e===t)})
if(r&&r.pos===t.end&&r.kind===t.kind){var a=r.name||r
if(t.name&&r.name&&t.name.text===r.name.text)return void(144!==t.kind&&143!==t.kind||(64&t.flags)==(64&r.flags)||o(a,64&t.flags?e.Diagnostics.Function_overload_must_be_static:e.Diagnostics.Function_overload_must_not_be_static))
if(e.nodeIsPresent(r.body))return void o(a,e.Diagnostics.Function_implementation_name_must_be_0,e.declarationNameToString(t.name))}var i=t.name||t
m?o(i,e.Diagnostics.Constructor_implementation_is_missing):128&t.flags?o(i,e.Diagnostics.All_declarations_of_an_abstract_method_must_be_consecutive):o(i,e.Diagnostics.Function_implementation_is_missing_or_not_immediately_following_the_declaration)}}if(a){for(var i,s,c,_=0,u=182,l=!1,d=!0,p=!1,f=t.declarations,m=0!=(16384&t.flags),g=t.parent&&1536&t.parent.flags,y=!1,h=!1,v=0,k=f;v<k.length;v++){var b=k[v],x=e.isInAmbientContext(b),C=218===b.parent.kind||156===b.parent.kind||x
if(C&&(c=void 0),216===b.kind||144===b.kind||143===b.kind||145===b.kind){var D=Ki(b,182)
_|=D,u&=D,l=l||e.hasQuestionToken(b),d=d&&e.hasQuestionToken(b),e.nodeIsPresent(b.body)&&i?m?h=!0:y=!0:!g&&c&&c.parent===b.parent&&c.end!==b.pos&&r(c),e.nodeIsPresent(b.body)?i||(i=b):p=!0,c=b,C||(s=b)}}if(h&&e.forEach(f,function(t){o(t,e.Diagnostics.Multiple_constructor_implementations_are_not_allowed)}),y&&e.forEach(f,function(t){o(t.name,e.Diagnostics.Duplicate_function_implementation)}),g||!s||s.body||128&s.flags||r(s),p&&(function(t,r,a,i,s){if(0!=(i^s)){var c=Ki(n(t,r),a)
e.forEach(t,function(t){var n=Ki(t,a)^c
2&n?o(t.name,e.Diagnostics.Overload_signatures_must_all_be_exported_or_not_exported):4&n?o(t.name,e.Diagnostics.Overload_signatures_must_all_be_ambient_or_non_ambient):48&n?o(t.name,e.Diagnostics.Overload_signatures_must_all_be_public_private_or_protected):128&n&&o(t.name,e.Diagnostics.Overload_signatures_must_all_be_abstract_or_not_abstract)})}}(f,i,182,_,u),function(t,r,a,i){if(a!==i){var s=e.hasQuestionToken(n(t,r))
e.forEach(t,function(t){e.hasQuestionToken(t)!==s&&o(t.name,e.Diagnostics.Overload_signatures_must_all_be_optional_or_required)})}}(f,i,l,d),i)){var S=zt(t),T=Bt(i)
if(!T.hasStringLiterals)for(var E=0,w=S;E<w.length;E++){var A=w[E]
if(!A.hasStringLiterals&&!er(T,A)){o(A.declaration,e.Diagnostics.Overload_signature_is_not_compatible_with_function_implementation)
break}}}}}function Ji(t){function n(t){switch(t.kind){case 218:return 2097152
case 221:return e.isAmbientModule(t)||0!==e.getModuleInstanceState(t)?5242880:4194304
case 217:case 220:return 3145728
case 224:var r=0,a=A(W(t))
return e.forEach(a.declarations,function(e){r|=n(e)}),r
default:return 1048576}}if(a){var r=t.localSymbol
if((r||7340032&(r=W(t)).flags)&&e.getDeclarationOfKind(r,t.kind)===t){for(var i=0,s=0,c=0,_=0,u=r.declarations;_<u.length;_++){var l=n(y=u[_]),d=Ki(y,514)
2&d?512&d?c|=l:i|=l:s|=l}var p=i&s,f=c&(i|s)
if(p||f)for(var m=0,g=r.declarations;m<g.length;m++){var y;(l=n(y=g[m]))&f?o(y.name,e.Diagnostics.Merged_declaration_0_cannot_include_a_default_export_declaration_Consider_adding_a_separate_export_default_0_declaration_instead,e.declarationNameToString(y.name)):l&p&&o(y.name,e.Diagnostics.Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local,e.declarationNameToString(y.name))}}}}function Ui(t){if(!(1&t.flags)){if(4096&t.flags&&t.target===s_())return t.typeArguments[0]
var n=__()
if(n!==jc&&Xn(t,n)){var r=Te(t,"then")
if(!(r&&1&r.flags)){var a=r?Ot(r,0):kc
if(0!==a.length){var i=Dn(e.map(a,qi))
if(!(1&i.flags)){var o=Ot(i,0)
if(0!==o.length)return Dn(e.map(o,qi))}}}}}}function qi(e){return Ya(e,0)}function Wi(t,n,r){return function t(a){if(16384&a.flags){for(var i=[],s=0,c=a.types;s<c.length;s++){var _=c[s]
i.push(t(_))}return Dn(i)}var u=Ui(a)
if(void 0===u)return function(t,n,r){return!Ee(t=gr(t))&&Xn(t,l_())?(n&&(r||(r=e.Diagnostics.Operand_for_await_does_not_have_a_valid_callable_then_member),o(n,r)),Kc):t}(a,n,r)
if(a.id===u.id||O_.indexOf(u.id)>=0)return n&&o(n,e.Diagnostics._0_is_referenced_directly_or_indirectly_in_the_fulfillment_callback_of_its_own_then_method,fe(a.symbol)),Kc
O_.push(a.id)
var l=t(u)
return O_.pop(),l}(t)}function Vi(t){if(xc.noCustomAsyncPromise&&Cc>=2)return function(t,n){if(t===Kc)return Kc
var r=o_()
return r===Uc||r===Je(t)?Wi(t,n,e.Diagnostics.An_async_function_or_method_must_have_a_valid_awaitable_return_type):(o(n,e.Diagnostics.The_return_type_of_an_async_function_or_method_must_be_the_global_Promise_T_type),Kc)}(Rn(t.type),t.type)
var n=u_()
if(n===jc)return Kc
var r=Rn(t.type)
if(r===Kc&&xc.isolatedModules)return Kc
var a=m(t.type).resolvedSymbol
if(!a||!G(a)){var i=a?fe(a):ge(r)
return o(t,e.Diagnostics.Type_0_is_not_a_valid_async_function_return_type,i),Kc}if(Qi(t),!Yn(je(a),n,t,e.Diagnostics.Type_0_is_not_a_valid_async_function_return_type))return Kc
var s=Uo(e.getEntityNameFromTypeNode(t.type)),c=y(t.locals,s.text,107455)
return c?(o(c.valueDeclaration,e.Diagnostics.Duplicate_identifier_0_Compiler_uses_declaration_1_to_support_async_functions,s.text,R(a)),Kc):Wi(r,t,e.Diagnostics.An_async_function_or_method_must_have_a_valid_awaitable_return_type)}function Hi(t){var n=Kt(Ga(t))
if(!(1&n.flags)){var r,a,i=Ha(t)
switch(t.parent.kind){case 217:r=Dn([je(W(t.parent)),Mc])
break
case 139:r=Mc,a=e.chainDiagnosticMessages(a,e.Diagnostics.The_return_type_of_a_parameter_decorator_function_must_be_either_void_or_any)
break
case 142:r=Mc,a=e.chainDiagnosticMessages(a,e.Diagnostics.The_return_type_of_a_property_decorator_function_must_be_either_void_or_any)
break
case 144:case 146:case 147:r=Dn([ln(ds(t.parent)),Mc])}Yn(n,r,t,i,a)}}function Gi(e){if(e&&152===e.kind){var t=Uo(e.typeName),n=152===t.parent.kind?793056:1536,r=v(t,t.text,8388608|n,void 0,void 0)
r&&8388608&r.flags&&107455&A(r).flags&&!Ds(A(r))&&N(r)}}function Xi(e){Gi(e.type)}function Qi(e){Gi(e.type)}function Yi(e){for(var t=0,n=e.parameters;t<n.length;t++)Xi(n[t])}function $i(t){if(t.decorators&&e.nodeCanBeDecorated(t)){if(xc.experimentalDecorators||o(t,e.Diagnostics.Experimental_support_for_decorators_is_a_feature_that_is_subject_to_change_in_a_future_release_Set_the_experimentalDecorators_option_to_remove_this_warning),xc.emitDecoratorMetadata)switch(t.kind){case 217:var n=e.getFirstConstructorWithBody(t)
n&&Yi(n)
break
case 144:case 146:case 147:Yi(t),Qi(t)
break
case 142:case 139:Xi(t)}e.forEach(t.decorators,Hi)}}function Zi(t){$i(t),wi(t)
var n=e.isAsyncFunctionLike(t)
if(t.name&&137===t.name.kind&&ua(t.name),!e.hasDynamicName(t)){var r=W(t),i=t.localSymbol||r,o=e.forEach(i.declarations,function(n){return n.kind!==t.kind||e.isSourceFileJavaScript(e.getSourceFileOfNode(n))?void 0:n})
t===o&&ji(i),r.parent&&e.getDeclarationOfKind(r,t.kind)===t&&ji(r)}if(es(t.body),!t.asteriskToken){var s=t.type&&(n?Vi(t):Rn(t.type))
ni(t,s)}a&&!t.type&&(xc.noImplicitAny&&e.nodeIsMissing(t.body)&&!zi(t)&&hr(t,Oc),t.asteriskToken&&e.nodeIsPresent(t.body)&&Kt(Bt(t)))}function eo(t){195===t.kind&&dc(t),e.forEach(t.statements,es)}function to(t,n,r){if(!n||n.text!==r)return!1
if(142===t.kind||141===t.kind||144===t.kind||143===t.kind||146===t.kind||147===t.kind)return!1
if(e.isInAmbientContext(t))return!1
var a=e.getRootDeclaration(t)
return 139!==a.kind||!e.nodeIsMissing(a.parent.body)}function no(e,t){to(e,t,"_this")&&N_.push(e)}function ro(t){for(var n=t;n;){if(4&Es(n))return void(69!==t.kind?o(t.name,e.Diagnostics.Duplicate_identifier_this_Compiler_uses_variable_declaration_this_to_capture_this_reference):o(t,e.Diagnostics.Expression_resolves_to_variable_declaration_this_that_compiler_uses_to_capture_this_reference))
n=n.parent}}function ao(t,n){if(to(t,n,"_super")){var r=e.getContainingClass(t)
r&&!e.isInAmbientContext(r)&&e.getClassExtendsHeritageClauseElement(r)&&o(t,69!==t.kind?e.Diagnostics.Duplicate_identifier_super_Compiler_uses_super_to_capture_base_class_reference:e.Diagnostics.Expression_resolves_to_super_that_compiler_uses_to_capture_base_class_reference)}}function io(t,n){if((to(t,n,"require")||to(t,n,"exports"))&&(221!==t.kind||1===e.getModuleInstanceState(t))){var r=Se(t)
251===r.kind&&e.isExternalOrCommonJsModule(r)&&o(n,e.Diagnostics.Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module,e.declarationNameToString(n),e.declarationNameToString(n))}}function oo(t,n){if(xc.noCustomAsyncPromise&&to(t,n,"Promise")&&(221!==t.kind||1===e.getModuleInstanceState(t))){var r=Se(t)
251===r.kind&&e.isExternalOrCommonJsModule(r)&&33554432&r.flags&&o(n,e.Diagnostics.Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module_containing_async_functions,e.declarationNameToString(n),e.declarationNameToString(n))}}function so(t){if(139===e.getRootDeclaration(t).kind){var n=e.getContainingFunction(t);(function r(a){if(69===a.kind){var i=m(a).resolvedSymbol
if(i&&i!==Pc&&y(n.locals,i.name,107455)===i){if(139===i.valueDeclaration.kind){if(i.valueDeclaration===t)return void o(a,e.Diagnostics.Parameter_0_cannot_be_referenced_in_its_initializer,e.declarationNameToString(t.name))
if(i.valueDeclaration.pos<t.pos)return}o(a,e.Diagnostics.Initializer_of_parameter_0_cannot_reference_identifier_1_declared_after_it,e.declarationNameToString(t.name),e.declarationNameToString(a))}}else e.forEachChild(a,r)})(t.initializer)}}function co(t){if($i(t),es(t.type),137===t.name.kind&&(ua(t.name),t.initializer&&vi(t.initializer)),166===t.kind&&t.propertyName&&137===t.propertyName.kind&&ua(t.propertyName),e.isBindingPattern(t.name)&&e.forEach(t.name.elements,es),t.initializer&&139===e.getRootDeclaration(t).kind&&e.nodeIsMissing(e.getContainingFunction(t).body))o(t,e.Diagnostics.A_parameter_initializer_is_only_allowed_in_a_function_or_constructor_implementation)
else if(e.isBindingPattern(t.name))t.initializer&&203!==t.parent.parent.kind&&(Yn(vi(t.initializer),Me(t),t,void 0),so(t))
else{var n=W(t),r=Be(n)
if(t===n.valueDeclaration)t.initializer&&203!==t.parent.parent.kind&&(Yn(vi(t.initializer),r,t,void 0),so(t))
else{var a=Me(t)
r===Kc||a===Kc||Wn(r,a)||o(t.name,e.Diagnostics.Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_type_2,e.declarationNameToString(t.name),ge(r),ge(a)),t.initializer&&Yn(vi(t.initializer),a,t,void 0)}142!==t.kind&&141!==t.kind&&(Ji(t),214!==t.kind&&166!==t.kind||function(t){if(0==(24576&e.getCombinedNodeFlags(t))&&!e.isParameterDeclaration(t)&&(214!==t.kind||t.initializer)){var n=W(t)
if(1&n.flags){var r=v(t,t.name.text,3,void 0,void 0)
if(r&&r!==n&&2&r.flags&&24576&xa(r)){var a=e.getAncestor(r.valueDeclaration,215),i=196===a.parent.kind&&a.parent.parent?a.parent.parent:void 0
if(!i||!(195===i.kind&&e.isFunctionLike(i.parent)||222===i.kind||221===i.kind||251===i.kind)){var s=fe(r)
o(t,e.Diagnostics.Cannot_initialize_outer_scoped_variable_0_in_the_same_scope_as_block_scoped_declaration_1,s,s)}}}}}(t),ao(t,t.name),no(t,t.name),io(t,t.name),oo(t,t.name))}}function _o(e){return ac(e),co(e)}function uo(t){Ks(t)||js(t)||ic(t.declarationList)||function(t){if(!function e(t){switch(t.kind){case 199:case 200:case 201:case 208:case 202:case 203:case 204:return!1
case 210:return e(t.parent)}return!0}(t.parent)){if(e.isLet(t.declarationList))return _c(t,e.Diagnostics.let_declarations_can_only_be_declared_inside_a_block)
e.isConst(t.declarationList)&&_c(t,e.Diagnostics.const_declarations_can_only_be_declared_inside_a_block)}}(t),e.forEach(t.declarationList.declarations,es)}function lo(t){dc(t),Ci(t.expression),es(t.thenStatement),197===t.thenStatement.kind&&o(t.thenStatement,e.Diagnostics.The_body_of_an_if_statement_cannot_be_the_empty_statement),es(t.elseStatement)}function po(t){dc(t)||t.initializer&&215===t.initializer.kind&&ic(t.initializer),t.initializer&&(215===t.initializer.kind?e.forEach(t.initializer.declarations,_o):Ci(t.initializer)),t.condition&&Ci(t.condition),t.incrementor&&Ci(t.incrementor),es(t.statement)}function fo(t){if(Zs(t),215===t.initializer.kind)go(t)
else{var n=t.initializer,r=yo(t.expression)
if(167===n.kind||168===n.kind)pi(n,r||Kc)
else{var a=Ci(n)
oi(n,e.Diagnostics.Invalid_left_hand_side_in_for_of_statement,e.Diagnostics.The_left_hand_side_of_a_for_of_statement_cannot_be_a_previously_defined_constant),r&&Yn(r,a,n,void 0)}}es(t.statement)}function mo(t){if(Zs(t),215===t.initializer.kind){var n=t.initializer.declarations[0]
n&&e.isBindingPattern(n.name)&&o(n.name,e.Diagnostics.The_left_hand_side_of_a_for_in_statement_cannot_be_a_destructuring_pattern),go(t)}else{var r=t.initializer,a=Ci(r)
167===r.kind||168===r.kind?o(r,e.Diagnostics.The_left_hand_side_of_a_for_in_statement_cannot_be_a_destructuring_pattern):ca(a,258)?oi(r,e.Diagnostics.Invalid_left_hand_side_in_for_in_statement,e.Diagnostics.The_left_hand_side_of_a_for_in_statement_cannot_be_a_previously_defined_constant):o(r,e.Diagnostics.The_left_hand_side_of_a_for_in_statement_must_be_of_type_string_or_any)}ca(Ci(t.expression),81408)||o(t.expression,e.Diagnostics.The_right_hand_side_of_a_for_in_statement_must_be_of_type_any_an_object_type_or_a_type_parameter),es(t.statement)}function go(e){var t=e.initializer
t.declarations.length>=1&&_o(t.declarations[0])}function yo(e){return ho(ps(e),e,!0)}function ho(t,n,r){if(Ee(t))return t
if(Cc>=2)return vo(t,n)
if(r)return function(t,n){e.Debug.assert(2>Cc)
var r=t
16384&t.flags?r=Dn(e.filter(t.types,function(e){return!(258&e.flags)})):258&t.flags&&(r=Jc)
var a=t!==r,i=!1
if(a&&(1>Cc&&(o(n,e.Diagnostics.Using_a_string_in_a_for_of_statement_is_only_supported_in_ECMAScript_5_and_higher),i=!0),r===jc))return Rc
if(!lr(r)){if(!i){var s=a?e.Diagnostics.Type_0_is_not_an_array_type:e.Diagnostics.Type_0_is_not_an_array_type_or_a_string_type
o(n,s,ge(r))}return a?Rc:Kc}var c=It(r,1)||Kc
return a?258&c.flags?Rc:Dn([c,Rc]):c}(t,n)
if(lr(t)){var a=It(t,1)
if(a)return a}return o(n,e.Diagnostics.Type_0_is_not_an_array_type,ge(t)),Kc}function vo(e,t){var n=ko(e,t)
return t&&n&&Yn(e,pn(n),t),n||Oc}function ko(t,n){if(!Ee(t)){var r=t
if(!r.iterableElementType)if(4096&t.flags&&t.target===t_)r.iterableElementType=t.typeArguments[0]
else{var a=Te(t,e.getPropertyNameForKnownSymbolName("iterator"))
if(Ee(a))return
var i=a?Ot(a,0):kc
if(0===i.length)return void(n&&o(n,e.Diagnostics.Type_must_have_a_Symbol_iterator_method_that_returns_an_iterator))
r.iterableElementType=bo(Dn(e.map(i,Kt)),n)}return r.iterableElementType}}function bo(t,n){if(!Ee(t)){var r=t
if(!r.iteratorElementType)if(4096&t.flags&&t.target===n_)r.iteratorElementType=t.typeArguments[0]
else{var a=Te(t,"next")
if(Ee(a))return
var i=a?Ot(a,0):kc
if(0===i.length)return void(n&&o(n,e.Diagnostics.An_iterator_must_have_a_next_method))
var s=Dn(e.map(i,Kt))
if(Ee(s))return
var c=Te(s,"value")
if(!c)return void(n&&o(n,e.Diagnostics.The_type_returned_by_the_next_method_of_an_iterator_must_have_a_value_property))
r.iteratorElementType=c}return r.iteratorElementType}}function xo(e){return Ee(e)?void 0:4096&e.flags&&e.target===r_?e.typeArguments[0]:ko(e,void 0)||bo(e,void 0)}function Co(t){if(dc(t)||e.getContainingFunction(t)||sc(t,e.Diagnostics.A_return_statement_can_only_be_used_within_a_function_body),t.expression){var n=e.getContainingFunction(t)
if(n){var r=Kt(Bt(n)),a=vi(t.expression)
if(n.asteriskToken)return
if(147===n.kind)o(t.expression,e.Diagnostics.Setters_cannot_return_a_value)
else if(145===n.kind)Yn(a,r,t.expression)||o(t.expression,e.Diagnostics.Return_type_of_constructor_signature_must_be_assignable_to_the_instance_type_of_the_class)
else if(n.type||function(t){return!(146!==t.kind||!e.getSetAccessorTypeAnnotationNode(e.getDeclarationOfKind(t.symbol,147)))}(n))if(e.isAsyncFunctionLike(n)){var i=Ui(r),s=Wi(a,t.expression,e.Diagnostics.Return_expression_in_async_function_does_not_have_a_valid_callable_then_member)
i&&Yn(s,i,t.expression)}else Yn(a,r,t.expression)}}}function Do(t){dc(t)||8&t.parserContextFlags&&sc(t,e.Diagnostics.with_statements_are_not_allowed_in_an_async_function_block),Ci(t.expression),o(t.expression,e.Diagnostics.All_symbols_within_a_with_block_will_be_resolved_to_any)}function So(t){dc(t)
var n,r=!1,i=Ci(t.expression),o=si(i,258)
e.forEach(t.caseBlock.clauses,function(s){if(245===s.kind&&!r)if(void 0===n)n=s
else{var c=e.getSourceFileOfNode(t),_=e.skipTrivia(c.text,s.pos)
cc(c,_,(s.statements.length>0?s.statements[0].pos:s.end)-_,e.Diagnostics.A_default_clause_cannot_appear_more_than_once_in_a_switch_statement),r=!0}if(a&&244===s.kind){var u=s,l=Ci(u.expression)
o&&si(l,258)||Xn(i,l)||Yn(l,i,u.expression,void 0)}e.forEach(s.statements,es)})}function To(t){if(!dc(t))for(var n=t.parent;n&&!e.isFunctionLike(n);){if(210===n.kind&&n.label.text===t.label.text){var r=e.getSourceFileOfNode(t)
_c(t.label,e.Diagnostics.Duplicate_label_0,e.getTextOfNodeFromSourceText(r.text,t.label))
break}n=n.parent}es(t.statement)}function Eo(t){dc(t)||void 0===t.expression&&function(t,n,r,a,i){var o=e.getSourceFileOfNode(t)
if(!oc(o)){var s=e.getSpanOfTokenAtPosition(o,t.pos)
R_.add(e.createFileDiagnostic(o,e.textSpanEnd(s),0,n,r,a,i))}}(t,e.Diagnostics.Line_break_not_permitted_here),t.expression&&Ci(t.expression)}function wo(t){dc(t),eo(t.tryBlock)
var n=t.catchClause
if(n){if(n.variableDeclaration)if(69!==n.variableDeclaration.name.kind)sc(n.variableDeclaration.name,e.Diagnostics.Catch_clause_variable_name_must_be_an_identifier)
else if(n.variableDeclaration.type)sc(n.variableDeclaration.type,e.Diagnostics.Catch_clause_variable_cannot_have_a_type_annotation)
else if(n.variableDeclaration.initializer)sc(n.variableDeclaration.initializer,e.Diagnostics.Catch_clause_variable_cannot_have_an_initializer)
else{var r=n.variableDeclaration.name.text,a=n.block.locals
if(a&&e.hasProperty(a,r)){var i=a[r]
i&&0!=(2&i.flags)&&_c(i.valueDeclaration,e.Diagnostics.Cannot_redeclare_identifier_0_in_catch_clause,r)}}eo(n.block)}t.finallyBlock&&eo(t.finallyBlock)}function Ao(t){function n(t,n,r,a,i,s){var c
i&&(1!==s||sa(t.valueDeclaration.name))&&(137===t.valueDeclaration.name.kind||t.parent===r.symbol?c=t.valueDeclaration:a?c=a:2048&r.flags&&(c=e.forEach(Ze(r),function(e){return Tt(e,t.name)&&It(e,s)})?void 0:r.symbol.declarations[0]),c&&!Xn(n,i)&&o(c,0===s?e.Diagnostics.Property_0_of_type_1_is_not_assignable_to_string_index_type_2:e.Diagnostics.Property_0_of_type_1_is_not_assignable_to_numeric_index_type_2,fe(t),ge(n),ge(i)))}var r,a=Wt(t.symbol,1),i=Wt(t.symbol,0),s=It(t,0),c=It(t,1)
if((s||c)&&(e.forEach(St(t),function(e){var r=je(e)
n(e,r,t,i,s,0),n(e,r,t,a,c,1)}),1024&t.flags&&e.isClassLike(t.symbol.valueDeclaration)))for(var _=0,u=t.symbol.valueDeclaration.members;_<u.length;_++){var l=u[_]
if(!(64&l.flags)&&e.hasDynamicName(l)){var d=je(l.symbol)
n(l.symbol,d,t,i,s,0),n(l.symbol,d,t,a,c,1)}}s&&c&&!(r=a||i)&&2048&t.flags&&(r=e.forEach(Ze(t),function(e){return It(e,0)&&It(e,1)})?void 0:t.symbol.declarations[0]),r&&!Xn(c,s)&&o(r,e.Diagnostics.Numeric_index_type_0_is_not_assignable_to_string_index_type_1,ge(c),ge(s))}function Po(e,t){switch(e.text){case"any":case"number":case"boolean":case"string":case"symbol":case"void":o(e,t,e.text)}}function No(t){if(t)for(var n=0,r=t.length;r>n;n++){var i=t[n]
if(Di(i),a)for(var s=0;n>s;s++)t[s].symbol===i.symbol&&o(i.name,e.Diagnostics.Duplicate_identifier_0,e.declarationNameToString(i.name))}}function Oo(t){e.forEach(t.members,es)}function Ro(t){t.name||512&t.flags||sc(t,e.Diagnostics.A_class_declaration_without_the_default_modifier_must_have_a_name),Io(t),e.forEach(t.members,es)}function Io(t){(function(t){var n=!1,r=!1
if(!Ks(t)&&!js(t)&&t.heritageClauses)for(var a=0,i=t.heritageClauses;a<i.length;a++){var o=i[a]
if(83===o.token){if(n)return sc(o,e.Diagnostics.extends_clause_already_seen)
if(r)return sc(o,e.Diagnostics.extends_clause_must_precede_implements_clause)
if(o.types.length>1)return sc(o.types[1],e.Diagnostics.Classes_can_only_extend_a_single_class)
n=!0}else{if(e.Debug.assert(106===o.token),r)return sc(o,e.Diagnostics.implements_clause_already_seen)
r=!0}Xs(o)}})(t),$i(t),t.name&&(Po(t.name,e.Diagnostics.Class_name_cannot_be_0),no(t,t.name),io(t,t.name),oo(t,t.name)),No(t.typeParameters),Ji(t)
var n=W(t),r=rt(n),i=lt(r),s=je(n),c=e.getClassExtendsHeritageClauseElement(t)
if(c){var _=Ze(r)
if(_.length&&a){var u=_[0],l=$e(r)
if(es(c.expression),c.typeArguments){e.forEach(c.typeArguments,es)
for(var d=0,p=Qe(l,c.typeArguments);d<p.length&&Ii(p[d].typeParameters,c.typeArguments);d++);}if(Yn(i,lt(u,r.thisType),t.name||t,e.Diagnostics.Class_0_incorrectly_extends_base_class_1),Yn(s,function(e){if(80896&e.flags){var t=Dt(e)
if(t.constructSignatures.length){var n=$(65536,e.symbol)
n.members=t.members,n.properties=t.properties,n.callSignatures=kc,n.constructSignatures=kc,e=n}}return e}(l),t.name||t,e.Diagnostics.Class_static_side_0_incorrectly_extends_base_class_static_side_1),!(l.symbol&&32&l.symbol.flags)){var f=Ye(l,c.typeArguments)
e.forEach(f,function(e){return Kt(e)!==u})&&o(c.expression,e.Diagnostics.Base_constructors_must_all_have_the_same_return_type)}(function(t,n){for(var r=St(n),a=0,i=r;a<i.length;a++){var s=i[a],c=Fo(s)
if(!(134217728&c.flags)){var _=Fo(Tt(t,c.name)),u=xa(c)
if(e.Debug.assert(!!_,"derived should point to something, even if it is the base class' declaration."),_)if(_===c){var l=Lo(t.symbol)
!(128&u)||l&&128&l.flags||(189===l.kind?o(l,e.Diagnostics.Non_abstract_class_expression_does_not_implement_inherited_abstract_member_0_from_class_1,fe(s),ge(n)):o(l,e.Diagnostics.Non_abstract_class_0_does_not_implement_inherited_abstract_member_1_from_class_2,ge(t),fe(s),ge(n)))}else{var d=xa(_)
if(16&u||16&d)continue
if((64&u)!=(64&d))continue
if(c.flags&_.flags&8192||98308&c.flags&&98308&_.flags)continue
var p=void 0
8192&c.flags?98304&_.flags?p=e.Diagnostics.Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_accessor:(e.Debug.assert(0!=(4&_.flags)),p=e.Diagnostics.Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_property):4&c.flags?(e.Debug.assert(0!=(8192&_.flags)),p=e.Diagnostics.Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_function):(e.Debug.assert(0!=(98304&c.flags)),e.Debug.assert(0!=(8192&_.flags)),p=e.Diagnostics.Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_function),o(_.valueDeclaration.name,p,ge(n),fe(c),ge(t))}}}})(r,u)}}var m=e.getClassImplementsHeritageClauseElements(t)
if(m)for(var g=0,y=m;g<y.length;g++){var h=y[g]
if(e.isSupportedExpressionWithTypeArguments(h)||o(h.expression,e.Diagnostics.A_class_can_only_implement_an_identifier_Slashqualified_name_with_optional_type_arguments),Fi(h),a){var v=Rn(h)
v!==Kc&&(3072&(4096&v.flags?v.target:v).flags?Yn(i,lt(v,r.thisType),t.name||t,e.Diagnostics.Class_0_incorrectly_implements_interface_1):o(h,e.Diagnostics.A_class_may_only_implement_another_class_or_interface))}}a&&(Ao(r),Ai(t))}function Fo(e){return 16777216&e.flags?f(e).target:e}function Lo(t){return e.forEach(t.declarations,function(t){return e.isClassLike(t)?t:void 0})}function Mo(t){if(Ks(t)||js(t)||function(t){var n=!1
if(t.heritageClauses)for(var r=0,a=t.heritageClauses;r<a.length;r++){var i=a[r]
if(83!==i.token)return e.Debug.assert(106===i.token),sc(i,e.Diagnostics.Interface_declaration_cannot_have_implements_clause)
if(n)return sc(i,e.Diagnostics.extends_clause_already_seen)
n=!0,Xs(i)}}(t),No(t.typeParameters),a){Po(t.name,e.Diagnostics.Interface_name_cannot_be_0),Ji(t)
var n=W(t),r=e.getDeclarationOfKind(n,218)
if(n.declarations.length>1&&(t===r||function(e,t){if(!e&&!t)return!0
if(!e||!t||e.length!==t.length)return!1
for(var n=0,r=e.length;r>n;n++){var a=e[n],i=t[n]
if(a.name.text!==i.name.text)return!1
if(a.constraint||i.constraint){if(!a.constraint||!i.constraint)return!1
if(!Wn(Rn(a.constraint),Rn(i.constraint)))return!1}}return!0}(r.typeParameters,t.typeParameters)||o(t.name,e.Diagnostics.All_declarations_of_an_interface_must_have_identical_type_parameters)),t===r){var i=rt(n),s=lt(i)
if(function(t,n){var r=Ze(t)
if(r.length<2)return!0
var a={}
e.forEach(ut(t).declaredProperties,function(e){a[e.name]={prop:e,containingType:t}})
for(var i=!0,o=0,s=r;o<s.length;o++)for(var c=s[o],_=0,u=St(lt(c,t.thisType));_<u.length;_++){var l=u[_]
if(e.hasProperty(a,l.name)){var d=a[l.name]
if(d.containingType!==t&&!ir(d.prop,l)){i=!1
var p=ge(d.containingType),f=ge(c),m=e.chainDiagnosticMessages(void 0,e.Diagnostics.Named_property_0_of_types_1_and_2_are_not_identical,fe(l),p,f)
m=e.chainDiagnosticMessages(m,e.Diagnostics.Interface_0_cannot_simultaneously_extend_types_1_and_2,ge(t),p,f),R_.add(e.createDiagnosticForNodeFromMessageChain(n,m))}}else a[l.name]={prop:l,containingType:c}}return i}(i,t.name)){for(var c=0,_=Ze(i);c<_.length;c++)Yn(s,lt(_[c],i.thisType),t.name,e.Diagnostics.Interface_0_incorrectly_extends_interface_1)
Ao(i)}}}e.forEach(e.getInterfaceBaseTypeNodes(t),function(t){e.isSupportedExpressionWithTypeArguments(t)||o(t.expression,e.Diagnostics.An_interface_can_only_extend_an_identifier_Slashqualified_name_with_optional_type_arguments),Fi(t)}),e.forEach(t.members,es),a&&Ai(t)}function Bo(t){Ks(t)||js(t),Po(t.name,e.Diagnostics.Type_alias_name_cannot_be_0),es(t.type)}function zo(t){function n(t,n,r,a){var i=!0,s=function n(r){switch(r.kind){case 182:var a=n(r.operand)
if(void 0===a)return
switch(r.operator){case 35:return a
case 36:return-a
case 50:return~a}return
case 184:var s=n(r.left)
if(void 0===s)return
var c=n(r.right)
if(void 0===c)return
switch(r.operatorToken.kind){case 47:return s|c
case 46:return s&c
case 44:return s>>c
case 45:return s>>>c
case 43:return s<<c
case 48:return s^c
case 37:return s*c
case 39:return s/c
case 35:return s+c
case 36:return s-c
case 40:return s%c}return
case 8:return+r.text
case 175:return n(r.expression)
case 69:case 170:case 169:var _,u=t.parent,l=je(W(u.parent)),d=void 0
if(69===r.kind)_=l,d=r.text
else{var p=void 0
if(170===r.kind){if(void 0===r.argumentExpression||9!==r.argumentExpression.kind)return
p=r.expression,d=r.argumentExpression.text}else p=r.expression,d=r.name.text
for(var f=p;f&&69!==f.kind;){if(169!==f.kind)return
f=f.expression}if(!((_=Ci(p)).symbol&&384&_.symbol.flags))return}if(void 0===d)return
var g=Tt(_,d)
if(!(g&&8&g.flags))return
var y=g.valueDeclaration
if(u===y)return
return h(y,u)?m(y).enumMemberValue:(i=!1,void o(r,e.Diagnostics.A_member_initializer_in_a_enum_declaration_cannot_reference_members_declared_after_it_including_members_defined_in_other_enums))}}(t)
return i&&(void 0===s?r?o(t,e.Diagnostics.In_const_enum_declarations_member_initializer_must_be_constant_expression):a?o(t,e.Diagnostics.In_ambient_enum_declarations_member_initializer_must_be_constant_expression):Yn(Ci(t),n,t,void 0):r&&(isNaN(s)?o(t,e.Diagnostics.const_enum_member_initializer_was_evaluated_to_disallowed_value_NaN):isFinite(s)||o(t,e.Diagnostics.const_enum_member_initializer_was_evaluated_to_a_non_finite_value))),s}var r=m(t)
if(!(16384&r.flags)){for(var a=rt(W(t)),i=0,s=e.isInAmbientContext(t),c=e.isConst(t),_=0,u=t.members;_<u.length;_++){var l=u[_]
Ae(l.name)?o(l.name,e.Diagnostics.Computed_property_names_are_not_allowed_in_enums):_a(we(l.name))&&o(l.name,e.Diagnostics.An_enum_member_cannot_have_a_numeric_name)
var d=void 0===i,p=l.initializer
p?i=n(p,a,c,s):s&&!c?i=void 0:d&&o(l.name,e.Diagnostics.Enum_member_must_have_initializer),void 0!==i&&(m(l).enumMemberValue=i,i++)}r.flags|=16384}}function Ko(t){if(a){Ks(t)||js(t),Po(t.name,e.Diagnostics.Enum_name_cannot_be_0),no(t,t.name),io(t,t.name),oo(t,t.name),Ji(t),zo(t)
var n=e.isConst(t)
xc.isolatedModules&&n&&e.isInAmbientContext(t)&&o(t.name,e.Diagnostics.Ambient_const_enums_are_not_allowed_when_the_isolatedModules_flag_is_provided)
var r=W(t)
if(t===e.getDeclarationOfKind(r,t.kind)){r.declarations.length>1&&e.forEach(r.declarations,function(t){e.isConstEnumDeclaration(t)!==n&&o(t.name,e.Diagnostics.Enum_declarations_must_all_be_const_or_non_const)})
var i=!1
e.forEach(r.declarations,function(t){if(220!==t.kind)return!1
var n=t
if(!n.members.length)return!1
var r=n.members[0]
r.initializer||(i?o(r.name,e.Diagnostics.In_an_enum_with_multiple_declarations_only_one_declaration_can_omit_an_initializer_for_its_first_enum_element):i=!0)})}}}function jo(t){if(a){var n=e.isGlobalScopeAugmentation(t),r=e.isInAmbientContext(t)
n&&!r&&o(t.name,e.Diagnostics.Augmentations_for_the_global_scope_should_have_declare_modifier_unless_they_appear_in_already_ambient_context)
var i=e.isAmbientModule(t)
if(Qo(t,i?e.Diagnostics.An_ambient_module_declaration_is_only_allowed_at_the_top_level_in_a_file:e.Diagnostics.A_namespace_declaration_is_only_allowed_in_a_namespace_or_module))return
Ks(t)||js(t)||r||9!==t.name.kind||_c(t.name,e.Diagnostics.Only_ambient_modules_can_use_quoted_names),no(t,t.name),io(t,t.name),oo(t,t.name),Ji(t)
var s=W(t)
if(512&s.flags&&s.declarations.length>1&&!r&&e.isInstantiatedModule(t,xc.preserveConstEnums||xc.isolatedModules)){var c=function(t){for(var n=0,r=t.declarations;n<r.length;n++){var a=r[n]
if((217===a.kind||216===a.kind&&e.nodeIsPresent(a.body))&&!e.isInAmbientContext(a))return a}}(s)
c&&(e.getSourceFileOfNode(t)!==e.getSourceFileOfNode(c)?o(t.name,e.Diagnostics.A_namespace_declaration_cannot_be_in_a_different_file_from_a_class_or_function_with_which_it_is_merged):t.pos<c.pos&&o(t.name,e.Diagnostics.A_namespace_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged))
var _=e.getDeclarationOfKind(s,217)
_&&function(t,n){var r=e.getEnclosingBlockScopeContainer(t),a=e.getEnclosingBlockScopeContainer(n)
return g(r)?g(a):!g(a)&&r===a}(t,_)&&(m(t).flags|=32768)}if(i)if(e.isExternalModuleAugmentation(t)){if(n||33554432&W(t).flags)for(var u=0,l=t.body.statements;u<l.length;u++)Jo(l[u],n)}else g(t.parent)?n?o(t.name,e.Diagnostics.Augmentations_for_the_global_scope_can_only_be_directly_nested_in_external_modules_or_ambient_module_declarations):e.isExternalModuleNameRelative(t.name.text)&&o(t.name,e.Diagnostics.Ambient_module_declaration_cannot_specify_relative_module_name):o(t.name,n?e.Diagnostics.Augmentations_for_the_global_scope_can_only_be_directly_nested_in_external_modules_or_ambient_module_declarations:e.Diagnostics.Ambient_modules_cannot_be_nested_in_other_modules_or_namespaces)}es(t.body)}function Jo(t,n){switch(t.kind){case 196:for(var r=0,a=t.declarationList.declarations;r<a.length;r++)Jo(a[r],n)
break
case 230:case 231:sc(t,e.Diagnostics.Exports_and_export_assignments_are_not_permitted_in_module_augmentations)
break
case 224:if(9!==t.moduleReference.kind){o(t.name,e.Diagnostics.Module_augmentation_cannot_introduce_new_names_in_the_top_level_scope)
break}case 225:sc(t,e.Diagnostics.Imports_are_not_permitted_in_module_augmentations_Consider_moving_them_to_the_enclosing_external_module)
break
case 166:case 214:var i=t.name
if(e.isBindingPattern(i)){for(var s=0,c=i.elements;s<c.length;s++)Jo(c[s],n)
break}case 217:case 220:case 216:case 218:case 221:case 219:var _=W(t)
if(_){var u=!(33554432&_.flags)
u||(u=n?void 0!==_.parent:e.isExternalModuleAugmentation(_.parent.valueDeclaration)),u&&o(t,e.Diagnostics.Module_augmentation_cannot_introduce_new_names_in_the_top_level_scope)}}}function Uo(t){for(;;)if(136===t.kind)t=t.left
else{if(169!==t.kind)break
t=t.expression}return e.Debug.assert(69===t.kind),t}function qo(t){var n=e.getExternalModuleName(t)
if(!e.nodeIsMissing(n)&&9!==n.kind)return o(n,e.Diagnostics.String_literal_expected),!1
var r=222===t.parent.kind&&e.isAmbientModule(t.parent.parent)
return 251===t.parent.kind||r?!(r&&e.isExternalModuleNameRelative(n.text)&&!he(t)&&(o(t,e.Diagnostics.Import_or_export_declaration_in_an_ambient_module_declaration_cannot_reference_module_through_relative_module_name),1)):(o(n,231===t.kind?e.Diagnostics.Export_declarations_are_not_permitted_in_a_namespace:e.Diagnostics.Import_declarations_in_a_namespace_cannot_reference_a_module),!1)}function Wo(t){var n=W(t),r=A(n)
if(r!==Pc){var a=(107455&n.flags?107455:0)|(793056&n.flags?793056:0)|(1536&n.flags?1536:0)
r.flags&a&&o(t,233===t.kind?e.Diagnostics.Export_declaration_conflicts_with_exported_declaration_of_0:e.Diagnostics.Import_declaration_conflicts_with_local_declaration_of_0,fe(n))}}function Vo(e){no(e,e.name),io(e,e.name),oo(e,e.name),Wo(e)}function Ho(t){if(!Qo(t,e.Diagnostics.An_import_declaration_can_only_be_used_in_a_namespace_or_module)&&(!Ks(t)&&!js(t)&&1022&t.flags&&sc(t,e.Diagnostics.An_import_declaration_cannot_have_modifiers),qo(t))){var n=t.importClause
n&&(n.name&&Vo(n),n.namedBindings&&(227===n.namedBindings.kind?Vo(n.namedBindings):e.forEach(n.namedBindings.elements,Vo)))}}function Go(t){if(!Qo(t,e.Diagnostics.An_import_declaration_can_only_be_used_in_a_namespace_or_module)&&(Ks(t)||js(t),e.isInternalModuleImportEqualsDeclaration(t)||qo(t)))if(Vo(t),2&t.flags&&P(t),e.isInternalModuleImportEqualsDeclaration(t)){var n=A(W(t))
if(n!==Pc){if(107455&n.flags){var r=Uo(t.moduleReference)
1536&I(r,108479).flags||o(r,e.Diagnostics.Module_0_is_hidden_by_a_local_declaration_with_the_same_name,e.declarationNameToString(r))}793056&n.flags&&Po(t.name,e.Diagnostics.Import_name_cannot_be_0)}}else 5!==Dc||e.isInAmbientContext(t)||_c(t,e.Diagnostics.Import_assignment_cannot_be_used_when_targeting_ECMAScript_6_modules_Consider_using_import_Asterisk_as_ns_from_mod_import_a_from_mod_import_d_from_mod_or_another_module_format_instead)}function Xo(t){if(!Qo(t,e.Diagnostics.An_export_declaration_can_only_be_used_in_a_module)&&(!Ks(t)&&!js(t)&&1022&t.flags&&sc(t,e.Diagnostics.An_export_declaration_cannot_have_modifiers),!t.moduleSpecifier||qo(t)))if(t.exportClause){e.forEach(t.exportClause.elements,Yo)
var n=222===t.parent.kind&&e.isAmbientModule(t.parent.parent)
251===t.parent.kind||n||o(t,e.Diagnostics.Export_declarations_are_not_permitted_in_a_namespace)}else{var r=F(t,t.moduleSpecifier)
r&&z(r)&&o(t.moduleSpecifier,e.Diagnostics.Module_0_uses_export_and_cannot_be_used_with_export_Asterisk,fe(r))}}function Qo(e,t){return 251!==e.parent.kind&&222!==e.parent.kind&&221!==e.parent.kind?sc(e,t):void 0}function Yo(t){if(Wo(t),!t.parent.parent.moduleSpecifier){var n=t.propertyName||t.name,r=v(n,n.text,9289727,void 0,void 0)
r&&(r===Ec||g(Se(r.declarations[0])))?o(n,e.Diagnostics.Cannot_re_export_name_that_is_not_defined_in_the_module):P(t)}}function $o(t){if(!Qo(t,e.Diagnostics.An_export_assignment_can_only_be_used_in_a_module)){var n=251===t.parent.kind?t.parent:t.parent.parent
if(221===n.kind&&!e.isAmbientModule(n))return void o(t,e.Diagnostics.An_export_assignment_cannot_be_used_in_a_namespace)
!Ks(t)&&!js(t)&&1022&t.flags&&sc(t,e.Diagnostics.An_export_assignment_cannot_have_modifiers),69===t.expression.kind?P(t):vi(t.expression),Zo(n),t.isExportEquals&&!e.isInAmbientContext(t)&&(5===Dc?_c(t,e.Diagnostics.Export_assignment_cannot_be_used_when_targeting_ECMAScript_6_modules_Consider_using_export_default_or_another_module_format_instead):4===Dc&&_c(t,e.Diagnostics.Export_assignment_is_not_supported_when_module_flag_is_system))}}function Zo(t){function n(e){return 216!==e.kind||!!e.body}var r=W(t),a=f(r)
if(!a.exportsChecked){var i=r.exports["export="]
i&&function(e){for(var t in e.exports)if("export="!==t)return!0
return!1}(r)&&(he(g=x(i)||i.valueDeclaration)||o(g,e.Diagnostics.An_export_assignment_cannot_be_used_in_a_module_with_other_exported_elements))
var s=j(r)
for(var c in s)if("__export"!==c){var _=s[c],u=_.declarations,l=_.flags
if(!(1984&l)&&(524288&l?u.length-1:u.length)>1){var d=e.filter(u,n)
if(d.length>1)for(var p=0,m=d;p<m.length;p++){var g=m[p]
R_.add(e.createDiagnosticForNode(g,e.Diagnostics.Cannot_redeclare_exported_variable_0,c))}}}a.exportsChecked=!0}}function es(e){if(e){var t=e.kind
if(fc)switch(t){case 221:case 217:case 218:case 216:fc.throwIfCancellationRequested()}switch(t){case 138:return Di(e)
case 139:return Si(e)
case 142:case 141:return function(e){Ks(e)||js(e)||uc(e)||Qs(e.name),co(e)}(e)
case 153:case 154:case 148:case 149:case 150:return wi(e)
case 144:case 143:return Pi(e)
case 145:return Ni(e)
case 146:case 147:return Oi(e)
case 152:return Fi(e)
case 151:return Ti(e)
case 155:return function(e){rn(e)}(e)
case 156:return Li(e)
case 157:return function(e){es(e.elementType)}(e)
case 158:return Mi(e)
case 159:case 160:return Bi(e)
case 161:return es(e.type)
case 216:return function(e){a&&(Zi(e)||Ys(e),ao(e,e.name),no(e,e.name),io(e,e.name),oo(e,e.name))}(e)
case 195:case 222:return eo(e)
case 196:return uo(e)
case 198:return function(e){dc(e),Ci(e.expression)}(e)
case 199:return lo(e)
case 200:return function(e){dc(e),es(e.statement),Ci(e.expression)}(e)
case 201:return function(e){dc(e),Ci(e.expression),es(e.statement)}(e)
case 202:return po(e)
case 203:return mo(e)
case 204:return fo(e)
case 205:case 206:return function(e){dc(e)||nc(e)}(e)
case 207:return Co(e)
case 208:return Do(e)
case 209:return So(e)
case 210:return To(e)
case 211:return Eo(e)
case 212:return wo(e)
case 214:return _o(e)
case 166:return function(e){return rc(e),co(e)}(e)
case 217:return Ro(e)
case 218:return Mo(e)
case 219:return Bo(e)
case 220:return Ko(e)
case 221:return jo(e)
case 225:return Ho(e)
case 224:return Go(e)
case 231:return Xo(e)
case 230:return $o(e)
case 197:case 213:return void dc(e)
case 234:return function(e){$i(e)}(e)}}}function ts(e){p_&&p_.push(e)}function ns(t){var n=(new Date).getTime();(function(t){var n=m(t)
if(!(1&n.flags)){if(xc.skipDefaultLibCheck&&t.hasNoDefaultLib)return;(function(t){e.isInAmbientContext(t)&&function(t){for(var n=0,r=t.statements;n<r.length;n++){var a=r[n]
if((e.isDeclaration(a)||196===a.kind)&&lc(a))return!0}}(t)})(t),N_.length=0,p_=[],e.forEach(t.statements,es),function(){for(var e=0,t=p_;e<t.length;e++){var n=t[e]
switch(n.kind){case 176:case 177:case 144:case 143:ai(n)
break
case 146:case 147:Ri(n)
break
case 189:Oo(n)}}}(),p_=void 0,e.isExternalOrCommonJsModule(t)&&Zo(t),N_.length&&(e.forEach(N_,ro),N_.length=0),n.flags|=1}})(t),e.checkTime+=(new Date).getTime()-n}function rs(e,t){try{return fc=t,as(e)}finally{fc=void 0}}function as(t){return is(),t?(ns(t),R_.getDiagnostics(t.fileName)):(e.forEach(r.getSourceFiles(),ns),R_.getDiagnostics())}function is(){if(!a)throw new Error("Trying to get diagnostics from a type checker that does not produce them.")}function os(e){if(e)for(;e.parent;){if(208===e.parent.kind&&e.parent.statement===e)return!0
e=e.parent}return!1}function ss(e){switch(e.kind){case 138:case 217:case 218:case 219:case 220:return!0}}function cs(e){for(var t=e;t.parent&&136===t.parent.kind;)t=t.parent
return t.parent&&152===t.parent.kind}function _s(e){return void 0!==function(e){for(;136===e.parent.kind;)e=e.parent
return 224===e.parent.kind?e.parent.moduleReference===e&&e.parent:230===e.parent.kind?e.parent.expression===e&&e.parent:void 0}(e)}function us(t){if(e.isDeclarationName(t))return W(t.parent)
if(e.isInJavaScriptFile(t)&&169===t.parent.kind)switch(e.getSpecialPropertyAssignmentKind(t.parent.parent)){case 1:case 3:return W(t.parent)
case 4:case 2:return W(t.parent.parent)}if(230===t.parent.kind)return I(t,9289727)
if(169!==t.kind&&_s(t))return O(t)
if(e.isRightSideOfQualifiedNameOrPropertyAccess(t)&&(t=t.parent),function(e){for(var t=e;t.parent&&169===t.parent.kind;)t=t.parent
return t.parent&&191===t.parent.kind}(t)){var n=0
return 191===t.parent.kind?(n=793056,e.isExpressionWithTypeArgumentsInClassExtendsClause(t.parent)&&(n|=107455)):n=1536,I(t,n|=8388608)}if(238===t.parent.kind||237===t.parent.kind||240===t.parent.kind)return ya(t.parent)
if(e.isExpression(t)){if(e.nodeIsMissing(t))return
if(69===t.kind)return I(t,n=8496063)
if(169===t.kind)return m(t).resolvedSymbol||Da(t),m(t).resolvedSymbol
if(136===t.kind)return m(t).resolvedSymbol||Sa(t),m(t).resolvedSymbol}else{if(cs(t))return n=152===t.parent.kind?793056:1536,I(t,n|=8388608)
if(241===t.parent.kind)return function(e){return Pt(va(e.parent),e.name.text)||Pc}(t.parent)}return 151===t.parent.kind?I(t,1):void 0}function ls(t){if(!os(t)){if(e.isDeclarationName(t))return W(t.parent)
if(69===t.kind){if(_s(t))return 230===t.parent.kind?us(t):O(t)
if(166===t.parent.kind&&164===t.parent.parent.kind&&t===t.parent.propertyName){var n=ds(t.parent.parent),r=n&&Pt(n,t.text)
if(r)return r}}switch(t.kind){case 69:case 169:case 136:return us(t)
case 97:case 95:return(e.isExpression(t)?Ci(t):Rn(t)).symbol
case 162:return Rn(t).symbol
case 121:var a=t.parent
return a&&145===a.kind?a.parent.symbol:void 0
case 9:if(e.isExternalModuleImportEqualsDeclaration(t.parent.parent)&&e.getExternalModuleImportEqualsDeclarationExpression(t.parent.parent)===t||(225===t.parent.kind||231===t.parent.kind)&&t.parent.moduleSpecifier===t)return F(t,t)
case 8:if(170===t.parent.kind&&t.parent.argumentExpression===t){var i=Ci(t.parent.expression)
if(i===Kc)return
var o=wt(i)
if(o===Kc)return
return Pt(o,t.text)}}}}function ds(t){if(os(t))return Kc
if(e.isTypeNode(t))return Rn(t)
if(e.isExpression(t))return ps(t)
if(e.isExpressionWithTypeArgumentsInClassExtendsClause(t))return Ze(rt(W(t.parent.parent)))[0]
if(ss(t))return rt(n=W(t))
if(function(e){return 69===e.kind&&ss(e.parent)&&e.parent.name===e}(t))return(n=ls(t))&&rt(n)
if(e.isDeclaration(t))return je(n=W(t))
if(e.isDeclarationName(t))return(n=ls(t))&&je(n)
if(e.isBindingPattern(t))return Oe(t.parent)
if(_s(t)){var n,r=(n=ls(t))&&rt(n)
return r!==Kc?r:je(n)}return Kc}function ps(t){return e.isRightSideOfQualifiedNameOrPropertyAccess(t)&&(t=t.parent),Ci(t)}function fs(e){return Fs(e)===wc}function ms(t){var n=F(t.parent,t)
if(!n)return!0
var r=z(n),a=f(n=M(n))
return void 0===a.exportsSomeValue&&(a.exportsSomeValue=r?!!(107455&n.flags):e.forEachValue(j(n),function(e){return(e=w(e))&&!!(107455&e.flags)})),a.exportsSomeValue}function gs(e){var t=Fs(e)
if(t){if(1048576&t.flags){var n=q(t.exportSymbol)
if(944&n.flags)return
t=n}var r=V(t)
if(r){if(512&r.flags&&251===r.valueDeclaration.kind)return r.valueDeclaration
for(var a=e.parent;a;a=a.parent)if((221===a.kind||220===a.kind)&&W(a)===r)return a}}}function ys(e){var t=Fs(e)
return t&&8388608&t.flags?x(t):void 0}function hs(t){if(418&t.flags){var n=f(t)
if(void 0===n.isDeclaratonWithCollidingName){var r=e.getEnclosingBlockScopeContainer(t.valueDeclaration)
if(e.isStatementWithLocals(r)){var a=m(t.valueDeclaration)
if(v(r.parent,t.name,107455,void 0,void 0))n.isDeclaratonWithCollidingName=!0
else if(131072&a.flags){var i=262144&a.flags,o=e.isIterationStatement(r,!1),s=195===r.kind&&e.isIterationStatement(r.parent,!1)
n.isDeclaratonWithCollidingName=!(e.isBlockScopedContainerTopLevel(r)||i&&(o||s))}else n.isDeclaratonWithCollidingName=!1}}return n.isDeclaratonWithCollidingName}return!1}function vs(e){var t=Fs(e)
return t&&hs(t)?t.valueDeclaration:void 0}function ks(e){return hs(W(e))}function bs(t){switch(t.kind){case 224:case 226:case 227:case 229:case 233:return Cs(W(t))
case 231:var n=t.exportClause
return n&&e.forEach(n.elements,bs)
case 230:return!t.expression||69!==t.expression.kind||Cs(W(t))}return!1}function xs(t){return!(251!==t.parent.kind||!e.isInternalModuleImportEqualsDeclaration(t))&&Cs(W(t))&&t.moduleReference&&!e.nodeIsMissing(t.moduleReference)}function Cs(e){var t=A(e)
return!(t!==Pc||!xc.isolatedModules)||t!==Pc&&t&&107455&t.flags&&(xc.preserveConstEnums||!Ds(t))}function Ds(e){return ui(e)||e.constEnumOnlyModule}function Ss(t,n){return!(!e.isAliasSymbolDeclaration(t)||!f(W(t)).referenced)||!!n&&e.forEachChild(t,function(e){return Ss(e,n)})}function Ts(t){if(e.nodeIsPresent(t.body)){var n=zt(W(t))
return n.length>1||1===n.length&&n[0].declaration!==t}return!1}function Es(e){return m(e).flags}function ws(e){return zo(e.parent),m(e).enumMemberValue}function As(t){if(250===t.kind)return ws(t)
var n=m(t).resolvedSymbol
return n&&8&n.flags&&e.isConstEnumDeclaration(n.valueDeclaration.parent)?ws(n.valueDeclaration):void 0}function Ps(t){var n=I(t,107455,!0),r=n?je(n):void 0
if(r&&Ge(r))return e.TypeReferenceSerializationKind.TypeWithConstructSignatureAndValue
var a=I(t,793056,!0)
if(!a)return e.TypeReferenceSerializationKind.ObjectType
var i=rt(a)
return i===Kc?e.TypeReferenceSerializationKind.Unknown:1&i.flags?e.TypeReferenceSerializationKind.ObjectType:ci(i,16)?e.TypeReferenceSerializationKind.VoidType:ci(i,8)?e.TypeReferenceSerializationKind.BooleanType:ci(i,132)?e.TypeReferenceSerializationKind.NumberLikeType:ci(i,258)?e.TypeReferenceSerializationKind.StringLikeType:ci(i,8192)?e.TypeReferenceSerializationKind.ArrayLikeType:ci(i,16777216)?e.TypeReferenceSerializationKind.ESSymbolType:function(e){return 80896&e.flags&&Ot(e,0).length>0}(i)?e.TypeReferenceSerializationKind.TypeWithCallSignature:ur(i)?e.TypeReferenceSerializationKind.ArrayLikeType:e.TypeReferenceSerializationKind.ObjectType}function Ns(e,t,n,r){var a=W(e),i=!a||133120&a.flags?Kc:je(a)
ve().buildTypeDisplay(i,r,t,n)}function Os(e,t,n,r){var a=Bt(e)
ve().buildTypeDisplay(Kt(a),r,t,n)}function Rs(e,t,n,r){var a=ps(e)
ve().buildTypeDisplay(a,r,t,n)}function Is(t){return e.hasProperty(k_,t)}function Fs(e){return m(e).resolvedSymbol||v(e,e.text,9544639,void 0,void 0)}function Ls(t){e.Debug.assert(!e.nodeIsSynthesized(t))
var n=Fs(t)
return n&&H(n).valueDeclaration}function Ms(t){var n=e.getExternalModuleName(t),r=L(n,n,void 0)
return r?e.getDeclarationOfKind(r,251):void 0}function Bs(){var e=c_()
return e!==Uc?$t(e,[Oc]):jc}function zs(){var e=s(67108868,"then")
f(e).type=Hc
var t=$(65536)
return t.properties=[e],t.members=st(t.properties),t.callSignatures=[],t.constructSignatures=[],t}function Ks(t){if(!t.decorators)return!1
if(!e.nodeCanBeDecorated(t))return 144!==t.kind||e.nodeIsPresent(t.body)?sc(t,e.Diagnostics.Decorators_are_not_valid_here):sc(t,e.Diagnostics.A_decorator_can_only_decorate_a_method_implementation_not_an_overload)
if(146===t.kind||147===t.kind){var n=e.getAllAccessorDeclarations(t.parent.members,t)
if(n.firstAccessor.decorators&&t===n.secondAccessor)return sc(t,e.Diagnostics.Decorators_cannot_be_applied_to_multiple_get_Slashset_accessors_of_the_same_name)}return!1}function js(t){switch(t.kind){case 146:case 147:case 145:case 142:case 141:case 144:case 143:case 150:case 221:case 225:case 224:case 231:case 230:case 139:break
case 216:if(t.modifiers&&(t.modifiers.length>1||118!==t.modifiers[0].kind)&&222!==t.parent.kind&&251!==t.parent.kind)return sc(t,e.Diagnostics.Modifiers_cannot_appear_here)
break
case 217:case 218:case 196:case 219:if(t.modifiers&&222!==t.parent.kind&&251!==t.parent.kind)return sc(t,e.Diagnostics.Modifiers_cannot_appear_here)
break
case 220:if(t.modifiers&&(t.modifiers.length>1||74!==t.modifiers[0].kind)&&222!==t.parent.kind&&251!==t.parent.kind)return sc(t,e.Diagnostics.Modifiers_cannot_appear_here)
break
default:return!1}if(t.modifiers){for(var n,r,a,i,o,s=0,c=0,_=t.modifiers;c<_.length;c++){var u=_[c]
switch(u.kind){case 74:if(220!==t.kind&&217===t.parent.kind)return _c(t,e.Diagnostics.A_class_member_cannot_have_the_0_keyword,e.tokenToString(74))
break
case 112:case 111:case 110:var l=void 0
if(112===u.kind?l="public":111===u.kind?(l="protected",a=u):(l="private",r=u),56&s)return _c(u,e.Diagnostics.Accessibility_modifier_already_seen)
if(64&s)return _c(u,e.Diagnostics._0_modifier_must_precede_1_modifier,l,"static")
if(256&s)return _c(u,e.Diagnostics._0_modifier_must_precede_1_modifier,l,"async")
if(222===t.parent.kind||251===t.parent.kind)return _c(u,e.Diagnostics._0_modifier_cannot_appear_on_a_module_element,l)
if(128&s)return 110===u.kind?_c(u,e.Diagnostics._0_modifier_cannot_be_used_with_1_modifier,l,"abstract"):_c(u,e.Diagnostics._0_modifier_must_precede_1_modifier,l,"abstract")
s|=e.modifierToFlag(u.kind)
break
case 113:if(64&s)return _c(u,e.Diagnostics._0_modifier_already_seen,"static")
if(256&s)return _c(u,e.Diagnostics._0_modifier_must_precede_1_modifier,"static","async")
if(222===t.parent.kind||251===t.parent.kind)return _c(u,e.Diagnostics._0_modifier_cannot_appear_on_a_module_element,"static")
if(139===t.kind)return _c(u,e.Diagnostics._0_modifier_cannot_appear_on_a_parameter,"static")
if(128&s)return _c(u,e.Diagnostics._0_modifier_cannot_be_used_with_1_modifier,"static","abstract")
s|=64,n=u
break
case 82:if(2&s)return _c(u,e.Diagnostics._0_modifier_already_seen,"export")
if(4&s)return _c(u,e.Diagnostics._0_modifier_must_precede_1_modifier,"export","declare")
if(128&s)return _c(u,e.Diagnostics._0_modifier_must_precede_1_modifier,"export","abstract")
if(256&s)return _c(u,e.Diagnostics._0_modifier_must_precede_1_modifier,"export","async")
if(217===t.parent.kind)return _c(u,e.Diagnostics._0_modifier_cannot_appear_on_a_class_element,"export")
if(139===t.kind)return _c(u,e.Diagnostics._0_modifier_cannot_appear_on_a_parameter,"export")
s|=2
break
case 122:if(4&s)return _c(u,e.Diagnostics._0_modifier_already_seen,"declare")
if(256&s)return _c(u,e.Diagnostics._0_modifier_cannot_be_used_in_an_ambient_context,"async")
if(217===t.parent.kind)return _c(u,e.Diagnostics._0_modifier_cannot_appear_on_a_class_element,"declare")
if(139===t.kind)return _c(u,e.Diagnostics._0_modifier_cannot_appear_on_a_parameter,"declare")
if(e.isInAmbientContext(t.parent)&&222===t.parent.kind)return _c(u,e.Diagnostics.A_declare_modifier_cannot_be_used_in_an_already_ambient_context)
s|=4,i=u
break
case 115:if(128&s)return _c(u,e.Diagnostics._0_modifier_already_seen,"abstract")
if(217!==t.kind){if(144!==t.kind)return _c(u,e.Diagnostics.abstract_modifier_can_only_appear_on_a_class_or_method_declaration)
if(!(217===t.parent.kind&&128&t.parent.flags))return _c(u,e.Diagnostics.Abstract_methods_can_only_appear_within_an_abstract_class)
if(64&s)return _c(u,e.Diagnostics._0_modifier_cannot_be_used_with_1_modifier,"static","abstract")
if(16&s)return _c(u,e.Diagnostics._0_modifier_cannot_be_used_with_1_modifier,"private","abstract")}s|=128
break
case 118:if(256&s)return _c(u,e.Diagnostics._0_modifier_already_seen,"async")
if(4&s||e.isInAmbientContext(t.parent))return _c(u,e.Diagnostics._0_modifier_cannot_be_used_in_an_ambient_context,"async")
if(139===t.kind)return _c(u,e.Diagnostics._0_modifier_cannot_appear_on_a_parameter,"async")
s|=256,o=u}}if(145!==t.kind)return(225===t.kind||224===t.kind)&&4&s?_c(i,e.Diagnostics.A_0_modifier_cannot_be_used_with_an_import_declaration,"declare"):139===t.kind&&56&s&&e.isBindingPattern(t.name)?_c(t,e.Diagnostics.A_parameter_property_may_not_be_a_binding_pattern):256&s?function(t,n){if(2>Cc)return _c(n,e.Diagnostics.Async_functions_are_only_available_when_targeting_ECMAScript_6_and_higher)
switch(t.kind){case 144:case 216:case 176:case 177:if(!t.asteriskToken)return!1}return _c(n,e.Diagnostics._0_modifier_cannot_be_used_here,"async")}(t,o):void 0
if(64&s)return _c(n,e.Diagnostics._0_modifier_cannot_appear_on_a_constructor_declaration,"static")
if(128&s)return _c(n,e.Diagnostics._0_modifier_cannot_appear_on_a_constructor_declaration,"abstract")
if(32&s)return _c(a,e.Diagnostics._0_modifier_cannot_appear_on_a_constructor_declaration,"protected")
if(16&s)return _c(r,e.Diagnostics._0_modifier_cannot_appear_on_a_constructor_declaration,"private")
if(256&s)return _c(o,e.Diagnostics._0_modifier_cannot_appear_on_a_constructor_declaration,"async")}}function Js(t){if(t&&t.hasTrailingComma){var n=t.end-",".length,r=t.end
return cc(e.getSourceFileOfNode(t[0]),n,r-n,e.Diagnostics.Trailing_comma_not_allowed)}}function Us(t){var n=e.getSourceFileOfNode(t)
return Ks(t)||js(t)||function(t,n,r){if(Js(n))return!0
if(n&&0===n.length){var a=n.pos-"<".length
return cc(r,a,e.skipTrivia(r.text,n.end)+">".length-a,e.Diagnostics.Type_parameter_list_cannot_be_empty)}}(0,t.typeParameters,n)||function(t){if(Js(t))return!0
for(var n=!1,r=t.length,a=0;r>a;a++){var i=t[a]
if(i.dotDotDotToken){if(a!==r-1)return _c(i.dotDotDotToken,e.Diagnostics.A_rest_parameter_must_be_last_in_a_parameter_list)
if(e.isBindingPattern(i.name))return _c(i.name,e.Diagnostics.A_rest_element_cannot_contain_a_binding_pattern)
if(i.questionToken)return _c(i.questionToken,e.Diagnostics.A_rest_parameter_cannot_be_optional)
if(i.initializer)return _c(i.name,e.Diagnostics.A_rest_parameter_cannot_have_an_initializer)}else if(i.questionToken){if(n=!0,i.initializer)return _c(i.name,e.Diagnostics.Parameter_cannot_have_question_mark_and_initializer)}else if(n&&!i.initializer)return _c(i.name,e.Diagnostics.A_required_parameter_cannot_follow_an_optional_parameter)}}(t.parameters)||function(t,n){if(177===t.kind){var r=t,a=e.getLineAndCharacterOfPosition(n,r.equalsGreaterThanToken.pos).line,i=e.getLineAndCharacterOfPosition(n,r.equalsGreaterThanToken.end).line
if(a!==i)return _c(r.equalsGreaterThanToken,e.Diagnostics.Line_terminator_not_permitted_before_arrow)}return!1}(t,n)}function qs(t){var n=t.parameters[0]
return 1!==t.parameters.length?_c(n?n.name:t,e.Diagnostics.An_index_signature_must_have_exactly_one_parameter):n.dotDotDotToken?_c(n.dotDotDotToken,e.Diagnostics.An_index_signature_cannot_have_a_rest_parameter):1022&n.flags?_c(n.name,e.Diagnostics.An_index_signature_parameter_cannot_have_an_accessibility_modifier):n.questionToken?_c(n.questionToken,e.Diagnostics.An_index_signature_parameter_cannot_have_a_question_mark):n.initializer?_c(n.name,e.Diagnostics.An_index_signature_parameter_cannot_have_an_initializer):n.type?130!==n.type.kind&&128!==n.type.kind?_c(n.name,e.Diagnostics.An_index_signature_parameter_type_must_be_string_or_number):t.type?void 0:_c(t,e.Diagnostics.An_index_signature_must_have_a_type_annotation):_c(n.name,e.Diagnostics.An_index_signature_parameter_must_have_a_type_annotation)}function Ws(t){1022&t.flags&&sc(t,e.Diagnostics.Modifiers_not_permitted_on_index_signature_members)}function Vs(t,n){if(n&&0===n.length){var r=e.getSourceFileOfNode(t),a=n.pos-"<".length
return cc(r,a,e.skipTrivia(r.text,n.end)+">".length-a,e.Diagnostics.Type_argument_list_cannot_be_empty)}}function Hs(e,t){return Js(t)||Vs(e,t)}function Gs(t,n){if(n)for(var r=e.getSourceFileOfNode(t),a=0,i=n;a<i.length;a++){var o=i[a]
if(190===o.kind)return cc(r,o.pos,0,e.Diagnostics.Argument_expression_expected)}}function Xs(t){var n=t.types
if(Js(n))return!0
if(n&&0===n.length){var r=e.tokenToString(t.token)
return cc(e.getSourceFileOfNode(t),n.pos,0,e.Diagnostics._0_list_cannot_be_empty,r)}}function Qs(t){if(137!==t.kind)return!1
var n=t
return 184===n.expression.kind&&24===n.expression.operatorToken.kind?_c(n.expression,e.Diagnostics.A_comma_expression_is_not_allowed_in_a_computed_property_name):void 0}function Ys(t){if(t.asteriskToken){if(e.Debug.assert(216===t.kind||176===t.kind||144===t.kind),e.isInAmbientContext(t))return _c(t.asteriskToken,e.Diagnostics.Generators_are_not_allowed_in_an_ambient_context)
if(!t.body)return _c(t.asteriskToken,e.Diagnostics.An_overload_signature_cannot_be_declared_as_a_generator)
if(2>Cc)return _c(t.asteriskToken,e.Diagnostics.Generators_are_only_available_when_targeting_ECMAScript_6_or_higher)}}function $s(e,t,n){return t?_c(t,n):void 0}function Zs(t){if(dc(t))return!0
if(215===t.initializer.kind){var n=t.initializer
if(!ic(n)){var r=n.declarations
if(!r.length)return!1
if(r.length>1){var a=203===t.kind?e.Diagnostics.Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement:e.Diagnostics.Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement
return sc(n.declarations[1],a)}var i=r[0]
if(i.initializer){var a=203===t.kind?e.Diagnostics.The_variable_declaration_of_a_for_in_statement_cannot_have_an_initializer:e.Diagnostics.The_variable_declaration_of_a_for_of_statement_cannot_have_an_initializer
return _c(i.name,a)}if(i.type)return _c(i,a=203===t.kind?e.Diagnostics.The_left_hand_side_of_a_for_in_statement_cannot_use_a_type_annotation:e.Diagnostics.The_left_hand_side_of_a_for_of_statement_cannot_use_a_type_annotation)}}return!1}function ec(t,n){return e.isDynamicName(t)?_c(t,n):void 0}function tc(t){if(function(t){if(t.modifiers&&168===t.parent.kind){if(!e.isAsyncFunctionLike(t))return sc(t,e.Diagnostics.Modifiers_cannot_appear_here)
if(t.modifiers.length>1)return sc(t,e.Diagnostics.Modifiers_cannot_appear_here)}}(t)||Us(t)||Ys(t))return!0
if(168===t.parent.kind){if($s(0,t.questionToken,e.Diagnostics.A_class_member_cannot_be_declared_optional))return!0
if(void 0===t.body)return cc(e.getSourceFileOfNode(t),t.end-1,";".length,e.Diagnostics._0_expected,"{")}if(e.isClassLike(t.parent)){if($s(0,t.questionToken,e.Diagnostics.A_class_member_cannot_be_declared_optional))return!0
if(e.isInAmbientContext(t))return ec(t.name,e.Diagnostics.A_computed_property_name_in_an_ambient_context_must_directly_refer_to_a_built_in_symbol)
if(!t.body)return ec(t.name,e.Diagnostics.A_computed_property_name_in_a_method_overload_must_directly_refer_to_a_built_in_symbol)}else{if(218===t.parent.kind)return ec(t.name,e.Diagnostics.A_computed_property_name_in_an_interface_must_directly_refer_to_a_built_in_symbol)
if(156===t.parent.kind)return ec(t.name,e.Diagnostics.A_computed_property_name_in_a_type_literal_must_directly_refer_to_a_built_in_symbol)}}function nc(t){for(var n=t;n;){if(e.isFunctionLike(n))return _c(t,e.Diagnostics.Jump_target_cannot_cross_function_boundary)
switch(n.kind){case 210:if(t.label&&n.label.text===t.label.text)return!(205!==t.kind||e.isIterationStatement(n.statement,!0))&&_c(t,e.Diagnostics.A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement)
break
case 209:if(206===t.kind&&!t.label)return!1
break
default:if(e.isIterationStatement(n,!1)&&!t.label)return!1}n=n.parent}return t.label?_c(t,206===t.kind?e.Diagnostics.A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement:e.Diagnostics.A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement):_c(t,206===t.kind?e.Diagnostics.A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement:e.Diagnostics.A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement)}function rc(t){if(t.dotDotDotToken){var n=t.parent.elements
if(t!==e.lastOrUndefined(n))return _c(t,e.Diagnostics.A_rest_element_must_be_last_in_an_array_destructuring_pattern)
if(165===t.name.kind||164===t.name.kind)return _c(t.name,e.Diagnostics.A_rest_element_cannot_contain_a_binding_pattern)
if(t.initializer)return cc(e.getSourceFileOfNode(t),t.initializer.pos-1,1,e.Diagnostics.A_rest_element_cannot_have_an_initializer)}}function ac(t){if(203!==t.parent.parent.kind&&204!==t.parent.parent.kind)if(e.isInAmbientContext(t)){if(t.initializer){var n="=".length
return cc(e.getSourceFileOfNode(t),t.initializer.pos-n,n,e.Diagnostics.Initializers_are_not_allowed_in_ambient_contexts)}}else if(!t.initializer){if(e.isBindingPattern(t.name)&&!e.isBindingPattern(t.parent))return _c(t,e.Diagnostics.A_destructuring_declaration_must_have_an_initializer)
if(e.isConst(t))return _c(t,e.Diagnostics.const_declarations_must_be_initialized)}return(e.isLet(t)||e.isConst(t))&&function t(n){if(69===n.kind){if(108===n.originalKeywordKind)return _c(n,e.Diagnostics.let_is_not_allowed_to_be_used_as_a_name_in_let_or_const_declarations)}else for(var r=n.elements,a=0,i=r;a<i.length;a++){var o=i[a]
190!==o.kind&&t(o.name)}}(t.name)}function ic(t){var n=t.declarations
return!!Js(t.declarations)||(t.declarations.length?void 0:cc(e.getSourceFileOfNode(t),n.pos,n.end-n.pos,e.Diagnostics.Variable_declaration_list_cannot_be_empty))}function oc(e){return e.parseDiagnostics.length>0}function sc(t,n,r,a,i){var o=e.getSourceFileOfNode(t)
if(!oc(o)){var s=e.getSpanOfTokenAtPosition(o,t.pos)
return R_.add(e.createFileDiagnostic(o,s.start,s.length,n,r,a,i)),!0}}function cc(t,n,r,a,i,o,s){return oc(t)?void 0:(R_.add(e.createFileDiagnostic(t,n,r,a,i,o,s)),!0)}function _c(t,n,r,a,i){return oc(e.getSourceFileOfNode(t))?void 0:(R_.add(e.createDiagnosticForNode(t,n,r,a,i)),!0)}function uc(t){if(e.isClassLike(t.parent)){if($s(0,t.questionToken,e.Diagnostics.A_class_member_cannot_be_declared_optional)||ec(t.name,e.Diagnostics.A_computed_property_name_in_a_class_property_declaration_must_directly_refer_to_a_built_in_symbol))return!0}else if(218===t.parent.kind){if(ec(t.name,e.Diagnostics.A_computed_property_name_in_an_interface_must_directly_refer_to_a_built_in_symbol))return!0
if(t.initializer)return _c(t.initializer,e.Diagnostics.An_interface_property_cannot_have_an_initializer)}else if(156===t.parent.kind){if(ec(t.name,e.Diagnostics.A_computed_property_name_in_a_type_literal_must_directly_refer_to_a_built_in_symbol))return!0
if(t.initializer)return _c(t.initializer,e.Diagnostics.A_type_literal_property_cannot_have_an_initializer)}return e.isInAmbientContext(t)&&t.initializer?sc(t.initializer,e.Diagnostics.Initializers_are_not_allowed_in_ambient_contexts):void 0}function lc(t){return!(218===t.kind||219===t.kind||225===t.kind||224===t.kind||231===t.kind||230===t.kind||4&t.flags||514&t.flags)&&sc(t,e.Diagnostics.A_declare_modifier_is_required_for_a_top_level_declaration_in_a_d_ts_file)}function dc(t){if(e.isInAmbientContext(t)){if(function(e){return 146===e||147===e}(t.parent.kind))return m(t).hasReportedStatementInAmbientContext=!0
if(!m(t).hasReportedStatementInAmbientContext&&e.isFunctionLike(t.parent))return m(t).hasReportedStatementInAmbientContext=sc(t,e.Diagnostics.An_implementation_cannot_be_declared_in_ambient_contexts)
if(195===t.parent.kind||222===t.parent.kind||251===t.parent.kind){var n=m(t.parent)
if(!n.hasReportedStatementInAmbientContext)return n.hasReportedStatementInAmbientContext=sc(t,e.Diagnostics.Statements_are_not_allowed_in_ambient_contexts)}}}function pc(t){return 32768&t.flags&&Cc>=1?_c(t,e.Diagnostics.Octal_literals_are_not_available_when_targeting_ECMAScript_5_and_higher):void 0}var fc,mc=e.objectAllocator.getSymbolConstructor(),gc=e.objectAllocator.getTypeConstructor(),yc=e.objectAllocator.getSignatureConstructor(),hc=0,vc=0,kc=[],bc={},xc=r.getCompilerOptions(),Cc=xc.target||0,Dc=e.getEmitModuleKind(xc),Sc=void 0!==xc.allowSyntheticDefaultImports?xc.allowSyntheticDefaultImports:4===Dc,Tc={getReferencedExportContainer:gs,getReferencedImportDeclaration:ys,getReferencedDeclarationWithCollidingName:vs,isDeclarationWithCollidingName:ks,isValueAliasDeclaration:bs,hasGlobalName:Is,isReferencedAliasDeclaration:Ss,getNodeCheckFlags:Es,isTopLevelValueImportEqualsWithEntityName:xs,isDeclarationVisible:ke,isImplementationOfOverload:Ts,writeTypeOfDeclaration:Ns,writeReturnTypeOfSignatureDeclaration:Os,writeTypeOfExpression:Rs,isSymbolAccessible:se,isEntityNameVisible:ue,getConstantValue:As,collectLinkedAliases:be,getReferencedValueDeclaration:Ls,getTypeReferenceSerializationKind:Ps,isOptionalParameter:Mt,moduleExportsSomeValue:ms,isArgumentsLocalBinding:fs,getExternalModuleFileFromDeclaration:Ms},Ec=s(67108868,"undefined")
Ec.declarations=[]
var wc=s(67108868,"arguments"),Ac={getNodeCount:function(){return e.sum(r.getSourceFiles(),"nodeCount")},getIdentifierCount:function(){return e.sum(r.getSourceFiles(),"identifierCount")},getSymbolCount:function(){return e.sum(r.getSourceFiles(),"symbolCount")+vc},getTypeCount:function(){return hc},isUndefinedSymbol:function(e){return e===Ec},isArgumentsSymbol:function(e){return e===wc},isUnknownSymbol:function(e){return e===Pc},getDiagnostics:rs,getGlobalDiagnostics:function(){return is(),R_.getGlobalDiagnostics()},getTypeOfSymbolAtLocation:Or,getSymbolsOfParameterPropertyDeclaration:function(t,n){var r=t.parent,a=t.parent.parent,i=y(r.locals,n,107455),o=y(a.symbol.members,n,107455)
return i&&o?[i,o]:void e.Debug.fail("There should exist two symbols, one as property declaration and one as parameter declaration")},getDeclaredTypeOfSymbol:rt,getPropertiesOfType:Et,getPropertyOfType:Pt,getSignaturesOfType:Ot,getIndexTypeOfType:It,getBaseTypes:Ze,getReturnTypeOfSignature:Kt,getSymbolsInScope:function(t,n){function r(t,n){if(t.flags&n){var r=t.name
e.hasProperty(i,r)||(i[r]=t)}}function a(e,t){if(t)for(var n in e)r(e[n],t)}var i={},o=0
return os(t)?[]:(function(){for(;t;){switch(t.locals&&!g(t)&&a(t.locals,n),t.kind){case 251:if(!e.isExternalOrCommonJsModule(t))break
case 221:a(W(t).exports,8914931&n)
break
case 220:a(W(t).exports,8&n)
break
case 189:t.name&&r(t.symbol,n)
case 217:case 218:64&o||a(W(t).members,793056&n)
break
case 176:t.name&&r(t.symbol,n)}e.introducesArgumentsExoticObject(t)&&r(wc,n),o=t.flags,t=t.parent}a(k_,n)}(),Lt(i))},getSymbolAtLocation:ls,getShorthandAssignmentValueSymbol:function(e){return e&&249===e.kind?I(e.name,8496063):void 0},getExportSpecifierLocalTargetSymbol:function(e){return e.parent.parent.moduleSpecifier?T(e.parent.parent,e):I(e.propertyName||e.name,9289727)},getTypeAtLocation:ds,typeToString:ge,getSymbolDisplayBuilder:ve,symbolToString:fe,getAugmentedPropertiesOfType:function(t){var n=st(Et(t=wt(t)))
return(Ot(t,0).length||Ot(t,1).length)&&e.forEach(Et(Hc),function(t){e.hasProperty(n,t.name)||(n[t.name]=t)}),ee(n)},getRootSymbols:function(t){if(268435456&t.flags){var n=[],r=t.name
return e.forEach(f(t).containingType.types,function(e){var t=Pt(e,r)
t&&n.push(t)}),n}if(67108864&t.flags){var a=f(t).target
if(a)return[a]}return[t]},getContextualType:$r,getFullyQualifiedName:R,getResolvedSignature:Ga,getConstantValue:As,isValidPropertyAccess:function(e,t){var n=169===e.kind?e.expression:e.left,r=Ci(n)
if(r!==Kc&&!Ee(r)){var a=Pt(gr(r),t)
if(a&&a.parent&&32&a.parent.flags)return Ca(e,n,r,a)}return!0},getSignatureFromDeclaration:Bt,isImplementationOfOverload:Ts,getAliasedSymbol:A,getEmitResolver:function(e,t){return rs(e,t),Tc},getExportsOfModule:function(e){return Lt(j(e))},getJsxElementAttributesType:va,getJsxIntrinsicTagNames:function(){var e=ga(L_.IntrinsicElements)
return e?Et(e):kc},isOptionalParameter:Mt},Pc=s(67108868,"unknown"),Nc=s(67108864,"__resolving__"),Oc=Y(1,"any"),Rc=Y(2,"string"),Ic=Y(4,"number"),Fc=Y(8,"boolean"),Lc=Y(16777216,"symbol"),Mc=Y(16,"void"),Bc=Y(2097184,"undefined"),zc=Y(2097216,"null"),Kc=Y(1,"unknown"),jc=ne(void 0,bc,kc,kc,void 0,void 0),Jc=jc,Uc=ne(void 0,bc,kc,kc,void 0,void 0)
Uc.instantiations={}
var qc=ne(void 0,bc,kc,kc,void 0,void 0)
qc.flags|=8388608
var Wc,Vc,Hc,Gc,Xc,Qc,Yc,$c,Zc,e_,t_,n_,r_,a_,i_,o_,s_,c_,__,u_,l_,d_,p_,f_,m_,g_,y_=ne(void 0,bc,kc,kc,void 0,void 0),h_=ft(void 0,void 0,kc,Oc,void 0,0,!1,!1),v_=ft(void 0,void 0,kc,Kc,void 0,0,!1,!1),k_={},b_={},x_={},C_={},D_={},S_=[],T_=[],E_=[],w_=[],A_=[],P_=[],N_=[],O_=[],R_=e.createDiagnosticCollection(),I_={string:{type:Rc,flags:258},number:{type:Ic,flags:132},boolean:{type:Fc,flags:8},symbol:{type:Lc,flags:16777216},undefined:{type:Bc,flags:2097152}},F_={},L_={JSX:"JSX",IntrinsicElements:"IntrinsicElements",ElementClass:"ElementClass",ElementAttributesPropertyNameContainer:"ElementAttributesProperty",Element:"Element",IntrinsicAttributes:"IntrinsicAttributes",IntrinsicClassAttributes:"IntrinsicClassAttributes"},M_={},B_={},z_={}
!function(e){e[e.Type=0]="Type",e[e.ResolvedBaseConstructorType=1]="ResolvedBaseConstructorType",e[e.DeclaredType=2]="DeclaredType",e[e.ResolvedReturnType=3]="ResolvedReturnType"}(g_||(g_={}))
var K_,j_=((K_={})[Ec.name]=Ec,K_)
return function(){var t
if(e.forEach(r.getSourceFiles(),function(t){e.bindSourceFile(t,xc)}),e.forEach(r.getSourceFiles(),function(n){e.isExternalOrCommonJsModule(n)||d(k_,n.locals),n.moduleAugmentations.length&&(t||(t=[])).push(n.moduleAugmentations)}),t)for(var n=0,a=t;n<a.length;n++)for(var i=0,o=a[n];i<o.length;i++)p(o[i]);(function(t,n,r){function a(t,n){return function(r){return R_.add(e.createDiagnosticForNode(r,n,t))}}for(var i in n)e.hasProperty(n,i)&&(e.hasProperty(t,i)?e.forEach(t[i].declarations,a(i,r)):t[i]=n[i])})(k_,j_,e.Diagnostics.Declaration_name_conflicts_with_built_in_global_identifier_0),f(Ec).type=Bc,f(wc).type=_n("IArguments"),f(Pc).type=Kc,Gc=_n("Array",1),Vc=_n("Object"),Hc=_n("Function"),Xc=_n("String"),Qc=_n("Number"),Yc=_n("Boolean"),$c=_n("RegExp"),f_=un("JSX",L_.Element),e.memoize(function(){return _n("ClassDecorator")}),e.memoize(function(){return _n("PropertyDecorator")}),e.memoize(function(){return _n("MethodDecorator")}),e.memoize(function(){return _n("ParameterDecorator")}),i_=e.memoize(function(){return _n("TypedPropertyDescriptor",1)}),o_=e.memoize(function(){return _n("Promise",1)}),s_=e.memoize(function(){return cn("Promise",793056,void 0)&&o_()}),c_=e.memoize(function(){return _n("PromiseLike",1)}),__=e.memoize(Bs),e.memoize(function(){return on("Promise")}),u_=e.memoize(function(){return _n("PromiseConstructorLike")}),l_=e.memoize(zs),Cc>=2?(Zc=_n("TemplateStringsArray"),e_=_n("Symbol"),Wc=on("Symbol"),t_=_n("Iterable",1),n_=_n("Iterator",1),r_=_n("IterableIterator",1)):(Zc=Kc,e_=ne(void 0,bc,kc,kc,void 0,void 0),Wc=void 0,t_=Uc,n_=Uc,r_=Uc),a_=mn(Oc)}(),Ac}}(ts||(ts={})),function(e){function t(e){if(64>e)return i.charAt(e)
throw TypeError(e+": not a 64 based value")}function n(e){0>e?e=1+(-e<<1):e<<=1
var n=""
do{var r=31&e;(e>>=5)>0&&(r|=32),n+=t(r)}while(e>0)
return n}var r,a={emittedLine:1,emittedColumn:1,sourceLine:1,sourceColumn:1,sourceIndex:0}
e.getNullSourceMapWriter=function(){return void 0===r&&(r={getSourceMapData:function(){},setSourceFile:function(e){},emitStart:function(e){},emitEnd:function(e,t){},emitPos:function(e){},changeEmitSourcePos:function(){},getText:function(){},getSourceMappingURL:function(){},initialize:function(e,t,n,r){},reset:function(){}}),r},e.createSourceMapWriter=function(t,r){function i(){u=void 0,l=void 0,d=void 0,p=void 0,f=void 0,m=void 0,g=void 0}function o(){if(p&&p!==f){var t=f.emittedColumn
if(f.emittedLine===p.emittedLine)g.sourceMapMappings&&(g.sourceMapMappings+=",")
else{for(var r=f.emittedLine;r<p.emittedLine;r++)g.sourceMapMappings+=";"
t=1}g.sourceMapMappings+=n(p.emittedColumn-t),g.sourceMapMappings+=n(p.sourceIndex-f.sourceIndex),g.sourceMapMappings+=n(p.sourceLine-f.sourceLine),g.sourceMapMappings+=n(p.sourceColumn-f.sourceColumn),p.nameIndex>=0&&(e.Debug.assert(!1,"We do not support name index right now, Make sure to update updateLastEncodedAndRecordedSpans when we start using this"),g.sourceMapMappings+=n(p.nameIndex-m),m=p.nameIndex),f=p,g.sourceMapDecodedMappings.push(f)}}function s(t){if(-1!==t){var n=e.getLineAndCharacterOfPosition(u,t)
n.line++,n.character++
var i=r.getLine(),s=r.getColumn()
!p||p.emittedLine!==i||p.emittedColumn!==s||p.sourceIndex===d&&(p.sourceLine>n.line||p.sourceLine===n.line&&p.sourceColumn>n.character)?(o(),p={emittedLine:i,emittedColumn:s,sourceLine:n.line,sourceColumn:n.character,sourceIndex:d},h=!1):h||(p.sourceLine=n.line,p.sourceColumn=n.character,p.sourceIndex=d),function(){if(v){v=!1,p.emittedLine=f.emittedLine,p.emittedColumn=f.emittedColumn,g.sourceMapDecodedMappings.pop(),f=g.sourceMapDecodedMappings.length?g.sourceMapDecodedMappings[g.sourceMapDecodedMappings.length-1]:a
for(var e=g.sourceMapMappings,t=e.length-1;t>=0;t--){var n=e.charAt(t)
if(","===n)break
if(";"===n&&0!==t&&";"!==e.charAt(t-1))break}g.sourceMapMappings=e.substr(0,Math.max(0,t))}}()}}function c(t){var n=!!t.decorators
return-1!==t.pos?e.skipTrivia(u.text,n?t.decorators.end:t.pos):-1}function _(){return o(),e.stringify({version:3,file:g.sourceMapFile,sourceRoot:g.sourceMapSourceRoot,sources:g.sourceMapSources,names:g.sourceMapNames,mappings:g.sourceMapMappings,sourcesContent:g.sourceMapSourcesContent})}var u,l,d,p,f,m,g,y=t.getCompilerOptions(),h=!1,v=!1
return{getSourceMapData:function(){return g},setSourceFile:function(n){u=n
var r=y.sourceRoot?t.getCommonSourceDirectory():l,a=e.getRelativePathToDirectoryOrUrl(r,u.fileName,t.getCurrentDirectory(),t.getCanonicalFileName,!0);-1===(d=e.indexOf(g.sourceMapSources,a))&&(d=g.sourceMapSources.length,g.sourceMapSources.push(a),g.inputSourceFileNames.push(n.fileName),y.inlineSources&&g.sourceMapSourcesContent.push(n.text))},emitPos:s,emitStart:function(e){s(c(e))},emitEnd:function(e,t){s(e.end),h=t},changeEmitSourcePos:function(){e.Debug.assert(!v),v=!0},getText:_,getSourceMappingURL:function(){if(y.inlineSourceMap){var t=e.convertToBase64(_())
return g.jsSourceMappingURL="data:application/json;base64,"+t}return g.jsSourceMappingURL},initialize:function(n,r,o,s){g&&i(),u=void 0,d=-1,p=void 0,f=a,m=0,(g={sourceMapFilePath:r,jsSourceMappingURL:y.inlineSourceMap?void 0:e.getBaseFileName(e.normalizeSlashes(r)),sourceMapFile:e.getBaseFileName(e.normalizeSlashes(n)),sourceMapSourceRoot:y.sourceRoot||"",sourceMapSources:[],inputSourceFileNames:[],sourceMapNames:[],sourceMapMappings:"",sourceMapSourcesContent:y.inlineSources?[]:void 0,sourceMapDecodedMappings:[]}).sourceMapSourceRoot=e.normalizeSlashes(g.sourceMapSourceRoot),g.sourceMapSourceRoot.length&&47!==g.sourceMapSourceRoot.charCodeAt(g.sourceMapSourceRoot.length-1)&&(g.sourceMapSourceRoot+=e.directorySeparator),y.mapRoot?(l=e.normalizeSlashes(y.mapRoot),s||(e.Debug.assert(1===o.length),l=e.getDirectoryPath(e.getSourceFilePathInNewDir(o[0],t,l))),e.isRootedDiskPath(l)||e.isUrl(l)?g.jsSourceMappingURL=e.combinePaths(l,g.jsSourceMappingURL):(l=e.combinePaths(t.getCommonSourceDirectory(),l),g.jsSourceMappingURL=e.getRelativePathToDirectoryOrUrl(e.getDirectoryPath(e.normalizePath(n)),e.combinePaths(l,g.jsSourceMappingURL),t.getCurrentDirectory(),t.getCanonicalFileName,!0))):l=e.getDirectoryPath(e.normalizePath(n))},reset:i}}
var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"}(ts||(ts={})),function(e){function t(t,n,r,a,i,o){function s(e){return $.substring(e.pos,e.end).indexOf("@internal")>=0}function c(){var t=e.createTextWriter(ie)
return t.trackSymbol=d,t.reportInaccessibleThisError=p,t.writeKeyword=t.write,t.writeOperator=t.write,t.writePunctuation=t.write,t.writeSpace=t.write,t.writeStringLiteral=t.writeLiteral,t.writeParameter=t.write,t.writeSymbol=t.write,_(t),t}function _(e){se=e,W=e.write,X=e.writeTextOfNode,V=e.writeLine,H=e.increaseIndent,G=e.decreaseIndent}function u(t){var n=se
e.forEach(t,function(t){var n
214===t.kind?n=t.parent.parent:228===t.kind||229===t.kind||226===t.kind?e.Debug.fail("We should be getting ImportDeclaration instead to write"):n=t
var r=e.forEach(le,function(e){return e.node===n?e:void 0})
if(!r&&ae&&(r=e.forEach(ae,function(e){return e.node===n?e:void 0})),r)if(225===r.node.kind)r.isVisible=!0
else{c()
for(var a=r.indent;a;a--)H()
221===n.kind&&(e.Debug.assert(void 0===ae),ae=[]),D(n),221===n.kind&&(r.subModuleElementDeclarationEmitInfo=ae,ae=void 0),r.asynchronousOutput=se.getText()}}),_(n)}function l(t){if(0===t.accessibility)t&&t.aliasesToMakeVisible&&u(t.aliasesToMakeVisible)
else{ce=!0
var n=se.getSymbolAccessibilityDiagnostic(t)
n&&(n.typeName?r.add(e.createDiagnosticForNode(t.errorNode||n.errorNode,n.diagnosticMessage,e.getTextOfNodeFromSourceText($,n.typeName),t.errorSymbolName,t.errorModuleName)):r.add(e.createDiagnosticForNode(t.errorNode||n.errorNode,n.diagnosticMessage,t.errorSymbolName,t.errorModuleName)))}}function d(e,t,r){l(n.isSymbolAccessible(e,t,r))}function p(){ne&&(ce=!0,r.add(e.createDiagnosticForNode(ne,e.Diagnostics.The_inferred_type_of_0_references_an_inaccessible_this_type_A_type_annotation_is_necessary,e.declarationNameToString(ne))))}function f(e,t,r){se.getSymbolAccessibilityDiagnostic=r,W(": "),t?k(t):(ne=e.name,n.writeTypeOfDeclaration(e,Q,2,se),ne=void 0)}function m(e,t){se.getSymbolAccessibilityDiagnostic=t,W(": "),e.type?k(e.type):(ne=e.name,n.writeReturnTypeOfSignatureDeclaration(e,Q,2,se),ne=void 0)}function g(e){for(var t=0,n=e;t<n.length;t++){var r=n[t]
ue(r)}}function y(e,t,n,r){for(var a=se.getTextPos(),i=0,o=e;i<o.length;i++){var s=o[i]
r&&!r(s)||(a!==se.getTextPos()&&W(t),a=se.getTextPos(),n(s))}}function h(e,t,n){y(e,", ",t,n)}function v(e,t){se.getSymbolAccessibilityDiagnostic=t,k(e)}function k(t){function r(e){l(n.isEntityNameVisible(e,224===e.parent.kind?e.parent:Q)),function e(t){if(69===t.kind)X($,t)
else{var n=136===t.kind?t.left:t.expression,r=136===t.kind?t.right:t.name
e(n),W("."),X($,r)}}(e)}switch(t.kind){case 117:case 130:case 128:case 120:case 131:case 103:case 162:case 163:return X($,t)
case 191:return function(t){e.isSupportedExpressionWithTypeArguments(t)&&(e.Debug.assert(69===t.expression.kind||169===t.expression.kind),r(t.expression),t.typeArguments&&(W("<"),h(t.typeArguments,k),W(">")))}(t)
case 152:return function(e){r(e.typeName),e.typeArguments&&(W("<"),h(e.typeArguments,k),W(">"))}(t)
case 155:return function(e){W("typeof "),r(e.exprName)}(t)
case 157:return function(e){k(e.elementType),W("[]")}(t)
case 158:return function(e){W("["),h(e.elementTypes,k),W("]")}(t)
case 159:return function(e){y(e.types," | ",k)}(t)
case 160:return function(e){y(e.types," & ",k)}(t)
case 161:return function(e){W("("),k(e.type),W(")")}(t)
case 153:case 154:return K(t)
case 156:return function(e){W("{"),e.members.length&&(V(),H(),g(e.members),G()),W("}")}(t)
case 69:case 136:return r(t)
case 151:return function(e){X($,e.parameterName),W(" is "),k(e.type)}(t)}}function b(t){$=t.text,Z=e.getLineStarts(t),ee=t.identifiers,te=e.isExternalModule(t),Q=t,e.emitDetachedComments($,Z,se,e.writeCommentRange,t,ie,!0),g(t.statements)}function x(t){if(69===t.expression.kind)W(t.isExportEquals?"export = ":"export default "),X($,t.expression)
else{var r=function(){var t="_default"
if(!e.hasProperty(ee,t))return t
for(var n=0;;){var r=t+"_"+ ++n
if(!e.hasProperty(ee,r))return r}}()
W("declare var "),W(r),W(": "),se.getSymbolAccessibilityDiagnostic=function(n){return{diagnosticMessage:e.Diagnostics.Default_export_of_the_module_has_or_is_using_private_name_0,errorNode:t}},n.writeTypeOfExpression(t.expression,Q,2,se),W(";"),V(),W(t.isExportEquals?"export = ":"export default "),W(r)}(W(";"),V(),69===t.expression.kind)&&u(n.collectLinkedAliases(t.expression))}function C(e,t){if(t)D(e)
else if(224===e.kind||251===e.parent.kind&&te){var r=void 0
if(ae&&251!==e.parent.kind)ae.push({node:e,outputPos:se.getTextPos(),indent:se.getIndent(),isVisible:r})
else{if(225===e.kind){var a=e
a.importClause&&(r=a.importClause.name&&n.isDeclarationVisible(a.importClause)||E(a.importClause.namedBindings))}le.push({node:e,outputPos:se.getTextPos(),indent:se.getIndent(),isVisible:r})}}}function D(t){switch(t.kind){case 216:return z(t)
case 196:return function(t){_e(t),S(t),W(e.isLet(t.declarationList)?"let ":e.isConst(t.declarationList)?"const ":"var "),h(t.declarationList.declarations,F,n.isDeclarationVisible),W(";"),V()}(t)
case 218:return function(t){_e(t),S(t),W("interface "),X($,t.name)
var n=Q
Q=t,O(t.typeParameters),R(e.getInterfaceBaseTypeNodes(t),!1),W(" {"),V(),H(),g(t.members),G(),W("}"),V(),Q=n}(t)
case 217:return function(t){_e(t),S(t),128&t.flags&&W("abstract "),W("class "),X($,t.name)
var n=Q
Q=t,O(t.typeParameters)
var r=e.getClassExtendsHeritageClauseElement(t)
r&&R([r],!1),R(e.getClassImplementsHeritageClauseElements(t),!0),W(" {"),V(),H(),function(t){t&&e.forEach(t.parameters,function(e){56&e.flags&&I(e)})}(e.getFirstConstructorWithBody(t)),g(t.members),G(),W("}"),V(),Q=n}(t)
case 219:return function(t){var n=Q
Q=t,_e(t),S(t),W("type "),X($,t.name),O(t.typeParameters),W(" = "),v(t.type,function(n){return{diagnosticMessage:e.Diagnostics.Exported_type_alias_0_has_or_is_using_private_name_1,errorNode:t.type,typeName:t.name}}),W(";"),V(),Q=n}(t)
case 220:return function(t){_e(t),S(t),e.isConst(t)&&W("const "),W("enum "),X($,t.name),W(" {"),V(),H(),g(t.members),G(),W("}"),V()}(t)
case 221:return function(t){for(_e(t),S(t),e.isGlobalScopeAugmentation(t)?W("global "):(W(65536&t.flags?"namespace ":"module "),e.isExternalModuleAugmentation(t)?A(t):X($,t.name));222!==t.body.kind;)t=t.body,W("."),X($,t.name)
var n=Q
Q=t,W(" {"),V(),H(),g(t.body.statements),G(),W("}"),V(),Q=n}(t)
case 224:return function(t){_e(t),2&t.flags&&W("export "),W("import "),X($,t.name),W(" = "),e.isInternalModuleImportEqualsDeclaration(t)?(v(t.moduleReference,function(n){return{diagnosticMessage:e.Diagnostics.Import_declaration_0_is_using_private_name_1,errorNode:t,typeName:t.name}}),W(";")):(W("require("),A(t),W(");")),se.writeLine()}(t)
case 225:return w(t)
default:e.Debug.fail("Unknown symbol kind")}}function S(e){251===e.parent.kind&&(2&e.flags&&W("export "),512&e.flags?W("default "):218===e.kind||re||W("declare "))}function T(e){16&e.flags?W("private "):32&e.flags&&W("protected "),64&e.flags&&W("static "),128&e.flags&&W("abstract ")}function E(t){return t?227===t.kind?n.isDeclarationVisible(t):e.forEach(t.elements,function(e){return n.isDeclarationVisible(e)}):void 0}function w(e){if(_e(e),2&e.flags&&W("export "),W("import "),e.importClause){var t=se.getTextPos()
e.importClause.name&&n.isDeclarationVisible(e.importClause)&&X($,e.importClause.name),e.importClause.namedBindings&&E(e.importClause.namedBindings)&&(t!==se.getTextPos()&&W(", "),227===e.importClause.namedBindings.kind?(W("* as "),X($,e.importClause.namedBindings.name)):(W("{ "),h(e.importClause.namedBindings.elements,P,n.isDeclarationVisible),W(" }"))),W(" from ")}A(e),W(";"),se.writeLine()}function A(r){var a
if(Y=Y||221!==r.kind,224===r.kind){var i=r
a=e.getExternalModuleImportEqualsDeclarationExpression(i)}else if(221===r.kind)a=r.name
else{a=(i=r).moduleSpecifier}if(9===a.kind&&o&&(oe.out||oe.outFile)){var s=e.getExternalModuleNameFromDeclaration(t,n,r)
if(s)return W('"'),W(s),void W('"')}X($,a)}function P(e){e.propertyName&&(X($,e.propertyName),W(" as ")),X($,e.name)}function N(e){P(e),u(n.collectLinkedAliases(e.propertyName||e.name))}function O(t){t&&(W("<"),h(t,function(t){H(),_e(t),G(),X($,t.name),t.constraint&&!function(e){return 144===e.parent.kind&&16&e.parent.flags}(t)&&(W(" extends "),153===t.parent.kind||154===t.parent.kind||t.parent.parent&&156===t.parent.parent.kind?(e.Debug.assert(144===t.parent.kind||143===t.parent.kind||153===t.parent.kind||154===t.parent.kind||148===t.parent.kind||149===t.parent.kind),k(t.constraint)):v(t.constraint,function(n){var r
switch(t.parent.kind){case 217:r=e.Diagnostics.Type_parameter_0_of_exported_class_has_or_is_using_private_name_1
break
case 218:r=e.Diagnostics.Type_parameter_0_of_exported_interface_has_or_is_using_private_name_1
break
case 149:r=e.Diagnostics.Type_parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1
break
case 148:r=e.Diagnostics.Type_parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1
break
case 144:case 143:r=64&t.parent.flags?e.Diagnostics.Type_parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1:217===t.parent.parent.kind?e.Diagnostics.Type_parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1:e.Diagnostics.Type_parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1
break
case 216:r=e.Diagnostics.Type_parameter_0_of_exported_function_has_or_is_using_private_name_1
break
default:e.Debug.fail("This is unknown parent for type parameter: "+t.parent.kind)}return{diagnosticMessage:r,errorNode:t,typeName:t.name}}))}),W(">"))}function R(t,n){t&&(W(n?" implements ":" extends "),h(t,function(t){e.isSupportedExpressionWithTypeArguments(t)?v(t,function(r){return{diagnosticMessage:217===t.parent.parent.kind?n?e.Diagnostics.Implements_clause_of_exported_class_0_has_or_is_using_private_name_1:e.Diagnostics.Extends_clause_of_exported_class_0_has_or_is_using_private_name_1:e.Diagnostics.Extends_clause_of_exported_interface_0_has_or_is_using_private_name_1,errorNode:t,typeName:t.parent.parent.name}}):n||93!==t.expression.kind||W("null")}))}function I(t){e.hasDynamicName(t)||(_e(t),T(t),F(t),W(";"),V())}function F(t){function r(n){return 214===t.kind?n.errorModuleName?2===n.accessibility?e.Diagnostics.Exported_variable_0_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:e.Diagnostics.Exported_variable_0_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Exported_variable_0_has_or_is_using_private_name_1:142===t.kind||141===t.kind?64&t.flags?n.errorModuleName?2===n.accessibility?e.Diagnostics.Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:e.Diagnostics.Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Public_static_property_0_of_exported_class_has_or_is_using_private_name_1:217===t.parent.kind?n.errorModuleName?2===n.accessibility?e.Diagnostics.Public_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:e.Diagnostics.Public_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Public_property_0_of_exported_class_has_or_is_using_private_name_1:n.errorModuleName?e.Diagnostics.Property_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Property_0_of_exported_interface_has_or_is_using_private_name_1:void 0}function a(e){for(var t=[],n=0,r=e.elements;n<r.length;n++){var a=r[n]
190!==a.kind&&t.push(a)}h(t,i)}function i(t){t.name&&(e.isBindingPattern(t.name)?a(t.name):(X($,t.name),f(t,void 0,function(e){var n=r(e)
return void 0!==n?{diagnosticMessage:n,errorNode:t,typeName:t.name}:void 0})))}(214!==t.kind||n.isDeclarationVisible(t))&&(e.isBindingPattern(t.name)?a(t.name):(X($,t.name),142!==t.kind&&141!==t.kind||!e.hasQuestionToken(t)||W("?"),142!==t.kind&&141!==t.kind||156!==t.parent.kind?16&t.flags||f(t,t.type,function(e){var n=r(e)
return void 0!==n?{diagnosticMessage:n,errorNode:t,typeName:t.name}:void 0}):L(t)))}function L(e){e.type&&(W(": "),k(e.type))}function M(t){return e.forEach(t.declarationList.declarations,function(e){return n.isDeclarationVisible(e)})}function B(t){function n(e){return e?146===e.kind?e.type:e.parameters.length>0?e.parameters[0].type:void 0:void 0}if(!e.hasDynamicName(t)){var r,a=e.getAllAccessorDeclarations(t.parent.members,t)
if(t===a.firstAccessor){if(_e(a.getAccessor),_e(a.setAccessor),T(t),X($,t.name),!(16&t.flags)){r=t
var i=n(t)
if(!i){var o=146===t.kind?a.setAccessor:a.getAccessor;(i=n(o))&&(r=o)}f(t,i,function(t){return 147===r.kind?{diagnosticMessage:64&r.parent.flags?t.errorModuleName?e.Diagnostics.Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_private_name_1:t.errorModuleName?e.Diagnostics.Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_private_name_1,errorNode:r.parameters[0],typeName:r.name}:{diagnosticMessage:64&r.flags?t.errorModuleName?2===t.accessibility?e.Diagnostics.Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named:e.Diagnostics.Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_private_module_1:e.Diagnostics.Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_private_name_0:t.errorModuleName?2===t.accessibility?e.Diagnostics.Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named:e.Diagnostics.Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_private_module_1:e.Diagnostics.Return_type_of_public_property_getter_from_exported_class_has_or_is_using_private_name_0,errorNode:r.name,typeName:void 0}})}W(";"),V()}}}function z(t){e.hasDynamicName(t)||n.isImplementationOfOverload(t)||(_e(t),216===t.kind?S(t):144===t.kind&&T(t),216===t.kind?(W("function "),X($,t.name)):145===t.kind?W("constructor"):(X($,t.name),e.hasQuestionToken(t)&&W("?")),j(t))}function K(e){_e(e),j(e)}function j(t){var n=Q
Q=t,149!==t.kind&&154!==t.kind||W("new "),O(t.typeParameters),W(150===t.kind?"[":"("),h(t.parameters,J),W(150===t.kind?"]":")")
var r=153===t.kind||154===t.kind
r||156===t.parent.kind?t.type&&(W(r?" => ":": "),k(t.type)):145===t.kind||16&t.flags||m(t,function(n){var r
switch(t.kind){case 149:r=n.errorModuleName?e.Diagnostics.Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1:e.Diagnostics.Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_0
break
case 148:r=n.errorModuleName?e.Diagnostics.Return_type_of_call_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1:e.Diagnostics.Return_type_of_call_signature_from_exported_interface_has_or_is_using_private_name_0
break
case 150:r=n.errorModuleName?e.Diagnostics.Return_type_of_index_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1:e.Diagnostics.Return_type_of_index_signature_from_exported_interface_has_or_is_using_private_name_0
break
case 144:case 143:r=64&t.flags?n.errorModuleName?2===n.accessibility?e.Diagnostics.Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named:e.Diagnostics.Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_private_module_1:e.Diagnostics.Return_type_of_public_static_method_from_exported_class_has_or_is_using_private_name_0:217===t.parent.kind?n.errorModuleName?2===n.accessibility?e.Diagnostics.Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named:e.Diagnostics.Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_private_module_1:e.Diagnostics.Return_type_of_public_method_from_exported_class_has_or_is_using_private_name_0:n.errorModuleName?e.Diagnostics.Return_type_of_method_from_exported_interface_has_or_is_using_name_0_from_private_module_1:e.Diagnostics.Return_type_of_method_from_exported_interface_has_or_is_using_private_name_0
break
case 216:r=n.errorModuleName?2===n.accessibility?e.Diagnostics.Return_type_of_exported_function_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named:e.Diagnostics.Return_type_of_exported_function_has_or_is_using_name_0_from_private_module_1:e.Diagnostics.Return_type_of_exported_function_has_or_is_using_private_name_0
break
default:e.Debug.fail("This is unknown kind for signature: "+t.kind)}return{diagnosticMessage:r,errorNode:t.name||t}}),Q=n,r||(W(";"),V())}function J(t){function r(n){switch(t.parent.kind){case 145:return n.errorModuleName?2===n.accessibility?e.Diagnostics.Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:e.Diagnostics.Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Parameter_0_of_constructor_from_exported_class_has_or_is_using_private_name_1
case 149:return n.errorModuleName?e.Diagnostics.Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1
case 148:return n.errorModuleName?e.Diagnostics.Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1
case 144:case 143:return 64&t.parent.flags?n.errorModuleName?2===n.accessibility?e.Diagnostics.Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:e.Diagnostics.Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1:217===t.parent.parent.kind?n.errorModuleName?2===n.accessibility?e.Diagnostics.Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:e.Diagnostics.Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1:n.errorModuleName?e.Diagnostics.Parameter_0_of_method_from_exported_interface_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1
case 216:return n.errorModuleName?2===n.accessibility?e.Diagnostics.Parameter_0_of_exported_function_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:e.Diagnostics.Parameter_0_of_exported_function_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Parameter_0_of_exported_function_has_or_is_using_private_name_1
default:e.Debug.fail("This is unknown parent for parameter: "+t.parent.kind)}}function a(e){if(164===e.kind)W("{"),h(e.elements,i),W("}")
else if(165===e.kind){W("[")
var t=e.elements
h(t,i),t&&t.hasTrailingComma&&W(", "),W("]")}}function i(t){190===t.kind?W(" "):166===t.kind&&(t.propertyName&&(X($,t.propertyName),W(": ")),t.name&&(e.isBindingPattern(t.name)?a(t.name):(e.Debug.assert(69===t.name.kind),t.dotDotDotToken&&W("..."),X($,t.name))))}H(),_e(t),t.dotDotDotToken&&W("..."),e.isBindingPattern(t.name)?a(t.name):X($,t.name),n.isOptionalParameter(t)&&W("?"),G(),153===t.parent.kind||154===t.parent.kind||156===t.parent.parent.kind?L(t):16&t.parent.flags||f(t,t.type,function(e){var n=r(e)
return void 0!==n?{diagnosticMessage:n,errorNode:t,typeName:t.name}:void 0})}function U(e){switch(e.kind){case 216:case 221:case 224:case 218:case 217:case 219:case 220:return C(e,function(e){return n.isDeclarationVisible(e)}(e))
case 196:return C(e,M(e))
case 225:return C(e,!e.importClause)
case 231:return function(e){_e(e),W("export "),e.exportClause?(W("{ "),h(e.exportClause.elements,N),W(" }")):W("*"),e.moduleSpecifier&&(W(" from "),A(e)),W(";"),se.writeLine()}(e)
case 145:case 144:case 143:return z(e)
case 149:case 148:case 150:return K(e)
case 146:case 147:return B(e)
case 142:case 141:return I(e)
case 250:return function(e){_e(e),X($,e.name)
var t=n.getConstantValue(e)
void 0!==t&&(W(" = "),W(t.toString())),W(","),V()}(e)
case 230:return x(e)
case 251:return b(e)}}function q(n,r){var i,o=!1
return e.isDeclarationFile(n)?i=n.fileName:e.forEachExpectedEmitFile(t,function(t,a,s){s&&!r||(e.Debug.assert(!!t.declarationFilePath||e.isSourceFileJavaScript(n),"Declaration file is not present only for javascript files"),i=t.declarationFilePath||t.jsFilePath,o=s)},n),i&&(i=e.getRelativePathToDirectoryOrUrl(e.getDirectoryPath(e.normalizeSlashes(a)),i,t.getCurrentDirectory(),t.getCanonicalFileName,!1),de+='/// <reference path="'+i+'" />'+ie),o}var W,V,H,G,X,Q,Y,$,Z,ee,te,ne,re,ae,ie=t.getNewLine(),oe=t.getCompilerOptions(),se=c(),ce=!1,_e=oe.removeComments?function(e){}:function(t){if(t){var n=e.getJsDocCommentsFromText(t,$)
e.emitNewLineBeforeLeadingComments(Z,se,t,n),e.emitComments($,Z,se,n,!0,ie,e.writeCommentRange)}},ue=oe.stripInternal?function(t){if(t){var n=e.getLeadingCommentRanges($,t.pos)
if(e.forEach(n,s))return
U(t)}}:U,le=[],de="",pe=[],fe=!1,me=[]
return e.forEach(i,function(n){if(!e.isSourceFileJavaScript(n)){if(oe.noResolve||e.forEach(n.referencedFiles,function(r){var a=e.tryResolveScriptReference(t,n,r)
a&&!e.contains(pe,a)&&(q(a,!o&&!fe)&&(fe=!0),pe.push(a))}),Y=!1,o&&e.isExternalModule(n)?e.isExternalModule(n)&&(re=!0,W('declare module "'+e.getResolvedExternalModuleName(t,n)+'" {'),V(),H(),b(n),G(),W("}"),V()):(re=!1,b(n)),le.length){var r=se
e.forEach(le,function(t){if(t.isVisible&&!t.asynchronousOutput){e.Debug.assert(225===t.node.kind),c(),e.Debug.assert(0===t.indent||1===t.indent&&o)
for(var n=0;n<t.indent;n++)H()
w(t.node),t.asynchronousOutput=se.getText()
for(n=0;n<t.indent;n++)G()}}),_(r),me=me.concat(le),le=[]}!o&&e.isExternalModule(n)&&n.moduleAugmentations.length&&!Y&&(W("export {};"),V())}}),{reportedDeclarationError:ce,moduleElementDeclarationEmitInfo:me,synchronousDeclarationOutput:se.getText(),referencePathsOutput:de}}e.getDeclarationDiagnostics=function(n,r,a){var i=e.createDiagnosticCollection()
return e.forEachExpectedEmitFile(n,function(e,a,o){var s=e.declarationFilePath
t(n,r,i,s,a,o)},a),i.getDiagnostics(a?a.fileName:void 0)},e.writeDeclarationFile=function(n,r,a,i,o,s){var c=t(i,o,s,n,r,a),_=c.reportedDeclarationError||i.isEmitBlocked(n)||i.getCompilerOptions().noEmit
if(!_){var u=c.referencePathsOutput+function t(n,r){var a=0,i=""
return e.forEach(r,function(e){e.asynchronousOutput&&(i+=n.substring(a,e.outputPos),i+=t(e.asynchronousOutput,e.subModuleElementDeclarationEmitInfo),a=e.outputPos)}),i+=n.substring(a)}(c.synchronousDeclarationOutput,c.moduleElementDeclarationEmitInfo)
e.writeFile(i,s,n,u,i.getCompilerOptions().emitBOM)}return _}}(ts||(ts={})),function(e){function t(t,n){return n.moduleName||e.getExternalModuleNameFromPath(t,n.fileName)}function n(n,r,a){var i=r.getExternalModuleFileFromDeclaration(a)
if(i&&!e.isDeclarationFile(i))return t(n,i)}var r
e.getResolvedExternalModuleName=t,e.getExternalModuleNameFromDeclaration=n,function(e){e[e.Break=2]="Break",e[e.Continue=4]="Continue",e[e.Return=8]="Return"}(r||(r={}))
var a,i,o={quot:34,amp:38,apos:39,lt:60,gt:62,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,copy:169,ordf:170,laquo:171,not:172,shy:173,reg:174,macr:175,deg:176,plusmn:177,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,sup1:185,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,Agrave:192,Aacute:193,Acirc:194,Atilde:195,Auml:196,Aring:197,AElig:198,Ccedil:199,Egrave:200,Eacute:201,Ecirc:202,Euml:203,Igrave:204,Iacute:205,Icirc:206,Iuml:207,ETH:208,Ntilde:209,Ograve:210,Oacute:211,Ocirc:212,Otilde:213,Ouml:214,times:215,Oslash:216,Ugrave:217,Uacute:218,Ucirc:219,Uuml:220,Yacute:221,THORN:222,szlig:223,agrave:224,aacute:225,acirc:226,atilde:227,auml:228,aring:229,aelig:230,ccedil:231,egrave:232,eacute:233,ecirc:234,euml:235,igrave:236,iacute:237,icirc:238,iuml:239,eth:240,ntilde:241,ograve:242,oacute:243,ocirc:244,otilde:245,ouml:246,divide:247,oslash:248,ugrave:249,uacute:250,ucirc:251,uuml:252,yacute:253,thorn:254,yuml:255,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830}
!function(e){e[e.Auto=0]="Auto",e[e.CountMask=268435455]="CountMask",e[e._i=268435456]="_i"}(a||(a={})),function(e){e[e.ToOriginal=0]="ToOriginal",e[e.ToOutParameter=1]="ToOutParameter"}(i||(i={})),e.emitFiles=function(r,a,i){function s(t,n){for(var r=n;e.isNodeDescendentOf(r,n);r=r.nextContainer)if(r.locals&&e.hasProperty(r.locals,t)&&9544639&r.locals[t].flags)return!1
return!0}function c(e,t,n,r){t?(e.labeledNonLocalBreaks||(e.labeledNonLocalBreaks={}),e.labeledNonLocalBreaks[n]=r):(e.labeledNonLocalContinues||(e.labeledNonLocalContinues={}),e.labeledNonLocalContinues[n]=r)}function _(e,t){e.hoistedLocalVariables||(e.hoistedLocalVariables=[]),function t(n){if(69===n.kind)e.hoistedLocalVariables.push(n)
else for(var r=0,a=n.elements;r<a.length;r++)t(a[r].name)}(t.name)}var u="\nvar __extends = (this && this.__extends) || function (d, b) {\n    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];\n    function __() { this.constructor = d; }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n};",l="\nvar __assign = (this && this.__assign) || Object.assign || function(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n            t[p] = s[p];\n    }\n    return t;\n};",d='\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};',p='\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);\n};',f="\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};",m="\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments)).next());\n    });\n};",g=a.getCompilerOptions(),y=e.getEmitScriptTarget(g),h=e.getEmitModuleKind(g),v=g.sourceMap||g.inlineSourceMap?[]:void 0,k=e.createDiagnosticCollection(),b=!1,x=a.getNewLine(),C=function(){function i(t){rr=t,ar=t.text,ir=e.getLineStarts(t),ur=void 0,lr=void 0,cr=t.symbol&&t.symbol.exports&&!!t.symbol.exports.___esModule,sr=t.renamedDependencies,or=t.identifiers,_r=e.isExternalModule(t),zr(t),zn(t)}function b(t){return!r.hasGlobalName(t)&&!e.hasProperty(or,t)&&!e.hasProperty(dr,t)}function C(e){if(e&&!(Ur&e)){var t=268435456===e?"_i":"_n"
if(b(t))return Ur|=e,t}for(;;){var n=268435455&Ur
if(Ur++,8!==n&&13!==n){var r=26>n?"_"+String.fromCharCode(97+n):"_"+(n-26)
if(b(r))return r}}}function D(e){95!==e.charCodeAt(e.length-1)&&(e+="_")
for(var t=1;;){var n=e+t
if(b(n))return dr[n]=n
t++}}function S(t){var n=e.getExternalModuleName(t)
return D(9===n.kind?e.escapeIdentifier(e.makeIdentifierFromModuleName(n.text)):"module")}function T(e){switch(e.kind){case 69:return D(e.text)
case 221:case 220:return function(e){var t=e.name.text
return s(t,e)?t:D(t)}(e)
case 225:case 231:return S(e)
case 216:case 217:case 230:return D("default")
case 189:return D("class")}}function E(t){var n=e.getNodeId(t)
return pr[n]||(pr[n]=e.unescapeIdentifier(T(t)))}function w(t,n,r,i){g.sourceMap&&!g.inlineSourceMap&&e.writeFile(a,k,r,Br.getText(),!1),v&&v.push(Br.getSourceMapData()),e.writeFile(a,k,n,t,i)}function A(t){var n=e.createSynthesizedNode(69)
return n.text=C(t),n}function P(e){xr||(xr=[]),xr.push(e)}function N(e){var t=A(e)
return P(t),t}function O(e){xr&&(e?Fr():Rr(" "),Rr("var "),B(xr),Rr(";"))}function R(t,n,r){var a=e.skipTrivia(ar,n)
Jr(a)
var i=e.tokenToString(t)
r?r():Rr(i)
var o=a+i.length
return Jr(o),o}function I(e,t){t&&(Rr(e),Bn(t))}function F(e,t){t&&Rr("("),Bn(e),t&&Rr(")")}function L(t,n,r,a){e.Debug.assert(n.length>0),Lr(),Ze(t,n[0])?a&&Rr(" "):Fr()
for(var i=0,o=n.length;o>i;i++)i&&(et(n[i-1],n[i])?Rr(", "):(Rr(","),Fr())),Bn(n[i])
n.hasTrailingComma&&r&&Rr(","),Mr(),function(t,n){return e.getLineOfLocalPositionFromLineMap(ir,t.end)===e.getLineOfLocalPositionFromLineMap(ir,n.end)}(t,e.lastOrUndefined(n))?a&&Rr(" "):Fr()}function M(e,t,n,r,a,i,o,s){s||(s=Bn)
for(var c=0;n>c;c++){r?((c||i)&&Rr(","),Fr()):(c||i)&&Rr(", ")
var _=e[t+c]
er(_.pos),s(_),i=!0}return a&&Rr(","),r&&!o&&Fr(),n}function B(e){e&&M(e,0,e.length,!1,!1)}function z(e){K(e,0)}function K(e,t){for(var n=t;n<e.length;n++)Fr(),Bn(e[n])}function j(t){var n=J(t)
!g.sourceMap&&!g.inlineSourceMap||9!==t.kind&&!e.isTemplateLiteralKind(t.kind)?Rr(2>y&&function(e,t){if(8===e.kind&&t.length>1)switch(t.charCodeAt(1)){case 98:case 66:case 111:case 79:return!0}return!1}(t,n)?t.text:n):Or.writeLiteral(n)}function J(t){if(2>y&&(e.isTemplateLiteralKind(t.kind)||t.hasExtendedUnicodeEscape))return U('"',t.text,'"')
if(t.parent)return e.getTextOfNodeFromSourceText(ar,t)
switch(t.kind){case 9:return U('"',t.text,'"')
case 11:return U("`",t.text,"`")
case 12:return U("`",t.text,"${")
case 13:return U("}",t.text,"${")
case 14:return U("}",t.text,"`")
case 8:return t.text}e.Debug.fail("Literal kind '"+t.kind+"' not accounted for.")}function U(t,n,r){return t+e.escapeNonAsciiCharacters(e.escapeString(n))+r}function q(t){var n=e.getTextOfNodeFromSourceText(ar,t),r=11===t.kind||14===t.kind
n=(n=n.substring(1,n.length-(r?1:2))).replace(/\r\n?/g,"\n"),n=e.escapeString(n),Rr('"'+n+'"')}function W(t,n){Rr("["),11===t.template.kind?n(t.template):(n(t.template.head),e.forEach(t.template.templateSpans,function(e){Rr(", "),n(e.literal)})),Rr("]")}function V(t){var n=N(0)
Rr("("),Bn(n),Rr(" = "),W(t,Bn),Rr(", "),Bn(n),Rr(".raw = "),W(t,q),Rr(", "),F(t.tag,ie(t.tag)),Rr("("),Bn(n),186===t.template.kind&&e.forEach(t.template.templateSpans,function(e){Rr(", ")
var t=184===e.expression.kind&&24===e.expression.operatorToken.kind
F(e.expression,t)}),Rr("))")}function H(t){function n(e){switch(e.kind){case 184:switch(e.operatorToken.kind){case 37:case 39:case 40:return 1
case 35:case 36:return 0
default:return-1}case 187:case 185:return-1
default:return 1}}if(y>=2)e.forEachChild(t,Bn)
else{var r=e.isExpression(t.parent)&&function(e,t){switch(t.kind){case 171:case 172:return t.expression===e
case 173:case 175:return!1
default:return-1!==n(t)}}(t,t.parent)
r&&Rr("(")
var a=!1
e.Debug.assert(0!==t.templateSpans.length),(0!==t.head.text.length||0===t.templateSpans[0].literal.text.length)&&(j(t.head),a=!0)
for(var i=0,o=t.templateSpans.length;o>i;i++){var s=t.templateSpans[i],c=175!==s.expression.kind&&1!==n(s.expression);(i>0||a)&&Rr(" + "),F(s.expression,c),0!==s.literal.text.length&&(Rr(" + "),j(s.literal))}r&&Rr(")")}}function G(t){function n(e){(function(e){/^[A-Za-z_]\w*$/.test(e.text)?Bn(e):(Rr('"'),Bn(e),Rr('"'))})(e.name),Rr(": "),e.initializer?Bn(e.initializer):Rr("true")}function r(t,r){var a=e.createSynthesizedNode(69)
if(a.text=g.reactNamespace?g.reactNamespace:"React",a.parent=t,Yn(t),Y(a),Rr(".createElement("),function(t){69===t.kind&&e.isIntrinsicJsxName(t.text)?(Rr('"'),Bn(t),Rr('"')):Bn(t)}(t.tagName),Rr(", "),0===t.attributes.length)Rr("null")
else{var i=t.attributes
if(e.forEach(i,function(e){return 242===e.kind})){Rr("__assign(")
for(var o=!1,s=0;s<i.length;s++)242===i[s].kind?(0===s&&Rr("{}, "),o&&(Rr("}"),o=!1),s>0&&Rr(", "),Bn(i[s].expression)):(e.Debug.assert(241===i[s].kind),o?Rr(", "):(o=!0,s>0&&Rr(", "),Rr("{")),n(i[s]))
o&&Rr("}"),Rr(")")}else{Rr("{"),s=0
for(var c=i.length;c>s;s++)s>0&&Rr(", "),n(i[s])
Rr("}")}}if(r)for(s=0;s<r.length;s++)if(243!==r[s].kind||r[s].expression)if(239===r[s].kind){var _=Pn(r[s])
void 0!==_&&(Rr(', "'),Rr(_),Rr('"'))}else Rr(", "),Bn(r[s])
Rr(")"),Zn(t)}236===t.kind?r(t.openingElement,t.children):(e.Debug.assert(237===t.kind),r(t))}function X(t){function n(e){Bn(e.name),e.initializer&&(Rr("="),Bn(e.initializer))}function r(e){Rr("{..."),Bn(e.expression),Rr("}")}function a(t){for(var a=0,i=t.length;i>a;a++)a>0&&Rr(" "),242===t[a].kind?r(t[a]):(e.Debug.assert(241===t[a].kind),n(t[a]))}function i(e){Rr("<"),Bn(e.tagName),(e.attributes.length>0||237===e.kind)&&Rr(" "),a(e.attributes),Rr(237===e.kind?"/>":">")}236===t.kind?function(e){i(e.openingElement)
for(var t=0,n=e.children.length;n>t;t++)Bn(e.children[t]);(function(e){Rr("</"),Bn(e.tagName),Rr(">")})(e.closingElement)}(t):(e.Debug.assert(237===t.kind),i(t))}function Q(t){if(e.Debug.assert(166!==t.kind),9===t.kind)j(t)
else if(137===t.kind){if(e.nodeIsDecorated(t.parent)){fr||(fr=[])
var n=fr[e.getNodeId(t)]
if(n)return void Rr(n)
n=N(0).text,fr[e.getNodeId(t)]=n,Rr(n),Rr(" = ")}Bn(t.expression)}else Rr('"'),8===t.kind?Rr(t.text):Ir(ar,t),Rr('"')}function Y(t){var n=r.getReferencedExportContainer(t)
if(n)251===n.kind?5!==h&&4!==h&&Rr("exports."):(Rr(E(n)),Rr("."))
else{if(5!==h&&(o=r.getReferencedImportDeclaration(t))){if(226===o.kind)return Rr(E(o.parent)),void Rr(0===y?'["default"]':".default")
if(229===o.kind){Rr(E(o.parent.parent.parent))
var a=o.propertyName||o.name,i=e.getTextOfNodeFromSourceText(ar,a)
return void(0===y&&"default"===i?Rr('["default"]'):(Rr("."),Rr(i)))}}if(2>y){if(o=r.getReferencedDeclarationWithCollidingName(t))return void Rr(E(o.name))}else if(1048576&r.getNodeCheckFlags(t)){var o
if(o=r.getReferencedValueDeclaration(t)){var s=mr[e.getNodeId(o)]
if(void 0!==s)return void Rr(s)}}}e.nodeIsSynthesized(t)?Rr(t.text):Ir(ar,t)}function $(e){if(2>y){var t=e.parent
switch(t.kind){case 166:case 217:case 220:case 214:return t.name===e&&r.isDeclarationWithCollidingName(t)}}return!1}function Z(t){if(gr&&"arguments"==t.text&&r.isArgumentsLocalBinding(t)){var n=gr.argumentsName||(gr.argumentsName=D("arguments"))
Rr(n)}else t.parent?function(e){var t=e.parent
switch(t.kind){case 167:case 192:case 184:case 171:case 244:case 137:case 185:case 140:case 178:case 200:case 170:case 230:case 198:case 191:case 202:case 203:case 204:case 199:case 240:case 237:case 238:case 242:case 243:case 172:case 175:case 183:case 182:case 207:case 249:case 188:case 209:case 173:case 193:case 211:case 174:case 179:case 180:case 201:case 208:case 187:return!0
case 166:case 250:case 139:case 248:case 142:case 214:return t.initializer===e
case 169:return t.expression===e
case 177:case 176:return t.body===e
case 224:return t.moduleReference===e
case 136:return t.left===e}return!1}(t)?Y(t):$(t)?Rr(E(t)):e.nodeIsSynthesized(t)?Rr(t.text):Ir(ar,t):Rr(t.text)}function ee(e){Rr(2&r.getNodeCheckFlags(e)?"_this":gr?gr.thisName||(gr.thisName=D("this")):"this")}function te(e){if(y>=2)Rr("super")
else{var t=r.getNodeCheckFlags(e)
Rr(256&t?"_super.prototype":"_super")}}function ne(t){t.propertyName&&(Bn(t.propertyName),Rr(": ")),t.dotDotDotToken&&Rr("..."),e.isBindingPattern(t.name)?Bn(t.name):it(t),I(" = ",t.initializer)}function re(t){Rr(e.tokenToString(114)),t.asteriskToken&&Rr("*"),t.expression&&(Rr(" "),Bn(t.expression))}function ae(t){var n=function(t){return 184===t.parent.kind&&!e.isAssignmentOperator(t.parent.operatorToken.kind)||185===t.parent.kind&&t.parent.condition===t}(t)
n&&Rr("("),Rr(e.tokenToString(114)),Rr(" "),Bn(t.expression),n&&Rr(")")}function ie(e){switch(e.kind){case 69:case 167:case 169:case 170:case 171:case 175:return!1}return!0}function oe(e,t,n,r,a){for(var i=0,o=0,s=e.length;s>i;){1===o&&a?Rr(".concat("):o>0&&Rr(", ")
var c=e[i]
if(188===c.kind)F(c=c.expression,0===o&&ie(c)),++i===s&&0===o&&t&&167!==c.kind&&Rr(".slice()")
else{for(var _=i;s>_&&188!==e[_].kind;)_++
Rr("["),n&&Lr(),M(e,i,_-i,n,r&&_===s),n&&Mr(),Rr("]"),i=_}o++}o>1&&a&&Rr(")")}function se(e){return 188===e.kind}function ce(t){var n=t.elements
0===n.length?Rr("[]"):y>=2||!e.forEach(n,se)?(Rr("["),L(t,t.elements,n.hasTrailingComma,!1),Rr("]")):oe(n,!0,0!=(1024&t.flags),n.hasTrailingComma,!0)}function _e(e,t){if(0!==t){if(Rr("{"),t>0){var n=e.properties
if(t===n.length)L(e,n,y>=1,!0)
else{var r=0!=(1024&e.flags)
r?Lr():Rr(" "),M(n,0,t,r,!1),r?Mr():Rr(" ")}}Rr("}")}else Rr("{}")}function ue(t,n){function r(){a?(Rr(","),Fr()):Rr(", ")}var a=0!=(1024&t.flags),i=t.properties
Rr("("),a&&Lr()
var o=N(0)
Bn(o),Rr(" = "),_e(t,n)
for(var s=n,c=i.length;c>s;s++){r()
var _=i[s]
if(Kr(_),146===_.kind||147===_.kind){var u=e.getAllAccessorDeclarations(t.properties,_)
if(_!==u.firstAccessor)continue
Rr("Object.defineProperty("),Bn(o),Rr(", "),Kr(t.name),Q(_.name),jr(_.name),Rr(", {"),Lr(),u.getAccessor&&(Fr(),Yn(u.getAccessor),Rr("get: "),Kr(u.getAccessor),Rr("function "),At(u.getAccessor),jr(u.getAccessor),Zn(u.getAccessor),Rr(",")),u.setAccessor&&(Fr(),Yn(u.setAccessor),Rr("set: "),Kr(u.setAccessor),Rr("function "),At(u.setAccessor),jr(u.setAccessor),Zn(u.setAccessor),Rr(",")),Fr(),Rr("enumerable: true,"),Fr(),Rr("configurable: true"),Mr(),Fr(),Rr("})"),jr(_)}else Yn(_),Kr(_.name),Bn(o),Nt(_.name),jr(_.name),Rr(" = "),248===_.kind?Bn(_.initializer):249===_.kind?Y(_.name):144===_.kind?Dt(_):e.Debug.fail("ObjectLiteralElement type not accounted for: "+_.kind)
jr(_)}r(),Bn(o),a&&(Mr(),Fr()),Rr(")")}function le(t,n){var r=e.createSynthesizedNode(169)
return r.expression=pe(t),r.dotToken=e.createSynthesizedNode(21),r.name=n,r}function de(t,n){var r=e.createSynthesizedNode(170)
return r.expression=pe(t),r.argumentExpression=n,r}function pe(t){for(;174===t.kind||192===t.kind;)t=t.expression
if(e.isLeftHandSideExpression(t)&&172!==t.kind&&8!==t.kind)return t
var n=e.createSynthesizedNode(175)
return n.expression=t,n}function fe(e){Rr("["),Q(e),Rr("]")}function me(e){Ir(ar,e.name),(5!==h||function(e){var t=r.getReferencedExportContainer(e)
return t&&251!==t.kind}(e.name))&&(Rr(": "),Bn(e.name)),y>=2&&e.objectAssignmentInitializer&&(Rr(" = "),Bn(e.objectAssignmentInitializer))}function ge(t){var n=ye(t)
if(void 0!==n){if(Rr(n.toString()),!g.removeComments){var r=169===t.kind?e.declarationNameToString(t.name):e.getTextOfNode(t.argumentExpression)
Rr(" /* "+r+" */")}return!0}return!1}function ye(e){return g.isolatedModules?void 0:169===e.kind||170===e.kind?r.getConstantValue(e):void 0}function he(t,n,r,a){var i=!e.nodeIsSynthesized(t)&&!et(n,r),o=function(t){return e.nodeIsSynthesized(t)&&t.startsOnNewLine}(r)
return i||o?(Lr(),Fr(),!0):(a&&Rr(a),!1)}function ve(t){if(!ge(t)){if(2===y&&95===t.expression.kind&&Ce(t)){var n=e.createSynthesizedNode(9)
return n.text=t.name.text,void De(t.expression,n)}Bn(t.expression)
var r=he(t,t.expression,t.dotToken),a=!1
if(!r)if(8===t.expression.kind)a=e.getTextOfNodeFromSourceText(ar,t.expression).indexOf(e.tokenToString(21))<0
else{var i=ye(t.expression)
a=isFinite(i)&&Math.floor(i)===i}Rr(a?" .":".")
var o=he(t,t.dotToken,t.name)
Bn(t.name),Le(r,o)}}function ke(e,t){switch(e.kind){case 69:t&&(Rr("typeof "),Y(e),Rr(" !== 'undefined' && ")),Y(e)
break
case 136:(function(e,t){if(69===e.left.kind)ke(e.left,t)
else if(t){var n=N(0)
Rr("("),Jn(n),Rr(" = "),ke(e.left,!0),Rr(") && "),Jn(n)}else ke(e.left,!1)
Rr("."),Bn(e.right)})(e,t)
break
default:Jn(e)}}function be(t){return e.forEach(t,function(e){return 188===e.kind})}function xe(e){if(69===e.kind||97===e.kind||95===e.kind)return Bn(e),e
var t=N(0)
return Rr("("),Bn(t),Rr(" = "),Bn(e),Rr(")"),t}function Ce(t){if(2===y){var n=e.getSuperContainer(t,!1)
if(n&&6144&r.getNodeCheckFlags(n))return!0}return!1}function De(t,n){var a=e.getSuperContainer(t,!1),i=4096&r.getNodeCheckFlags(a)
Rr("_super("),Bn(n),Rr(i?").value":")")}function Se(t){if(2>y&&be(t.arguments))(function(e){var t,n=function(e){for(;175===e.kind||174===e.kind||192===e.kind;)e=e.expression
return e}(e.expression)
169===n.kind?(t=xe(n.expression),Rr("."),Bn(n.name)):170===n.kind?(t=xe(n.expression),Rr("["),Bn(n.argumentExpression),Rr("]")):95===n.kind?(t=n,Rr("_super")):Bn(e.expression),Rr(".apply("),t?95===t.kind?ee(t):Bn(t):Rr("void 0"),Rr(", "),oe(e.arguments,!1,!1,!1,!0),Rr(")")})(t)
else{var n=t.expression,r=!1,a=!1
95===n.kind?(te(n),r=!0):(a=(r=e.isSuperPropertyOrElementAccess(n))&&Ce(t),Bn(n)),r&&(2>y||a)?(Rr(".call("),ee(n),t.arguments.length&&(Rr(", "),B(t.arguments)),Rr(")")):(Rr("("),B(t.arguments),Rr(")"))}}function Te(t){if(!e.nodeIsSynthesized(t)&&177!==t.parent.kind&&(174===t.expression.kind||192===t.expression.kind)){for(var n=t.expression.expression;174===n.kind||192===n.kind;)n=n.expression
if(!(182===n.kind||180===n.kind||179===n.kind||178===n.kind||183===n.kind||172===n.kind||171===n.kind&&172===t.parent.kind||176===n.kind&&171===t.parent.kind||8===n.kind&&169===t.parent.kind))return void Bn(n)}Rr("("),Bn(t.expression),Rr(")")}function Ee(t){Rr(e.tokenToString(78)),Rr(" "),Bn(t.expression)}function we(t){Rr(e.tokenToString(103)),Rr(" "),Bn(t.expression)}function Ae(t){Rr(e.tokenToString(101)),Rr(" "),Bn(t.expression)}function Pe(t){return!(!hn()||69!==t.kind||e.nodeIsSynthesized(t))&&Ie(!t.parent||214!==t.parent.kind&&166!==t.parent.kind?r.getReferencedValueDeclaration(t):t.parent,!0)}function Ne(t){var n=(41===t.operator||42===t.operator)&&Pe(t.operand)
if(n&&(Rr(ur+'("'),Jn(t.operand),Rr('", ')),Rr(e.tokenToString(t.operator)),182===t.operand.kind){var r=t.operand;(35!==t.operator||35!==r.operator&&41!==r.operator)&&(36!==t.operator||36!==r.operator&&42!==r.operator)||Rr(" ")}Bn(t.operand),n&&Rr(")")}function Oe(t){Pe(t.operand)?(Rr("("+ur+'("'),Jn(t.operand),Rr('", '),Rr(e.tokenToString(t.operator)),Bn(t.operand),Rr(41===t.operator?") - 1)":") + 1)")):(Bn(t.operand),Rr(e.tokenToString(t.operator)))}function Re(e){return Ie(e,!1)}function Ie(t,n){if(!t||!hn())return!1
for(var r=e.getRootDeclaration(t).parent;r;){if(251===r.kind)return!n||0!=(2&e.getCombinedNodeFlags(t))
if(e.isDeclaration(r))return!1
r=r.parent}}function Fe(t){if(2>y&&56===t.operatorToken.kind&&(168===t.left.kind||167===t.left.kind))ft(t,198===t.parent.kind)
else{var n=t.operatorToken.kind>=56&&t.operatorToken.kind<=68&&Pe(t.left)
if(n&&(Rr(ur+'("'),Jn(t.left),Rr('", ')),38===t.operatorToken.kind||60===t.operatorToken.kind)(function(t){var n=t.left
if(60===t.operatorToken.kind){var r=void 0,a=!1
if(e.isElementAccessExpression(n)){a=!0,Rr("("),r=e.createSynthesizedNode(170,!1)
var i=dt(n.expression,!1,!1)
if(r.expression=i,8!==n.argumentExpression.kind&&9!==n.argumentExpression.kind){var o=N(268435456)
r.argumentExpression=o,lt(o,n.argumentExpression,!0,n.expression)}else r.argumentExpression=n.argumentExpression
Rr(", ")}else e.isPropertyAccessExpression(n)&&(a=!0,Rr("("),r=e.createSynthesizedNode(169,!1),i=dt(n.expression,!1,!1),r.expression=i,r.dotToken=n.dotToken,r.name=n.name,Rr(", "))
Bn(r||n),Rr(" = "),Rr("Math.pow("),Bn(r||n),Rr(", "),Bn(t.right),Rr(")"),a&&Rr(")")}else Rr("Math.pow("),Bn(n),Rr(", "),Bn(t.right),Rr(")")})(t)
else{Bn(t.left)
var r=he(t,t.left,t.operatorToken,24!==t.operatorToken.kind?" ":void 0)
Rr(e.tokenToString(t.operatorToken.kind))
var a=he(t,t.operatorToken,t.right," ")
Bn(t.right),Le(r,a)}n&&Rr(")")}}function Le(e,t){e&&Mr(),t&&Mr()}function Me(t){return function(e){if(e&&195===e.kind){var t=e
return 0===t.statements.length&&et(t,t)}}(t)?(R(15,t.pos),Rr(" "),void R(16,t.statements.end)):(R(15,t.pos),Lr(),222===t.kind&&(e.Debug.assert(221===t.parent.kind),St(t.parent)),z(t.statements),222===t.kind&&O(!0),Mr(),Fr(),void R(16,t.statements.end))}function Be(e){195===e.kind?(Rr(" "),Bn(e)):(Lr(),Fr(),Bn(e),Mr())}function ze(e,t){Rr("do"),t?Ge(t,!0):Ve(e,!0),195===e.statement.kind?Rr(" "):Fr(),Rr("while ("),Bn(e.expression),Rr(");")}function Ke(e,t){Rr("while ("),Bn(e.expression),Rr(")"),t?Ge(t,!0):Ve(e,!0)}function je(t){if(yn(t,!0))return!1
if(gr&&0==(24576&e.getCombinedNodeFlags(t))){for(var n=0,r=t.declarations;n<r.length;n++){var a=r[n]
_(gr,a)}return!1}return Kr(t),Rr(t&&y>=2?e.isLet(t)?"let ":e.isConst(t)?"const ":"var ":"var "),!0}function Je(e){for(var t=!1,n=0,r=e.declarations;n<r.length;n++){var a=r[n]
a.initializer&&(t?Rr(", "):t=!0,Bn(a))}return t}function Ue(e){return 2>y&&0!=(65536&r.getNodeCheckFlags(e))}function qe(e,t){if(Ue(e)){var n=We(e)
210===e.parent.kind&&tt(e.parent),t(e,n)}else t(e,void 0)}function We(t){function n(e){if(69===e.kind){var t=$(e)?E(e):e.text
if(i.push(t),2097152&r.getNodeCheckFlags(e.parent)){var a={originalName:e,outParamName:D("out_"+t)};(o||(o=[])).push(a)}}else for(var s=0,c=e.elements;s<c.length;s++)n(c[s].name)}var a,i,o,s=D("_loop")
switch(t.kind){case 202:case 203:case 204:var c=t.initializer
c&&215===c.kind&&(a=t.initializer)}if(a&&24576&e.getCombinedNodeFlags(a)){i=[]
for(var _=0,u=a.declarations;_<u.length;_++)n(u[_].name)}var l=195===t.statement.kind,d=i?i.join(", "):""
Fr(),Rr("var "+s+" = function("+d+")")
var p=gr
if(gr={loopOutParameters:o},p&&(p.argumentsName&&(gr.argumentsName=p.argumentsName),p.thisName&&(gr.thisName=p.thisName),p.hoistedLocalVariables&&(gr.hoistedLocalVariables=p.hoistedLocalVariables)),Rr(" {"),Fr(),Lr(),l?z(t.statement.statements):Bn(t.statement),Fr(),He(gr,1,!0),Mr(),Fr(),Rr("};"),Fr(),o){Rr("var ")
for(var f=0;f<o.length;f++)0!==f&&Rr(", "),Rr(o[f].outParamName)
Rr(";"),Fr()}if(gr.argumentsName&&(p?p.argumentsName=gr.argumentsName:(Rr("var "+gr.argumentsName+" = arguments;"),Fr())),gr.thisName&&(p?p.thisName=gr.thisName:(Rr("var "+gr.thisName+" = this;"),Fr())),gr.hoistedLocalVariables)if(p)p.hoistedLocalVariables=gr.hoistedLocalVariables
else{Rr("var ")
for(var m=void 0,g=0,y=gr.hoistedLocalVariables;g<y.length;g++){var h=y[g]
m?Rr(", "):m={},e.hasProperty(m,h.text)||(Bn(h),m[h.text]=h.text)}Rr(";"),Fr()}var v=gr
return gr=p,{functionName:s,paramList:d,state:v}}function Ve(e,t){var n
gr&&(n=gr.allowedNonLabeledJumps,gr.allowedNonLabeledJumps=6),t?Be(e.statement):195===e.statement.kind?z(e.statement.statements):(Fr(),Bn(e.statement)),gr&&(gr.allowedNonLabeledJumps=n)}function He(e,t,n){if(e.loopOutParameters)for(var r=0,a=e.loopOutParameters;r<a.length;r++){var i=a[r]
0===t?(Z(i.originalName),Rr(" = "+i.outParamName)):(Rr(i.outParamName+" = "),Z(i.originalName)),n?(Rr(";"),Fr()):Rr(", ")}}function Ge(e,t){function n(e,t,n,r){if(e)for(var a in e){var i=e[a]
Fr(),Rr('case "'+i+'": '),!r||r.labels&&r.labels[a]?(Rr(t?"break ":"continue "),Rr(a+";")):(c(r,t,a,i),Rr("return "+n+";"))}}t&&(Rr(" {"),Fr(),Lr())
var r=!e.state.nonLocalJumps&&!e.state.labeledNonLocalBreaks&&!e.state.labeledNonLocalContinues,a=D("state")
r||Rr("var "+a+" = "),Rr(e.functionName+"("+e.paramList+");"),Fr(),He(e.state,0,!0),r||(Fr(),8&e.state.nonLocalJumps&&(Rr("if (typeof "+a+' === "object") '),gr?(Rr("return "+a+";"),gr.nonLocalJumps|=8):Rr("return "+a+".value;"),Fr()),2&e.state.nonLocalJumps&&(Rr("if ("+a+' === "break") break;'),Fr()),4&e.state.nonLocalJumps&&(Rr("if ("+a+' === "continue") continue;'),Fr()),function(e,t,r){(t.labeledNonLocalBreaks||t.labeledNonLocalContinues)&&(Rr("switch("+e+") {"),Lr(),n(t.labeledNonLocalBreaks,!0,e,r),n(t.labeledNonLocalContinues,!1,e,r),Mr(),Fr(),Rr("}"))}(a,e.state,gr)),t&&(Fr(),Mr(),Rr("}"))}function Xe(e,t){var n=R(86,e.pos)
if(Rr(" "),n=R(17,n),e.initializer&&215===e.initializer.kind){var r=e.initializer
je(r)?B(r.declarations):Je(r)}else e.initializer&&Bn(e.initializer)
Rr(";"),I(" ",e.condition),Rr(";"),I(" ",e.incrementor),Rr(")"),t?Ge(t,!0):Ve(e,!0)}function Qe(e,t){var n=R(86,e.pos)
if(Rr(" "),n=R(17,n),215===e.initializer.kind){var r=e.initializer
r.declarations.length>=1&&(je(r),Bn(r.declarations[0]))}else Bn(e.initializer)
Rr(203===e.kind?" in ":" of "),Bn(e.expression),R(18,e.expression.end),t?Ge(t,!0):Ve(e,!0)}function Ye(t,n){var r=R(86,t.pos)
Rr(" "),r=R(17,r)
var a=A(268435456),i=e.createSynthesizedNode(69)
i.text=69===t.expression.kind?D(t.expression.text):C(0),Kr(t.expression),Rr("var "),Jn(a),Rr(" = 0"),jr(t.expression),Rr(", "),Kr(t.expression),Jn(i),Rr(" = "),Jn(t.expression),jr(t.expression),Rr("; "),Kr(t.expression),Jn(a),Rr(" < "),zn(i),Rr(".length"),jr(t.expression),Rr("; "),Kr(t.expression),Jn(a),Rr("++"),jr(t.expression),R(18,t.expression.end),Rr(" {"),Fr(),Lr()
var o=de(i,a)
if(Kr(t.initializer),215===t.initializer.kind){Rr("var ")
var s=t.initializer
if(s.declarations.length>0){var c=s.declarations[0]
e.isBindingPattern(c.name)?ft(c,!1,o):(zn(c),Rr(" = "),Jn(o))}else Jn(A(0)),Rr(" = "),Jn(o)}else{var _=function(t,n,r,a){var i=e.createSynthesizedNode(184,a)
return i.operatorToken=e.createSynthesizedNode(n),i.left=t,i.right=r,i}(t.initializer,56,o,!1)
167===t.initializer.kind||168===t.initializer.kind?ft(_,!0,void 0):zn(_)}jr(t.initializer),Rr(";"),n?(Fr(),Ge(n,!1)):Ve(t,!1),Fr(),Mr(),Rr("}")}function $e(e){var t,n=R(96,e.pos)
Rr(" "),R(17,n),Bn(e.expression),n=R(18,e.expression.end),Rr(" "),gr&&(t=gr.allowedNonLabeledJumps,gr.allowedNonLabeledJumps|=2),function(e,t){R(15,t),Lr(),z(e.clauses),Mr(),Fr(),R(16,e.clauses.end)}(e.caseBlock,n),gr&&(gr.allowedNonLabeledJumps=t)}function Ze(t,n){return e.getLineOfLocalPositionFromLineMap(ir,e.skipTrivia(ar,t.pos))===e.getLineOfLocalPositionFromLineMap(ir,e.skipTrivia(ar,n.pos))}function et(t,n){return e.getLineOfLocalPositionFromLineMap(ir,t.end)===e.getLineOfLocalPositionFromLineMap(ir,e.skipTrivia(ar,n.pos))}function tt(e){Bn(e.label),Rr(": ")}function nt(t){e.isIterationStatement(t.statement,!1)&&Ue(t.statement)||tt(t),gr&&(gr.labels||(gr.labels={}),gr.labels[t.label.text]=t.label.text),Bn(t.statement),gr&&(gr.labels[t.label.text]=void 0)}function rt(e){do{e=e.parent}while(e&&221!==e.kind)
return e}function at(e){var t=rt(e)
Rr(t?E(t):"exports")}function it(t){if(Kr(t.name),2&e.getCombinedNodeFlags(t)){var n=rt(t)
n?(Rr(E(n)),Rr(".")):5!==h&&4!==h&&Rr("exports.")}zn(t.name),jr(t.name)}function ot(){var t=e.createSynthesizedNode(8)
t.text="0"
var n=e.createSynthesizedNode(180)
return n.expression=t,n}function st(t){251===t.parent.kind&&(e.Debug.assert(!!(512&t.flags)||230===t.kind),1!==h&&2!==h&&3!==h||cr||(0!==y?(Rr('Object.defineProperty(exports, "__esModule", { value: true });'),Fr()):(Rr("exports.__esModule = true;"),Fr())))}function ct(e){2&e.flags&&(Fr(),Kr(e),4===h&&e.parent===rr?(Rr(ur+'("'),512&e.flags?Rr("default"):zn(e.name),Rr('", '),Ct(e),Rr(")")):(512&e.flags?(st(e),Rr(0===y?'exports["default"]':"exports.default")):it(e),Rr(" = "),Ct(e)),jr(e),Rr(";"))}function _t(t){if(4!==h&&!Tr&&Sr&&e.hasProperty(Sr,t.text))for(var n=0,r=Sr[t.text];n<r.length;n++){var a=r[n]
Fr(),Kr(a.name),at(a),Rr("."),zn(a.name),jr(a.name),Rr(" = "),Y(t),Rr(";")}}function ut(t){e.Debug.assert(4===h),(r.getReferencedValueDeclaration(t.propertyName||t.name)||r.isValueAliasDeclaration(t))&&(Fr(),Kr(t.name),Rr(ur+'("'),zn(t.name),Rr('", '),Y(t.propertyName||t.name),Rr(")"),jr(t.name),Rr(";"))}function lt(e,t,n,r){n&&Rr(", ")
var a=Pe(e)
a&&(Rr(ur+'("'),zn(e),Rr('", '))
var i=e.parent&&(214===e.parent.kind||166===e.parent.kind)
Kr(pt(r)?r.parent:r),Un(function(){i?it(e.parent):Bn(e),Rr(" = "),Bn(t)}),jr(r,!0),a&&Rr(")")}function dt(e,t,n,r){var a=A(0)
return t||P(a),lt(a,e,n,r||e.parent),a}function pt(e){return 214===e.kind&&215===e.parent.kind&&e.parent.declarations[0]===e}function ft(t,n,r){function a(e,t,n){if(69===e.kind&&t)return e
var r=dt(e,l,u>0,n)
return u++,r}function i(t,n,r){t=a(t,!0,r)
var i=e.createSynthesizedNode(184)
return i.left=t,i.operatorToken=e.createSynthesizedNode(32),i.right=ot(),function(t,n,r){var a=e.createSynthesizedNode(185)
return a.condition=t,a.questionToken=e.createSynthesizedNode(53),a.whenTrue=n,a.colonToken=e.createSynthesizedNode(54),a.whenFalse=r,a}(i,n,t)}function o(t){var n=e.createSynthesizedNode(8)
return n.text=""+t,n}function s(t,n){var r,i=137===n.kind
return i?r=a(n.expression,!1,n):(r=e.createSynthesizedNode(n.kind)).text=e.unescapeIdentifier(n.text),i||69!==r.kind?de(t,r):le(t,r)}function c(t,n){var r=e.createSynthesizedNode(171),a=e.createSynthesizedNode(69)
return a.text="slice",r.expression=le(t,a),r.arguments=e.createSynthesizedNodeArray(),r.arguments[0]=o(n),r}function _(e,t,n){249===e.kind?(e.objectAssignmentInitializer&&(t=i(t,e.objectAssignmentInitializer,n)),e=e.name):184===e.kind&&56===e.operatorToken.kind&&(t=i(t,e.right,n),e=e.left),168===e.kind?function(e,t,n){var r=e.properties
1!==r.length&&(t=a(t,!0,n))
for(var i=0,o=r;i<o.length;i++){var c=o[i]
if(248===c.kind||249===c.kind){var u=c.name
_(249===c.kind?c:c.initializer||u,s(t,u),c)}}}(e,t,n):167===e.kind?function(e,t,n){var r=e.elements
1!==r.length&&(t=a(t,!0,n))
for(var i=0;i<r.length;i++){var s=r[i]
190!==s.kind&&(188!==s.kind?_(s,de(t,o(i)),s):i===r.length-1&&_(s.expression,c(t,i),s))}}(e,t,n):(lt(e,t,u>0,n),u++)}var u=0,l=!1
if(214===t.kind){var d=2&e.getCombinedNodeFlags(t),p=Re(t)
l=!d&&!p}else 139===t.kind&&(l=!0)
184===t.kind?function(t){var r=t.left,i=t.right
e.isEmptyObjectLiteralOrArrayLiteral(r)?Bn(i):n?_(r,i,e.nodeIsSynthesized(t)?r:t):(175!==t.parent.kind&&Rr("("),_(r,i=a(i,!0,t),t),Rr(", "),Bn(i),175!==t.parent.kind&&Rr(")"))}(t):(e.Debug.assert(!n),pt(t)&&Br.changeEmitSourcePos(),function t(n,r){if(n.initializer?r=r?i(r,n.initializer,n):n.initializer:r||(r=ot()),e.isBindingPattern(n.name)){var _=n.name,l=_.elements,d=l.length
1!==d&&(r=a(r,0!==d,n))
for(var p=0;d>p;p++){var f=l[p]
164===_.kind?t(f,s(r,f.propertyName||f.name)):190!==f.kind&&(f.dotDotDotToken?p===d-1&&t(f,c(r,p)):t(f,de(r,o(p))))}}else lt(n.name,r,u>0,n),u++}(t,r))}function mt(t){if(e.isBindingPattern(t.name))2>y?ft(t,!1):(Bn(t.name),I(" = ",t.initializer))
else{var n=t.initializer
if(!n&&2>y&&69===t.name.kind){var a=e.getEnclosingBlockScopeContainer(t),i=r.getNodeCheckFlags(t),o=131072&i,s=262144&i,c=e.isBlockScopedContainerTopLevel(a)||o&&s&&195===a.kind&&e.isIterationStatement(a.parent,!1)
8192&e.getCombinedNodeFlags(t)&&!c&&203!==a.kind&&204!==a.kind&&(!r.isDeclarationWithCollidingName(t)||s&&!o&&!e.isIterationStatement(a,!1))&&(n=ot())}var _=Pe(t.name)
_&&(Rr(ur+'("'),zn(t.name),Rr('", ')),it(t),I(" = ",n),_&&Rr(")")}}function gt(t){if(190!==t.kind){var n=t.name
69===n.kind?_t(n):e.isBindingPattern(n)&&e.forEach(n.elements,gt)}}function yt(e){return!!(2&e.flags)&&5===h&&251===e.parent.kind}function ht(t){var n=!1
2&t.flags?yt(t)&&(Rr("export "),n=je(t.declarationList)):n=je(t.declarationList),n?(B(t.declarationList.declarations),Rr(";")):Je(t.declarationList)&&Rr(";"),5!==h&&t.parent===rr&&e.forEach(t.declarationList.declarations,gt)}function vt(t){if(2>y)if(e.isBindingPattern(t.name)){var n=A(0)
Cr||(Cr=[]),Cr.push(n),Bn(n)}else Bn(t.name)
else t.dotDotDotToken&&Rr("..."),Bn(t.name),I(" = ",t.initializer)}function kt(t){if(2>y){var n=0
e.forEach(t.parameters,function(t){if(!t.dotDotDotToken){var r=t.name,a=t.initializer
if(e.isBindingPattern(r)){var i=r.elements.length>0;(i||a)&&(Fr(),Rr("var "),i?ft(t,!1,Cr[n]):(Bn(Cr[n]),Rr(" = "),Bn(a)),Rr(";"),n++)}else a&&(Fr(),Kr(t),Rr("if ("),Jn(r),Rr(" === void 0)"),jr(t),Rr(" { "),Kr(t),zn(r),Rr(" = "),zn(a),jr(t),Rr("; }"))}})}}function bt(t){if(2>y&&e.hasRestParameter(t)){var n=t.parameters.length-1,r=t.parameters[n]
if(e.isBindingPattern(r.name))return
var a=A(268435456).text
Fr(),Yn(r),Kr(r),Rr("var "),zn(r.name),Rr(" = [];"),jr(r),Zn(r),Fr(),Rr("for ("),Kr(r),Rr("var "+a+" = "+n+";"),jr(r),Rr(" "),Kr(r),Rr(a+" < arguments.length;"),jr(r),Rr(" "),Kr(r),Rr(a+"++"),jr(r),Rr(") {"),Lr(),Fr(),Kr(r),zn(r.name),Rr("["+a+" - "+n+"] = arguments["+a+"];"),jr(r),Mr(),Fr(),Rr("}")}}function xt(e){return 177===e.kind&&y>=2}function Ct(e){e.name?zn(e.name):Rr(E(e))}function Dt(t){if(e.nodeIsMissing(t.body))return Qn(t)
var n=t.kind,r=t.parent
144!==n&&143!==n&&r&&248!==r.kind&&171!==r.kind&&167!==r.kind&&Yn(t),Kr(t),xt(t)||(yt(t)&&(Rr("export "),512&t.flags&&Rr("default ")),Rr("function"),y>=2&&t.asteriskToken&&Rr("*"),Rr(" ")),function(e){return 176===e.kind?!!e.name:216===e.kind?!!e.name||5!==h:void 0}(t)&&Ct(t),At(t),5!==h&&216===n&&r===rr&&t.name&&_t(t.name),jr(t),144!==n&&143!==n&&Zn(t)}function St(e){4&r.getNodeCheckFlags(e)&&(Fr(),Kr(e),Rr("var _this = this;"),jr(e))}function Tt(t){if(Lr(),Rr("("),t){var n=t.parameters,r=2>y&&e.hasRestParameter(t)?1:0
M(n,0,n.length-r,!1,!1)}Rr(")"),Mr()}function Et(t){var n=e.getEntityNameFromTypeNode(t.type),a=177===t.kind,i=0!=(8192&r.getNodeCheckFlags(t))
a||(Rr(" {"),Lr(),Fr(),4096&r.getNodeCheckFlags(t)?(Fn("\nconst _super = (function (geti, seti) {\n    const cache = Object.create(null);\n    return name => cache[name] || (cache[name] = { get value() { return geti(name); }, set value(v) { seti(name, v); } });\n})(name => super[name], (name, value) => super[name] = value);"),Fr()):2048&r.getNodeCheckFlags(t)&&(Rr("const _super = name => super[name];"),Fr()),Rr("return")),Rr(" __awaiter(this"),Rr(i?", arguments, ":", void 0, "),!n||g.noCustomAsyncPromise&&y>=2?Rr("void 0"):ke(n,!1),Rr(", function* ()"),wt(t),Rr(")"),a||(Rr(";"),Mr(),Fr(),Rr("}"))}function wt(e){e.body?195===e.body.kind?function(e,t){Rr(" {")
var n=Or.getTextPos()
Lr(),tr(t.statements)
var r=In(t.statements,!0)
if(Pt(e),Mr(),Or.getTextPos()===n&&et(t,t)){for(var a=0,i=t.statements;a<i.length;a++){var o=i[a]
Rr(" "),Bn(o)}O(!1),Rr(" "),qr(t.statements.end)}else Lr(),K(t.statements,r),O(!0),Fr(),qr(t.statements.end),Mr()
R(16,t.statements.end)}(e,e.body):function(e,t){if(2>y||256&e.flags)(function(e,t){Rr(" {"),Lr()
var n=Or.getTextPos()
tr(e.body),Pt(e)
var r=Or.getTextPos()!==n
Mr(),!r&&Ze(e,t)?(Rr(" "),Kr(t),Rr("return "),Bn(t),jr(t),Rr(";"),O(!1),Rr(" ")):(Lr(),Fr(),Yn(e.body),Kr(t),Rr("return "),Bn(t),jr(t),Rr(";"),Zn(e.body),O(!0),Mr(),Fr()),Kr(e.body),Rr("}"),jr(e.body)})(e,t)
else{Rr(" ")
for(var n=t;174===n.kind;)n=n.expression
F(t,168===n.kind)}}(e,e.body):Rr(" { }")}function At(t){var n=gr,r=Ur,a=xr,i=Cr
gr=void 0,Ur=0,xr=void 0,Cr=void 0,xt(t)?(function(e){1===e.parameters.length&&e.pos===e.parameters[0].pos?Bn(e.parameters[0]):Tt(e)}(t),Rr(" =>")):Tt(t),e.isAsyncFunctionLike(t)?Et(t):wt(t),yt(t)||ct(t),e.Debug.assert(void 0===gr),gr=n,Ur=r,xr=a,Cr=i}function Pt(e){St(e),kt(e),bt(e)}function Nt(e){9===e.kind||8===e.kind?(Rr("["),zn(e),Rr("]")):137===e.kind?fe(e):(Rr("."),zn(e))}function Ot(e,t){for(var n=[],r=0,a=e.members;r<a.length;r++){var i=a[r]
142===i.kind&&t===(0!=(64&i.flags))&&i.initializer&&n.push(i)}return n}function Rt(e,t){for(var n=0,r=t;n<r.length;n++)It(e,r[n])}function It(e,t,n,r){Fr(),Yn(t),Kr(t),Kr(t.name),n?Bn(n):64&t.flags?Ct(e):Rr("this"),Nt(t.name),jr(t.name),Rr(" = "),Bn(t.initializer),r||Rr(";"),jr(t),Zn(t)}function Ft(t,n){var r=gr,a=Ur,i=xr,o=Cr
gr=void 0,Ur=0,xr=void 0,Cr=void 0,function(t,n){var r=!1
e.forEach(t.members,function(e){145!==e.kind||e.body||Qn(e),142===e.kind&&e.initializer&&0==(64&e.flags)&&(r=!0)})
var a=e.getFirstConstructorWithBody(t)
if(!(y>=2)||a||r){a&&Yn(a),Kr(a||t),2>y?(Rr("function "),Ct(t),Tt(a)):(Rr("constructor"),a?Tt(a):Rr(n?"(...args)":"()"))
var i,o=0
if(Rr(" {"),Lr(),a&&(o=In(a.body.statements,!0),tr(a.body.statements)),St(t),a?(kt(a),bt(a),n&&(i=function(t,n){if(t.body){var r=t.body.statements
if(r&&!(n>=r.length)){var a=r[n]
return 198===a.kind&&e.isSuperCallExpression(a.expression)?a:void 0}}}(a,o))&&(Fr(),Bn(i)),function(t){e.forEach(t.parameters,function(e){56&e.flags&&(Fr(),Kr(e),Kr(e.name),Rr("this."),Jn(e.name),jr(e.name),Rr(" = "),Bn(e.name),Rr(";"),jr(e))})}(a)):n&&(Fr(),Kr(n),Rr(2>y?"_super.apply(this, arguments);":"super(...args);"),jr(n)),Rt(t,Ot(t,!1)),a){var s=a.body.statements
i&&(s=s.slice(1)),K(s,o)}O(!0),Fr(),a&&qr(a.body.statements.end),Mr(),R(16,a?a.body.statements.end:t.members.end),jr(a||t),a&&Zn(a)}}(t,n),e.Debug.assert(void 0===gr),gr=r,Ur=a,xr=i,Cr=o}function Lt(e){2>y?Bt(e):Mt(e),5!==h&&e.parent===rr&&e.name&&_t(e.name)}function Mt(t){var n,a=e.nodeIsDecorated(t)
217===t.kind&&(a?(524288&r.getNodeCheckFlags(t)&&(n=e.unescapeIdentifier(D(t.name?t.name.text:"default")),mr[e.getNodeId(t)]=n,Rr("let "+n+";"),Fr()),!yt(t)||512&t.flags||Rr("export "),Rr("let "),Ct(t),void 0!==n&&Rr(" = "+n),Rr(" = ")):yt(t)&&(Rr("export "),512&t.flags&&Rr("default ")))
var i,o=Ot(t,!0),s=o.length>0&&189===t.kind
s&&(i=N(0),Rr("("),Lr(),Bn(i),Rr(" = ")),Rr("class"),(t.name||512&t.flags&&(o.length>0||5!==h)&&!a)&&(Rr(" "),Ct(t))
var c=e.getClassExtendsHeritageClauseElement(t)
if(c&&(Rr(" extends "),Bn(c.expression)),Rr(" {"),Lr(),Fr(),Ft(t,c),function(e){for(var t=0,n=e.members;t<n.length;t++){var r=n[t]
144!==r.kind&&143!==e.kind||r.body?144===r.kind||146===r.kind||147===r.kind?(Fr(),Yn(r),Kr(r),64&r.flags&&Rr("static "),146===r.kind?Rr("get "):147===r.kind&&Rr("set "),r.asteriskToken&&Rr("*"),Bn(r.name),At(r),jr(r),Zn(r)):194===r.kind&&(Fr(),Rr(";")):Qn(r)}}(t),Mr(),Fr(),R(16,t.members.end),a&&(mr[e.getNodeId(t)]=void 0,Rr(";")),s){for(var _=0,u=o;_<u.length;_++){var l=u[_]
Rr(","),Fr(),It(t,l,i,!0)}Rr(","),Fr(),Bn(i),Mr(),Rr(")")}else Fr(),Rt(t,o),Kt(t,n)
2&t.flags&&(5!==h?ct(t):512&t.flags?a&&(Fr(),Rr("export default "),Ct(t),Rr(";")):251!==t.parent.kind&&(Fr(),Kr(t),it(t),Rr(" = "),Ct(t),jr(t),Rr(";")))}function Bt(t){217===t.kind&&(Re(t)||Rr("var "),Ct(t),Rr(" = ")),Rr("(function (")
var n=e.getClassExtendsHeritageClauseElement(t)
n&&Rr("_super"),Rr(") {")
var r=Ur,a=xr,i=Cr,o=fr,s=gr
gr=void 0,Ur=0,xr=void 0,Cr=void 0,fr=void 0,Lr(),n&&(Fr(),Kr(n),Rr("__extends("),Ct(t),Rr(", _super);"),jr(n)),Fr(),Ft(t,n),function(t){e.forEach(t.members,function(n){if(194===n.kind)Fr(),Rr(";")
else if(144===n.kind||143===t.kind){if(!n.body)return Qn(n)
Fr(),Yn(n),Kr(n),Kr(n.name),zt(t,n),Nt(n.name),jr(n.name),Rr(" = "),Dt(n),jr(n),Rr(";"),Zn(n)}else if(146===n.kind||147===n.kind){var r=e.getAllAccessorDeclarations(t.members,n)
n===r.firstAccessor&&(Fr(),Kr(n),Rr("Object.defineProperty("),Kr(n.name),zt(t,n),Rr(", "),Q(n.name),jr(n.name),Rr(", {"),Lr(),r.getAccessor&&(Fr(),Yn(r.getAccessor),Rr("get: "),Kr(r.getAccessor),Rr("function "),At(r.getAccessor),jr(r.getAccessor),Zn(r.getAccessor),Rr(",")),r.setAccessor&&(Fr(),Yn(r.setAccessor),Rr("set: "),Kr(r.setAccessor),Rr("function "),At(r.setAccessor),jr(r.setAccessor),Zn(r.setAccessor),Rr(",")),Fr(),Rr("enumerable: true,"),Fr(),Rr("configurable: true"),Mr(),Fr(),Rr("});"),jr(n))}})}(t),Rt(t,Ot(t,!0)),Fr(),Kt(t,void 0),Fr(),R(16,t.members.end,function(){Rr("return "),Ct(t)}),Rr(";"),O(!0),e.Debug.assert(void 0===gr),gr=s,Ur=r,xr=a,Cr=i,fr=o,Mr(),Fr(),R(16,t.members.end),Kr(t),Rr("("),n&&Bn(n.expression),Rr("))"),217===t.kind&&Rr(";"),jr(t),217===t.kind&&ct(t)}function zt(e,t){Ct(e),64&t.flags||Rr(".prototype")}function Kt(e,t){Jt(e,0),Jt(e,64),jt(e,t)}function jt(t,n){var r=t.decorators,a=e.getFirstConstructorWithBody(t),i=a&&e.forEach(a.parameters,function(e){return e.decorators})
if(r||i){Fr(),Kr(t.decorators||i),Ct(t),void 0!==n&&Rr(" = "+n),Rr(" = __decorate(["),Lr(),Fr()
var o=M(r,0,r?r.length:0,!0,!1,!1,!0,function(e){return Bn(e.expression)})
i&&(o+=Ut(a,o>0)),Gt(t,o>=0),Mr(),Fr(),Rr("], "),Ct(t),Rr(")"),jr(t.decorators||i),Rr(";"),Fr()}}function Jt(t,n){for(var r=0,a=t.members;r<a.length;r++){var i=a[r]
if((64&i.flags)===n&&e.nodeCanBeDecorated(i)){var o=void 0,s=void 0
if(e.isAccessor(i)){var c=e.getAllAccessorDeclarations(t.members,i)
if(i!==c.firstAccessor)continue
!(o=c.firstAccessor.decorators)&&c.secondAccessor&&(o=c.secondAccessor.decorators),s=c.setAccessor}else o=i.decorators,144===i.kind&&(s=i)
var _=s&&e.forEach(s.parameters,function(e){return e.decorators})
if(o||_){Fr(),Kr(o||_),Rr("__decorate(["),Lr(),Fr()
var u=M(o,0,o?o.length:0,!0,!1,!1,!0,function(e){return Bn(e.expression)})
_&&(u+=Ut(s,u>0)),Gt(i,u>0),Mr(),Fr(),Rr("], "),zt(t,i),Rr(", "),Q(i.name),y>0&&Rr(142!==i.kind?", null":", void 0"),Rr(")"),jr(o||_),Rr(";"),Fr()}}}}function Ut(t,n){var r=0
if(t)for(var a=0,i=0,o=t.parameters;i<o.length;i++){var s=o[i]
if(e.nodeIsDecorated(s)){var c=s.decorators
r+=M(c,0,c.length,!0,!1,n,!0,function(e){Rr("__param("+a+", "),Bn(e.expression),Rr(")")}),n=!0}a++}return r}function qt(t){switch(t.kind){case 217:return void Rr("Function")
case 142:case 139:case 146:return void Wt(t.type)
case 147:return void Wt(e.getSetAccessorTypeAnnotationNode(t))}return e.isFunctionLike(t)?void Rr("Function"):void Rr("void 0")}function Wt(t){if(t)switch(t.kind){case 103:return void Rr("void 0")
case 161:return void Wt(t.type)
case 153:case 154:return void Rr("Function")
case 157:case 158:return void Rr("Array")
case 151:case 120:return void Rr("Boolean")
case 130:case 163:return void Rr("String")
case 128:return void Rr("Number")
case 131:return void Rr("Symbol")
case 152:return void function(t){for(var n=t.parent;e.isDeclaration(n)||e.isTypeNode(n);)n=n.parent
var a=e.cloneEntityName(t.typeName,n)
switch(r.getTypeReferenceSerializationKind(a)){case e.TypeReferenceSerializationKind.Unknown:var i=N(0)
Rr("(typeof ("),Jn(i),Rr(" = "),ke(a,!0),Rr(") === 'function' && "),Jn(i),Rr(") || Object")
break
case e.TypeReferenceSerializationKind.TypeWithConstructSignatureAndValue:ke(a,!1)
break
case e.TypeReferenceSerializationKind.VoidType:Rr("void 0")
break
case e.TypeReferenceSerializationKind.BooleanType:Rr("Boolean")
break
case e.TypeReferenceSerializationKind.NumberLikeType:Rr("Number")
break
case e.TypeReferenceSerializationKind.StringLikeType:Rr("String")
break
case e.TypeReferenceSerializationKind.ArrayLikeType:Rr("Array")
break
case e.TypeReferenceSerializationKind.ESSymbolType:Rr(2>y?"typeof Symbol === 'function' ? Symbol : Object":"Symbol")
break
case e.TypeReferenceSerializationKind.TypeWithCallSignature:Rr("Function")
break
case e.TypeReferenceSerializationKind.ObjectType:Rr("Object")}}(t)
case 155:case 156:case 159:case 160:case 117:case 162:break
default:e.Debug.fail("Cannot serialize unexpected type node.")}Rr("Object")}function Vt(t){if(t){var n=void 0
if(217===t.kind?n=e.getFirstConstructorWithBody(t):e.isFunctionLike(t)&&e.nodeIsPresent(t.body)&&(n=t),n){var r=n.parameters,a=r.length
if(a>0)for(var i=0;a>i;i++)if(i>0&&Rr(", "),r[i].dotDotDotToken){var o=r[i].type
Wt(o=157===o.kind?o.elementType:152===o.kind&&o.typeArguments&&1===o.typeArguments.length?o.typeArguments[0]:void 0)}else qt(r[i])}}}function Ht(t){return t&&e.isFunctionLike(t)&&t.type?void Wt(t.type):void Rr("void 0")}function Gt(e,t){var n=0
return g.emitDecoratorMetadata&&(function(e){switch(e.kind){case 144:case 146:case 147:case 142:return!0}return!1}(e)&&(t&&Rr(", "),Fr(),Rr("__metadata('design:type', "),qt(e),Rr(")"),n++),function(e){switch(e.kind){case 217:case 144:case 147:return!0}return!1}(e)&&((t||n)&&Rr(", "),Fr(),Rr("__metadata('design:paramtypes', ["),Vt(e),Rr("])"),n++),function(e){switch(e.kind){case 144:return!0}return!1}(e)&&((t||n)&&Rr(", "),Fr(),Rr("__metadata('design:returntype', "),Ht(e),Rr(")"),n++)),n}function Xt(t){return!e.isConst(t)||g.preserveConstEnums||g.isolatedModules}function Qt(e){var t=e.parent
Kr(e),Rr(E(t)),Rr("["),Rr(E(t)),Rr("["),Q(e.name),Rr("] = "),function(e){var t=r.getConstantValue(e)
void 0!==t?Rr(t.toString()):e.initializer?Bn(e.initializer):Rr("undefined")}(e),Rr("] = "),Q(e.name),jr(e),Rr(";")}function Yt(t){return e.isInstantiatedModule(t,g.preserveConstEnums||g.isolatedModules)}function $t(e){return 2===y&&!!(32768&r.getNodeCheckFlags(e))}function Zt(t,n,r){return!e.forEach(n,function(e){return e.kind===r&&e.pos<t.pos})}function en(t){if(!Yt(t))return Qn(t)
if(!Re(t)&&!$t(t)){var n=yt(t)
n&&!Zt(t,t.symbol&&t.symbol.declarations,221)||(Kr(t),n&&Rr("export "),Rr("var "),Bn(t.name),Rr(";"),jr(t),Fr())}if(Kr(t),Rr("(function ("),Kr(t.name),Rr(E(t)),jr(t.name),Rr(") "),222===t.body.kind){var r=gr,a=Ur,i=xr
gr=void 0,Ur=0,xr=void 0,Bn(t.body),e.Debug.assert(void 0===gr),gr=r,Ur=a,xr=i}else Rr("{"),Lr(),St(t),Fr(),Bn(t.body),Mr(),Fr(),R(16,function e(t){if(221===t.body.kind)return e(t.body)||t.body}(t).body.statements.end)
Rr(")("),2&t.flags&&!yt(t)&&(Bn(t.name),Rr(" = ")),it(t),Rr(" || ("),it(t),Rr(" = {}));"),jr(t),yt(t)||69!==t.name.kind||t.parent!==rr||(4===h&&2&t.flags&&(Fr(),Rr(ur+'("'),Ct(t),Rr('", '),Ct(t),Rr(");")),_t(t.name))}function tn(t){return sr&&e.hasProperty(sr,t.text)?'"'+sr[t.text]+'"':void 0}function nn(e){if(9===e.kind){Rr("require(")
var t=tn(e)
t?Rr(t):(Kr(e),j(e),jr(e)),R(18,e.end)}else Rr("require()")}function rn(e){if(224===e.kind)return e
var t=e.importClause
return t&&t.namedBindings&&227===t.namedBindings.kind?t.namedBindings:void 0}function an(e){return 225===e.kind&&e.importClause&&!!e.importClause.name}function on(t){e.isAliasSymbolDeclaration(t)&&r.isValueAliasDeclaration(t)&&_t(t.name),e.forEachChild(t,on)}function sn(t){if(e.contains(Dr,t)){var n=224===t.kind&&0!=(2&t.flags),r=rn(t),a=1>=y?"var ":"const "
2!==h?(Yn(t),Kr(t),r&&!an(t)?(n||Rr(a),it(r),Rr(" = ")):!t.importClause||(Rr(a),Rr(E(t)),Rr(" = ")),nn(e.getExternalModuleName(t)),r&&an(t)&&(Rr(", "),it(r),Rr(" = "),Rr(E(t))),Rr(";"),jr(t),on(t),Zn(t)):(n?(it(r),Rr(" = "),Bn(r.name),Rr(";")):r&&an(t)&&(Rr(a),it(r),Rr(" = "),Rr(E(t)),Rr(";")),on(t))}}function cn(t){if(e.isExternalModuleImportEqualsDeclaration(t))sn(t)
else if(r.isReferencedAliasDeclaration(t)||!_r&&r.isTopLevelValueImportEqualsWithEntityName(t)){Yn(t),Kr(t)
var n=yn(t,!0),a=Ie(t,!0)
n||(e.Debug.assert(!a),yt(t)?(Rr("export "),Rr("var ")):2&t.flags||Rr("var ")),a&&(Rr(ur+'("'),Jn(t.name),Rr('", ')),it(t),Rr(" = "),Bn(t.moduleReference),a&&Rr(")"),Rr(";"),jr(t),on(t),Zn(t)}}function _n(t){if(e.Debug.assert(4!==h),5!==h){if(t.moduleSpecifier&&(!t.exportClause||r.isValueAliasDeclaration(t))){Kr(t)
var n=E(t)
if(t.exportClause){2!==h&&(Rr("var "),Rr(n),Rr(" = "),nn(e.getExternalModuleName(t)),Rr(";"))
for(var a=0,i=t.exportClause.elements;a<i.length;a++){var o=i[a]
r.isValueAliasDeclaration(o)&&(Fr(),Kr(o),at(o),Rr("."),zn(o.name),Rr(" = "),Rr(n),Rr("."),zn(o.propertyName||o.name),Rr(";"),jr(o))}}else Er&&r.moduleExportsSomeValue(t.moduleSpecifier)&&(Fr(),Rr("__export("),2!==h?nn(e.getExternalModuleName(t)):Rr(n),Rr(");"))
jr(t)}}else t.exportClause&&!r.isValueAliasDeclaration(t)||(Rr("export "),t.exportClause?(Rr("{ "),un(t.exportClause.elements,r.isValueAliasDeclaration),Rr(" }")):Rr("*"),t.moduleSpecifier&&(Rr(" from "),Bn(t.moduleSpecifier)),Rr(";"))}function un(t,n){e.Debug.assert(5===h)
for(var r=!1,a=0,i=t;a<i.length;a++){var o=i[a]
n(o)&&(r&&Rr(", "),o.propertyName&&(Bn(o.propertyName),Rr(" as ")),Bn(o.name),r=!0)}}function ln(e){Dr=[],Sr={},Tr=void 0,Er=!1
for(var t=0,n=e.statements;t<n.length;t++){var a=n[t]
switch(a.kind){case 225:a.importClause&&!r.isReferencedAliasDeclaration(a.importClause,!0)||Dr.push(a)
break
case 224:235===a.moduleReference.kind&&r.isReferencedAliasDeclaration(a)&&Dr.push(a)
break
case 231:if(a.moduleSpecifier)a.exportClause?r.isValueAliasDeclaration(a)&&Dr.push(a):r.moduleExportsSomeValue(a.moduleSpecifier)&&(Dr.push(a),Er=!0)
else for(var i=0,o=a.exportClause.elements;i<o.length;i++){var s=o[i],c=(s.propertyName||s.name).text;(Sr[c]||(Sr[c]=[])).push(s)}break
case 230:a.isExportEquals&&!Tr&&(Tr=a)}}}function dn(){Er&&(Fr(),Rr("function __export(m) {"),Lr(),Fr(),Rr("for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];"),Mr(),Fr(),Rr("}"))}function pn(t){var n=rn(t)
return n&&!an(t)?e.getTextOfNodeFromSourceText(ar,n.name):225===t.kind&&t.importClause?E(t):231===t.kind&&t.moduleSpecifier?E(t):void 0}function fn(t,i){if(i){var o=n(a,r,t)
if(o)return'"'+o+'"'}var s=e.getExternalModuleName(t)
return 9===s.kind?tn(s)||J(s):void 0}function mn(t){function n(e){var t=D("exportStar")
return Fr(),Rr("function "+t+"(m) {"),Lr(),Fr(),Rr("var exports = {};"),Fr(),Rr("for(var n in m) {"),Lr(),Fr(),Rr('if (n !== "default"'),e&&Rr("&& !"+e+".hasOwnProperty(n)"),Rr(") exports[n] = m[n];"),Mr(),Fr(),Rr("}"),Fr(),Rr(ur+"(exports);"),Mr(),Fr(),Rr("}"),t}function r(e){69!==e.kind&&512&e.flags||(c?Rr(","):c=!0,Fr(),Rr("'"),69===e.kind?zn(e):Ct(e),Rr("': true"))}if(Er){if(!t&&e.isEmpty(Sr)){for(var a=!1,i=0,o=Dr;i<o.length;i++)if(231===(m=o[i]).kind&&m.exportClause){a=!0
break}if(!a)return n(void 0)}var s=D("exportedNames")
Fr(),Rr("var "+s+" = {"),Lr()
var c=!1
if(t)for(var _=0;_<t.length;_++)r(t[_])
if(Sr)for(var u in Sr)for(var l=0,d=Sr[u];l<d.length;l++)r(d[l].name)
for(var p=0,f=Dr;p<f.length;p++){var m
if(231===(m=f[p]).kind){var g=m
if(g.exportClause)for(var y=0,h=g.exportClause.elements;y<h.length;y++){var v=h[y]
r(v.name||v.propertyName)}}}return Mr(),Fr(),Rr("};"),n(s)}}function gn(t){var n,a,i
if(function t(i){if(!(4&i.flags)){if(216===i.kind)return a||(a=[]),void a.push(i)
if(217===i.kind)return n||(n=[]),void n.push(i)
if(220===i.kind)return void(Xt(i)&&(n||(n=[]),n.push(i)))
if(221===i.kind)return void(Yt(i)&&(n||(n=[]),n.push(i)))
if(214!==i.kind&&166!==i.kind)return e.isInternalModuleImportEqualsDeclaration(i)&&r.isValueAliasDeclaration(i)?(n||(n=[]),void n.push(i.name)):e.isBindingPattern(i)?void e.forEach(i.elements,t):void(e.isDeclaration(i)||e.forEachChild(i,t))
if(yn(i,!1)){var o=i.name
69===o.kind?(n||(n=[]),n.push(o)):e.forEachChild(o,t)}}}(t),n){Fr(),Rr("var ")
for(var o={},s=0;s<n.length;s++){var c=n[s],_=69===c.kind?c:c.name
if(_){var u=e.unescapeIdentifier(_.text)
if(e.hasProperty(o,u))continue
o[u]=u}0!==s&&Rr(", "),217===c.kind||221===c.kind||220===c.kind?Ct(c):Bn(c),2&e.getCombinedNodeFlags(69===c.kind?c.parent:c)&&(i||(i=[]),i.push(c))}Rr(";")}if(a)for(var l=0,d=a;l<d.length;l++){var p=d[l]
Fr(),Bn(p),2&p.flags&&(i||(i=[]),i.push(p))}return i}function yn(t,n){return!(n&&!Re(t)||0!=(24576&e.getCombinedNodeFlags(t))&&251!==e.getEnclosingBlockScopeContainer(t).kind)}function hn(){return 4===h&&_r}function vn(e,t,n){(function(){if(0!==Dr.length){Fr()
for(var e=!1,t=0,n=Dr;t<n.length;t++){var r=n[t]
231===r.kind||225===r.kind&&!r.importClause||(e?Rr(", "):(Rr("var "),e=!0),Rr(pn(r)))}e&&Rr(";")}})(),Fr()
var r=mn(gn(e))
Fr(),Rr("return {"),Lr(),Fr(),kn(r,t),Fr(),bn(e,n),Mr(),Fr(),Rr("}"),O(!0)}function kn(t,n){Rr("setters:[")
for(var r=0;r<n.length;r++){0!==r&&Rr(","),Fr(),Lr()
var a=n[r],i=D(e.forEach(a,pn)||"")
Rr("function ("+i+") {"),Lr()
for(var o=0,s=a;o<s.length;o++){var c=s[o],_=pn(c)||""
switch(c.kind){case 225:if(!c.importClause)break
case 224:e.Debug.assert(""!==_),Fr(),Rr(_+" = "+i+";"),Fr()
break
case 231:if(e.Debug.assert(""!==_),c.exportClause){Fr(),Rr(ur+"({"),Fr(),Lr()
for(var u=0,l=c.exportClause.elements.length;l>u;u++){0!==u&&(Rr(","),Fr())
var d=c.exportClause.elements[u]
Rr('"'),zn(d.name),Rr('": '+i+'["'),zn(d.propertyName||d.name),Rr('"]')}Mr(),Fr(),Rr("});")}else Fr(),Rr(t+"("+i+");")
Fr()}}Mr(),Rr("}"),Mr()}Rr("],")}function bn(t,n){Rr("execute: function() {"),Lr(),Fr()
for(var r=n;r<t.statements.length;r++){var a=t.statements[r]
switch(a.kind){case 216:case 225:continue
case 231:if(!a.moduleSpecifier)for(var i=0,o=a.exportClause.elements;i<o.length;i++)ut(o[i])
continue
case 224:if(!e.isInternalModuleImportEqualsDeclaration(a))continue
default:Fr(),Bn(a)}}Mr(),Fr(),Rr("}")}function xn(e,n){var r=e.moduleName;(r||n&&(r=t(a,e)))&&Rr('"'+r+'", ')}function Cn(t,n){ln(t),e.Debug.assert(!ur),ur=D("exports"),lr=D("context"),Fr(),Rr("System.register("),xn(t,n),Rr("[")
for(var r={},a=[],i=0;i<Dr.length;i++){var o=fn(Dr[i],n)
if(void 0!==o){var s=o.substr(1,o.length-2)
e.hasProperty(r,s)?a[r[s]].push(Dr[i]):(r[s]=a.length,a.push([Dr[i]]),0!==i&&Rr(", "),Rr(o))}}Rr("], function("+ur+", "+lr+") {"),Fr(),Lr()
var c=In(t.statements,!0,!g.noImplicitUseStrict)
Fr(),Rr("var __moduleName = "+lr+" && "+lr+".id;"),Fr(),Ln(t),St(t),vn(t,a,c),Mr(),Fr(),Rr("});")}function Dn(e,t,n){for(var r=[],a=[],i=[],o=0,s=e.amdDependencies;o<s.length;o++){var c=s[o]
c.name?(r.push('"'+c.path+'"'),i.push(c.name)):a.push('"'+c.path+'"')}for(var _=0,u=Dr;_<u.length;_++){var l=u[_],d=fn(l,n),p=pn(l)
t&&p?(r.push(d),i.push(p)):a.push(d)}return{aliasedModuleNames:r,unaliasedModuleNames:a,importAliasNames:i}}function Sn(e){var t=e.aliasedModuleNames,n=e.unaliasedModuleNames
Rr('["require", "exports"'),t.length&&(Rr(", "),Rr(t.join(", "))),n.length&&(Rr(", "),Rr(n.join(", "))),Rr("]")}function Tn(e){var t=e.importAliasNames
Rr("function (require, exports"),t.length&&(Rr(", "),Rr(t.join(", "))),Rr(") {")}function En(e,t){Ln(e),ln(e),Fr(),Rr("define("),xn(e,t),function(e,t,n){var r=Dn(e,t,n)
Sn(r),Rr(", "),Tn(r)}(e,!0,t),Lr()
var n=In(e.statements,!0,!g.noImplicitUseStrict)
dn(),St(e),K(e.statements,n),O(!0),wn(!0),Mr(),Fr(),Rr("});")}function wn(e){Tr&&r.isValueAliasDeclaration(Tr)&&(Fr(),Kr(Tr),Rr(e?"return ":"module.exports = "),Bn(Tr.expression),Rr(";"),jr(Tr))}function An(t){for(var n=void 0,r=e.getTextOfNode(t,!0),a=0,i=-1,s=0;s<r.length;s++){var c=r.charCodeAt(s)
if(e.isLineBreak(c)){if(-1!==a&&i-a+1>0){var _=r.substr(a,i-a+1)
n=(n?n+"\" + ' ' + \"":"")+e.escapeString(_)}a=-1}else e.isWhiteSpace(c)||(i=s,-1===a&&(a=s))}return-1!==a&&(_=r.substr(a),n=(n?n+"\" + ' ' + \"":"")+e.escapeString(_)),n&&(n=n.replace(/&(\w+);/g,function(e,t){if(void 0!==o[t]){var n=String.fromCharCode(o[t])
return'"'===n?'\\"':n}return e})),n}function Pn(t){switch(g.jsx){case 2:var n=An(t)
return void 0===n||0===n.length?void 0:n
case 1:default:return e.getTextOfNode(t,!0)}}function Nn(t){switch(g.jsx){case 2:Rr('"'),Rr(An(t)),Rr('"')
break
case 1:default:Or.writeLiteral(e.getTextOfNode(t,!0))}}function On(e){return!!e.expression.text.match(/use strict/)}function Rn(e,t){t&&(e&&Fr(),Rr('"use strict";'))}function In(t,n,r){for(var a=!1,i=0;i<t.length;i++){if(!e.isPrologueDirective(t[i]))return Rn(n||i>0,!a&&r),i
On(t[i])&&(a=!0),(n||i>0)&&Fr(),Bn(t[i])}return Rn(n,!a&&r),t.length}function Fn(e){for(var t=e.split(/\r\n|\r|\n/g),n=0;n<t.length;n++){var r=t[n]
r.length&&(Fr(),Rr(r))}}function Ln(e){g.noEmitHelpers||(2>y&&!yr&&4194304&e.flags&&(Fn(u),yr=!0),1!==g.jsx&&!hr&&1073741824&e.flags&&(Fn(l),hr=!0),!vr&&8388608&e.flags&&(Fn(d),g.emitDecoratorMetadata&&Fn(p),vr=!0),!kr&&16777216&e.flags&&(Fn(f),kr=!0),!br&&33554432&e.flags&&(Fn(m),br=!0))}function Mn(t){if(Fr(),function(){var t=e.getShebang(ar)
t&&(Rr(t),Fr())}(),tr(t),e.isExternalModule(t)||g.isolatedModules)Ar||!e.isExternalModule(t)&&g.isolatedModules?(Vr[h]||Vr[1])(t):Hr[h](t,!0)
else{var n=In(t.statements,!1)
Dr=void 0,Sr=void 0,Tr=void 0,Er=!1,Ln(t),St(t),K(t.statements,n),O(!0)}Yn(t.endOfFileToken)}function Bn(e){Kn(e,jn)}function zn(e){Kn(e,Jn)}function Kn(e,t){if(e){if(4&e.flags)return Qn(e)
if(qn(e))return Jn(e)
var n=Wn(e)
n&&Yn(e),t(e),n&&Zn(e)}}function jn(e){e&&(Kr(e),Jn(e),jr(e))}function Jn(e){e&&function(e){switch(e.kind){case 69:return Z(e)
case 139:return vt(e)
case 144:case 143:return function(e){y>=2&&e.asteriskToken&&Rr("*"),Bn(e.name),2>y&&Rr(": function "),At(e)}(e)
case 146:case 147:return function(e){Rr(146===e.kind?"get ":"set "),Bn(e.name),At(e)}(e)
case 97:return ee(e)
case 95:return te(e)
case 93:return Rr("null")
case 99:return Rr("true")
case 84:return Rr("false")
case 8:case 9:case 10:case 11:case 12:case 13:case 14:return j(e)
case 186:return H(e)
case 193:return function(e){Bn(e.expression),Bn(e.literal)}(e)
case 236:case 237:return function(e){switch(g.jsx){case 2:G(e)
break
case 1:default:X(e)}}(e)
case 239:return Nn(e)
case 243:return function(e){if(e.expression)switch(g.jsx){case 1:default:Rr("{"),Bn(e.expression),Rr("}")
break
case 2:Bn(e.expression)}}(e)
case 136:return function(e){Bn(e.left),Rr("."),Bn(e.right)}(e)
case 164:return function(e){Rr("{ ")
var t=e.elements
M(t,0,t.length,!1,t.hasTrailingComma),Rr(" }")}(e)
case 165:return function(e){Rr("[")
var t=e.elements
M(t,0,t.length,!1,t.hasTrailingComma),Rr("]")}(e)
case 166:return ne(e)
case 167:return ce(e)
case 168:return function(e){var t=e.properties
if(2>y){for(var n=t.length,r=0,a=t.length;a>r;r++)if(137===t[r].name.kind){n=r
break}if(n!==t.length)return void ue(e,n)}_e(e,t.length)}(e)
case 248:return function(e){Bn(e.name),Rr(": "),er(e.initializer.pos),Bn(e.initializer)}(e)
case 249:return me(e)
case 137:return fe(e)
case 169:return ve(e)
case 170:return function(e){if(!ge(e)){if(2===y&&95===e.expression.kind&&Ce(e))return void De(e.expression,e.argumentExpression)
Bn(e.expression),Rr("["),Bn(e.argumentExpression),Rr("]")}}(e)
case 171:return Se(e)
case 172:return function(e){if(Rr("new "),1===y&&e.arguments&&be(e.arguments)){Rr("(")
var t=xe(e.expression)
Rr(".bind.apply("),Bn(t),Rr(", [void 0].concat("),oe(e.arguments,!1,!1,!1,!1),Rr(")))"),Rr("()")}else Bn(e.expression),e.arguments&&(Rr("("),B(e.arguments),Rr(")"))}(e)
case 173:return function(e){y>=2?(Bn(e.tag),Rr(" "),Bn(e.template)):V(e)}(e)
case 174:case 192:return Bn(e.expression)
case 175:return Te(e)
case 216:case 176:case 177:return Dt(e)
case 178:return Ee(e)
case 179:return Ae(e)
case 180:return we(e)
case 181:return ae(e)
case 182:return Ne(e)
case 183:return Oe(e)
case 184:return Fe(e)
case 185:return function(e){Bn(e.condition)
var t=he(e,e.condition,e.questionToken," ")
Rr("?")
var n=he(e,e.questionToken,e.whenTrue," ")
Bn(e.whenTrue),Le(t,n)
var r=he(e,e.whenTrue,e.colonToken," ")
Rr(":")
var a=he(e,e.colonToken,e.whenFalse," ")
Bn(e.whenFalse),Le(r,a)}(e)
case 188:return function(e){Rr("..."),Bn(e.expression)}(e)
case 187:return re(e)
case 190:return
case 195:case 222:return Me(e)
case 196:return ht(e)
case 197:return Rr(";")
case 198:return function(e){F(e.expression,177===e.expression.kind),Rr(";")}(e)
case 199:return function(e){var t=R(88,e.pos)
Rr(" "),t=R(17,t),Bn(e.expression),R(18,e.expression.end),Be(e.thenStatement),e.elseStatement&&(Fr(),R(80,e.thenStatement.end),199===e.elseStatement.kind?(Rr(" "),Bn(e.elseStatement)):Be(e.elseStatement))}(e)
case 200:return function(e){qe(e,ze)}(e)
case 201:return function(e){qe(e,Ke)}(e)
case 202:return function(e){qe(e,Xe)}(e)
case 204:case 203:return function(e){2>y&&204===e.kind?qe(e,Ye):qe(e,Qe)}(e)
case 205:case 206:return function(e){if(gr){var t=206===e.kind?2:4
if(!(e.label&&gr.labels&&gr.labels[e.label.text]||!e.label&&gr.allowedNonLabeledJumps&t)){if(Rr("return "),He(gr,1,!1),e.label){var n=void 0
206===e.kind?(n="break-"+e.label.text,c(gr,!0,e.label.text,n)):(n="continue-"+e.label.text,c(gr,!1,e.label.text,n)),Rr('"'+n+'";')}else 206===e.kind?(gr.nonLocalJumps|=2,Rr('"break";')):(gr.nonLocalJumps|=4,Rr('"continue";'))
return}}R(206===e.kind?70:75,e.pos),I(" ",e.label),Rr(";")}(e)
case 207:return function(e){return gr?(gr.nonLocalJumps|=8,Rr("return { value: "),e.expression?Bn(e.expression):Rr("void 0"),void Rr(" };")):(R(94,e.pos),I(" ",e.expression),void Rr(";"))}(e)
case 208:return function(e){Rr("with ("),Bn(e.expression),Rr(")"),Be(e.statement)}(e)
case 209:return $e(e)
case 244:case 245:return function(e){244===e.kind?(Rr("case "),Bn(e.expression),Rr(":")):Rr("default:"),1===e.statements.length&&Ze(e,e.statements[0])?(Rr(" "),Bn(e.statements[0])):(Lr(),z(e.statements),Mr())}(e)
case 210:return nt(e)
case 211:return function(e){Rr("throw "),Bn(e.expression),Rr(";")}(e)
case 212:return function(e){Rr("try "),Bn(e.tryBlock),Bn(e.catchClause),e.finallyBlock&&(Fr(),Rr("finally "),Bn(e.finallyBlock))}(e)
case 247:return function(e){Fr()
var t=R(72,e.pos)
Rr(" "),R(17,t),Bn(e.variableDeclaration),R(18,e.variableDeclaration?e.variableDeclaration.end:t),Rr(" "),Me(e.block)}(e)
case 213:return function(e){R(76,e.pos),Rr(";")}(e)
case 214:return mt(e)
case 189:case 217:return function(e){return Lt(e)}(e)
case 218:return function(e){Qn(e)}(e)
case 220:return function(e){if(Xt(e)){if(!Re(e)){var t=yt(e);(!(2&e.flags)||t&&Zt(e,e.symbol&&e.symbol.declarations,220))&&(Kr(e),t&&Rr("export "),Rr("var "),Bn(e.name),jr(e),Rr(";"))}Fr(),Kr(e),Rr("(function ("),Kr(e.name),Rr(E(e)),jr(e.name),Rr(") {"),Lr(),z(e.members),Mr(),Fr(),R(16,e.members.end),Rr(")("),it(e),Rr(" || ("),it(e),Rr(" = {}));"),jr(e),!yt(e)&&2&e.flags&&!Re(e)&&(Fr(),Kr(e),Rr("var "),Bn(e.name),Rr(" = "),it(e),jr(e),Rr(";")),5!==h&&e.parent===rr&&(4===h&&2&e.flags&&(Fr(),Rr(ur+'("'),Ct(e),Rr('", '),Ct(e),Rr(");")),_t(e.name))}}(e)
case 250:return Qt(e)
case 221:return en(e)
case 225:return function(e){if(5!==h)return sn(e)
if(e.importClause){var t=r.isReferencedAliasDeclaration(e.importClause),n=e.importClause.namedBindings&&r.isReferencedAliasDeclaration(e.importClause.namedBindings,!0);(t||n)&&(Rr("import "),Kr(e.importClause),t&&(Bn(e.importClause.name),n&&Rr(", ")),n&&(Yn(e.importClause.namedBindings),Kr(e.importClause.namedBindings),227===e.importClause.namedBindings.kind?(Rr("* as "),Bn(e.importClause.namedBindings.name)):(Rr("{ "),un(e.importClause.namedBindings.elements,r.isReferencedAliasDeclaration),Rr(" }")),jr(e.importClause.namedBindings),Zn(e.importClause.namedBindings)),jr(e.importClause),Rr(" from "),Bn(e.moduleSpecifier),Rr(";"))}else Rr("import "),Bn(e.moduleSpecifier),Rr(";")}(e)
case 224:return cn(e)
case 231:return _n(e)
case 230:return function(e){if(!e.isExportEquals&&r.isValueAliasDeclaration(e))if(5===h){Fr(),Kr(e),Rr("export default ")
var t=e.expression
Bn(t),216!==t.kind&&217!==t.kind&&Rr(";"),jr(e)}else Fr(),Kr(e),4===h?(Rr(ur+'("default",'),Bn(e.expression),Rr(")")):(st(e),at(e),Rr(0===y?'["default"] = ':".default = "),Bn(e.expression)),Rr(";"),jr(e)}(e)
case 251:Mn(e)}}(e)}function Un(t){var n=Br
Wr(e.getNullSourceMapWriter()),t(),Wr(n)}function qn(e){switch(e.kind){case 218:case 216:case 225:case 224:case 219:case 230:return!0}}function Wn(t){switch(t.kind){case 196:return function(e){if(!(2&e.flags))return!0
if(yt(e))return!0
for(var t=0,n=e.declarationList.declarations;t<n.length;t++)if(n[t].initializer)return!0
return!1}(t)
case 221:return Yt(t)
case 220:return Xt(t)}return e.Debug.assert(!qn(t)),!(195!==t.kind&&t.parent&&177===t.parent.kind&&t.parent.body===t&&g.target<=1)}function Vn(t){return void 0!==wr&&e.lastOrUndefined(wr).nodePos===t}function Hn(){var t=e.getLeadingCommentRanges(ar,e.lastOrUndefined(wr).detachedCommentEndPos)
return wr.length-1?wr.pop():wr=void 0,t}function Gn(t){if(47===ar.charCodeAt(t.pos+1)&&t.pos+2<t.end&&47===ar.charCodeAt(t.pos+2)){var n=ar.substring(t.pos,t.end)
return!(!n.match(e.fullTripleSlashReferencePathRegEx)&&!n.match(e.fullTripleSlashAMDReferencePathRegEx))}return!1}function Xn(t){return!t.parent||251!==t.parent.kind&&t.pos===t.parent.pos?void 0:Vn(t.pos)?Hn():e.getLeadingCommentRangesOfNodeFromText(t,ar)}function Qn(e){$n(e,!1)}function Yn(e){return $n(e,!0)}function $n(t,n){var r
g.removeComments||(n?r=Xn(t):0===t.pos&&(r=e.filter(Xn(t),Gn)),e.emitNewLineBeforeLeadingComments(ir,Or,t,r),e.emitComments(ar,ir,Or,r,!0,x,nr))}function Zn(t){if(!g.removeComments){var n=function(t){return!t.parent||251!==t.parent.kind&&t.end===t.parent.end?void 0:e.getTrailingCommentRanges(ar,t.end)}(t)
e.emitComments(ar,ir,Or,n,!1,x,nr)}}function er(t){if(!g.removeComments){var n=e.getTrailingCommentRanges(ar,t)
e.emitComments(ar,ir,Or,n,!0,x,nr)}}function tr(t){var n=e.emitDetachedComments(ar,ir,Or,nr,t,x,g.removeComments)
n&&(wr?wr.push(n):wr=[n])}function nr(t,n,r,a,i){Jr(a.pos),e.writeCommentRange(t,n,r,a,i),Jr(a.end)}var rr,ar,ir,or,sr,cr,_r,ur,lr,dr,pr,fr,mr,gr,yr,hr,vr,kr,br,xr,Cr,Dr,Sr,Tr,Er,wr,Ar,Pr,Nr,Or=e.createTextWriter(x),Rr=Or.write,Ir=Or.writeTextOfNode,Fr=Or.writeLine,Lr=Or.increaseIndent,Mr=Or.decreaseIndent,Br=g.sourceMap||g.inlineSourceMap?e.createSourceMapWriter(a,Or):e.getNullSourceMapWriter(),zr=Br.setSourceFile,Kr=Br.emitStart,jr=Br.emitEnd,Jr=Br.emitPos,Ur=0,qr=g.removeComments?function(e){}:function(t){var n
g.removeComments||(n=Vn(t)?Hn():e.getLeadingCommentRanges(ar,t),e.emitNewLineBeforeLeadingComments(ir,Or,{pos:t,end:t},n),e.emitComments(ar,ir,Or,n,!0,x,nr))},Wr=g.sourceMap||g.inlineSourceMap?function(e){Br=e,Kr=e.emitStart,jr=e.emitEnd,Jr=e.emitPos,zr=e.setSourceFile}:function(e){},Vr=((Pr={})[5]=function(e){Dr=void 0,Sr=void 0,Tr=void 0,Er=!1
var t=In(e.statements,!1)
Ln(e),St(e),K(e.statements,t),O(!0)},Pr[2]=En,Pr[4]=Cn,Pr[3]=function(e){Ln(e),ln(e)
var t=Dn(e,!1)
Fn("(function (factory) {\n    if (typeof module === 'object' && typeof module.exports === 'object') {\n        var v = factory(require, exports); if (v !== undefined) module.exports = v;\n    }\n    else if (typeof define === 'function' && define.amd) {\n        define("),Sn(t),Rr(", factory);"),Fn("    }\n})("),Tn(t),Lr()
var n=In(e.statements,!0,!g.noImplicitUseStrict)
dn(),St(e),K(e.statements,n),O(!0),wn(!0),Mr(),Fr(),Rr("});")},Pr[1]=function(e){var t=In(e.statements,!1,!g.noImplicitUseStrict)
Ln(e),ln(e),dn(),St(e),K(e.statements,t),O(!0),wn(!1)},Pr),Hr=((Nr={})[5]=function(){},Nr[2]=En,Nr[4]=Cn,Nr[3]=function(){},Nr[1]=function(){},Nr)
return function(t,n,r,a){Br.initialize(t,n,r,a),dr={},pr=[],mr=[],Ar=!a,a&&h&&e.forEach(r,Ln),e.forEach(r,i),Fr()
var o=Br.getSourceMappingURL()
o&&Rr("//# sourceMappingURL="+o),w(Or.getText(),t,n,g.emitBOM),Br.reset(),Or.reset(),rr=void 0,ar=void 0,ir=void 0,ur=void 0,lr=void 0,dr=void 0,pr=void 0,mr=void 0,fr=void 0,gr=void 0,yr=!1,vr=!1,kr=!1,br=!1,hr=!1,Ur=0,xr=void 0,Cr=void 0,Dr=void 0,Sr=void 0,Tr=void 0,Er=void 0,wr=void 0,cr=!1,sr=void 0,_r=!1}}()
return e.forEachExpectedEmitFile(a,function(t,n,i){var o=t.jsFilePath,s=t.sourceMapFilePath,c=t.declarationFilePath
a.isEmitBlocked(o)||g.noEmit?b=!0:C(o,s,n,i),c&&(b=e.writeDeclarationFile(c,n,i,a,r,k)||b)},i),{emitSkipped:b,diagnostics:k.getDiagnostics(),sourceMaps:v}}}(ts||(ts={})),function(e){function t(t,n){var r=e.getDirectoryPath(n),a=e.isRootedDiskPath(t)?t:e.combinePaths(r,t)
return e.normalizePath(a)}function n(t,n,a,i){switch(void 0!==a.moduleResolution?a.moduleResolution:1===e.getEmitModuleKind(a)?2:1){case 2:return r(t,n,a,i)
case 1:return c(t,n,a,i)}}function r(t,n,r,a){var c=e.getDirectoryPath(n),_=e.getSupportedExtensions(r)
if(0!==e.getRootLength(t)||function(e){var t=e.lastIndexOf("./",1)
return 0===t||1===t&&46===e.charCodeAt(0)}(t)){var u=[],l=e.normalizePath(e.combinePaths(c,t)),d=i(_,l,u,!1,a)
return d?{resolvedModule:{resolvedFileName:d},failedLookupLocations:u}:(d=o(_,l,u,!1,a))?{resolvedModule:{resolvedFileName:d},failedLookupLocations:u}:{resolvedModule:void 0,failedLookupLocations:u}}return s(t,c,a)}function a(e,t){return!t.directoryExists||t.directoryExists(e)}function i(t,n,r,a,i){return e.forEach(t,function(t){var o=e.fileExtensionIs(n,t)?n:n+t
return!a&&i.fileExists(o)?o:void r.push(o)})}function o(t,n,r,o,s){var c=e.combinePaths(n,"package.json"),_=!o&&a(n,s)
if(_&&s.fileExists(c)){var u=void 0
try{var l=s.readFile(c)
u=l?JSON.parse(l):{typings:void 0}}catch(e){u={typings:void 0}}if("string"==typeof u.typings){var d=e.normalizePath(e.combinePaths(n,u.typings)),p=i(t,d,r,!a(e.getDirectoryPath(d),s),s)
if(p)return p}}else r.push(c)
return i(t,e.combinePaths(n,"index"),r,!_,s)}function s(t,n,r){var s=[]
for(n=e.normalizeSlashes(n);;){if("node_modules"!==e.getBaseFileName(n)){var c=e.combinePaths(n,"node_modules"),_=a(c,r),u=e.normalizePath(e.combinePaths(c,t)),l=i(e.supportedTypeScriptExtensions,u,s,!_,r)
if(l)return{resolvedModule:{resolvedFileName:l,isExternalLibraryImport:!0},failedLookupLocations:s}
if(l=o(e.supportedTypeScriptExtensions,u,s,!_,r))return{resolvedModule:{resolvedFileName:l,isExternalLibraryImport:!0},failedLookupLocations:s}}var d=e.getDirectoryPath(n)
if(d===n)break
n=d}return{resolvedModule:void 0,failedLookupLocations:s}}function c(t,n,r,a){if(-1!=t.indexOf("!"))return{resolvedModule:void 0,failedLookupLocations:[]}
for(var i,o,s=e.getDirectoryPath(n),c=[],_=e.getSupportedExtensions(r);i=e.normalizePath(e.combinePaths(s,t)),!(o=e.forEach(_,function(e){if(".tsx"!==e||r.jsx){var t=i+e
return a.fileExists(t)?t:void c.push(t)}}));){var u=e.getDirectoryPath(s)
if(u===s)break
s=u}return o?{resolvedModule:{resolvedFileName:o},failedLookupLocations:c}:{resolvedModule:void 0,failedLookupLocations:c}}function _(t,n){function r(t){t.length>e.getRootLength(t)&&!function(t){return!!e.hasProperty(a,t)||!!e.sys.directoryExists(t)&&(a[t]=!0,!0)}(t)&&(r(e.getDirectoryPath(t)),e.sys.createDirectory(t))}var a={},i=-2147024809,o=e.getNewLineCharacter(t)
return{getSourceFile:function(r,a,o){var s
try{var c=(new Date).getTime()
s=e.sys.readFile(r,t.charset),e.ioReadTime+=(new Date).getTime()-c}catch(t){o&&o(t.number===i?e.createCompilerDiagnostic(e.Diagnostics.Unsupported_file_encoding).messageText:t.message),s=""}return void 0!==s?e.createSourceFile(r,s,a,n):void 0},getDefaultLibFileName:function(t){return e.combinePaths(e.getDirectoryPath(e.normalizePath(e.sys.getExecutingFilePath())),e.getDefaultLibFileName(t))},writeFile:function(t,n,a,i){try{var o=(new Date).getTime()
r(e.getDirectoryPath(e.normalizePath(t))),e.sys.writeFile(t,n,a),e.ioWriteTime+=(new Date).getTime()-o}catch(e){i&&i(e.message)}},getCurrentDirectory:e.memoize(function(){return e.sys.getCurrentDirectory()}),useCaseSensitiveFileNames:function(){return e.sys.useCaseSensitiveFileNames},getCanonicalFileName:function(t){return e.sys.useCaseSensitiveFileNames?t:t.toLowerCase()},getNewLine:function(){return o},fileExists:function(t){return e.sys.fileExists(t)},readFile:function(t){return e.sys.readFile(t)},directoryExists:function(t){return e.sys.directoryExists(t)}}}e.programTime=0,e.emitTime=0,e.ioReadTime=0,e.ioWriteTime=0,e.maxProgramSizeForNonTsFiles=20971520
var u=[]
e.version="1.8.10",e.findConfigFile=function(t,n){for(var r="tsconfig.json";;){if(n(r))return r
var a=e.getDirectoryPath(t)
if(a===t)break
t=a,r="../"+r}},e.resolveTripleslashReference=t,e.resolveModuleName=n,e.nodeModuleNameResolver=r,e.directoryProbablyExists=a,e.classicNameResolver=c,e.defaultInitCompilerOptions={module:1,target:1,noImplicitAny:!1,sourceMap:!1},e.createCompilerHost=_,e.getPreEmitDiagnostics=function(t,n,r){var a=t.getOptionsDiagnostics(r).concat(t.getSyntacticDiagnostics(n,r),t.getGlobalDiagnostics(r),t.getSemanticDiagnostics(n,r))
return t.getCompilerOptions().declaration&&(a=a.concat(t.getDeclarationDiagnostics(n,r))),e.sortAndDeduplicateDiagnostics(a)},e.flattenDiagnosticMessageText=function(e,t){if("string"==typeof e)return e
for(var n=e,r="",a=0;n;){if(a){r+=t
for(var i=0;a>i;i++)r+="  "}r+=n.messageText,a++,n=n.next}return r},e.createProgram=function(r,a,i,o){function s(){return!a.disableSizeLimit&&U===J}function c(){return void 0===F&&(F=a.rootDir&&function(t,n){var r=!0
if(t)for(var o=i.getCanonicalFileName(e.getNormalizedAbsolutePath(n,G)),s=0,c=t;s<c.length;s++){var _=c[s]
if(!e.isDeclarationFile(_)){var u=i.getCanonicalFileName(e.getNormalizedAbsolutePath(_.fileName,G))
0!==u.indexOf(o)&&(j.add(e.createCompilerDiagnostic(e.Diagnostics.File_0_is_not_under_rootDir_1_rootDir_is_expected_to_contain_all_source_files,_.fileName,a.rootDir)),r=!1)}}return r}(z,a.rootDir)?e.getNormalizedAbsolutePath(a.rootDir,G):e.forEach(z,function(n){if(!e.isDeclarationFile(n)){var r=e.getNormalizedPathComponents(n.fileName,G)
if(r.pop(),!t)return void(t=r)
for(var a=0,i=Math.min(t.length,r.length);i>a;a++)if(O(t[a])!==O(r[a])){if(0===a)return!0
t.length=a
break}r.length<t.length&&(t.length=r.length)}})?"":t?e.getNormalizedPathFromPathComponents(t):G)&&F[F.length-1]!==e.directorySeparator&&(F+=e.directorySeparator),F
var t}function l(e){return{getCanonicalFileName:O,getCommonSourceDirectory:I.getCommonSourceDirectory,getCompilerOptions:I.getCompilerOptions,getCurrentDirectory:function(){return G},getNewLine:function(){return i.getNewLine()},getSourceFile:I.getSourceFile,getSourceFiles:I.getSourceFiles,writeFile:e||function(e,t,n,r){return i.writeFile(e,t,n,r)},isEmitBlocked:f}}function d(){return L||(L=e.createTypeChecker(I,!0))}function p(){return M||(M=e.createTypeChecker(I,!1))}function f(t){return H.contains(e.toPath(t,G,O))}function m(t,n,r,i){if(a.noEmitOnError){var o=t.getOptionsDiagnostics(i).concat(t.getSyntacticDiagnostics(n,i),t.getGlobalDiagnostics(i),t.getSemanticDiagnostics(n,i)),s=[]
if(0===o.length&&t.getCompilerOptions().declaration&&(s=t.getDeclarationDiagnostics(void 0,i)),o.length>0||s.length>0)return{diagnostics:s,sourceMaps:void 0,emitSkipped:!0}}var c=d().getEmitResolver(a.outFile||a.out?void 0:n),_=(new Date).getTime(),u=e.emitFiles(c,l(r),n)
return e.emitTime+=(new Date).getTime()-_,u}function g(t,n,r){if(t)return n(t,r)
var a=[]
return e.forEach(I.getSourceFiles(),function(t){r&&r.throwIfCancellationRequested(),e.addRange(a,n(t,r))}),e.sortAndDeduplicateDiagnostics(a)}function y(e,t){return e.parseDiagnostics}function h(t){try{return t()}catch(t){throw t instanceof e.OperationCanceledException&&(M=void 0,L=void 0),t}}function v(t,n){return h(function(){var r=d()
e.Debug.assert(!!t.bindDiagnostics)
var a=t.bindDiagnostics,i=e.isSourceFileJavaScript(t)?k(t):r.getDiagnostics(t,n),o=K.getDiagnostics(t.fileName),s=j.getDiagnostics(t.fileName)
return a.concat(i).concat(o).concat(s)})}function k(t,n){return h(function(){function n(n){if(n){var r=n.pos
return o.push(e.createFileDiagnostic(t,r,n.end-r,e.Diagnostics.type_parameter_declarations_can_only_be_used_in_a_ts_file)),!0}return!1}function r(t){return!!t&&(o.push(e.createDiagnosticForNode(t,e.Diagnostics.types_can_only_be_used_in_a_ts_file)),!0)}function i(t){if(t)for(var n=0,r=t;n<r.length;n++){var a=r[n]
switch(a.kind){case 112:case 110:case 111:case 122:return o.push(e.createDiagnosticForNode(a,e.Diagnostics._0_can_only_be_used_in_a_ts_file,e.tokenToString(a.kind))),!0}}return!1}var o=[]
return function s(c){if(!c)return!1
switch(c.kind){case 224:return o.push(e.createDiagnosticForNode(c,e.Diagnostics.import_can_only_be_used_in_a_ts_file)),!0
case 230:if(c.isExportEquals)return o.push(e.createDiagnosticForNode(c,e.Diagnostics.export_can_only_be_used_in_a_ts_file)),!0
break
case 217:var _=c
if(i(_.modifiers)||n(_.typeParameters))return!0
break
case 246:if(106===c.token)return o.push(e.createDiagnosticForNode(c,e.Diagnostics.implements_clauses_can_only_be_used_in_a_ts_file)),!0
break
case 218:return o.push(e.createDiagnosticForNode(c,e.Diagnostics.interface_declarations_can_only_be_used_in_a_ts_file)),!0
case 221:return o.push(e.createDiagnosticForNode(c,e.Diagnostics.module_declarations_can_only_be_used_in_a_ts_file)),!0
case 219:return o.push(e.createDiagnosticForNode(c,e.Diagnostics.type_aliases_can_only_be_used_in_a_ts_file)),!0
case 144:case 143:case 145:case 146:case 147:case 176:case 216:case 177:case 216:var u=c
if(i(u.modifiers)||n(u.typeParameters)||r(u.type))return!0
break
case 196:if(i(c.modifiers))return!0
break
case 214:if(r(c.type))return!0
break
case 171:case 172:var l=c
if(l.typeArguments&&l.typeArguments.length>0){var d=l.typeArguments.pos
return o.push(e.createFileDiagnostic(t,d,l.typeArguments.end-d,e.Diagnostics.type_arguments_can_only_be_used_in_a_ts_file)),!0}break
case 139:var p=c
if(p.modifiers){var f=p.modifiers.pos
return o.push(e.createFileDiagnostic(t,f,p.modifiers.end-f,e.Diagnostics.parameter_modifiers_can_only_be_used_in_a_ts_file)),!0}if(p.questionToken)return o.push(e.createDiagnosticForNode(p.questionToken,e.Diagnostics._0_can_only_be_used_in_a_ts_file,"?")),!0
if(p.type)return o.push(e.createDiagnosticForNode(p.type,e.Diagnostics.types_can_only_be_used_in_a_ts_file)),!0
break
case 142:return o.push(e.createDiagnosticForNode(c,e.Diagnostics.property_declarations_can_only_be_used_in_a_ts_file)),!0
case 220:return o.push(e.createDiagnosticForNode(c,e.Diagnostics.enum_declarations_can_only_be_used_in_a_ts_file)),!0
case 174:var m=c
return o.push(e.createDiagnosticForNode(m.type,e.Diagnostics.type_assertion_expressions_can_only_be_used_in_a_ts_file)),!0
case 140:return a.experimentalDecorators||o.push(e.createDiagnosticForNode(c,e.Diagnostics.Experimental_support_for_decorators_is_a_feature_that_is_subject_to_change_in_a_future_release_Set_the_experimentalDecorators_option_to_remove_this_warning)),!0}return e.forEachChild(c,s)}(t),o})}function b(t,n){return h(function(){var r=d().getEmitResolver(t,n)
return e.getDeclarationDiagnostics(l(function(){}),r,t)})}function x(t,n){return e.isDeclarationFile(t)?[]:b(t,n)}function C(t,n){w(e.normalizePath(t),n)}function D(e,t){return e.fileName===t.fileName}function S(e,t){return e.text===t.text}function T(e){return e.text}function E(t){function n(r,o){switch(r.kind){case 225:case 224:case 231:var c=e.getExternalModuleName(r)
if(!c||9!==c.kind)break
if(!c.text)break
o&&e.isExternalModuleNameRelative(c.text)||(a||(a=[])).push(c)
break
case 221:if(e.isAmbientModule(r)&&(o||4&r.flags||e.isDeclarationFile(t))){var _=r.name
if(s||o&&!e.isExternalModuleNameRelative(_.text))(i||(i=[])).push(_)
else if(!o)for(var u=0,l=r.body.statements;u<l.length;u++)n(l[u],!0)}}}function r(t){e.isRequireCall(t,!0)?(a||(a=[])).push(t.arguments[0]):e.forEachChild(t,r)}if(!t.imports){for(var a,i,o=e.isSourceFileJavaScript(t),s=e.isExternalModule(t),c=0,_=t.statements;c<_.length;c++){var l=_[c]
n(l,!1),o&&r(l)}t.imports=a||u,t.moduleAugmentations=i||u}}function w(t,n,r,o,c){var _,u
!function(t){return e.getBaseFileName(t).indexOf(".")>=0}(t)?a.allowNonTsExtensions&&P(t,e.toPath(t,G,O),n,r,o,c)||(a.allowNonTsExtensions?(u=e.Diagnostics.File_0_not_found,_=[t]):e.forEach(W,function(a){return P(t+a,e.toPath(t+a,G,O),n,r,o,c)})||(u=e.Diagnostics.File_0_not_found,_=[t+=".ts"])):a.allowNonTsExtensions||e.forEach(W,function(n){return e.fileExtensionIs(i.getCanonicalFileName(t),n)})?P(t,e.toPath(t,G,O),n,r,o,c)?r&&i.getCanonicalFileName(t)===i.getCanonicalFileName(r.fileName)&&(u=e.Diagnostics.A_file_cannot_have_a_reference_to_itself,_=[t]):(u=e.Diagnostics.File_0_not_found,_=[t]):(u=e.Diagnostics.File_0_has_unsupported_extension_The_only_supported_extensions_are_1,_=[t,"'"+W.join("', '")+"'"]),u&&!s()&&(void 0!==r&&void 0!==c&&void 0!==o?K.add(e.createFileDiagnostic.apply(void 0,[r,o,c-o,u].concat(_))):K.add(e.createCompilerDiagnostic.apply(void 0,[u].concat(_))))}function A(t,n,r,a,i){void 0!==r&&void 0!==a&&void 0!==i?K.add(e.createFileDiagnostic(r,a,i-a,e.Diagnostics.File_name_0_differs_from_already_included_file_name_1_only_in_casing,t,n)):K.add(e.createCompilerDiagnostic(e.Diagnostics.File_name_0_differs_from_already_included_file_name_1_only_in_casing,t,n))}function P(t,n,r,o,_,u){if(Q.contains(n)){var l=Q.get(n)
return l&&a.forceConsistentCasingInFileNames&&e.getNormalizedAbsolutePath(l.fileName,G)!==e.getNormalizedAbsolutePath(t,G)&&A(t,l.fileName,o,_,u),l}var d=!e.hasTypeScriptFileExtension(t)
if(!d||!s()){var p=i.getSourceFile(t,a.target,function(n){void 0!==o&&void 0!==_&&void 0!==u?K.add(e.createFileDiagnostic(o,_,u-_,e.Diagnostics.Cannot_read_file_0_Colon_1,t,n)):K.add(e.createCompilerDiagnostic(e.Diagnostics.Cannot_read_file_0_Colon_1,t,n))})
if(d&&!a.disableSizeLimit&&p&&p.text&&(U+=p.text.length)>e.maxProgramSizeForNonTsFiles){var f=c(),m=n.substring(0,Math.max(f.length,n.indexOf(e.directorySeparator,f.length)))
return m[m.length-1]!==e.directorySeparator&&(m+=e.directorySeparator),j.add(e.createCompilerDiagnostic(e.Diagnostics.Too_many_JavaScript_files_in_the_project_Consider_specifying_the_exclude_setting_in_project_configuration_to_limit_included_source_folders_The_likely_folder_to_exclude_is_0_To_disable_the_project_size_limit_set_the_disableSizeLimit_compiler_option_to_true,m)),void(U=J)}if(Q.set(n,p),p){if(p.path=n,i.useCaseSensitiveFileNames()){var g=Y.get(n)
g?A(t,g.fileName,o,_,u):Y.set(n,p)}q=q||p.hasNoDefaultLib
e.getDirectoryPath(t)
a.noResolve||N(p),function(t,n){if(E(t),t.imports.length||t.moduleAugmentations.length){t.resolvedModules={}
for(var r=e.map(e.concatenate(t.imports,t.moduleAugmentations),T),i=X(r,e.getNormalizedAbsolutePath(t.fileName,G)),o=0;o<r.length;o++){var s=i[o]
e.setResolvedModule(t,r[o],s)
var c=s&&!a.noResolve&&o<t.imports.length
if(c){var _=P(s.resolvedFileName,e.toPath(s.resolvedFileName,G,O),!1,t,e.skipTrivia(t.text,t.imports[o].pos),t.imports[o].end)
if(_&&s.isExternalLibraryImport)if(!e.isExternalModule(_)&&_.statements.length){var u=e.getTokenPosOfNode(t.imports[o],t)
K.add(e.createFileDiagnostic(t,u,t.imports[o].end-u,e.Diagnostics.Exported_external_package_typings_file_0_is_not_a_module_Please_contact_the_package_author_to_update_the_package_definition,_.fileName))}else if(_.referencedFiles.length){var l=_.referencedFiles[0]
K.add(e.createFileDiagnostic(_,l.pos,l.end-l.pos,e.Diagnostics.Exported_external_package_typings_file_cannot_contain_tripleslash_references_Please_contact_the_package_author_to_update_the_package_definition))}}}}else t.resolvedModules=void 0}(p),r?z.unshift(p):z.push(p)}return p}}function N(n,r){e.forEach(n.referencedFiles,function(e){w(t(e.fileName,n.fileName),!1,n,e.pos,e.end)})}function O(e){return i.getCanonicalFileName(e)}function R(t,n,r){H.set(e.toPath(t,G,O),!0),j.add(e.createCompilerDiagnostic(r,t))}var I,F,L,M,B,z=[],K=e.createDiagnosticCollection(),j=e.createDiagnosticCollection(),J=-1,U=0,q=a.noLib,W=e.getSupportedExtensions(a),V=(new Date).getTime()
i=i||_(a)
var H=e.createFileMap(O),G=i.getCurrentDirectory(),X=i.resolveModuleNames?function(e,t){return i.resolveModuleNames(e,t)}:function(t,r){for(var o=[],s={},c=0,_=t;c<_.length;c++){var u=_[c],l=void 0
e.hasProperty(s,u)?l=s[u]:(l=n(u,r,a,i).resolvedModule,s[u]=l),o.push(l)}return o},Q=e.createFileMap(),Y=i.useCaseSensitiveFileNames()?e.createFileMap(function(e){return e.toLowerCase()}):void 0
if(o){var $=o.getCompilerOptions()
$.module===a.module&&$.noResolve===a.noResolve&&$.target===a.target&&$.noLib===a.noLib&&$.jsx===a.jsx&&$.allowJs===a.allowJs&&$.disableSizeLimit===a.disableSizeLimit||(o=void 0)}return function(){if(!o)return!1
e.Debug.assert(!o.structureIsReused)
var t=o.getRootFileNames()
if(!e.arrayIsEqualTo(t,r))return!1
for(var n=[],s=[],c=[],_=0,u=o.getSourceFiles();_<u.length;_++){var l=u[_],d=i.getSourceFile(l.fileName,a.target)
if(!d)return!1
if(d.path=l.path,s.push(d.path),l!==d){if(l.hasNoDefaultLib!==d.hasNoDefaultLib)return!1
if(!e.arrayIsEqualTo(l.referencedFiles,d.referencedFiles,D))return!1
if(E(d),!e.arrayIsEqualTo(l.imports,d.imports,S))return!1
if(!e.arrayIsEqualTo(l.moduleAugmentations,d.moduleAugmentations,S))return!1
if(X)for(var p=e.map(e.concatenate(d.imports,d.moduleAugmentations),T),f=X(p,e.getNormalizedAbsolutePath(d.fileName,G)),m=0;m<p.length;m++){var g=f[m],y=e.getResolvedModule(l,p[m])
if(y?!g||y.resolvedFileName!==g.resolvedFileName||!!y.isExternalLibraryImport!=!!g.isExternalLibraryImport:g)return!1}d.resolvedModules=l.resolvedModules,c.push(d)}else d=l
n.push(d)}m=0
for(var h=n.length;h>m;m++)Q.set(s[m],n[m])
z=n,K=o.getFileProcessingDiagnostics()
for(var v=0,k=c;v<k.length;v++){var b=k[v]
K.reattachFileDiagnostics(b)}return o.structureIsReused=!0,!0}()||(e.forEach(r,function(e){return C(e,!1)}),q||C(i.getDefaultLibFileName(a),!0)),o=void 0,I={getRootFileNames:function(){return r},getSourceFile:function(t){return Q.get(e.toPath(t,G,O))},getSourceFiles:function(){return z},getCompilerOptions:function(){return a},getSyntacticDiagnostics:function(e,t){return g(e,y,t)},getOptionsDiagnostics:function(){var t=[]
return e.addRange(t,K.getGlobalDiagnostics()),e.addRange(t,j.getGlobalDiagnostics()),e.sortAndDeduplicateDiagnostics(t)},getGlobalDiagnostics:function(){var t=[]
return e.addRange(t,d().getGlobalDiagnostics()),e.sortAndDeduplicateDiagnostics(t)},getSemanticDiagnostics:function(e,t){return g(e,v,t)},getDeclarationDiagnostics:function(e,t){var n=I.getCompilerOptions()
return!e||n.out||n.outFile?b(e,t):g(e,x,t)},getTypeChecker:p,getClassifiableNames:function(){if(!B){p(),B={}
for(var t=0,n=z;t<n.length;t++){var r=n[t]
e.copyMap(r.classifiableNames,B)}}return B},getDiagnosticsProducingTypeChecker:d,getCommonSourceDirectory:c,emit:function(e,t,n){var r=this
return h(function(){return m(r,e,t,n)})},getCurrentDirectory:function(){return G},getNodeCount:function(){return d().getNodeCount()},getIdentifierCount:function(){return d().getIdentifierCount()},getSymbolCount:function(){return d().getSymbolCount()},getTypeCount:function(){return d().getTypeCount()},getFileProcessingDiagnostics:function(){return K}},function(){function t(t,n){if(t){var r=e.toPath(t,G,O)
Q.contains(r)&&R(t,0,e.Diagnostics.Cannot_write_file_0_because_it_would_overwrite_input_file),n.contains(r)?R(t,0,e.Diagnostics.Cannot_write_file_0_because_it_would_be_overwritten_by_multiple_input_files):n.set(r,!0)}}a.isolatedModules&&(a.declaration&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"declaration","isolatedModules")),a.noEmitOnError&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"noEmitOnError","isolatedModules")),a.out&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"out","isolatedModules")),a.outFile&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"outFile","isolatedModules"))),a.inlineSourceMap&&(a.sourceMap&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"sourceMap","inlineSourceMap")),a.mapRoot&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"mapRoot","inlineSourceMap"))),a.inlineSources&&(a.sourceMap||a.inlineSourceMap||j.add(e.createCompilerDiagnostic(e.Diagnostics.Option_inlineSources_can_only_be_used_when_either_option_inlineSourceMap_or_option_sourceMap_is_provided)),a.sourceRoot&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"sourceRoot","inlineSources"))),a.out&&a.outFile&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"out","outFile")),a.sourceMap||!a.mapRoot&&!a.sourceRoot||(a.mapRoot&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_without_specifying_option_1,"mapRoot","sourceMap")),a.sourceRoot&&!a.inlineSourceMap&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_without_specifying_option_1,"sourceRoot","sourceMap")))
var n=a.target||0,r=a.outFile||a.out,o=e.forEach(z,function(t){return e.isExternalModule(t)?t:void 0})
if(a.isolatedModules){0===a.module&&2>n&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Option_isolatedModules_can_only_be_used_when_either_option_module_is_provided_or_option_target_is_ES2015_or_higher))
var s=e.forEach(z,function(t){return e.isExternalModule(t)||e.isDeclarationFile(t)?void 0:t})
if(s){var _=e.getErrorSpanForNode(s,s)
j.add(e.createFileDiagnostic(s,_.start,_.length,e.Diagnostics.Cannot_compile_namespaces_when_the_isolatedModules_flag_is_provided))}}else o&&2>n&&0===a.module&&(_=e.getErrorSpanForNode(o,o.externalModuleIndicator),j.add(e.createFileDiagnostic(o,_.start,_.length,e.Diagnostics.Cannot_compile_modules_unless_the_module_flag_is_provided_with_a_valid_module_type_Consider_setting_the_module_compiler_option_in_a_tsconfig_json_file)))
if(5===a.module&&2>n&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Cannot_compile_modules_into_es2015_when_targeting_ES5_or_lower)),r&&a.module&&2!==a.module&&4!==a.module&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Only_amd_and_system_modules_are_supported_alongside_0,a.out?"out":"outFile")),a.outDir||a.sourceRoot||a.mapRoot){var u=c()
a.outDir&&""===u&&e.forEach(z,function(t){return e.getRootLength(t.fileName)>1})&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Cannot_find_the_common_subdirectory_path_for_the_input_files))}if(a.noEmit?(a.out&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"noEmit","out")),a.outFile&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"noEmit","outFile")),a.outDir&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"noEmit","outDir")),a.declaration&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"noEmit","declaration"))):a.allowJs&&a.declaration&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"allowJs","declaration")),a.emitDecoratorMetadata&&!a.experimentalDecorators&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_without_specifying_option_1,"emitDecoratorMetadata","experimentalDecorators")),a.reactNamespace&&!e.isIdentifier(a.reactNamespace,n)&&j.add(e.createCompilerDiagnostic(e.Diagnostics.Invalide_value_for_reactNamespace_0_is_not_a_valid_identifier,a.reactNamespace)),!a.noEmit&&!a.suppressOutputPathCheck){var d=l(),p=e.createFileMap(i.useCaseSensitiveFileNames()?void 0:function(e){return e.toLocaleLowerCase()})
e.forEachExpectedEmitFile(d,function(e,n,r){t(e.jsFilePath,p),t(e.declarationFilePath,p)})}}(),e.programTime+=(new Date).getTime()-V,I}}(ts||(ts={})),function(e){function t(){if(i)return i
var t={},n={}
return e.forEach(e.optionDeclarations,function(e){t[e.name.toLowerCase()]=e,e.shortName&&(n[e.shortName]=e.name)}),i={optionNameMap:t,shortOptionNames:n}}function n(t,n){try{var r=function(t){for(var n,r="",a=e.createScanner(1,!1,0,t);1!==(n=a.scan());)switch(n){case 2:case 3:r+=a.getTokenText().replace(/\S/g," ")
break
default:r+=a.getTokenText()}return r}(n)
return{config:/\S/.test(r)?JSON.parse(r):{}}}catch(n){return{error:e.createCompilerDiagnostic(e.Diagnostics.Failed_to_parse_file_0_Colon_1,t,n.message)}}}function r(t,n,r){var a={},i=[]
if(r&&"jsconfig.json"===e.getBaseFileName(r)&&(a.allowJs=!0),!t)return{options:a,errors:i}
var o=e.arrayToMap(e.optionDeclarations,function(e){return e.name})
for(var s in t)if(e.hasProperty(o,s)){var c=o[s],_=c.type,u=t[s],l="string"==typeof _?_:"string"
if(typeof u===l){if("string"!=typeof _){var d=u.toLowerCase()
e.hasProperty(_,d)?u=_[d]:(i.push(e.createCompilerDiagnostic(c.error)),u=0)}c.isFilePath&&(""===(u=e.normalizePath(e.combinePaths(n,u)))&&(u=".")),a[c.name]=u}else i.push(e.createCompilerDiagnostic(e.Diagnostics.Compiler_option_0_requires_a_value_of_type_1,s,l))}else i.push(e.createCompilerDiagnostic(e.Diagnostics.Unknown_compiler_option_0,s))
return{options:a,errors:i}}function a(t,n,r,a){var i=[],o=!1
if(e.isArray(n))for(var s=0,c=n;s<c.length;s++){var _=c[s]
if("string"!=typeof _){o=!0
break}var u=a?a(_):_
i.push(u)}else o=!0
return o&&r.push(e.createCompilerDiagnostic(e.Diagnostics.Option_0_should_have_array_of_strings_as_a_value,t)),i}var i
e.optionDeclarations=[{name:"charset",type:"string"},{name:"declaration",shortName:"d",type:"boolean",description:e.Diagnostics.Generates_corresponding_d_ts_file},{name:"diagnostics",type:"boolean"},{name:"emitBOM",type:"boolean"},{name:"help",shortName:"h",type:"boolean",description:e.Diagnostics.Print_this_message},{name:"init",type:"boolean",description:e.Diagnostics.Initializes_a_TypeScript_project_and_creates_a_tsconfig_json_file},{name:"inlineSourceMap",type:"boolean"},{name:"inlineSources",type:"boolean"},{name:"jsx",type:{preserve:1,react:2},paramType:e.Diagnostics.KIND,description:e.Diagnostics.Specify_JSX_code_generation_Colon_preserve_or_react,error:e.Diagnostics.Argument_for_jsx_must_be_preserve_or_react},{name:"reactNamespace",type:"string",description:e.Diagnostics.Specifies_the_object_invoked_for_createElement_and_spread_when_targeting_react_JSX_emit},{name:"listFiles",type:"boolean"},{name:"locale",type:"string"},{name:"mapRoot",type:"string",isFilePath:!0,description:e.Diagnostics.Specifies_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations,paramType:e.Diagnostics.LOCATION},{name:"module",shortName:"m",type:{none:0,commonjs:1,amd:2,system:4,umd:3,es6:5,es2015:5},description:e.Diagnostics.Specify_module_code_generation_Colon_commonjs_amd_system_umd_or_es2015,paramType:e.Diagnostics.KIND,error:e.Diagnostics.Argument_for_module_option_must_be_commonjs_amd_system_umd_es2015_or_none},{name:"newLine",type:{crlf:0,lf:1},description:e.Diagnostics.Specifies_the_end_of_line_sequence_to_be_used_when_emitting_files_Colon_CRLF_dos_or_LF_unix,paramType:e.Diagnostics.NEWLINE,error:e.Diagnostics.Argument_for_newLine_option_must_be_CRLF_or_LF},{name:"noEmit",type:"boolean",description:e.Diagnostics.Do_not_emit_outputs},{name:"noEmitHelpers",type:"boolean"},{name:"noEmitOnError",type:"boolean",description:e.Diagnostics.Do_not_emit_outputs_if_any_errors_were_reported},{name:"noImplicitAny",type:"boolean",description:e.Diagnostics.Raise_error_on_expressions_and_declarations_with_an_implied_any_type},{name:"noLib",type:"boolean"},{name:"noResolve",type:"boolean"},{name:"skipDefaultLibCheck",type:"boolean"},{name:"out",type:"string",isFilePath:!1,paramType:e.Diagnostics.FILE},{name:"outFile",type:"string",isFilePath:!0,description:e.Diagnostics.Concatenate_and_emit_output_to_single_file,paramType:e.Diagnostics.FILE},{name:"outDir",type:"string",isFilePath:!0,description:e.Diagnostics.Redirect_output_structure_to_the_directory,paramType:e.Diagnostics.DIRECTORY},{name:"preserveConstEnums",type:"boolean",description:e.Diagnostics.Do_not_erase_const_enum_declarations_in_generated_code},{name:"pretty",paramType:e.Diagnostics.KIND,description:e.Diagnostics.Stylize_errors_and_messages_using_color_and_context_experimental,type:"boolean"},{name:"project",shortName:"p",type:"string",isFilePath:!0,description:e.Diagnostics.Compile_the_project_in_the_given_directory,paramType:e.Diagnostics.DIRECTORY},{name:"removeComments",type:"boolean",description:e.Diagnostics.Do_not_emit_comments_to_output},{name:"rootDir",type:"string",isFilePath:!0,description:e.Diagnostics.Specifies_the_root_directory_of_input_files_Use_to_control_the_output_directory_structure_with_outDir,paramType:e.Diagnostics.LOCATION},{name:"isolatedModules",type:"boolean"},{name:"sourceMap",type:"boolean",description:e.Diagnostics.Generates_corresponding_map_file},{name:"sourceRoot",type:"string",isFilePath:!0,description:e.Diagnostics.Specifies_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations,paramType:e.Diagnostics.LOCATION},{name:"suppressExcessPropertyErrors",type:"boolean",description:e.Diagnostics.Suppress_excess_property_checks_for_object_literals,experimental:!0},{name:"suppressImplicitAnyIndexErrors",type:"boolean",description:e.Diagnostics.Suppress_noImplicitAny_errors_for_indexing_objects_lacking_index_signatures},{name:"stripInternal",type:"boolean",description:e.Diagnostics.Do_not_emit_declarations_for_code_that_has_an_internal_annotation,experimental:!0},{name:"target",shortName:"t",type:{es3:0,es5:1,es6:2,es2015:2},description:e.Diagnostics.Specify_ECMAScript_target_version_Colon_ES3_default_ES5_or_ES2015_experimental,paramType:e.Diagnostics.VERSION,error:e.Diagnostics.Argument_for_target_option_must_be_ES3_ES5_or_ES2015},{name:"version",shortName:"v",type:"boolean",description:e.Diagnostics.Print_the_compiler_s_version},{name:"watch",shortName:"w",type:"boolean",description:e.Diagnostics.Watch_input_files},{name:"experimentalDecorators",type:"boolean",description:e.Diagnostics.Enables_experimental_support_for_ES7_decorators},{name:"emitDecoratorMetadata",type:"boolean",experimental:!0,description:e.Diagnostics.Enables_experimental_support_for_emitting_type_metadata_for_decorators},{name:"moduleResolution",type:{node:2,classic:1},description:e.Diagnostics.Specifies_module_resolution_strategy_Colon_node_Node_js_or_classic_TypeScript_pre_1_6,error:e.Diagnostics.Argument_for_moduleResolution_option_must_be_node_or_classic},{name:"allowUnusedLabels",type:"boolean",description:e.Diagnostics.Do_not_report_errors_on_unused_labels},{name:"noImplicitReturns",type:"boolean",description:e.Diagnostics.Report_error_when_not_all_code_paths_in_function_return_a_value},{name:"noFallthroughCasesInSwitch",type:"boolean",description:e.Diagnostics.Report_errors_for_fallthrough_cases_in_switch_statement},{name:"allowUnreachableCode",type:"boolean",description:e.Diagnostics.Do_not_report_errors_on_unreachable_code},{name:"forceConsistentCasingInFileNames",type:"boolean",description:e.Diagnostics.Disallow_inconsistently_cased_references_to_the_same_file},{name:"allowSyntheticDefaultImports",type:"boolean",description:e.Diagnostics.Allow_default_imports_from_modules_with_no_default_export_This_does_not_affect_code_emit_just_typechecking},{name:"allowJs",type:"boolean",description:e.Diagnostics.Allow_javascript_files_to_be_compiled},{name:"noImplicitUseStrict",type:"boolean",description:e.Diagnostics.Do_not_emit_use_strict_directives_in_module_output},{name:"noCustomAsyncPromise",type:"boolean",experimental:!0},{name:"disableSizeLimit",type:"boolean"}],e.getOptionNameMap=t,e.parseCommandLine=function(n,r){function a(t){for(var n=0;n<t.length;){var r=t[n]
if(n++,64===r.charCodeAt(0))i(r.slice(1))
else if(45===r.charCodeAt(0))if(r=r.slice(45===r.charCodeAt(1)?2:1).toLowerCase(),e.hasProperty(l,r)&&(r=l[r]),e.hasProperty(u,r)){var a=u[r]
switch(t[n]||"boolean"===a.type||c.push(e.createCompilerDiagnostic(e.Diagnostics.Compiler_option_0_expects_an_argument,a.name)),a.type){case"number":o[a.name]=parseInt(t[n]),n++
break
case"boolean":o[a.name]=!0
break
case"string":o[a.name]=t[n]||"",n++
break
default:var _=a.type,d=(t[n]||"").toLowerCase()
n++,e.hasProperty(_,d)?o[a.name]=_[d]:c.push(e.createCompilerDiagnostic(a.error))}}else c.push(e.createCompilerDiagnostic(e.Diagnostics.Unknown_compiler_option_0,r))
else s.push(r)}}function i(t){var n=r?r(t):e.sys.readFile(t)
if(n){for(var i=[],o=0;;){for(;o<n.length&&n.charCodeAt(o)<=32;)o++
if(o>=n.length)break
var s=o
if(34===n.charCodeAt(s)){for(o++;o<n.length&&34!==n.charCodeAt(o);)o++
o<n.length?(i.push(n.substring(s+1,o)),o++):c.push(e.createCompilerDiagnostic(e.Diagnostics.Unterminated_quoted_string_in_response_file_0,t))}else{for(;n.charCodeAt(o)>32;)o++
i.push(n.substring(s,o))}}a(i)}else c.push(e.createCompilerDiagnostic(e.Diagnostics.File_0_not_found,t))}var o={},s=[],c=[],_=t(),u=_.optionNameMap,l=_.shortOptionNames
return a(n),{options:o,fileNames:s,errors:c}},e.readConfigFile=function(t,r){var a=""
try{a=r(t)}catch(n){return{error:e.createCompilerDiagnostic(e.Diagnostics.Cannot_read_file_0_Colon_1,t,n.message)}}return n(t,a)},e.parseConfigFileTextToJson=n,e.parseJsonConfigFileContent=function(t,n,i,o,s){void 0===o&&(o={})
var c=r(t.compilerOptions,i,s),_=c.options,u=c.errors,l=e.extend(o,_)
return{options:l,fileNames:function(){var r=[]
if(e.hasProperty(t,"files"))t.files instanceof Array?r=e.map(t.files,function(t){return e.combinePaths(i,t)}):u.push(e.createCompilerDiagnostic(e.Diagnostics.Compiler_option_0_requires_a_value_of_type_1,"files","Array"))
else{var a={},o=[]
if(t.exclude instanceof Array)o=t.exclude
else{o=["node_modules","bower_components"]
var s=t.compilerOptions&&t.compilerOptions.outDir
s&&o.push(s)}o=e.map(o,e.normalizeSlashes)
var c=e.getSupportedExtensions(l)
e.Debug.assert(e.indexOf(c,".ts")<e.indexOf(c,".d.ts"),"Changed priority of extensions to pick")
for(var _=0,d=c;_<d.length;_++)for(var p=d[_],f=0,m=n.readDirectory(i,p,o);f<m.length;f++){var g=m[f]
if(!(".ts"===p&&e.fileExtensionIs(g,".d.ts")||/\.min\.js$/.test(g))){if(".d.ts"===p||l.allowJs&&e.contains(e.supportedJavascriptExtensions,p)){var y=g.substr(0,g.length-p.length)
if(e.hasProperty(a,y+".ts")||e.hasProperty(a,y+".tsx"))continue}a[g]=!0,r.push(g)}}}return r}(),typingOptions:function(){var n="jsconfig.json"===e.getBaseFileName(s)?{enableAutoDiscovery:!0,include:[],exclude:[]}:{enableAutoDiscovery:!1,include:[],exclude:[]},r=t.typingOptions
if(r)for(var i in r)"enableAutoDiscovery"===i?"boolean"==typeof r[i]?n.enableAutoDiscovery=r[i]:u.push(e.createCompilerDiagnostic(e.Diagnostics.Unknown_typing_option_0,i)):"include"===i?n.include=a(i,r[i],u):"exclude"===i?n.exclude=a(i,r[i],u):u.push(e.createCompilerDiagnostic(e.Diagnostics.Unknown_typing_option_0,i))
return n}(),errors:u}},e.convertCompilerOptionsFromJson=r}(ts||(ts={})),function(e){!function(t){t.collectElements=function(t){function n(t,n,r,a){if(t&&n&&r){var i={textSpan:e.createTextSpanFromBounds(n.pos,r.end),hintSpan:e.createTextSpanFromBounds(t.getStart(),t.end),bannerText:c,autoCollapse:a}
s.push(i)}}function r(t,n){if(t){var r={textSpan:e.createTextSpanFromBounds(t.pos,t.end),hintSpan:e.createTextSpanFromBounds(t.pos,t.end),bannerText:c,autoCollapse:n}
s.push(r)}}function a(n){var a=e.getLeadingCommentRangesOfNode(n,t)
if(a){for(var o=-1,s=-1,c=!0,_=0,u=0,l=a;u<l.length;u++){var d=l[u]
2===d.kind?(c&&(o=d.pos),c=!1,s=d.end,_++):3===d.kind&&(i(_,o,s),r(d,!1),_=0,s=-1,c=!0)}i(_,o,s)}}function i(e,t,n){e>1&&r({pos:t,end:n,kind:2},!1)}function o(t){return e.isFunctionBlock(t)&&177!==t.parent.kind}var s=[],c="...",_=0,u=20
return function r(i){if(!(_>u)){switch(e.isDeclaration(i)&&a(i),i.kind){case 195:if(!e.isFunctionBlock(i)){var l=i.parent,d=e.findChildOfKind(i,15,t),p=e.findChildOfKind(i,16,t)
if(200===l.kind||203===l.kind||204===l.kind||202===l.kind||199===l.kind||201===l.kind||208===l.kind||247===l.kind){n(l,d,p,o(i))
break}if(212===l.kind){var f=l
if(f.tryBlock===i){n(l,d,p,o(i))
break}if(f.finallyBlock===i){var m=e.findChildOfKind(f,85,t)
if(m){n(m,d,p,o(i))
break}}}var g=e.createTextSpanFromBounds(i.getStart(),i.end)
s.push({textSpan:g,hintSpan:g,bannerText:c,autoCollapse:o(i)})
break}case 222:d=e.findChildOfKind(i,15,t),p=e.findChildOfKind(i,16,t),n(i.parent,d,p,o(i))
break
case 217:case 218:case 220:case 168:case 223:n(i,d=e.findChildOfKind(i,15,t),p=e.findChildOfKind(i,16,t),o(i))
break
case 167:n(i,e.findChildOfKind(i,19,t),e.findChildOfKind(i,20,t),o(i))}_++,e.forEachChild(i,r),_--}}(t),s}}(e.OutliningElementsCollector||(e.OutliningElementsCollector={}))}(ts||(ts={})),function(e){!function(t){t.getNavigateToItems=function(t,n,r,a){function i(t){e.Debug.assert(t.length>0)
for(var n=0,r=t;n<r.length;n++)if(!r[n].isCaseSensitive)return!1
return!0}function o(e){return!e||69!==e.kind&&9!==e.kind&&8!==e.kind?void 0:e.text}function s(e,t){if(e&&e.name){var n=o(e.name)
if(void 0===n)return 137===e.name.kind&&c(e.name.expression,t,!0)
t.unshift(n)}return!0}function c(e,t,n){var r=o(e)
if(void 0!==r)return n&&t.unshift(r),!0
if(169===e.kind){var a=e
return n&&t.unshift(a.name.text),c(a.expression,t,!0)}return!1}function _(t){var n=[]
if(137!==t.name.kind||c(t.name.expression,n,!1)){for(t=e.getContainerNode(t);t;){if(!s(t,n))return
t=e.getContainerNode(t)}return n}}function u(t){e.Debug.assert(t.length>0)
for(var n=e.PatternMatchKind.camelCase,r=0,a=t;r<a.length;r++){var i=a[r].kind
n>i&&(n=i)}return n}var l=e.createPatternMatcher(r),d=[],p={sensitivity:"base"}
return e.forEach(t.getSourceFiles(),function(t){n.throwIfCancellationRequested()
var r=t.getNamedDeclarations()
for(var a in r){var o=e.getProperty(r,a)
if(o){var s=l.getMatchesForLastSegmentOfPattern(a)
if(!s)continue
for(var c=0,p=o;c<p.length;c++){var f=p[c]
if(l.patternContainsDots){var m=_(f)
if(!m)return
if(!(s=l.getMatches(m,a)))continue}var g=t.fileName,y=u(s)
d.push({name:a,fileName:g,matchKind:y,isCaseSensitive:i(s),declaration:f})}}}}),d.sort(function(e,t){return e.matchKind-t.matchKind||e.name.localeCompare(t.name,void 0,p)||e.name.localeCompare(t.name)}),void 0!==a&&(d=d.slice(0,a)),e.map(d,function(t){var n=t.declaration,r=e.getContainerNode(n)
return{name:t.name,kind:e.getNodeKind(n),kindModifiers:e.getNodeModifiers(n),matchKind:e.PatternMatchKind[t.matchKind],isCaseSensitive:t.isCaseSensitive,fileName:t.fileName,textSpan:e.createTextSpanFromBounds(n.getStart(),n.getEnd()),containerName:r&&r.name?r.name.text:"",containerKind:r&&r.name?e.getNodeKind(r):""}})}}(e.NavigateTo||(e.NavigateTo={}))}(ts||(ts={})),function(e){!function(t){function n(t,n){function r(t){switch(t.kind){case 214:if(251!==t.parent.parent.parent.kind)return
var n=t
if(n.initializer&&(176===n.initializer.kind||177===n.initializer.kind||189===n.initializer.kind))return
case 216:case 217:case 145:case 146:case 147:return a(t.flags&&512&t.flags&&!t.name?"default":145===t.kind?"constructor":e.declarationNameToString(t.name),function(t){switch(t){case 214:return e.ScriptElementKind.variableElement
case 216:return e.ScriptElementKind.functionElement
case 217:return e.ScriptElementKind.classElement
case 145:return e.ScriptElementKind.constructorImplementationElement
case 146:return e.ScriptElementKind.memberGetAccessorElement
case 147:return e.ScriptElementKind.memberSetAccessorElement
default:return"unknown"}}(t.kind),[o(t)])
case 176:case 177:case 189:return function(t){if((176===t.kind||177===t.kind)&&171===t.parent.kind){var n=t.parent
if(69===n.expression.kind&&"define"===n.expression.getText()){var r=t.getSourceFile().fileName
return 9===n.arguments[0].kind&&(r=n.arguments[0].text),a(r,e.ScriptElementKind.moduleElement,[o(t.parent)])}}}(t)||i(t)
case 144:var r=t
return a(e.declarationNameToString(r.name),e.ScriptElementKind.memberFunctionElement,[o(t)])
case 230:return a("default",e.ScriptElementKind.variableElement,[o(t)])
case 226:if(!t.name)return
case 229:case 227:case 233:if(233===t.kind&&!t.parent.parent.moduleSpecifier&&!t.propertyName)return
var s=t
if(!s.name)return
return a(e.declarationNameToString(s.name),e.ScriptElementKind.constElement,[o(t)])
default:return}}function a(t,n,r,a){return void 0===a&&(a=e.ScriptElementKindModifier.none),{text:t,kind:n,kindModifiers:a,spans:r,childItems:[],indent:_,bolded:!1,grayed:!1}}function i(t){if(176===t.kind||177===t.kind||189===t.kind){var n,r=t
return r.name&&e.getFullWidth(r.name)>0?n=e.declarationNameToString(r.name):214===r.parent.kind?n=e.declarationNameToString(r.parent.name):184===r.parent.kind&&56===r.parent.operatorToken.kind?(n=r.parent.left.getText()).length>20&&(n=n.substring(0,17)+"..."):n=248===r.parent.kind&&r.parent.name?r.parent.name.getText():189===t.kind?c:s,a(n,189===t.kind?e.ScriptElementKind.classElement:e.ScriptElementKind.functionElement,[o(t)])}}function o(t){return 251===t.kind?e.createTextSpanFromBounds(t.getFullStart(),t.getEnd()):e.createTextSpanFromBounds(t.getStart(),t.getEnd())}var s="<function>",c="<class>",_=0,u=a(e.isExternalModule(t)?'"'+e.escapeString(e.getBaseFileName(e.removeFileExtension(e.normalizePath(t.fileName))))+'"':"<global>",e.ScriptElementKind.moduleElement,[o(t)]),l=u
return e.forEachChild(t,function t(n){var a=r(n)
if(a&&l.childItems.push(a),a&&(e.isFunctionLike(n)||e.isClassLike(n))){var i=l
_++,l=a,e.forEachChild(n,t),l=i,_--,a&&a.text===s&&0===a.childItems.length&&l.childItems.pop()}else e.forEachChild(n,t)}),u.childItems}t.getNavigationBarItems=function(t,r){function a(e){for(var t=y?1:0,n=e.parent;n;){switch(n.kind){case 221:do{n=n.parent}while(221===n.kind)
case 217:case 220:case 218:case 216:t++}n=n.parent}return t}function i(t){var n=[]
return e.forEach(t,function t(r){switch(r.kind){case 196:e.forEach(r.declarationList.declarations,t)
break
case 164:case 165:e.forEach(r.elements,t)
break
case 231:r.exportClause&&e.forEach(r.exportClause.elements,t)
break
case 225:var a=r.importClause
a&&(a.name&&n.push(a),a.namedBindings&&(227===a.namedBindings.kind?n.push(a.namedBindings):e.forEach(a.namedBindings.elements,t)))
break
case 166:case 214:if(e.isBindingPattern(r.name)){t(r.name)
break}case 217:case 220:case 218:case 221:case 216:case 224:case 229:case 233:n.push(r)}}),o(n)}function o(t){return t.slice(0).sort(function(t,n){return t.name&&n.name?e.getPropertyNameForPropertyNameNode(t.name).localeCompare(e.getPropertyNameForPropertyNameNode(n.name)):t.name?1:n.name?-1:t.kind-n.kind})}function s(t){if(216===t.kind&&t.body&&195===t.body.kind){if(e.forEach(t.body.statements,function(e){return 216===e.kind&&!l(e.name.text)}))return!0
if(!e.isFunctionBlock(t.parent))return!0}return!1}function c(e,t){for(var n=[],r={},a=0,i=e;a<i.length;a++){var o=t(i[a])
if(void 0!==o&&o.text.length>0){var s=o.text+"-"+o.kind+"-"+o.indent,c=r[s]
c?_(c,o):(r[s]=o,n.push(o))}}return n}function _(t,n){if(e.addRange(t.spans,n.spans),n.childItems){t.childItems||(t.childItems=[])
e:for(var r=0,a=n.childItems;r<a.length;r++){for(var i=a[r],o=0,s=t.childItems;o<s.length;o++){var c=s[o]
if(c.text===i.text&&c.kind===i.kind){_(c,i)
continue e}}t.childItems.push(i)}}}function u(t){function n(t,n,r){return d(n,r,e.getNodeModifiers(t),[m(t)])}switch(t.kind){case 139:if(e.isBindingPattern(t.name))break
if(0==(1022&t.flags))return
return n(t,g(t.name),e.ScriptElementKind.memberVariableElement)
case 144:case 143:return n(t,g(t.name),e.ScriptElementKind.memberFunctionElement)
case 146:return n(t,g(t.name),e.ScriptElementKind.memberGetAccessorElement)
case 147:return n(t,g(t.name),e.ScriptElementKind.memberSetAccessorElement)
case 150:return n(t,"[]",e.ScriptElementKind.indexSignatureElement)
case 250:return n(t,g(t.name),e.ScriptElementKind.memberVariableElement)
case 148:return n(t,"()",e.ScriptElementKind.callSignatureElement)
case 149:return n(t,"new()",e.ScriptElementKind.constructSignatureElement)
case 142:case 141:return n(t,g(t.name),e.ScriptElementKind.memberVariableElement)
case 216:return n(t,g(t.name),e.ScriptElementKind.functionElement)
case 214:case 166:var r,a=void 0
if(166===t.kind){for(r=t.name,a=t;a&&214!==a.kind;)a=a.parent
e.Debug.assert(void 0!==a)}else e.Debug.assert(!e.isBindingPattern(t.name)),a=t,r=t.name
return e.isConst(a)?n(t,g(r),e.ScriptElementKind.constElement):e.isLet(a)?n(t,g(r),e.ScriptElementKind.letElement):n(t,g(r),e.ScriptElementKind.variableElement)
case 145:return n(t,"constructor",e.ScriptElementKind.constructorImplementationElement)
case 233:case 229:case 224:case 226:case 227:return n(t,g(t.name),e.ScriptElementKind.alias)}}function l(e){return!e||""===e.trim()}function d(e,t,n,r,a,i){return void 0===a&&(a=[]),void 0===i&&(i=0),l(e)?void 0:{text:e,kind:t,kindModifiers:n,spans:r,childItems:a,indent:i,bolded:!1,grayed:!1}}function p(t){return e.filter(t.members,function(t){return!e.hasDynamicName(t)})}function f(e){for(;221===e.body.kind;)e=e.body
return e}function m(t){return 251===t.kind?e.createTextSpanFromBounds(t.getFullStart(),t.getEnd()):e.createTextSpanFromBounds(t.getStart(),t.getEnd())}function g(n){return e.getTextOfNodeFromSourceText(t.text,n)}if(e.isSourceFileJavaScript(t))return n(t)
var y=!1
return c(function(e){var t=[]
return t.push(e),function e(t,n){t=o(t)
for(var r=0,a=t;r<a.length;r++){var i=a[r]
switch(i.kind){case 217:case 220:case 218:n.push(i)
break
case 221:var c=i
n.push(i),e(f(c).body.statements,n)
break
case 216:var _=i
s(_)&&(n.push(i),e(_.body.statements,n))}}}(e.statements,t),t}(t),function(t){switch(t.kind){case 251:return function(t){var n=c(i(t.statements),u)
if(void 0!==n&&0!==n.length)return y=!0,d(e.isExternalModule(t)?'"'+e.escapeString(e.getBaseFileName(e.removeFileExtension(e.normalizePath(t.fileName))))+'"':"<global>",e.ScriptElementKind.moduleElement,e.ScriptElementKindModifier.none,[m(t)],n)}(t)
case 217:return function(t){var n
if(t.members){var r=e.forEach(t.members,function(e){return 145===e.kind&&e}),i=p(t)
r&&e.addRange(i,e.filter(r.parameters,function(t){return!e.isBindingPattern(t.name)})),n=c(o(i),u)}return d(t.name?t.name.text:"default",e.ScriptElementKind.classElement,e.getNodeModifiers(t),[m(t)],n,a(t))}(t)
case 220:return function(t){var n=c(o(function(t){return e.filter(t.members,function(e){return void 0===e.name||137!==e.name.kind})}(t)),u)
return d(t.name.text,e.ScriptElementKind.enumElement,e.getNodeModifiers(t),[m(t)],n,a(t))}(t)
case 218:return function(t){var n=c(o(p(t)),u)
return d(t.name.text,e.ScriptElementKind.interfaceElement,e.getNodeModifiers(t),[m(t)],n,a(t))}(t)
case 221:return function(t){var n=function(t){if(e.isAmbientModule(t))return g(t.name)
var n=[]
for(n.push(t.name.text);t.body&&221===t.body.kind;)t=t.body,n.push(t.name.text)
return n.join(".")}(t),r=c(i(f(t).body.statements),u)
return d(n,e.ScriptElementKind.moduleElement,e.getNodeModifiers(t),[m(t)],r,a(t))}(t)
case 216:return function(t){if(t.body&&195===t.body.kind){var n=c(o(t.body.statements),u)
return d(t.name?t.name.text:"default",e.ScriptElementKind.functionElement,e.getNodeModifiers(t),[m(t)],n,a(t))}}(t)}})},t.getJsNavigationBarItems=n}(e.NavigationBar||(e.NavigationBar={}))}(ts||(ts={})),function(e){function t(e,t,n,r){return{kind:e,punctuationStripped:t,isCaseSensitive:n,camelCaseWeight:r}}function n(e){return{totalTextChunk:l(e),subWordTextChunks:function(e){for(var t=[],n=0,r=0,a=0;a<e.length;a++){var i=e.charCodeAt(a)
u(i)?(0===r&&(n=a),r++):r>0&&(t.push(l(e.substr(n,r))),r=0)}return r>0&&t.push(l(e.substr(n,r))),t}(e)}}function r(e){return 0===e.subWordTextChunks.length}function a(t){if(t>=65&&90>=t)return!0
if(127>t||!e.isUnicodeIdentifierStart(t,2))return!1
var n=String.fromCharCode(t)
return n===n.toUpperCase()}function i(t){if(t>=97&&122>=t)return!0
if(127>t||!e.isUnicodeIdentifierStart(t,2))return!1
var n=String.fromCharCode(t)
return n===n.toLowerCase()}function o(e,t){for(var n=0,r=e.length-t.length;r>=n;n++)if(s(e,t,n))return n
return-1}function s(e,t,n){for(var r=0,a=t.length;a>r;r++){if(c(e.charCodeAt(r+n))!==t.charCodeAt(r))return!1}return!0}function c(e){return e>=65&&90>=e?e-65+97:127>e?e:String.fromCharCode(e).toLowerCase().charCodeAt(0)}function _(e){return e>=48&&57>=e}function u(e){return a(e)||i(e)||_(e)||95===e||36===e}function l(e){var t=e.toLowerCase()
return{text:e,textLowerCase:t,isLowerCase:e===t,characterSpans:d(e)}}function d(e){return f(e,!1)}function p(e){return f(e,!0)}function f(t,n){for(var r=[],a=0,i=1,o=t.length;o>i;i++){var s=_(t.charCodeAt(i-1)),c=_(t.charCodeAt(i)),u=h(t,n,i),l=y(t,n,i,a);(m(t.charCodeAt(i-1))||m(t.charCodeAt(i))||s!==c||u||l)&&(g(t,a,i)||r.push(e.createTextSpan(a,i-a)),a=i)}return g(t,a,t.length)||r.push(e.createTextSpan(a,t.length-a)),r}function m(e){switch(e){case 33:case 34:case 35:case 37:case 38:case 39:case 40:case 41:case 42:case 44:case 45:case 46:case 47:case 58:case 59:case 63:case 64:case 91:case 92:case 93:case 95:case 123:case 125:return!0}return!1}function g(e,t,n){for(var r=t;n>r;r++){var a=e.charCodeAt(r)
if(!m(a)||95===a||36===a)return!1}return!0}function y(e,t,n,r){if(t&&n!==r&&n+1<e.length){var o=a(e.charCodeAt(n)),s=i(e.charCodeAt(n+1))
if(o&&s){for(var c=r;n>c;c++)if(!a(e.charCodeAt(c)))return!1
return!0}}return!1}function h(e,t,n){var r=a(e.charCodeAt(n-1)),i=a(e.charCodeAt(n))
return t?i&&!r:i}!function(e){e[e.exact=0]="exact",e[e.prefix=1]="prefix",e[e.substring=2]="substring",e[e.camelCase=3]="camelCase"}(e.PatternMatchKind||(e.PatternMatchKind={}))
var v=e.PatternMatchKind
e.createPatternMatcher=function(i){function s(e){return y||!e}function _(t){return e.hasProperty(m,t)||(m[t]=p(t)),m[t]}function u(e,n,r){var i=o(e,n.textLowerCase)
if(0===i)return n.text.length===e.length?t(v.exact,r,e===n.text):t(v.prefix,r,function(e,t){for(var n=0,r=t.length;r>n;n++)if(e.charCodeAt(n)!==t.charCodeAt(n))return!1
return!0}(e,n.text))
var s=n.isLowerCase
if(s){if(i>0)for(var c=0,u=_(e);c<u.length;c++){var l=u[c]
if(d(e,l,n.text,!0))return t(v.substring,r,d(e,l,n.text,!1))}}else if(e.indexOf(n.text)>0)return t(v.substring,r,!0)
if(!s&&n.characterSpans.length>0){var p=_(e),m=f(e,p,n,!1)
if(void 0!==m)return t(v.camelCase,r,!0,m)
if(void 0!==(m=f(e,p,n,!0)))return t(v.camelCase,r,!1,m)}return s&&n.text.length<e.length&&i>0&&a(e.charCodeAt(i))?t(v.substring,r,!1):void 0}function l(e,t){if(!function(e){for(var t=0;t<e.length;t++){var n=e.charCodeAt(t)
if(32===n||42===n)return!0}return!1}(t.totalTextChunk.text)){var n=u(e,t.totalTextChunk,!1)
if(n)return[n]}for(var r=void 0,a=0,i=t.subWordTextChunks;a<i.length;a++){var o=u(e,i[a],!0)
if(!o)return;(r=r||[]).push(o)}return r}function d(e,t,n,r,a){var i=a?a.start:0,o=a?a.length:n.length
if(o>t.length)return!1
if(r)for(var s=0;o>s;s++){var _=n.charCodeAt(i+s),u=e.charCodeAt(t.start+s)
if(c(_)!==c(u))return!1}else for(s=0;o>s;s++)if((_=n.charCodeAt(i+s))!==(u=e.charCodeAt(t.start+s)))return!1
return!0}function f(t,n,r,i){for(var o=r.characterSpans,s=0,c=0,_=void 0,u=void 0;;){if(c===o.length){var l=0
return u&&(l+=1),0===_&&(l+=2),l}if(s===n.length)return
for(var p=n[s],f=!1;c<o.length;c++){var m=o[c]
if(f&&(!a(r.text.charCodeAt(o[c-1].start))||!a(r.text.charCodeAt(o[c].start))))break
if(!d(t,p,r.text,i,m))break
f=!0,_=void 0===_?s:_,u=void 0===u||u,p=e.createTextSpan(p.start+m.length,p.length-m.length)}f||void 0===u||(u=!1),s++}}var m={},g=(i=i.trim()).split(".").map(function(e){return n(e.trim())}),y=0===g.length||e.forEach(g,r)
return{getMatches:function(t,n){if(!s(n)){var r=l(n,e.lastOrUndefined(g))
if(r&&(t=t||[],!(g.length-1>t.length))){for(var a=r,i=g.length-2,o=t.length-1;i>=0;i-=1,o-=1){var c=g[i],_=l(t[o],c)
if(!_)return
e.addRange(a,_)}return a}}},getMatchesForLastSegmentOfPattern:function(t){return s(t)?void 0:l(t,e.lastOrUndefined(g))},patternContainsDots:g.length>1}},e.breakIntoCharacterSpans=d,e.breakIntoWordSpans=p}(ts||(ts={})),function(e){!function(t){var n,r=[]
!function(e){e[e.TypeArguments=0]="TypeArguments",e[e.CallArguments=1]="CallArguments",e[e.TaggedTemplateArguments=2]="TaggedTemplateArguments"}(n||(n={})),t.getSignatureHelpItems=function(t,n,a,i){function o(t){if(171===t.parent.kind||172===t.parent.kind){var r=t.parent
if(25===t.kind||17===t.kind){var i=function(t,n,r){var a=t.getChildren(r),i=a.indexOf(n)
return e.Debug.assert(i>=0&&a.length>i+1),a[i+1]}(r,t,n),o=r.typeArguments&&r.typeArguments.pos===i.pos
return e.Debug.assert(void 0!==i),{kind:o?0:1,invocation:r,argumentsSpan:_(i),argumentIndex:0,argumentCount:s(i)}}var u=e.findListItemInfo(t)
if(u){i=u.list,o=r.typeArguments&&r.typeArguments.pos===i.pos
var l=function(e,t){for(var n=0,r=e.getChildren(),a=0,i=r;a<i.length;a++){var o=i[a]
if(o===t)break
24!==o.kind&&n++}return n}(i,t),d=s(i)
return e.Debug.assert(0===l||d>l,"argumentCount < argumentIndex, "+d+" < "+l),{kind:o?0:1,invocation:r,argumentsSpan:_(i),argumentIndex:l,argumentCount:d}}}else if(11===t.kind&&173===t.parent.kind){if(e.isInsideTemplateLiteral(t,a))return c(t.parent,0)}else{if(12===t.kind&&173===t.parent.parent.kind){var p=(f=t.parent).parent
return e.Debug.assert(186===f.kind),c(p,l=e.isInsideTemplateLiteral(t,a)?0:1)}if(193===t.parent.kind&&173===t.parent.parent.parent.kind){var f,m=t.parent
if(p=(f=m.parent).parent,e.Debug.assert(186===f.kind),14===t.kind&&!e.isInsideTemplateLiteral(t,a))return
return c(p,l=function(t,n){return e.Debug.assert(a>=n.getStart(),"Assumed 'position' could not occur before node."),e.isTemplateLiteralKind(n.kind)?e.isInsideTemplateLiteral(n,a)?0:t+2:t+1}(f.templateSpans.indexOf(m),t))}}}function s(t){var n=t.getChildren(),r=e.countWhere(n,function(e){return 24!==e.kind})
return n.length>0&&24===e.lastOrUndefined(n).kind&&r++,r}function c(t,n){var r=11===t.template.kind?1:t.template.templateSpans.length+1
return e.Debug.assert(0===n||r>n,"argumentCount < argumentIndex, "+r+" < "+n),{kind:2,invocation:t,argumentsSpan:u(t),argumentIndex:n,argumentCount:r}}function _(t){var r=t.getFullStart(),a=e.skipTrivia(n.text,t.getEnd(),!1)
return e.createTextSpan(r,a-r)}function u(t){var r=t.template,a=r.getStart(),i=r.getEnd()
return 186===r.kind&&0===e.lastOrUndefined(r.templateSpans).literal.getFullWidth()&&(i=e.skipTrivia(n.text,i,!1)),e.createTextSpan(a,i-a)}function l(t,n,a){function i(t){var n=e.mapToDisplayParts(function(e){return d.getSymbolDisplayBuilder().buildParameterDisplay(t,e,_)})
return{name:t.name,documentation:t.getDocumentationComment(),displayParts:n,isOptional:d.isOptionalParameter(t.valueDeclaration)}}function o(t){var n=e.mapToDisplayParts(function(e){return d.getSymbolDisplayBuilder().buildTypeParameterDisplay(t,e,_)})
return{name:t.symbol.name,documentation:r,displayParts:n,isOptional:!1}}var s=a.argumentsSpan,c=0===a.kind,_=a.invocation,u=e.getInvokedExpression(_),l=d.getSymbolAtLocation(u),p=l&&e.symbolToDisplayParts(d,l,void 0,void 0),f=e.map(t,function(t){var n,a=[],s=[]
if(p&&e.addRange(a,p),c){a.push(e.punctuationPart(25))
var u=t.typeParameters
n=u&&u.length>0?e.map(u,o):r,s.push(e.punctuationPart(27))
var l=e.mapToDisplayParts(function(e){return d.getSymbolDisplayBuilder().buildDisplayForParametersAndDelimiters(t.parameters,e,_)})
e.addRange(s,l)}else{var f=e.mapToDisplayParts(function(e){return d.getSymbolDisplayBuilder().buildDisplayForTypeParametersAndDelimiters(t.typeParameters,e,_)})
e.addRange(a,f),a.push(e.punctuationPart(17))
var m=t.parameters
n=m.length>0?e.map(m,i):r,s.push(e.punctuationPart(18))}var g=e.mapToDisplayParts(function(e){return d.getSymbolDisplayBuilder().buildReturnTypeDisplay(t,e,_)})
return e.addRange(s,g),{isVariadic:t.hasRestParameter,prefixDisplayParts:a,suffixDisplayParts:s,separatorDisplayParts:[e.punctuationPart(24),e.spacePart()],parameters:n,documentation:t.getDocumentationComment()}}),m=a.argumentIndex,g=a.argumentCount,y=t.indexOf(n)
return 0>y&&(y=function(e,t){for(var n=-1,r=-1,a=0;a<e.length;a++){var i=e[a]
if(i.hasRestParameter||i.parameters.length>=t)return a
i.parameters.length>r&&(r=i.parameters.length,n=a)}return n}(t,g)),e.Debug.assert(0===m||g>m,"argumentCount < argumentIndex, "+g+" < "+m),{items:f,applicableSpan:s,selectedItemIndex:y,argumentIndex:m,argumentCount:g}}var d=t.getTypeChecker(),p=e.findTokenOnLeftOfPosition(n,a)
if(p){var f=function(t){for(var n=t;251!==n.kind;n=n.parent){if(e.isFunctionBlock(n))return;(n.pos<n.parent.pos||n.end>n.parent.end)&&e.Debug.fail("Node of kind "+n.kind+" is not a subspan of its parent of kind "+n.parent.kind)
var r=o(n)
if(r)return r}}(p)
if(i.throwIfCancellationRequested(),f){var m=f.invocation,g=[],y=d.getResolvedSignature(m,g)
if(i.throwIfCancellationRequested(),g.length)return l(g,y,f)
if(e.isSourceFileJavaScript(n))return function(n){if(171===n.invocation.kind){var r=n.invocation.expression,a=69===r.kind?r:169===r.kind?r.name:void 0
if(a&&a.text)for(var i=t.getTypeChecker(),o=0,s=t.getSourceFiles();o<s.length;o++){var c=s[o].getNamedDeclarations(),_=e.getProperty(c,a.text)
if(_)for(var u=0,d=_;u<d.length;u++){var p=d[u],f=p.symbol
if(f){var m=i.getTypeOfSymbolAtLocation(f,p)
if(m){var g=m.getCallSignatures()
if(g&&g.length)return l(g,g[0],n)}}}}}}(f)}}}}(e.SignatureHelp||(e.SignatureHelp={}))}(ts||(ts={})),function(e){function t(e,t,n){return e<=n.pos&&t>=n.end}function n(e,t,n,r){var a=Math.max(e,n)
return Math.min(t,r)>a}function r(t,n){if(e.nodeIsMissing(t))return!1
switch(t.kind){case 217:case 218:case 220:case 168:case 164:case 156:case 195:case 222:case 223:return a(t,16,n)
case 247:return r(t.block,n)
case 172:if(!t.arguments)return!0
case 171:case 175:case 161:return a(t,18,n)
case 153:case 154:return r(t.type,n)
case 145:case 146:case 147:case 216:case 176:case 144:case 143:case 149:case 148:case 177:return t.body?r(t.body,n):t.type?r(t.type,n):i(t,18,n)
case 221:return t.body&&r(t.body,n)
case 199:return t.elseStatement?r(t.elseStatement,n):r(t.thenStatement,n)
case 198:return r(t.expression,n)||i(t,23)
case 167:case 165:case 170:case 137:case 158:return a(t,20,n)
case 150:return t.type?r(t.type,n):i(t,20,n)
case 244:case 245:return!1
case 202:case 203:case 204:case 201:return r(t.statement,n)
case 200:return o(t,104,n)?a(t,18,n):r(t.statement,n)
case 155:return r(t.exprName,n)
case 179:case 178:case 180:case 187:case 188:return r(t.expression,n)
case 173:return r(t.template,n)
case 186:return r(e.lastOrUndefined(t.templateSpans),n)
case 193:return e.nodeIsPresent(t.literal)
case 182:return r(t.operand,n)
case 184:return r(t.right,n)
case 185:return r(t.whenFalse,n)
default:return!0}}function a(t,n,r){var a=t.getChildren(r)
if(a.length){var i=e.lastOrUndefined(a)
if(i.kind===n)return!0
if(23===i.kind&&1!==a.length)return a[a.length-2].kind===n}return!1}function i(e,t,n){return!!o(e,t,n)}function o(t,n,r){return e.forEach(t.getChildren(r),function(e){return e.kind===n&&e})}function s(t){var n=e.forEach(t.parent.getChildren(),function(e){return 274===e.kind&&e.pos<=t.pos&&e.end>=t.end?e:void 0})
return e.Debug.assert(!n||e.contains(n.getChildren(),t)),n}function c(e,t,n){return u(e,t,!1,n)}function _(e,t){return u(e,t,!0,void 0)}function u(e,t,n,r){var a=e
e:for(;;){if(f(a))return a
for(var i=0,o=a.getChildCount(e);o>i;i++){var s=a.getChildAt(i)
if(t>=(n?s.getFullStart():s.getStart(e))){var c=s.getEnd()
if(c>t||t===c&&1===s.kind){a=s
continue e}if(r&&c===t){var _=l(t,e,s)
if(_&&r(_))return _}}}return a}}function l(t,n,r){function a(e){if(f(e)||239===e.kind)return e
var t=e.getChildren(),n=i(t,t.length)
return n&&a(n)}function i(e,t){for(var n=t-1;n>=0;--n)if(p(e[n]))return e[n]}return function o(s){if(f(s)||239===s.kind)return s
for(var c=s.getChildren(),_=0,u=c.length;u>_;_++){var l=c[_]
if(t<l.end&&(p(l)||239===l.kind)){var d=l.getStart(n)
return d>=t||239===l.kind&&d===l.end?(m=i(c,_))&&a(m):o(l)}}var m
return e.Debug.assert(void 0!==r||251===s.kind),c.length?(m=i(c,c.length))&&a(m):void 0}(r||n)}function d(t,n,r){var a=_(t,n)
if(a&&n<=a.getStart()){var i=e.getLeadingCommentRanges(t.text,a.pos)
return r?e.forEach(i,function(e){return e.pos<n&&(2==e.kind?n<=e.end:n<e.end)&&r(e)}):e.forEach(i,function(e){return e.pos<n&&(2==e.kind?n<=e.end:n<e.end)})}return!1}function p(e){return 0!==e.getWidth()}function f(e){return e.kind>=0&&e.kind<=135}function m(t){return 69===t||e.isKeyword(t)}e.getEndLinePosition=function(t,n){e.Debug.assert(t>=0)
var r=n.getLineStarts(),a=t
if(a+1===r.length)return n.text.length-1
var i=r[a],o=r[a+1]-1
for(e.Debug.assert(e.isLineBreak(n.text.charCodeAt(o)));o>=i&&e.isLineBreak(n.text.charCodeAt(o));)o--
return o},e.getLineStartPositionForPosition=function(e,t){return t.getLineStarts()[t.getLineAndCharacterOfPosition(e).line]},e.rangeContainsRange=function(e,n){return t(e.pos,e.end,n)},e.startEndContainsRange=t,e.rangeContainsStartEnd=function(e,t,n){return e.pos<=t&&e.end>=n},e.rangeOverlapsWithStartEnd=function(e,t,r){return n(e.pos,e.end,t,r)},e.startEndOverlapsWithStartEnd=n,e.positionBelongsToNode=function(e,t,n){return e.end>t||!r(e,n)},e.isCompletedNode=r,e.findListItemInfo=function(t){var n=s(t)
if(n){var r=n.getChildren()
return{listItemIndex:e.indexOf(r,t),list:n}}},e.hasChildOfKind=i,e.findChildOfKind=o,e.findContainingList=s,e.getTouchingWord=function(e,t){return c(e,t,function(e){return m(e.kind)})},e.getTouchingPropertyName=function(e,t){return c(e,t,function(e){return function(e){return 9===e||8===e||m(e)}(e.kind)})},e.getTouchingToken=c,e.getTokenAtPosition=_,e.findTokenOnLeftOfPosition=function(e,t){var n=_(e,t)
return f(n)&&t>n.getStart(e)&&t<n.getEnd()?n:l(t,e)},e.findNextToken=function(e,t){return function t(n){if(f(n)&&n.pos===e.end)return n
for(var r=0,a=n.getChildren();r<a.length;r++){var i=a[r]
if((i.pos<=e.pos&&i.end>e.end||i.pos===e.end)&&p(i))return t(i)}}(t)},e.findPrecedingToken=l,e.isInString=function(e,t){var n=_(e,t)
return n&&(9===n.kind||163===n.kind)&&t>n.getStart()},e.isInComment=function(e,t){return d(e,t,void 0)},e.isInCommentHelper=d,e.hasDocComment=function(t,n){var r=_(t,n),a=e.getLeadingCommentRanges(t.text,r.pos)
return e.forEach(a,function(e){var n=t.text
return n.length>=e.pos+3&&"/"===n[e.pos]&&"*"===n[e.pos+1]&&"*"===n[e.pos+2]})},e.getJsDocTagAtPosition=function(t,n){var r=e.getTokenAtPosition(t,n)
if(f(r))switch(r.kind){case 102:case 108:case 74:r=void 0===r.parent?void 0:r.parent.parent
break
default:r=r.parent}if(r){var a=r.jsDocComment
if(a)for(var i=0,o=a.tags;i<o.length;i++){var s=o[i]
if(s.pos<=n&&n<=s.end)return s}}},e.getNodeModifiers=function(t){var n=e.getCombinedNodeFlags(t),r=[]
return 16&n&&r.push(e.ScriptElementKindModifier.privateMemberModifier),32&n&&r.push(e.ScriptElementKindModifier.protectedMemberModifier),8&n&&r.push(e.ScriptElementKindModifier.publicMemberModifier),64&n&&r.push(e.ScriptElementKindModifier.staticModifier),128&n&&r.push(e.ScriptElementKindModifier.abstractModifier),2&n&&r.push(e.ScriptElementKindModifier.exportedModifier),e.isInAmbientContext(t)&&r.push(e.ScriptElementKindModifier.ambientModifier),r.length>0?r.join(","):e.ScriptElementKindModifier.none},e.getTypeArgumentOrTypeParameterList=function(t){return 152===t.kind||171===t.kind?t.typeArguments:e.isFunctionLike(t)||217===t.kind||218===t.kind?t.typeParameters:void 0},e.isToken=f,e.isWord=m,e.isComment=function(e){return 2===e||3===e},e.isStringOrRegularExpressionOrTemplateLiteral=function(t){return!(9!==t&&163!==t&&10!==t&&!e.isTemplateLiteralKind(t))},e.isPunctuation=function(e){return e>=15&&68>=e},e.isInsideTemplateLiteral=function(t,n){return e.isTemplateLiteralKind(t.kind)&&t.getStart()<n&&n<t.getEnd()||!!t.isUnterminated&&n===t.getEnd()},e.isAccessibilityModifier=function(e){switch(e){case 112:case 110:case 111:return!0}return!1},e.compareDataObjects=function e(t,n){for(var r in t)if("object"==typeof t[r]){if(!e(t[r],n[r]))return!1}else if("function"!=typeof t[r]&&t[r]!==n[r])return!1
return!0},e.isArrayLiteralOrObjectLiteralDestructuringPattern=function e(t){if(167===t.kind||168===t.kind){if(184===t.parent.kind&&t.parent.left===t&&56===t.parent.operatorToken.kind)return!0
if(204===t.parent.kind&&t.parent.initializer===t)return!0
if(e(248===t.parent.kind?t.parent.parent:t.parent))return!0}return!1}}(ts||(ts={})),function(e){function t(e){return e.declarations&&e.declarations.length>0&&139===e.declarations[0].kind}function n(n,a){return r(n,function(n){var r=n.flags
return 3&r?t(n)?e.SymbolDisplayPartKind.parameterName:e.SymbolDisplayPartKind.localName:4&r?e.SymbolDisplayPartKind.propertyName:32768&r?e.SymbolDisplayPartKind.propertyName:65536&r?e.SymbolDisplayPartKind.propertyName:8&r?e.SymbolDisplayPartKind.enumMemberName:16&r?e.SymbolDisplayPartKind.functionName:32&r?e.SymbolDisplayPartKind.className:64&r?e.SymbolDisplayPartKind.interfaceName:384&r?e.SymbolDisplayPartKind.enumName:1536&r?e.SymbolDisplayPartKind.moduleName:8192&r?e.SymbolDisplayPartKind.methodName:262144&r?e.SymbolDisplayPartKind.typeParameterName:524288&r?e.SymbolDisplayPartKind.aliasName:8388608&r?e.SymbolDisplayPartKind.aliasName:e.SymbolDisplayPartKind.text}(a),a)}function r(t,n,r){return{text:t,kind:e.SymbolDisplayPartKind[n]}}function a(t){return r(e.tokenToString(t),e.SymbolDisplayPartKind.keyword)}function i(t){return r(t,e.SymbolDisplayPartKind.text)}function o(){return r("\n",e.SymbolDisplayPartKind.lineBreak)}function s(e){e(u)
var t=u.displayParts()
return u.clear(),t}function c(e){return e.parent&&(229===e.parent.kind||233===e.parent.kind)&&e.parent.propertyName===e}function _(t,n){var r=e.getScriptKindFromFileName(t)
return 0===r&&n&&n.getScriptKind&&(r=n.getScriptKind(t)),e.ensureScriptKind(t,r)}e.isFirstDeclarationOfSymbolParameter=t
var u=function(){function t(){if(c){var t=e.getIndentString(_)
t&&s.push(r(t,e.SymbolDisplayPartKind.space)),c=!1}}function a(e,n){t(),s.push(r(e,n))}function i(){s=[],c=!0,_=0}var s,c,_
return i(),{displayParts:function(){return s},writeKeyword:function(t){return a(t,e.SymbolDisplayPartKind.keyword)},writeOperator:function(t){return a(t,e.SymbolDisplayPartKind.operator)},writePunctuation:function(t){return a(t,e.SymbolDisplayPartKind.punctuation)},writeSpace:function(t){return a(t,e.SymbolDisplayPartKind.space)},writeStringLiteral:function(t){return a(t,e.SymbolDisplayPartKind.stringLiteral)},writeParameter:function(t){return a(t,e.SymbolDisplayPartKind.parameterName)},writeSymbol:function(e,r){t(),s.push(n(e,r))},writeLine:function(){s.push(o()),c=!0},increaseIndent:function(){_++},decreaseIndent:function(){_--},clear:i,trackSymbol:function(){},reportInaccessibleThisError:function(){}}}()
e.symbolPart=n,e.displayPart=r,e.spacePart=function(){return r(" ",e.SymbolDisplayPartKind.space)},e.keywordPart=a,e.punctuationPart=function(t){return r(e.tokenToString(t),e.SymbolDisplayPartKind.punctuation)},e.operatorPart=function(t){return r(e.tokenToString(t),e.SymbolDisplayPartKind.operator)},e.textOrKeywordPart=function(t){var n=e.stringToToken(t)
return void 0===n?i(t):a(n)},e.textPart=i
var l="\r\n"
e.getNewLineOrDefaultFromHost=function(e){return e.getNewLine?e.getNewLine():l},e.lineBreakPart=o,e.mapToDisplayParts=s,e.typeToDisplayParts=function(e,t,n,r){return s(function(a){e.getSymbolDisplayBuilder().buildTypeDisplay(t,a,n,r)})},e.symbolToDisplayParts=function(e,t,n,r,a){return s(function(i){e.getSymbolDisplayBuilder().buildSymbolDisplay(t,i,n,r,a)})},e.signatureToDisplayParts=function(e,t,n,r){return s(function(a){e.getSymbolDisplayBuilder().buildSignatureDisplay(t,a,n,r)})},e.getDeclaredName=function(t,n,r){if(c(r))return r.getText()
var a=e.getLocalSymbolForExportDefault(n)
return t.symbolToString(a||n)},e.isImportOrExportSpecifierName=c,e.stripQuotes=function(e){var t=e.length
return t>=2&&e.charCodeAt(0)===e.charCodeAt(t-1)&&(34===e.charCodeAt(0)||39===e.charCodeAt(0))?e.substring(1,t-1):e},e.scriptKindIs=function(t,n){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a]
var i=_(t,n)
return e.forEach(r,function(e){return e===i})},e.getScriptKind=_}(ts||(ts={})),function(e){!function(t){var n
t.discoverTypings=function(t,r,a,i,o,s,c){function _(t){if(t)for(var n=0,r=t;n<r.length;n++){var a=r[n]
e.hasProperty(d,a)||(d[a]=void 0)}}function u(n,r){var a=e.readConfigFile(n,function(e){return t.readFile(e)})
if(a.config){var i=a.config
r.push(n),i.dependencies&&_(e.getKeys(i.dependencies)),i.devDependencies&&_(e.getKeys(i.devDependencies)),i.optionalDependencies&&_(e.getKeys(i.optionalDependencies)),i.peerDependencies&&_(e.getKeys(i.peerDependencies))}}function l(n){if(t.directoryExists(n)){for(var r=[],a=0,i=t.readDirectory(n,"*.json",void 0,2);a<i.length;a++){var o=i[a],s=e.normalizePath(o)
if("package.json"===e.getBaseFileName(s)){var c=e.readConfigFile(s,function(e){return t.readFile(e)})
if(c.config){var u=c.config
if((!u._requiredBy||0!==e.filter(u._requiredBy,function(e){return"#"===e[0]||"/"===e}).length)&&u.name)if(u.typings){var l=e.getNormalizedAbsolutePath(u.typings,e.getDirectoryPath(s))
d[u.name]=l}else r.push(u.name)}}}_(r)}}var d={}
if(!s||!s.enableAutoDiscovery)return{cachedTypingPaths:[],newTypingNames:[],filesToWatch:[]}
if(r=e.filter(e.map(r,e.normalizePath),function(t){return e.scriptKindIs(t,void 0,1,2)}),!n){var p=e.readConfigFile(i,function(e){return t.readFile(e)})
n=p.config?p.config:{}}var f,m=[]
_(s.include),f=s.exclude||[]
var g=e.map(r,e.getDirectoryPath)
void 0!==a&&g.push(a)
for(var y=0,h=e.deduplicate(g);y<h.length;y++){var v=h[y]
u(e.combinePaths(v,"package.json"),m),u(e.combinePaths(v,"bower.json"),m),l(e.combinePaths(v,"node_modules"))}for(var k in function(t){var r=e.filter(t,e.hasJavaScriptFileExtension),a=e.map(r,function(t){return e.removeFileExtension(e.getBaseFileName(t.toLowerCase()))}),i=e.map(a,function(e){return e.replace(/((?:\.|-)min(?=\.|$))|((?:-|\.)\d+)/g,"")})
_(void 0===n?i:e.filter(i,function(t){return e.hasProperty(n,t)})),e.forEach(t,function(t){return e.scriptKindIs(t,void 0,2)})&&_(["react"])}(r),o)e.hasProperty(d,k)&&!d[k]&&(d[k]=o[k])
for(var b=0,x=f;b<x.length;b++){var C=x[b]
delete d[C]}var D=[],S=[]
for(var T in d)void 0!==d[T]?S.push(d[T]):D.push(T)
return{cachedTypingPaths:S,newTypingNames:D,filesToWatch:m}}}(e.JsTyping||(e.JsTyping={}))}(ts||(ts={})),function(e){!function(t){var n,r,a=e.createScanner(2,!1,0),i=e.createScanner(2,!1,1)
!function(e){e[e.Scan=0]="Scan",e[e.RescanGreaterThanToken=1]="RescanGreaterThanToken",e[e.RescanSlashToken=2]="RescanSlashToken",e[e.RescanTemplateToken=3]="RescanTemplateToken",e[e.RescanJsxIdentifier=4]="RescanJsxIdentifier"}(r||(r={})),t.getFormattingScanner=function(t,r,o){function s(){e.Debug.assert(void 0!==n)
var t=p&&p.token.kind||n.getToken(),r=p&&p.token.pos||n.getStartPos()
return o>r&&1!==t&&!e.isTrivia(t)}function c(t,n){return e.isToken(n)&&t.token.kind!==n.kind&&(t.token.kind=n.kind),t}e.Debug.assert(void 0===n),(n=1===t.languageVariant?i:a).setText(t.text),n.setTextPos(r)
var _,u,l,d,p,f=!0
return{advance:function(){e.Debug.assert(void 0!==n),p=void 0
var t=n.getStartPos()!==r
t&&(u?(e.Debug.assert(0!==u.length),f=4===e.lastOrUndefined(u).kind):f=!1),_=void 0,u=void 0,t||n.scan()
for(var a=n.getStartPos();o>a;){var i=n.getToken()
if(!e.isTrivia(i))break
n.scan()
var s={pos:a,end:n.getStartPos(),kind:i}
a=n.getStartPos(),_||(_=[]),_.push(s)}l=n.getStartPos()},readTokenInfo:function(t){if(e.Debug.assert(void 0!==n),!s())return{leadingTrivia:_,trailingTrivia:void 0,token:void 0}
var r=function(e){if(e)switch(e.kind){case 29:case 64:case 65:case 45:case 44:return!0}return!1}(t)?1:function(e){return 10===e.kind}(t)?2:function(e){return 13===e.kind||14===e.kind}(t)?3:function(e){if(e.parent)switch(e.parent.kind){case 241:case 238:case 240:case 237:return 69===e.kind}return!1}(t)?4:0
if(p&&r===d)return c(p,t)
n.getStartPos()!==l&&(e.Debug.assert(void 0!==p),n.setTextPos(l),n.scan())
var a=n.getToken()
1===r&&27===a?(a=n.reScanGreaterToken(),e.Debug.assert(t.kind===a),d=1):2===r&&function(e){return 39===e||61===e}(a)?(a=n.reScanSlashToken(),e.Debug.assert(t.kind===a),d=2):3===r&&16===a?(a=n.reScanTemplateToken(),d=3):4===r&&69===a?(a=n.scanJsxIdentifier(),d=4):d=0
var i={pos:n.getStartPos(),end:n.getTextPos(),kind:a}
for(u&&(u=void 0);n.getStartPos()<o&&(a=n.scan(),e.isTrivia(a));){var f={pos:n.getStartPos(),end:n.getTextPos(),kind:a}
if(u||(u=[]),u.push(f),4===a){n.scan()
break}}return c(p={leadingTrivia:_,trailingTrivia:u,token:i},t)},isOnToken:s,getCurrentLeadingTrivia:function(){return _},lastTrailingTriviaWasNewLine:function(){return f},close:function(){e.Debug.assert(void 0!==n),p=void 0,n.setText(void 0),n=void 0}}}}(e.formatting||(e.formatting={}))}(ts||(ts={})),function(e){!function(t){var n=function(){function t(e,t){this.sourceFile=e,this.formattingRequestKind=t}return t.prototype.updateContext=function(t,n,r,a,i){e.Debug.assert(void 0!==t,"currentTokenSpan is null"),e.Debug.assert(void 0!==n,"currentTokenParent is null"),e.Debug.assert(void 0!==r,"nextTokenSpan is null"),e.Debug.assert(void 0!==a,"nextTokenParent is null"),e.Debug.assert(void 0!==i,"commonParent is null"),this.currentTokenSpan=t,this.currentTokenParent=n,this.nextTokenSpan=r,this.nextTokenParent=a,this.contextNode=i,this.contextNodeAllOnSameLine=void 0,this.nextNodeAllOnSameLine=void 0,this.tokensAreOnSameLine=void 0,this.contextNodeBlockIsOnOneLine=void 0,this.nextNodeBlockIsOnOneLine=void 0},t.prototype.ContextNodeAllOnSameLine=function(){return void 0===this.contextNodeAllOnSameLine&&(this.contextNodeAllOnSameLine=this.NodeIsOnOneLine(this.contextNode)),this.contextNodeAllOnSameLine},t.prototype.NextNodeAllOnSameLine=function(){return void 0===this.nextNodeAllOnSameLine&&(this.nextNodeAllOnSameLine=this.NodeIsOnOneLine(this.nextTokenParent)),this.nextNodeAllOnSameLine},t.prototype.TokensAreOnSameLine=function(){if(void 0===this.tokensAreOnSameLine){var e=this.sourceFile.getLineAndCharacterOfPosition(this.currentTokenSpan.pos).line,t=this.sourceFile.getLineAndCharacterOfPosition(this.nextTokenSpan.pos).line
this.tokensAreOnSameLine=e===t}return this.tokensAreOnSameLine},t.prototype.ContextNodeBlockIsOnOneLine=function(){return void 0===this.contextNodeBlockIsOnOneLine&&(this.contextNodeBlockIsOnOneLine=this.BlockIsOnOneLine(this.contextNode)),this.contextNodeBlockIsOnOneLine},t.prototype.NextNodeBlockIsOnOneLine=function(){return void 0===this.nextNodeBlockIsOnOneLine&&(this.nextNodeBlockIsOnOneLine=this.BlockIsOnOneLine(this.nextTokenParent)),this.nextNodeBlockIsOnOneLine},t.prototype.NodeIsOnOneLine=function(e){return this.sourceFile.getLineAndCharacterOfPosition(e.getStart(this.sourceFile)).line===this.sourceFile.getLineAndCharacterOfPosition(e.getEnd()).line},t.prototype.BlockIsOnOneLine=function(t){var n=e.findChildOfKind(t,15,this.sourceFile),r=e.findChildOfKind(t,16,this.sourceFile)
return!(!n||!r)&&this.sourceFile.getLineAndCharacterOfPosition(n.getEnd()).line===this.sourceFile.getLineAndCharacterOfPosition(r.getStart(this.sourceFile)).line},t}()
t.FormattingContext=n}(e.formatting||(e.formatting={}))}(ts||(ts={})),function(e){!function(e){!function(e){e[e.FormatDocument=0]="FormatDocument",e[e.FormatSelection=1]="FormatSelection",e[e.FormatOnEnter=2]="FormatOnEnter",e[e.FormatOnSemicolon=3]="FormatOnSemicolon",e[e.FormatOnClosingCurlyBrace=4]="FormatOnClosingCurlyBrace"}(e.FormattingRequestKind||(e.FormattingRequestKind={})),e.FormattingRequestKind}(e.formatting||(e.formatting={}))}(ts||(ts={})),function(e){!function(e){var t=function(){function e(e,t,n){void 0===n&&(n=0),this.Descriptor=e,this.Operation=t,this.Flag=n}return e.prototype.toString=function(){return"[desc="+this.Descriptor+",operation="+this.Operation+",flag="+this.Flag+"]"},e}()
e.Rule=t}(e.formatting||(e.formatting={}))}(ts||(ts={})),function(e){!function(e){!function(e){e[e.Ignore=1]="Ignore",e[e.Space=2]="Space",e[e.NewLine=4]="NewLine",e[e.Delete=8]="Delete"}(e.RuleAction||(e.RuleAction={})),e.RuleAction}(e.formatting||(e.formatting={}))}(ts||(ts={})),function(e){!function(e){var t=function(){function t(e,t){this.LeftTokenRange=e,this.RightTokenRange=t}return t.prototype.toString=function(){return"[leftRange="+this.LeftTokenRange+",rightRange="+this.RightTokenRange+"]"},t.create1=function(n,r){return t.create4(e.Shared.TokenRange.FromToken(n),e.Shared.TokenRange.FromToken(r))},t.create2=function(n,r){return t.create4(n,e.Shared.TokenRange.FromToken(r))},t.create3=function(n,r){return t.create4(e.Shared.TokenRange.FromToken(n),r)},t.create4=function(e,n){return new t(e,n)},t}()
e.RuleDescriptor=t}(e.formatting||(e.formatting={}))}(ts||(ts={})),function(e){!function(e){!function(e){e[e.None=0]="None",e[e.CanDeleteNewLines=1]="CanDeleteNewLines"}(e.RuleFlags||(e.RuleFlags={})),e.RuleFlags}(e.formatting||(e.formatting={}))}(ts||(ts={}))
!function(e){!function(e){var t=function(){function t(){this.Context=null,this.Action=null}return t.prototype.toString=function(){return"[context="+this.Context+",action="+this.Action+"]"},t.create1=function(n){return t.create2(e.RuleOperationContext.Any,n)},t.create2=function(e,n){var r=new t
return r.Context=e,r.Action=n,r},t}()
e.RuleOperation=t}(e.formatting||(e.formatting={}))}(ts||(ts={})),function(e){!function(e){var t=function(){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t]
this.customContextChecks=e}return e.prototype.IsAny=function(){return this===e.Any},e.prototype.InContext=function(e){if(this.IsAny())return!0
for(var t=0,n=this.customContextChecks;t<n.length;t++){if(!(0,n[t])(e))return!1}return!0},e.Any=new e,e}()
e.RuleOperationContext=t}(e.formatting||(e.formatting={}))}(ts||(ts={})),function(e){!function(t){var n=function(){function n(){this.IgnoreBeforeComment=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.Any,t.Shared.TokenRange.Comments),t.RuleOperation.create1(1)),this.IgnoreAfterLineComment=new t.Rule(t.RuleDescriptor.create3(2,t.Shared.TokenRange.Any),t.RuleOperation.create1(1)),this.NoSpaceBeforeSemicolon=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,23),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.NoSpaceBeforeColon=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,54),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsNotBinaryOpContext),8)),this.NoSpaceBeforeQuestionMark=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,53),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsNotBinaryOpContext),8)),this.SpaceAfterColon=new t.Rule(t.RuleDescriptor.create3(54,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsNotBinaryOpContext),2)),this.SpaceAfterQuestionMarkInConditionalOperator=new t.Rule(t.RuleDescriptor.create3(53,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsConditionalOperatorContext),2)),this.NoSpaceAfterQuestionMark=new t.Rule(t.RuleDescriptor.create3(53,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.SpaceAfterSemicolon=new t.Rule(t.RuleDescriptor.create3(23,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),2)),this.SpaceAfterCloseBrace=new t.Rule(t.RuleDescriptor.create3(16,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsAfterCodeBlockContext),2)),this.SpaceBetweenCloseBraceAndElse=new t.Rule(t.RuleDescriptor.create1(16,80),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),2)),this.SpaceBetweenCloseBraceAndWhile=new t.Rule(t.RuleDescriptor.create1(16,104),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),2)),this.NoSpaceAfterCloseBrace=new t.Rule(t.RuleDescriptor.create3(16,t.Shared.TokenRange.FromTokens([18,20,24,23])),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.NoSpaceBeforeDot=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,21),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.NoSpaceAfterDot=new t.Rule(t.RuleDescriptor.create3(21,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.NoSpaceBeforeOpenBracket=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,19),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.NoSpaceAfterCloseBracket=new t.Rule(t.RuleDescriptor.create3(20,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsNotBeforeBlockInFunctionDeclarationContext),8)),this.FunctionOpenBraceLeftTokenRange=t.Shared.TokenRange.AnyIncludingMultilineComments,this.SpaceBeforeOpenBraceInFunction=new t.Rule(t.RuleDescriptor.create2(this.FunctionOpenBraceLeftTokenRange,15),t.RuleOperation.create2(new t.RuleOperationContext(n.IsFunctionDeclContext,n.IsBeforeBlockContext,n.IsNotFormatOnEnter,n.IsSameLineTokenOrBeforeMultilineBlockContext),2),1),this.TypeScriptOpenBraceLeftTokenRange=t.Shared.TokenRange.FromTokens([69,3,73]),this.SpaceBeforeOpenBraceInTypeScriptDeclWithBlock=new t.Rule(t.RuleDescriptor.create2(this.TypeScriptOpenBraceLeftTokenRange,15),t.RuleOperation.create2(new t.RuleOperationContext(n.IsTypeScriptDeclWithBlockContext,n.IsNotFormatOnEnter,n.IsSameLineTokenOrBeforeMultilineBlockContext),2),1),this.ControlOpenBraceLeftTokenRange=t.Shared.TokenRange.FromTokens([18,3,79,100,85,80]),this.SpaceBeforeOpenBraceInControl=new t.Rule(t.RuleDescriptor.create2(this.ControlOpenBraceLeftTokenRange,15),t.RuleOperation.create2(new t.RuleOperationContext(n.IsControlDeclContext,n.IsNotFormatOnEnter,n.IsSameLineTokenOrBeforeMultilineBlockContext),2),1),this.SpaceAfterOpenBrace=new t.Rule(t.RuleDescriptor.create3(15,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSingleLineBlockContext),2)),this.SpaceBeforeCloseBrace=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,16),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSingleLineBlockContext),2)),this.NoSpaceBetweenEmptyBraceBrackets=new t.Rule(t.RuleDescriptor.create1(15,16),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsObjectContext),8)),this.NewLineAfterOpenBraceInBlockContext=new t.Rule(t.RuleDescriptor.create3(15,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsMultilineBlockContext),4)),this.NewLineBeforeCloseBraceInBlockContext=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.AnyIncludingMultilineComments,16),t.RuleOperation.create2(new t.RuleOperationContext(n.IsMultilineBlockContext),4)),this.NoSpaceAfterUnaryPrefixOperator=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.UnaryPrefixOperators,t.Shared.TokenRange.UnaryPrefixExpressions),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsNotBinaryOpContext),8)),this.NoSpaceAfterUnaryPreincrementOperator=new t.Rule(t.RuleDescriptor.create3(41,t.Shared.TokenRange.UnaryPreincrementExpressions),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.NoSpaceAfterUnaryPredecrementOperator=new t.Rule(t.RuleDescriptor.create3(42,t.Shared.TokenRange.UnaryPredecrementExpressions),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.NoSpaceBeforeUnaryPostincrementOperator=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.UnaryPostincrementExpressions,41),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.NoSpaceBeforeUnaryPostdecrementOperator=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.UnaryPostdecrementExpressions,42),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.SpaceAfterPostincrementWhenFollowedByAdd=new t.Rule(t.RuleDescriptor.create1(41,35),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsBinaryOpContext),2)),this.SpaceAfterAddWhenFollowedByUnaryPlus=new t.Rule(t.RuleDescriptor.create1(35,35),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsBinaryOpContext),2)),this.SpaceAfterAddWhenFollowedByPreincrement=new t.Rule(t.RuleDescriptor.create1(35,41),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsBinaryOpContext),2)),this.SpaceAfterPostdecrementWhenFollowedBySubtract=new t.Rule(t.RuleDescriptor.create1(42,36),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsBinaryOpContext),2)),this.SpaceAfterSubtractWhenFollowedByUnaryMinus=new t.Rule(t.RuleDescriptor.create1(36,36),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsBinaryOpContext),2)),this.SpaceAfterSubtractWhenFollowedByPredecrement=new t.Rule(t.RuleDescriptor.create1(36,42),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsBinaryOpContext),2)),this.NoSpaceBeforeComma=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,24),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.SpaceAfterCertainKeywords=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.FromTokens([102,98,92,78,94,101,119]),t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),2)),this.SpaceAfterLetConstInVariableDeclaration=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.FromTokens([108,74]),t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsStartOfVariableDeclarationList),2)),this.NoSpaceBeforeOpenParenInFuncCall=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,17),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsFunctionCallOrNewContext,n.IsPreviousTokenNotComma),8)),this.SpaceAfterFunctionInFuncDecl=new t.Rule(t.RuleDescriptor.create3(87,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsFunctionDeclContext),2)),this.NoSpaceBeforeOpenParenInFuncDecl=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,17),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsFunctionDeclContext),8)),this.SpaceAfterVoidOperator=new t.Rule(t.RuleDescriptor.create3(103,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsVoidOpContext),2)),this.NoSpaceBetweenReturnAndSemicolon=new t.Rule(t.RuleDescriptor.create1(94,23),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.SpaceBetweenStatements=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.FromTokens([18,79,80,71]),t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsNotForContext),2)),this.SpaceAfterTryFinally=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.FromTokens([100,85]),15),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),2)),this.SpaceAfterGetSetInMember=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.FromTokens([123,129]),69),t.RuleOperation.create2(new t.RuleOperationContext(n.IsFunctionDeclContext),2)),this.SpaceBeforeBinaryKeywordOperator=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.Any,t.Shared.TokenRange.BinaryKeywordOperators),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsBinaryOpContext),2)),this.SpaceAfterBinaryKeywordOperator=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.BinaryKeywordOperators,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsBinaryOpContext),2)),this.NoSpaceAfterConstructor=new t.Rule(t.RuleDescriptor.create1(121,17),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.NoSpaceAfterModuleImport=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.FromTokens([125,127]),17),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.SpaceAfterCertainTypeScriptKeywords=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.FromTokens([115,73,122,77,81,82,83,123,106,89,107,125,126,110,112,111,129,113,132]),t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),2)),this.SpaceBeforeCertainTypeScriptKeywords=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.Any,t.Shared.TokenRange.FromTokens([83,106])),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),2)),this.SpaceAfterModuleName=new t.Rule(t.RuleDescriptor.create1(9,15),t.RuleOperation.create2(new t.RuleOperationContext(n.IsModuleDeclContext),2)),this.SpaceBeforeArrow=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,34),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),2)),this.SpaceAfterArrow=new t.Rule(t.RuleDescriptor.create3(34,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),2)),this.NoSpaceAfterEllipsis=new t.Rule(t.RuleDescriptor.create1(22,69),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.NoSpaceAfterOptionalParameters=new t.Rule(t.RuleDescriptor.create3(53,t.Shared.TokenRange.FromTokens([18,24])),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsNotBinaryOpContext),8)),this.NoSpaceBeforeOpenAngularBracket=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.TypeNames,25),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsTypeArgumentOrParameterOrAssertionContext),8)),this.NoSpaceBetweenCloseParenAndAngularBracket=new t.Rule(t.RuleDescriptor.create1(18,25),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsTypeArgumentOrParameterOrAssertionContext),8)),this.NoSpaceAfterOpenAngularBracket=new t.Rule(t.RuleDescriptor.create3(25,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsTypeArgumentOrParameterOrAssertionContext),8)),this.NoSpaceBeforeCloseAngularBracket=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,27),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsTypeArgumentOrParameterOrAssertionContext),8)),this.NoSpaceAfterCloseAngularBracket=new t.Rule(t.RuleDescriptor.create3(27,t.Shared.TokenRange.FromTokens([17,19,27,24])),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsTypeArgumentOrParameterOrAssertionContext),8)),this.NoSpaceAfterTypeAssertion=new t.Rule(t.RuleDescriptor.create3(27,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsTypeAssertionContext),8)),this.NoSpaceBetweenEmptyInterfaceBraceBrackets=new t.Rule(t.RuleDescriptor.create1(15,16),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsObjectTypeContext),8)),this.SpaceBeforeAt=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,55),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),2)),this.NoSpaceAfterAt=new t.Rule(t.RuleDescriptor.create3(55,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.SpaceAfterDecorator=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.Any,t.Shared.TokenRange.FromTokens([115,69,82,77,73,113,112,110,111,123,129,19,37])),t.RuleOperation.create2(new t.RuleOperationContext(n.IsEndOfDecoratorContextOnSameLine),2)),this.NoSpaceBetweenFunctionKeywordAndStar=new t.Rule(t.RuleDescriptor.create1(87,37),t.RuleOperation.create2(new t.RuleOperationContext(n.IsFunctionDeclarationOrFunctionExpressionContext),8)),this.SpaceAfterStarInGeneratorDeclaration=new t.Rule(t.RuleDescriptor.create3(37,t.Shared.TokenRange.FromTokens([69,17])),t.RuleOperation.create2(new t.RuleOperationContext(n.IsFunctionDeclarationOrFunctionExpressionContext),2)),this.NoSpaceBetweenYieldKeywordAndStar=new t.Rule(t.RuleDescriptor.create1(114,37),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsYieldOrYieldStarWithOperand),8)),this.SpaceBetweenYieldOrYieldStarAndOperand=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.FromTokens([114,37]),t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsYieldOrYieldStarWithOperand),2)),this.SpaceBetweenAsyncAndOpenParen=new t.Rule(t.RuleDescriptor.create1(118,17),t.RuleOperation.create2(new t.RuleOperationContext(n.IsArrowFunctionContext,n.IsSameLineTokenContext),2)),this.SpaceBetweenAsyncAndFunctionKeyword=new t.Rule(t.RuleDescriptor.create1(118,87),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),2)),this.NoSpaceBetweenTagAndTemplateString=new t.Rule(t.RuleDescriptor.create3(69,t.Shared.TokenRange.FromTokens([11,12])),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.HighPriorityCommonRules=[this.IgnoreBeforeComment,this.IgnoreAfterLineComment,this.NoSpaceBeforeColon,this.SpaceAfterColon,this.NoSpaceBeforeQuestionMark,this.SpaceAfterQuestionMarkInConditionalOperator,this.NoSpaceAfterQuestionMark,this.NoSpaceBeforeDot,this.NoSpaceAfterDot,this.NoSpaceAfterUnaryPrefixOperator,this.NoSpaceAfterUnaryPreincrementOperator,this.NoSpaceAfterUnaryPredecrementOperator,this.NoSpaceBeforeUnaryPostincrementOperator,this.NoSpaceBeforeUnaryPostdecrementOperator,this.SpaceAfterPostincrementWhenFollowedByAdd,this.SpaceAfterAddWhenFollowedByUnaryPlus,this.SpaceAfterAddWhenFollowedByPreincrement,this.SpaceAfterPostdecrementWhenFollowedBySubtract,this.SpaceAfterSubtractWhenFollowedByUnaryMinus,this.SpaceAfterSubtractWhenFollowedByPredecrement,this.NoSpaceAfterCloseBrace,this.SpaceAfterOpenBrace,this.SpaceBeforeCloseBrace,this.NewLineBeforeCloseBraceInBlockContext,this.SpaceAfterCloseBrace,this.SpaceBetweenCloseBraceAndElse,this.SpaceBetweenCloseBraceAndWhile,this.NoSpaceBetweenEmptyBraceBrackets,this.NoSpaceBetweenFunctionKeywordAndStar,this.SpaceAfterStarInGeneratorDeclaration,this.SpaceAfterFunctionInFuncDecl,this.NewLineAfterOpenBraceInBlockContext,this.SpaceAfterGetSetInMember,this.NoSpaceBetweenYieldKeywordAndStar,this.SpaceBetweenYieldOrYieldStarAndOperand,this.NoSpaceBetweenReturnAndSemicolon,this.SpaceAfterCertainKeywords,this.SpaceAfterLetConstInVariableDeclaration,this.NoSpaceBeforeOpenParenInFuncCall,this.SpaceBeforeBinaryKeywordOperator,this.SpaceAfterBinaryKeywordOperator,this.SpaceAfterVoidOperator,this.SpaceBetweenAsyncAndOpenParen,this.SpaceBetweenAsyncAndFunctionKeyword,this.NoSpaceBetweenTagAndTemplateString,this.NoSpaceAfterConstructor,this.NoSpaceAfterModuleImport,this.SpaceAfterCertainTypeScriptKeywords,this.SpaceBeforeCertainTypeScriptKeywords,this.SpaceAfterModuleName,this.SpaceBeforeArrow,this.SpaceAfterArrow,this.NoSpaceAfterEllipsis,this.NoSpaceAfterOptionalParameters,this.NoSpaceBetweenEmptyInterfaceBraceBrackets,this.NoSpaceBeforeOpenAngularBracket,this.NoSpaceBetweenCloseParenAndAngularBracket,this.NoSpaceAfterOpenAngularBracket,this.NoSpaceBeforeCloseAngularBracket,this.NoSpaceAfterCloseAngularBracket,this.NoSpaceAfterTypeAssertion,this.SpaceBeforeAt,this.NoSpaceAfterAt,this.SpaceAfterDecorator],this.LowPriorityCommonRules=[this.NoSpaceBeforeSemicolon,this.SpaceBeforeOpenBraceInControl,this.SpaceBeforeOpenBraceInFunction,this.SpaceBeforeOpenBraceInTypeScriptDeclWithBlock,this.NoSpaceBeforeComma,this.NoSpaceBeforeOpenBracket,this.NoSpaceAfterCloseBracket,this.SpaceAfterSemicolon,this.NoSpaceBeforeOpenParenInFuncDecl,this.SpaceBetweenStatements,this.SpaceAfterTryFinally],this.SpaceAfterComma=new t.Rule(t.RuleDescriptor.create3(24,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsNextTokenNotCloseBracket),2)),this.NoSpaceAfterComma=new t.Rule(t.RuleDescriptor.create3(24,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.SpaceBeforeBinaryOperator=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.Any,t.Shared.TokenRange.BinaryOperators),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsBinaryOpContext),2)),this.SpaceAfterBinaryOperator=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.BinaryOperators,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsBinaryOpContext),2)),this.NoSpaceBeforeBinaryOperator=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.Any,t.Shared.TokenRange.BinaryOperators),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsBinaryOpContext),8)),this.NoSpaceAfterBinaryOperator=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.BinaryOperators,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsBinaryOpContext),8)),this.SpaceAfterKeywordInControl=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Keywords,17),t.RuleOperation.create2(new t.RuleOperationContext(n.IsControlDeclContext),2)),this.NoSpaceAfterKeywordInControl=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Keywords,17),t.RuleOperation.create2(new t.RuleOperationContext(n.IsControlDeclContext),8)),this.NewLineBeforeOpenBraceInFunction=new t.Rule(t.RuleDescriptor.create2(this.FunctionOpenBraceLeftTokenRange,15),t.RuleOperation.create2(new t.RuleOperationContext(n.IsFunctionDeclContext,n.IsBeforeMultilineBlockContext),4),1),this.NewLineBeforeOpenBraceInTypeScriptDeclWithBlock=new t.Rule(t.RuleDescriptor.create2(this.TypeScriptOpenBraceLeftTokenRange,15),t.RuleOperation.create2(new t.RuleOperationContext(n.IsTypeScriptDeclWithBlockContext,n.IsBeforeMultilineBlockContext),4),1),this.NewLineBeforeOpenBraceInControl=new t.Rule(t.RuleDescriptor.create2(this.ControlOpenBraceLeftTokenRange,15),t.RuleOperation.create2(new t.RuleOperationContext(n.IsControlDeclContext,n.IsBeforeMultilineBlockContext),4),1),this.SpaceAfterSemicolonInFor=new t.Rule(t.RuleDescriptor.create3(23,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsForContext),2)),this.NoSpaceAfterSemicolonInFor=new t.Rule(t.RuleDescriptor.create3(23,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext,n.IsForContext),8)),this.SpaceAfterOpenParen=new t.Rule(t.RuleDescriptor.create3(17,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),2)),this.SpaceBeforeCloseParen=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,18),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),2)),this.NoSpaceBetweenParens=new t.Rule(t.RuleDescriptor.create1(17,18),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.NoSpaceAfterOpenParen=new t.Rule(t.RuleDescriptor.create3(17,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.NoSpaceBeforeCloseParen=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,18),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.SpaceAfterOpenBracket=new t.Rule(t.RuleDescriptor.create3(19,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),2)),this.SpaceBeforeCloseBracket=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,20),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),2)),this.NoSpaceBetweenBrackets=new t.Rule(t.RuleDescriptor.create1(19,20),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.NoSpaceAfterOpenBracket=new t.Rule(t.RuleDescriptor.create3(19,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.NoSpaceBeforeCloseBracket=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,20),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.NoSpaceAfterTemplateHeadAndMiddle=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.FromTokens([12,13]),t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.SpaceAfterTemplateHeadAndMiddle=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.FromTokens([12,13]),t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),2)),this.NoSpaceBeforeTemplateMiddleAndTail=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.Any,t.Shared.TokenRange.FromTokens([13,14])),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),8)),this.SpaceBeforeTemplateMiddleAndTail=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.Any,t.Shared.TokenRange.FromTokens([13,14])),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSameLineTokenContext),2)),this.SpaceAfterAnonymousFunctionKeyword=new t.Rule(t.RuleDescriptor.create1(87,17),t.RuleOperation.create2(new t.RuleOperationContext(n.IsFunctionDeclContext),2)),this.NoSpaceAfterAnonymousFunctionKeyword=new t.Rule(t.RuleDescriptor.create1(87,17),t.RuleOperation.create2(new t.RuleOperationContext(n.IsFunctionDeclContext),8))}return n.prototype.getRuleName=function(e){for(var t in this)if(this[t]===e)return t
throw new Error("Unknown rule")},n.IsForContext=function(e){return 202===e.contextNode.kind},n.IsNotForContext=function(e){return!n.IsForContext(e)},n.IsBinaryOpContext=function(e){switch(e.contextNode.kind){case 184:case 185:case 192:case 151:case 159:case 160:return!0
case 166:case 219:case 224:case 214:case 139:case 250:case 142:case 141:return 56===e.currentTokenSpan.kind||56===e.nextTokenSpan.kind
case 203:return 90===e.currentTokenSpan.kind||90===e.nextTokenSpan.kind
case 204:return 135===e.currentTokenSpan.kind||135===e.nextTokenSpan.kind}return!1},n.IsNotBinaryOpContext=function(e){return!n.IsBinaryOpContext(e)},n.IsConditionalOperatorContext=function(e){return 185===e.contextNode.kind},n.IsSameLineTokenOrBeforeMultilineBlockContext=function(e){return e.TokensAreOnSameLine()||n.IsBeforeMultilineBlockContext(e)},n.IsBeforeMultilineBlockContext=function(e){return n.IsBeforeBlockContext(e)&&!(e.NextNodeAllOnSameLine()||e.NextNodeBlockIsOnOneLine())},n.IsMultilineBlockContext=function(e){return n.IsBlockContext(e)&&!(e.ContextNodeAllOnSameLine()||e.ContextNodeBlockIsOnOneLine())},n.IsSingleLineBlockContext=function(e){return n.IsBlockContext(e)&&(e.ContextNodeAllOnSameLine()||e.ContextNodeBlockIsOnOneLine())},n.IsBlockContext=function(e){return n.NodeIsBlockContext(e.contextNode)},n.IsBeforeBlockContext=function(e){return n.NodeIsBlockContext(e.nextTokenParent)},n.NodeIsBlockContext=function(e){if(n.NodeIsTypeScriptDeclWithBlockContext(e))return!0
switch(e.kind){case 195:case 223:case 168:case 222:return!0}return!1},n.IsFunctionDeclContext=function(e){switch(e.contextNode.kind){case 216:case 144:case 143:case 146:case 147:case 148:case 176:case 145:case 177:case 218:return!0}return!1},n.IsFunctionDeclarationOrFunctionExpressionContext=function(e){return 216===e.contextNode.kind||176===e.contextNode.kind},n.IsTypeScriptDeclWithBlockContext=function(e){return n.NodeIsTypeScriptDeclWithBlockContext(e.contextNode)},n.NodeIsTypeScriptDeclWithBlockContext=function(e){switch(e.kind){case 217:case 189:case 218:case 220:case 156:case 221:return!0}return!1},n.IsAfterCodeBlockContext=function(e){switch(e.currentTokenParent.kind){case 217:case 221:case 220:case 195:case 247:case 222:case 209:return!0}return!1},n.IsControlDeclContext=function(e){switch(e.contextNode.kind){case 199:case 209:case 202:case 203:case 204:case 201:case 212:case 200:case 208:case 247:return!0
default:return!1}},n.IsObjectContext=function(e){return 168===e.contextNode.kind},n.IsFunctionCallContext=function(e){return 171===e.contextNode.kind},n.IsNewContext=function(e){return 172===e.contextNode.kind},n.IsFunctionCallOrNewContext=function(e){return n.IsFunctionCallContext(e)||n.IsNewContext(e)},n.IsPreviousTokenNotComma=function(e){return 24!==e.currentTokenSpan.kind},n.IsNextTokenNotCloseBracket=function(e){return 20!==e.nextTokenSpan.kind},n.IsArrowFunctionContext=function(e){return 177===e.contextNode.kind},n.IsSameLineTokenContext=function(e){return e.TokensAreOnSameLine()},n.IsNotBeforeBlockInFunctionDeclarationContext=function(e){return!n.IsFunctionDeclContext(e)&&!n.IsBeforeBlockContext(e)},n.IsEndOfDecoratorContextOnSameLine=function(e){return e.TokensAreOnSameLine()&&e.contextNode.decorators&&n.NodeIsInDecoratorContext(e.currentTokenParent)&&!n.NodeIsInDecoratorContext(e.nextTokenParent)},n.NodeIsInDecoratorContext=function(t){for(;e.isExpression(t);)t=t.parent
return 140===t.kind},n.IsStartOfVariableDeclarationList=function(e){return 215===e.currentTokenParent.kind&&e.currentTokenParent.getStart(e.sourceFile)===e.currentTokenSpan.pos},n.IsNotFormatOnEnter=function(e){return 2!==e.formattingRequestKind},n.IsModuleDeclContext=function(e){return 221===e.contextNode.kind},n.IsObjectTypeContext=function(e){return 156===e.contextNode.kind},n.IsTypeArgumentOrParameterOrAssertion=function(e,t){if(25!==e.kind&&27!==e.kind)return!1
switch(t.kind){case 152:case 174:case 217:case 189:case 218:case 216:case 176:case 177:case 144:case 143:case 148:case 149:case 171:case 172:case 191:return!0
default:return!1}},n.IsTypeArgumentOrParameterOrAssertionContext=function(e){return n.IsTypeArgumentOrParameterOrAssertion(e.currentTokenSpan,e.currentTokenParent)||n.IsTypeArgumentOrParameterOrAssertion(e.nextTokenSpan,e.nextTokenParent)},n.IsTypeAssertionContext=function(e){return 174===e.contextNode.kind},n.IsVoidOpContext=function(e){return 103===e.currentTokenSpan.kind&&180===e.currentTokenParent.kind},n.IsYieldOrYieldStarWithOperand=function(e){return 187===e.contextNode.kind&&void 0!==e.contextNode.expression},n}()
t.Rules=n}(e.formatting||(e.formatting={}))}(ts||(ts={})),function(e){!function(t){var n=function(){function e(){this.map=[],this.mapRowLength=0}return e.create=function(t){var n=new e
return n.Initialize(t),n},e.prototype.Initialize=function(e){this.mapRowLength=136,this.map=new Array(this.mapRowLength*this.mapRowLength)
var t=new Array(this.map.length)
return this.FillRules(e,t),this.map},e.prototype.FillRules=function(e,t){var n=this
e.forEach(function(e){n.FillRule(e,t)})},e.prototype.GetRuleBucketIndex=function(e,t){return e*this.mapRowLength+t},e.prototype.FillRule=function(e,n){var r=this,a=e.Descriptor.LeftTokenRange!==t.Shared.TokenRange.Any&&e.Descriptor.RightTokenRange!==t.Shared.TokenRange.Any
e.Descriptor.LeftTokenRange.GetTokens().forEach(function(t){e.Descriptor.RightTokenRange.GetTokens().forEach(function(o){var s=r.GetRuleBucketIndex(t,o),c=r.map[s]
void 0===c&&(c=r.map[s]=new i),c.AddRule(e,a,n,s)})})},e.prototype.GetRule=function(e){var t=this.GetRuleBucketIndex(e.currentTokenSpan.kind,e.nextTokenSpan.kind),n=this.map[t]
if(null!=n)for(var r=0,a=n.Rules();r<a.length;r++){var i=a[r]
if(i.Operation.Context.InContext(e))return i}return null},e}()
t.RulesMap=n
!function(e){e[e.IgnoreRulesSpecific=0]="IgnoreRulesSpecific",e[e.IgnoreRulesAny=5]="IgnoreRulesAny",e[e.ContextRulesSpecific=10]="ContextRulesSpecific",e[e.ContextRulesAny=15]="ContextRulesAny",e[e.NoContextRulesSpecific=20]="NoContextRulesSpecific",e[e.NoContextRulesAny=25]="NoContextRulesAny"}(t.RulesPosition||(t.RulesPosition={}))
var r=t.RulesPosition,a=function(){function t(){this.rulesInsertionIndexBitmap=0}return t.prototype.GetInsertionIndex=function(e){for(var t=0,n=0,r=this.rulesInsertionIndexBitmap;e>=n;)t+=31&r,r>>=5,n+=5
return t},t.prototype.IncreaseInsertionIndex=function(t){var n=this.rulesInsertionIndexBitmap>>t&31
n++,e.Debug.assert((31&n)===n,"Adding more rules into the sub-bucket than allowed. Maximum allowed is 32 rules.")
var r=this.rulesInsertionIndexBitmap&~(31<<t)
r|=n<<t,this.rulesInsertionIndexBitmap=r},t}()
t.RulesBucketConstructionState=a
var i=function(){function e(){this.rules=[]}return e.prototype.Rules=function(){return this.rules},e.prototype.AddRule=function(e,t,n,i){var o
o=1===e.Operation.Action?t?r.IgnoreRulesSpecific:r.IgnoreRulesAny:e.Operation.Context.IsAny()?t?r.NoContextRulesSpecific:r.NoContextRulesAny:t?r.ContextRulesSpecific:r.ContextRulesAny
var s=n[i]
void 0===s&&(s=n[i]=new a)
var c=s.GetInsertionIndex(o)
this.rules.splice(c,0,e),s.IncreaseInsertionIndex(o)},e}()
t.RulesBucket=i}(e.formatting||(e.formatting={}))}(ts||(ts={})),function(e){!function(t){!function(t){var n=function(){function t(t,n,r){this.tokens=[]
for(var a=t;n>=a;a++)e.indexOf(r,a)<0&&this.tokens.push(a)}return t.prototype.GetTokens=function(){return this.tokens},t.prototype.Contains=function(e){return this.tokens.indexOf(e)>=0},t}()
t.TokenRangeAccess=n
var r=function(){function e(e){this.tokens=e&&e.length?e:[]}return e.prototype.GetTokens=function(){return this.tokens},e.prototype.Contains=function(e){return this.tokens.indexOf(e)>=0},e}()
t.TokenValuesAccess=r
var a=function(){function e(e){this.token=e}return e.prototype.GetTokens=function(){return[this.token]},e.prototype.Contains=function(e){return e===this.token},e}()
t.TokenSingleValueAccess=a
var i=function(){function e(){}return e.prototype.GetTokens=function(){for(var e=[],t=0;135>=t;t++)e.push(t)
return e},e.prototype.Contains=function(e){return!0},e.prototype.toString=function(){return"[allTokens]"},e}()
t.TokenAllAccess=i
var o=function(){function e(e){this.tokenAccess=e}return e.FromToken=function(t){return new e(new a(t))},e.FromTokens=function(t){return new e(new r(t))},e.FromRange=function(t,r,a){return void 0===a&&(a=[]),new e(new n(t,r,a))},e.AllTokens=function(){return new e(new i)},e.prototype.GetTokens=function(){return this.tokenAccess.GetTokens()},e.prototype.Contains=function(e){return this.tokenAccess.Contains(e)},e.prototype.toString=function(){return this.tokenAccess.toString()},e.Any=e.AllTokens(),e.AnyIncludingMultilineComments=e.FromTokens(e.Any.GetTokens().concat([3])),e.Keywords=e.FromRange(70,135),e.BinaryOperators=e.FromRange(25,68),e.BinaryKeywordOperators=e.FromTokens([90,91,135,116,124]),e.UnaryPrefixOperators=e.FromTokens([41,42,50,49]),e.UnaryPrefixExpressions=e.FromTokens([8,69,17,19,15,97,92]),e.UnaryPreincrementExpressions=e.FromTokens([69,17,97,92]),e.UnaryPostincrementExpressions=e.FromTokens([69,18,20,92]),e.UnaryPredecrementExpressions=e.FromTokens([69,17,97,92]),e.UnaryPostdecrementExpressions=e.FromTokens([69,18,20,92]),e.Comments=e.FromTokens([2,3]),e.TypeNames=e.FromTokens([69,128,130,120,131,103,117]),e}()
t.TokenRange=o}(t.Shared||(t.Shared={}))}(e.formatting||(e.formatting={}))}(ts||(ts={})),function(e){!function(t){var n=function(){function n(){this.globalRules=new t.Rules}return n.prototype.getRuleName=function(e){return this.globalRules.getRuleName(e)},n.prototype.getRuleByName=function(e){return this.globalRules[e]},n.prototype.getRulesMap=function(){return this.rulesMap},n.prototype.ensureUpToDate=function(n){if(null==this.options||!e.compareDataObjects(this.options,n)){var r=this.createActiveRules(n),a=t.RulesMap.create(r)
this.activeRules=r,this.rulesMap=a,this.options=e.clone(n)}},n.prototype.createActiveRules=function(e){var t=this.globalRules.HighPriorityCommonRules.slice(0)
return e.InsertSpaceAfterCommaDelimiter?t.push(this.globalRules.SpaceAfterComma):t.push(this.globalRules.NoSpaceAfterComma),e.InsertSpaceAfterFunctionKeywordForAnonymousFunctions?t.push(this.globalRules.SpaceAfterAnonymousFunctionKeyword):t.push(this.globalRules.NoSpaceAfterAnonymousFunctionKeyword),e.InsertSpaceAfterKeywordsInControlFlowStatements?t.push(this.globalRules.SpaceAfterKeywordInControl):t.push(this.globalRules.NoSpaceAfterKeywordInControl),e.InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis?(t.push(this.globalRules.SpaceAfterOpenParen),t.push(this.globalRules.SpaceBeforeCloseParen),t.push(this.globalRules.NoSpaceBetweenParens)):(t.push(this.globalRules.NoSpaceAfterOpenParen),t.push(this.globalRules.NoSpaceBeforeCloseParen),t.push(this.globalRules.NoSpaceBetweenParens)),e.InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets?(t.push(this.globalRules.SpaceAfterOpenBracket),t.push(this.globalRules.SpaceBeforeCloseBracket),t.push(this.globalRules.NoSpaceBetweenBrackets)):(t.push(this.globalRules.NoSpaceAfterOpenBracket),t.push(this.globalRules.NoSpaceBeforeCloseBracket),t.push(this.globalRules.NoSpaceBetweenBrackets)),e.InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces?(t.push(this.globalRules.SpaceAfterTemplateHeadAndMiddle),t.push(this.globalRules.SpaceBeforeTemplateMiddleAndTail)):(t.push(this.globalRules.NoSpaceAfterTemplateHeadAndMiddle),t.push(this.globalRules.NoSpaceBeforeTemplateMiddleAndTail)),e.InsertSpaceAfterSemicolonInForStatements?t.push(this.globalRules.SpaceAfterSemicolonInFor):t.push(this.globalRules.NoSpaceAfterSemicolonInFor),e.InsertSpaceBeforeAndAfterBinaryOperators?(t.push(this.globalRules.SpaceBeforeBinaryOperator),t.push(this.globalRules.SpaceAfterBinaryOperator)):(t.push(this.globalRules.NoSpaceBeforeBinaryOperator),t.push(this.globalRules.NoSpaceAfterBinaryOperator)),e.PlaceOpenBraceOnNewLineForControlBlocks&&t.push(this.globalRules.NewLineBeforeOpenBraceInControl),e.PlaceOpenBraceOnNewLineForFunctions&&(t.push(this.globalRules.NewLineBeforeOpenBraceInFunction),t.push(this.globalRules.NewLineBeforeOpenBraceInTypeScriptDeclWithBlock)),t.concat(this.globalRules.LowPriorityCommonRules)},n}()
t.RulesProvider=n}(e.formatting||(e.formatting={}))}(ts||(ts={})),function(e){!function(t){function n(t,n,a,o,s,c){var _=r(t,n,a)
return _?i({pos:e.getLineStartPositionForPosition(_.getStart(a),a),end:_.end},a,o,s,c):[]}function r(t,n,r){var i=e.findPrecedingToken(t,r)
if(i&&i.kind===n&&t===i.getEnd()){for(var o=i;o&&o.parent&&o.parent.end===i.end&&!a(o.parent,o);)o=o.parent
return o}}function a(t,n){switch(t.kind){case 217:case 218:return e.rangeContainsRange(t.members,n)
case 221:var r=t.body
return r&&195===r.kind&&e.rangeContainsRange(r.statements,n)
case 251:case 195:case 222:return e.rangeContainsRange(t.statements,n)
case 247:return e.rangeContainsRange(t.block.statements,n)}return!1}function i(n,r,a,i,s){function c(n,i,o,s,c){if(e.rangeOverlapsWithStartEnd(s,n,i)||e.rangeContainsStartEnd(s,n,i)){if(-1!==c)return c}else{var _=r.getLineAndCharacterOfPosition(n).line,u=e.getLineStartPositionForPosition(n,r),l=t.SmartIndenter.findFirstNonWhitespaceColumn(u,n,r,a)
if(_!==o||n===l)return l}return-1}function _(e,n,i,o,s,c){var _=i,u=t.SmartIndenter.shouldIndentChildNode(e)?a.IndentSize:0
return c===n?(_=n===T?E:s.getIndentation(),u=Math.min(a.IndentSize,s.getDelta(e)+u)):-1===_&&(_=t.SmartIndenter.childStartsOnTheSameLineWithElseInIfStatement(o,e,n,r)?s.getIndentation():s.getIndentation()+s.getDelta(e)),{indentation:_,delta:u}}function u(e,n,r,i){function o(n,r){return t.SmartIndenter.nodeWillIndentChild(e,r,!0)?n:0}return{getIndentationForComment:function(e,t,n){switch(e){case 16:case 20:case 18:return r+o(i,n)}return-1!==t?t:r},getIndentationForToken:function(t,a,s){if(n!==t&&e.decorators&&a===function(e){if(e.modifiers&&e.modifiers.length)return e.modifiers[0].kind
switch(e.kind){case 217:return 73
case 218:return 107
case 216:return 87
case 220:return 220
case 146:return 123
case 147:return 129
case 144:if(e.asteriskToken)return 37
case 142:case 139:return e.name.kind}}(e))return r
switch(a){case 15:case 16:case 19:case 20:case 17:case 18:case 80:case 104:case 55:return r
default:return n!==t?r+o(i,s):r}},getIndentation:function(){return r},getDelta:function(e){return o(i,e)},recomputeIndentation:function(n){e.parent&&t.SmartIndenter.shouldIndentChildNode(e.parent,e)&&(n?r+=a.IndentSize:r-=a.IndentSize,i=t.SmartIndenter.shouldIndentChildNode(e)?a.IndentSize:0)}}}function l(t,a,i,o){for(var s=0,c=t;s<c.length;s++){var _=c[s]
if(e.isComment(_.kind)&&e.rangeContainsRange(n,_))d(_,r.getLineAndCharacterOfPosition(_.pos),a,i,o)}}function d(e,t,a,i,o){var s,c=w(e)
if(!c&&!x)if(C)s=p(e,t.line,a,C,S,D,i,o)
else{g(r.getLineAndCharacterOfPosition(n.pos).line,t.line)}return C=e,D=a,S=t.line,x=c,s}function p(e,t,n,a,o,s,c,_){A.updateContext(a,s,e,n,c)
var u,l,d=i.getRulesMap().GetRule(A)
return d?(b(d,a,o,e,t),10&d.Operation.Action&&t!==o?(l=!1,n.getStart(r)===e.pos&&_.recomputeIndentation(!1)):4&d.Operation.Action&&t===o&&(l=!0,n.getStart(r)===e.pos&&_.recomputeIndentation(!0)),u=!(8&d.Operation.Action)&&1!==d.Flag):u=!0,t!==o&&u&&g(o,t,a),l}function f(t,n,i){var s=o(n,a)
if(i)k(t,0,s)
else{var c=r.getLineAndCharacterOfPosition(t)
if(n!==c.character)k(e.getStartPositionOfLine(c.line,r),c.character,s)}}function m(n,i,s){var c,_=r.getLineAndCharacterOfPosition(n.pos).line,u=r.getLineAndCharacterOfPosition(n.end).line
if(_!==u){c=[]
for(var l=n.pos,d=_;u>d;++d){var p=e.getEndLinePosition(d,r)
c.push({pos:l,end:p}),l=e.getStartPositionOfLine(d+1,r)}c.push({pos:l,end:n.end})
var m=e.getStartPositionOfLine(_,r),g=t.SmartIndenter.findFirstNonWhitespaceCharacterAndColumn(m,c[0].pos,r,a)
if(i!==g.column){var y=0
s&&(y=1,_++)
for(var h=i-g.column,b=y,x=c.length;x>b;++b,++_){var C=e.getStartPositionOfLine(_,r),D=0===b?g:t.SmartIndenter.findFirstNonWhitespaceCharacterAndColumn(c[b].pos,c[b].end,r,a),S=D.column+h
if(S>0){var T=o(S,a)
k(C,D.character,T)}else v(C,D.character)}}}else s||f(n.pos,i,!1)}function g(t,n,a){for(var i=t;n>i;++i){var o=e.getStartPositionOfLine(i,r),s=e.getEndLinePosition(i,r)
if(!(a&&(e.isComment(a.kind)||e.isStringOrRegularExpressionOrTemplateLiteral(a.kind))&&a.pos<=s&&a.end>s)){var c=y(o,s);-1!==c&&(e.Debug.assert(c===o||!e.isWhiteSpace(r.text.charCodeAt(c-1))),v(c,s+1-c))}}}function y(t,n){for(var a=n;a>=t&&e.isWhiteSpace(r.text.charCodeAt(a));)a--
return a!==n?a+1:-1}function h(t,n,r){return{span:e.createTextSpan(t,n),newText:r}}function v(e,t){t&&R.push(h(e,t,""))}function k(e,t,n){(t||n)&&R.push(h(e,t,n))}function b(e,t,n,i,o){switch(e.Operation.Action){case 1:return
case 8:t.end!==i.pos&&v(t.end,i.pos-t.end)
break
case 4:if(1!==e.Flag&&n!==o)return
1!==o-n&&k(t.end,i.pos-t.end,a.NewLineCharacter)
break
case 2:if(1!==e.Flag&&n!==o)return
1===i.pos-t.end&&32===r.text.charCodeAt(t.end)||k(t.end,i.pos-t.end," ")}}var x,C,D,S,T,E,w=function(t,n){function r(e){return!1}if(!t.length)return r
var a=t.filter(function(t){return e.rangeOverlapsWithStartEnd(n,t.start,t.start+t.length)}).sort(function(e,t){return e.start-t.start})
if(!a.length)return r
var i=0
return function(t){for(;;){if(i>=a.length)return!1
var n=a[i]
if(t.end<=n.start)return!1
if(e.startEndOverlapsWithStartEnd(t.pos,t.end,n.start,n.start+n.length))return!0
i++}}}(r.parseDiagnostics,n),A=new t.FormattingContext(r,s),P=function(t,n){return function r(a){var i=e.forEachChild(a,function(r){return e.startEndContainsRange(r.getStart(n),r.end,t)&&r})
if(i){var o=r(i)
if(o)return o}return a}(n)}(n,r),N=t.getFormattingScanner(r,function(t,n,r){var a=t.getStart(r)
if(a===n.pos&&t.end===n.end)return a
var i=e.findPrecedingToken(n.pos,r)
return i?i.end>=n.pos?t.pos:i.end:t.pos}(P,n,r),n.end),O=t.SmartIndenter.getIndentationForNode(P,n,r,a),R=[]
if(N.advance(),N.isOnToken()){var I=r.getLineAndCharacterOfPosition(P.getStart(r)).line,F=I
P.decorators&&(F=r.getLineAndCharacterOfPosition(e.getNonDecoratorTokenPosOfNode(P,r)).line),function t(a,i,o,s,p,g){function y(i,o,s,u,l,d,p){var f=i.getStart(r),m=r.getLineAndCharacterOfPosition(f).line,g=m
i.decorators&&(g=r.getLineAndCharacterOfPosition(e.getNonDecoratorTokenPosOfNode(i,r)).line)
var y=-1
if(p&&-1!==(y=c(f,i.end,l,n,o))&&(o=y),!e.rangeOverlapsWithStartEnd(n,i.pos,i.end))return o
if(0===i.getFullWidth())return o
for(;N.isOnToken()&&!((h=N.readTokenInfo(a)).token.end>f);)v(h,a,u)
if(!N.isOnToken())return o
if(e.isToken(i)){var h=N.readTokenInfo(i)
return e.Debug.assert(h.token.end===i.end),v(h,a,u,i),o}var k=140===i.kind?m:d,x=_(i,m,y,a,u,k)
return t(i,b,m,g,x.indentation,x.delta),b=a,o}function h(t,n,a,i){var o=function(e,t){switch(e.kind){case 145:case 216:case 176:case 144:case 143:case 177:if(e.typeParameters===t)return 25
if(e.parameters===t)return 17
break
case 171:case 172:if(e.typeArguments===t)return 25
if(e.arguments===t)return 17
break
case 152:if(e.typeArguments===t)return 25}return 0}(n,t),s=function(e){switch(e){case 17:return 18
case 25:return 27}return 0}(o),c=i,l=a
if(0!==o)for(;N.isOnToken();){var d
if((d=N.readTokenInfo(n)).token.end>t.pos)break
if(d.token.kind===o){l=r.getLineAndCharacterOfPosition(d.token.pos).line
var p=_(d.token,l,-1,n,i,a)
v(d,n,c=u(n,a,p.indentation,p.delta))}else v(d,n,i)}for(var f=-1,m=0,g=t;m<g.length;m++)f=y(g[m],f,0,c,l,l,!0)
0!==s&&N.isOnToken()&&(d=N.readTokenInfo(n)).token.kind===s&&e.rangeContainsRange(n,d.token)&&v(d,n,c)}function v(t,a,i,o){e.Debug.assert(e.rangeContainsRange(a,t.token))
var s=N.lastTrailingTriviaWasNewLine(),c=!1
t.leadingTrivia&&l(t.leadingTrivia,a,b,i)
var _,u=e.rangeContainsRange(n,t.token),p=r.getLineAndCharacterOfPosition(t.token.pos)
if(u){var g=w(t.token),y=C
if(_=d(t.token,p,a,b,i),g)c=!1
else if(void 0!==_)c=_
else{var h=y&&r.getLineAndCharacterOfPosition(y.end).line
c=s&&p.line!==h}}if(t.trailingTrivia&&l(t.trailingTrivia,a,b,i),c){var v=u&&!w(t.token)?i.getIndentationForToken(p.line,t.token.kind,o):-1
if(t.leadingTrivia)for(var k=i.getIndentationForComment(t.token.kind,v,o),x=!0,D=0,S=t.leadingTrivia;D<S.length;D++){var A=S[D]
if(e.rangeContainsRange(n,A))switch(A.kind){case 3:m(A,k,!x),x=!1
break
case 2:x&&(f(A.pos,k,!1),x=!1)
break
case 4:x=!0}}-1!==v&&(f(t.token.pos,v,_),T=p.line,E=v)}N.advance(),b=a}if(e.rangeOverlapsWithStartEnd(n,a.getStart(r),a.getEnd())){var k=u(a,o,p,g),b=i
for(e.forEachChild(a,function(e){y(e,-1,0,k,o,s,!1)},function(e){h(e,a,o,k)});N.isOnToken();){var x=N.readTokenInfo(a)
if(x.token.end>a.end)break
v(x,a,k)}}}(P,P,I,F,O,function(e,n,r){for(var a,i=-1;e;){var o=r.getLineAndCharacterOfPosition(e.getStart(r)).line
if(-1!==i&&o!==i)break
if(t.SmartIndenter.shouldIndentChildNode(e,a))return n.IndentSize
i=o,a=e,e=e.parent}return 0}(P,a,r))}if(!N.isOnToken()){var L=N.getCurrentLeadingTrivia()
L&&(l(L,P,P,void 0),function(){var e=C?C.end:n.pos
g(r.getLineAndCharacterOfPosition(e).line,r.getLineAndCharacterOfPosition(n.end).line+1,C)}())}return N.close(),R}function o(e,t){function n(e,t){for(var n="",r=0;t>r;++r)n+=e
return n}if((!c||c.tabSize!==t.TabSize||c.indentSize!==t.IndentSize)&&(c={tabSize:t.TabSize,indentSize:t.IndentSize},_=u=void 0),t.ConvertTabsToSpaces){var r=void 0,a=Math.floor(e/t.IndentSize),i=e%t.IndentSize
return u||(u=[]),void 0===u[a]?(r=n(" ",t.IndentSize*a),u[a]=r):r=u[a],i?r+n(" ",i):r}var o=Math.floor(e/t.TabSize),s=e-o*t.TabSize,l=void 0
return _||(_=[]),void 0===_[o]?_[o]=l=n("\t",o):l=_[o],s?l+n(" ",s):l}var s,c,_,u
!function(e){e[e.Unknown=-1]="Unknown"}(s||(s={})),t.formatOnEnter=function(t,n,r,a){var o=n.getLineAndCharacterOfPosition(t).line
if(0===o)return[]
for(var s=e.getEndLinePosition(o,n);e.isWhiteSpace(n.text.charCodeAt(s))&&!e.isLineBreak(n.text.charCodeAt(s));)s--
return i({pos:e.getStartPositionOfLine(o-1,n),end:s+1},n,a,r,2)},t.formatOnSemicolon=function(e,t,r,a){return n(e,23,t,a,r,3)},t.formatOnClosingCurly=function(e,t,r,a){return n(e,16,t,a,r,4)},t.formatDocument=function(e,t,n){return i({pos:0,end:e.text.length},e,n,t,0)},t.formatSelection=function(t,n,r,a,o){return i({pos:e.getLineStartPositionForPosition(t,r),end:n},r,o,a,1)},t.getIndentationString=o}(e.formatting||(e.formatting={}))}(ts||(ts={})),function(e){!function(t){!function(t){function n(e,t,n,a,o,s){for(var _,d=e.parent;d;){var p=!0
if(n){var f=e.getStart(o)
p=f<n.pos||f>n.end}if(p)if(-1!==(g=u(e,o,s)))return g+a
var m=(_=r(d,e,o)).line===t.line||c(d,e,t.line,o)
if(p){var g
if(-1!==(g=i(e,d,t,m,o,s)))return g+a
if(-1!==(g=l(e,o,s)))return g+a}y(d,e)&&!m&&(a+=s.IndentSize),t=_,d=(e=d).parent}return a}function r(e,t,n){var r=_(t,n)
return r?n.getLineAndCharacterOfPosition(r.pos):n.getLineAndCharacterOfPosition(e.getStart(n))}function a(t,n,r){var a=e.findListItemInfo(t)
return a&&a.listItemIndex>0?d(a.list.getChildren(),a.listItemIndex-1,n,r):-1}function i(t,n,r,a,i,o){return(e.isDeclaration(t)||e.isStatement(t))&&(251===n.kind||!a)?p(r,i,o):-1}function o(t,n,r,a){var i=e.findNextToken(t,n)
return!!i&&(15===i.kind||16===i.kind&&r===s(i,a).line)}function s(e,t){return t.getLineAndCharacterOfPosition(e.getStart(t))}function c(t,n,r,a){if(199===t.kind&&t.elseStatement===n){var i=e.findChildOfKind(t,80,a)
return e.Debug.assert(void 0!==i),s(i,a).line===r}return!1}function _(t,n){if(t.parent)switch(t.parent.kind){case 152:if(t.parent.typeArguments&&e.rangeContainsStartEnd(t.parent.typeArguments,t.getStart(n),t.getEnd()))return t.parent.typeArguments
break
case 168:return t.parent.properties
case 167:return t.parent.elements
case 216:case 176:case 177:case 144:case 143:case 148:case 149:var r=t.getStart(n)
if(t.parent.typeParameters&&e.rangeContainsStartEnd(t.parent.typeParameters,r,t.getEnd()))return t.parent.typeParameters
if(e.rangeContainsStartEnd(t.parent.parameters,r,t.getEnd()))return t.parent.parameters
break
case 172:case 171:r=t.getStart(n)
if(t.parent.typeArguments&&e.rangeContainsStartEnd(t.parent.typeArguments,r,t.getEnd()))return t.parent.typeArguments
if(t.parent.arguments&&e.rangeContainsStartEnd(t.parent.arguments,r,t.getEnd()))return t.parent.arguments}}function u(t,n,r){var a=_(t,n)
return a?function(a){var i=e.indexOf(a,t)
return-1!==i?d(a,i,n,r):-1}(a):-1}function l(e,t,n){if(18===e.kind)return-1
if(e.parent&&(171===e.parent.kind||172===e.parent.kind)&&e.parent.expression!==e){var r=e.parent.expression,a=function(e){for(;;)switch(e.kind){case 171:case 172:case 169:case 170:e=e.expression
break
default:return e}}(r)
if(r===a)return-1
var i=t.getLineAndCharacterOfPosition(r.end),o=t.getLineAndCharacterOfPosition(a.end)
return i.line===o.line?-1:p(i,t,n)}return-1}function d(t,n,r,a){e.Debug.assert(n>=0&&n<t.length)
for(var i=s(t[n],r),o=n-1;o>=0;--o)if(24!==t[o].kind){if(r.getLineAndCharacterOfPosition(t[o].end).line!==i.line)return p(i,r,a)
i=s(t[o],r)}return-1}function p(e,t,n){var r=t.getPositionOfLineAndCharacter(e.line,0)
return m(r,r+e.character,t,n)}function f(t,n,r,a){for(var i=0,o=0,s=t;n>s;++s){var c=r.text.charCodeAt(s)
if(!e.isWhiteSpace(c))break
9===c?o+=a.TabSize+o%a.TabSize:o++,i++}return{column:o,character:i}}function m(e,t,n,r){return f(e,t,n,r).column}function g(e,t,n){var r=t?t.kind:0
switch(e.kind){case 200:case 201:case 203:case 204:case 202:case 199:case 216:case 176:case 144:case 177:case 145:case 146:case 147:return 195!==r
case 236:return 240!==r}return n}function y(e,t){return function(e){switch(e){case 198:case 217:case 189:case 218:case 220:case 219:case 167:case 195:case 222:case 168:case 156:case 158:case 223:case 245:case 244:case 175:case 169:case 171:case 172:case 196:case 214:case 230:case 207:case 185:case 165:case 164:case 238:case 237:case 243:case 143:case 148:case 149:case 139:case 153:case 154:case 161:case 173:case 181:case 228:return!0}return!1}(e.kind)||g(e,t,!1)}var h
!function(e){e[e.Unknown=-1]="Unknown"}(h||(h={})),t.getIndentation=function(r,i,c){if(r>i.text.length)return 0
if(c.IndentStyle===e.IndentStyle.None)return 0
var _=e.findPrecedingToken(r,i)
if(!_)return 0
if(e.isStringOrRegularExpressionOrTemplateLiteral(_.kind)&&_.getStart(i)<=r&&_.end>r)return 0
var d=i.getLineAndCharacterOfPosition(r).line
if(c.IndentStyle===e.IndentStyle.Block){for(var p=r;p>0;){var f=i.text.charCodeAt(p)
if(!e.isWhiteSpace(f)&&!e.isLineBreak(f))break
p--}var m=e.getLineStartPositionForPosition(p,i)
return t.findFirstNonWhitespaceColumn(m,p,i,c)}if(24===_.kind&&184!==_.parent.kind&&-1!==(b=a(_,i,c)))return b
for(var g,h,v,k=_;k;){if(e.positionBelongsToNode(k,r,i)&&y(k,g)){h=s(k,i),v=o(_,k,d,i)?0:d!==h.line?c.IndentSize:0
break}var b
if(-1!==(b=u(k,i,c)))return b
if(-1!==(b=l(k,i,c)))return b+c.IndentSize
g=k,k=k.parent}return k?n(k,h,void 0,v,i,c):0},t.getIndentationForNode=function(e,t,r,a){var i=r.getLineAndCharacterOfPosition(e.getStart(r))
return n(e,i,t,0,r,a)},t.childStartsOnTheSameLineWithElseInIfStatement=c,t.findFirstNonWhitespaceCharacterAndColumn=f,t.findFirstNonWhitespaceColumn=m,t.nodeWillIndentChild=g,t.shouldIndentChildNode=y}(t.SmartIndenter||(t.SmartIndenter={}))}(e.formatting||(e.formatting={}))}(ts||(ts={})),function(e){function t(e,t,n,r,a){var i=new O(e,t,n)
return i.flags=r,i.parent=a,i}function n(t,n,r){var a=[],i=function(){function a(t,n){return e.map(e.getJsDocComments(t,n),function(e){return{pos:e.pos+"/*".length,end:e.end-"*/".length}})}function i(t,n,r,a){for(void 0!==a&&(n=Math.min(n,t+a));n>t;t++){var i=r.text.charCodeAt(t)
if(!e.isWhiteSpace(i)||e.isLineBreak(i))return t}return n}function o(t,n,r){for(;n>t&&e.isLineBreak(r.text.charCodeAt(t));)t++
return t}function s(t,n,r,a){return t+a.length<n&&r.text.substr(t,a.length)===a&&(e.isWhiteSpace(r.text.charCodeAt(t+a.length))||e.isLineBreak(r.text.charCodeAt(t+a.length)))}function c(e,t,n){return s(e,t,n,d)}function _(t,n,r){for(;r;)r--,t.push(e.textPart(""))
t.push(e.textPart(n))}function u(t,n,r){for(var a,s=[],u=0,l=!1;n>t;){var p=""
if(n>(t=i(t,n,r))&&42===r.text.charCodeAt(t)){var f=t+1
t=i(t+1,n,r,a),void 0===a&&n>t&&!e.isLineBreak(r.text.charCodeAt(t))&&(a=t-f)}else void 0===a&&(a=0)
for(;n>t&&!e.isLineBreak(r.text.charCodeAt(t));){var m=r.text.charAt(t)
if("@"===m){if(c(t,n,r)){l=!0,t+=d.length
continue}l=!1}l||(p+=m),t++}t=o(t,n,r),p?(_(s,p,u),u=0):!l&&s.length&&u++}return s}function l(t,r,a){function u(t){for(;r>t&&e.isWhiteSpace(a.text.charCodeAt(t));)t++
return t}function l(e){if(!((t=o(t,r,a))>=r)){void 0===p&&(p=a.getLineAndCharacterOfPosition(e).character)
var n=t
if(!((t=i(t,r,a,p))>=r)){var s=t-n
p>s&&42===a.text.charCodeAt(t)&&(t=i(t+1,r,a,p-s-1))}}}for(var p,f=[];r>t;){if(c(t,r,a)){var m=0,g=!1
if((t=u(t+d.length))>=r)break
if(123===a.text.charCodeAt(t)){t++
for(var y=1;r>t;t++){var h=a.text.charCodeAt(t)
if(123!==h){if(125!==h){if(64===h)break}else if(0==--y){t++
break}}else y++}if((t=u(t))>=r)break}if(s(t,r,a,n)){if((t=u(t+n.length))>=r)break
for(var v="",k=t;r>t;){var b=a.text.charCodeAt(t)
if(e.isLineBreak(b))v?(_(f,v,m),v="",m=0,g=!0):g&&m++,l(k)
else{if(64===b)break
v+=a.text.charAt(t),t++}}v&&_(f,v,m),p=void 0}if(64===a.text.charCodeAt(t))continue}t++}return f}var d="@param",p=[]
return e.forEach(t,function(n,i){if(e.indexOf(t,n)===i){var o=e.getSourceFileOfNode(n)
if(r&&139===n.kind&&e.forEach(a(n.parent,o),function(t){var n=l(t.pos,t.end,o)
n&&e.addRange(p,n)}),221===n.kind&&221===n.body.kind)return
for(;221===n.kind&&221===n.parent.kind;)n=n.parent
e.forEach(a(214===n.kind?n.parent.parent:n,o),function(t){var n=u(t.pos,t.end,o)
n&&e.addRange(p,n)})}}),p}()
return e.forEach(i,function(t){a.length&&a.push(e.lineBreakPart()),a.push(t)}),a}function r(t){return!t.parent&&e.forEach(t.declarations,function(t){if(176===t.kind)return!0
if(214!==t.kind&&216!==t.kind)return!1
for(var n=t.parent;!e.isFunctionBlock(n);n=n.parent)if(251===n.kind||222===n.kind)return!1
return!0})}function a(){return{target:1,jsx:1}}function i(e,t,n){e.version=n,e.scriptSnapshot=t}function o(t,n){var r=n.compilerOptions?e.clone(n.compilerOptions):{target:1,jsx:1}
r.isolatedModules=!0,r.suppressOutputPathCheck=!0,r.allowNonTsExtensions=!0,r.noLib=!0,r.noResolve=!0
var a=n.fileName||(r.jsx?"module.tsx":"module.ts"),i=e.createSourceFile(a,t,r.target)
n.moduleName&&(i.moduleName=n.moduleName),i.renamedDependencies=n.renamedDependencies
var o,s,c,_=e.getNewLineCharacter(r),u={getSourceFile:function(t,n){return t===e.normalizeSlashes(a)?i:void 0},writeFile:function(t,n,r){e.fileExtensionIs(t,".map")?(e.Debug.assert(void 0===s,"Unexpected multiple source map outputs for the file '"+t+"'"),s=n):(e.Debug.assert(void 0===o,"Unexpected multiple outputs for the file: '"+t+"'"),o=n)},getDefaultLibFileName:function(){return"lib.d.ts"},useCaseSensitiveFileNames:function(){return!1},getCanonicalFileName:function(e){return e},getCurrentDirectory:function(){return""},getNewLine:function(){return _},fileExists:function(e){return e===a},readFile:function(e){return""},directoryExists:function(e){return!0}},l=e.createProgram([a],r,u)
return n.reportDiagnostics&&(c=[],e.addRange(c,l.getSyntacticDiagnostics(i)),e.addRange(c,l.getOptionsDiagnostics())),l.emit(),e.Debug.assert(void 0!==o,"Output generation failed"),{outputText:o,diagnostics:c,sourceMapText:s}}function s(t,n,r,a,o,s){var c=n.getText(0,n.getLength()),_=e.createSourceFile(t,c,r,o,s)
return i(_,n,a),_}function c(t,n,r,a,o){if(a&&r!==t.version&&!e.disableIncrementalParsing){var c=void 0,_=0!==a.span.start?t.text.substr(0,a.span.start):"",u=e.textSpanEnd(a.span)!==t.text.length?t.text.substr(e.textSpanEnd(a.span)):""
if(0===a.newLength)c=_&&u?_+u:_||u
else{var l=n.getText(a.span.start,a.span.start+a.newLength)
c=_&&u?_+l+u:_?_+l:l+u}var d=e.updateSourceFile(t,c,a,o)
return i(d,n,r),d.nameTable=void 0,t!==d&&t.scriptSnapshot&&(t.scriptSnapshot.dispose&&t.scriptSnapshot.dispose(),t.scriptSnapshot=void 0),d}return s(t.fileName,n,t.languageVersion,r,!0,t.scriptKind)}function _(t,n){function r(t,n){var r=function(e){return"_"+e.target+"|"+e.module+"|"+e.noResolve+"|"+e.jsx+NaN+e.allowJs}(t),a=e.lookUp(i,r)
return!a&&n&&(i[r]=a=e.createFileMap()),a}function a(t,a,i,_,u,l){var d=r(a,!0),p=e.toPath(t,n,o),f=d.get(p)
f?f.sourceFile.version!==_&&(f.sourceFile=c(f.sourceFile,i,_,i.getChangeRange(f.sourceFile.scriptSnapshot))):(e.Debug.assert(u,"How could we be trying to update a document that the registry doesn't have?"),f={sourceFile:s(t,i,a.target,_,!1,l),languageServiceRefCount:0,owners:[]},d.set(p,f))
return u&&f.languageServiceRefCount++,f.sourceFile}void 0===n&&(n="")
var i={},o=e.createGetCanonicalFileName(!!t)
return{acquireDocument:function(e,t,n,r,i){return a(e,t,n,r,!0,i)},updateDocument:function(e,t,n,r,i){return a(e,t,n,r,!1,i)},releaseDocument:function(t,a){var i=r(a,!1)
e.Debug.assert(void 0!==i)
var s=e.toPath(t,n,o),c=i.get(s)
c.languageServiceRefCount--,e.Debug.assert(c.languageServiceRefCount>=0),0===c.languageServiceRefCount&&i.remove(s)},reportStats:function(){var t=Object.keys(i).filter(function(e){return e&&"_"===e.charAt(0)}).map(function(t){var n=e.lookUp(i,t),r=[]
return n.forEachValue(function(e,t){r.push({name:e,refCount:t.languageServiceRefCount,references:t.owners.slice(0)})}),r.sort(function(e,t){return t.refCount-e.refCount}),{bucket:t,sourceFiles:r}})
return JSON.stringify(t,void 0,2)}}}function u(e,t){for(;e;){if(210===e.kind&&e.label.text===t)return e.label
e=e.parent}}function l(e){return 69===e.kind&&(206===e.parent.kind||205===e.parent.kind)&&e.parent.label===e}function d(e,t){for(var n=e.parent;210===n.kind;n=n.parent)if(n.label.text===t)return!0
return!1}function p(e){return function(e){return 69===e.kind&&210===e.parent.kind&&e.parent.label===e}(e)||l(e)}function f(e){return 136===e.parent.kind&&e.parent.right===e}function m(e){return e&&e.parent&&169===e.parent.kind&&e.parent.name===e}function g(e){return m(e)&&(e=e.parent),e&&e.parent&&171===e.parent.kind&&e.parent.expression===e}function y(e){return m(e)&&(e=e.parent),e&&e.parent&&172===e.parent.kind&&e.parent.expression===e}function h(e){return 221===e.parent.kind&&e.parent.name===e}function v(t){return 69===t.kind&&e.isFunctionLike(t.parent)&&t.parent.name===t}function k(e){return!(69!==e.kind&&9!==e.kind&&8!==e.kind||248!==e.parent.kind&&249!==e.parent.kind||e.parent.name!==e)}function b(e){if(9===e.kind||8===e.kind)switch(e.parent.kind){case 142:case 141:case 248:case 250:case 144:case 143:case 146:case 147:case 221:return e.parent.name===e
case 170:return e.parent.argumentExpression===e}return!1}function x(t){return 9===t.kind&&(h(t)||e.isExternalModuleImportEqualsDeclaration(t.parent.parent)&&e.getExternalModuleImportEqualsDeclarationExpression(t.parent.parent)===t)}function C(t,n,r){function a(n){return e.forEach(n,function(e){if(e.pos<r&&r<e.end)return!0
if(r===e.end){var n=t.text
return 2>=e.end-e.pos||47===n.charCodeAt(e.pos+1)||!(47===n.charCodeAt(e.end-1)&&42===n.charCodeAt(e.end-2))}return!1})}return r<=n.getStart(t)&&(a(e.getTrailingCommentRanges(t.text,n.getFullStart()))||a(e.getLeadingCommentRanges(t.text,n.getFullStart())))}function D(e){for(;;){if(!(e=e.parent))return
switch(e.kind){case 251:case 144:case 143:case 216:case 176:case 146:case 147:case 217:case 218:case 220:case 221:return e}}}function S(e){return e.nameTable||T(e),e.nameTable}function T(t){var n={};(function t(r){switch(r.kind){case 69:n[r.text]=void 0===n[r.text]?r.pos:-1
break
case 9:case 8:(e.isDeclarationName(r)||235===r.parent.kind||function(e){return e&&e.parent&&170===e.parent.kind&&e.parent.argumentExpression===e}(r))&&(n[r.text]=void 0===n[r.text]?r.pos:-1)
break
default:e.forEachChild(r,t)}})(t),t.nameTable=n}e.servicesVersion="0.5",function(e){var t=function(){function e(e){this.text=e}return e.prototype.getText=function(e,t){return this.text.substring(e,t)},e.prototype.getLength=function(){return this.text.length},e.prototype.getChangeRange=function(e){},e}()
e.fromString=function(e){return new t(e)}}(e.ScriptSnapshot||(e.ScriptSnapshot={}))
var E,w,A=e.createScanner(2,!0),P=[],N=["augments","author","argument","borrows","class","constant","constructor","constructs","default","deprecated","description","event","example","extends","field","fileOverview","function","ignore","inner","lends","link","memberOf","name","namespace","param","private","property","public","requires","returns","see","since","static","throws","type","version"],O=function(){function n(e,t,n){this.kind=e,this.pos=t,this.end=n,this.flags=0,this.parent=void 0}return n.prototype.getSourceFile=function(){return e.getSourceFileOfNode(this)},n.prototype.getStart=function(t){return e.getTokenPosOfNode(this,t)},n.prototype.getFullStart=function(){return this.pos},n.prototype.getEnd=function(){return this.end},n.prototype.getWidth=function(e){return this.getEnd()-this.getStart(e)},n.prototype.getFullWidth=function(){return this.end-this.pos},n.prototype.getLeadingTriviaWidth=function(e){return this.getStart(e)-this.pos},n.prototype.getFullText=function(e){return(e||this.getSourceFile()).text.substring(this.pos,this.end)},n.prototype.getText=function(e){return(e||this.getSourceFile()).text.substring(this.getStart(),this.getEnd())},n.prototype.addSyntheticNodes=function(e,n,r){for(A.setTextPos(n);r>n;){var a=A.scan(),i=A.getTextPos()
e.push(t(a,n,i,2048,this)),n=i}return n},n.prototype.createSyntaxList=function(e){var n=t(274,e.pos,e.end,2048,this)
n._children=[]
for(var r=e.pos,a=0,i=e;a<i.length;a++){var o=i[a]
r<o.pos&&(r=this.addSyntheticNodes(n._children,r,o.pos)),n._children.push(o),r=o.end}return r<e.end&&this.addSyntheticNodes(n._children,r,e.end),n},n.prototype.createChildren=function(t){var n,r=this
if(this.kind>=136){A.setText((t||this.getSourceFile()).text),n=[]
var a=this.pos
e.forEachChild(this,function(e){a<e.pos&&(a=r.addSyntheticNodes(n,a,e.pos)),n.push(e),a=e.end},function(e){a<e.pos&&(a=r.addSyntheticNodes(n,a,e.pos)),n.push(r.createSyntaxList(e)),a=e.end}),a<this.end&&this.addSyntheticNodes(n,a,this.end),A.setText(void 0)}this._children=n||P},n.prototype.getChildCount=function(e){return this._children||this.createChildren(e),this._children.length},n.prototype.getChildAt=function(e,t){return this._children||this.createChildren(t),this._children[e]},n.prototype.getChildren=function(e){return this._children||this.createChildren(e),this._children},n.prototype.getFirstToken=function(e){var t=this.getChildren(e)
if(t.length){var n=t[0]
return n.kind<136?n:n.getFirstToken(e)}},n.prototype.getLastToken=function(t){var n=this.getChildren(t),r=e.lastOrUndefined(n)
return r?r.kind<136?r:r.getLastToken(t):void 0},n}(),R=function(){function e(e,t){this.flags=e,this.name=t}return e.prototype.getFlags=function(){return this.flags},e.prototype.getName=function(){return this.name},e.prototype.getDeclarations=function(){return this.declarations},e.prototype.getDocumentationComment=function(){return void 0===this.documentationComment&&(this.documentationComment=n(this.declarations,this.name,!(4&this.flags))),this.documentationComment},e}(),I=function(){function e(e,t){this.checker=e,this.flags=t}return e.prototype.getFlags=function(){return this.flags},e.prototype.getSymbol=function(){return this.symbol},e.prototype.getProperties=function(){return this.checker.getPropertiesOfType(this)},e.prototype.getProperty=function(e){return this.checker.getPropertyOfType(this,e)},e.prototype.getApparentProperties=function(){return this.checker.getAugmentedPropertiesOfType(this)},e.prototype.getCallSignatures=function(){return this.checker.getSignaturesOfType(this,0)},e.prototype.getConstructSignatures=function(){return this.checker.getSignaturesOfType(this,1)},e.prototype.getStringIndexType=function(){return this.checker.getIndexTypeOfType(this,0)},e.prototype.getNumberIndexType=function(){return this.checker.getIndexTypeOfType(this,1)},e.prototype.getBaseTypes=function(){return 3072&this.flags?this.checker.getBaseTypes(this):void 0},e}(),F=function(){function e(e){this.checker=e}return e.prototype.getDeclaration=function(){return this.declaration},e.prototype.getTypeParameters=function(){return this.typeParameters},e.prototype.getParameters=function(){return this.parameters},e.prototype.getReturnType=function(){return this.checker.getReturnTypeOfSignature(this)},e.prototype.getDocumentationComment=function(){return void 0===this.documentationComment&&(this.documentationComment=this.declaration?n([this.declaration],void 0,!1):[]),this.documentationComment},e}(),L=function(t){function n(e,n,r){t.call(this,e,n,r)}return __extends(n,t),n.prototype.update=function(t,n){return e.updateSourceFile(this,t,n)},n.prototype.getLineAndCharacterOfPosition=function(t){return e.getLineAndCharacterOfPosition(this,t)},n.prototype.getLineStarts=function(){return e.getLineStarts(this)},n.prototype.getPositionOfLineAndCharacter=function(t,n){return e.getPositionOfLineAndCharacter(this,t,n)},n.prototype.getNamedDeclarations=function(){return this.namedDeclarations||(this.namedDeclarations=this.computeNamedDeclarations()),this.namedDeclarations},n.prototype.computeNamedDeclarations=function(){function t(e){var t=r(e)
t&&n(t).push(e)}function n(t){return e.getProperty(i,t)||(i[t]=[])}function r(e){if(e.name){var t=a(e.name)
if(void 0!==t)return t
if(137===e.name.kind){var n=e.name.expression
return 169===n.kind?n.name.text:a(n)}}}function a(e){return!e||69!==e.kind&&9!==e.kind&&8!==e.kind?void 0:e.text}var i={}
return e.forEachChild(this,function a(i){switch(i.kind){case 216:case 144:case 143:var o=i,s=r(o)
if(s){var c=n(s),_=e.lastOrUndefined(c)
_&&o.parent===_.parent&&o.symbol===_.symbol?o.body&&!_.body&&(c[c.length-1]=o):c.push(o),e.forEachChild(i,a)}break
case 217:case 218:case 219:case 220:case 221:case 224:case 233:case 229:case 224:case 226:case 227:case 146:case 147:case 156:t(i)
case 145:case 196:case 215:case 164:case 165:case 222:e.forEachChild(i,a)
break
case 195:e.isFunctionBlock(i)&&e.forEachChild(i,a)
break
case 139:if(!(56&i.flags))break
case 214:case 166:if(e.isBindingPattern(i.name)){e.forEachChild(i.name,a)
break}case 250:case 142:case 141:t(i)
break
case 231:i.exportClause&&e.forEach(i.exportClause.elements,a)
break
case 225:var u=i.importClause
u&&(u.name&&t(u),u.namedBindings&&(227===u.namedBindings.kind?t(u.namedBindings):e.forEach(u.namedBindings.elements,a)))}}),i},n}(O),M=function(){return function(){}}()
e.TextChange=M,function(e){e.none="none",e.definition="definition",e.reference="reference",e.writtenReference="writtenReference"}(w=e.HighlightSpanKind||(e.HighlightSpanKind={})),function(e){e[e.None=0]="None",e[e.Block=1]="Block",e[e.Smart=2]="Smart"}(e.IndentStyle||(e.IndentStyle={})),e.IndentStyle,function(e){e[e.aliasName=0]="aliasName",e[e.className=1]="className",e[e.enumName=2]="enumName",e[e.fieldName=3]="fieldName",e[e.interfaceName=4]="interfaceName",e[e.keyword=5]="keyword",e[e.lineBreak=6]="lineBreak",e[e.numericLiteral=7]="numericLiteral",e[e.stringLiteral=8]="stringLiteral",e[e.localName=9]="localName",e[e.methodName=10]="methodName",e[e.moduleName=11]="moduleName",e[e.operator=12]="operator",e[e.parameterName=13]="parameterName",e[e.propertyName=14]="propertyName",e[e.punctuation=15]="punctuation",e[e.space=16]="space",e[e.text=17]="text",e[e.typeParameterName=18]="typeParameterName",e[e.enumMemberName=19]="enumMemberName",e[e.functionName=20]="functionName",e[e.regularExpressionLiteral=21]="regularExpressionLiteral"}(e.SymbolDisplayPartKind||(e.SymbolDisplayPartKind={}))
var B=e.SymbolDisplayPartKind
!function(e){e[e.JavaScript=0]="JavaScript",e[e.SourceMap=1]="SourceMap",e[e.Declaration=2]="Declaration"}(e.OutputFileType||(e.OutputFileType={})),e.OutputFileType,function(e){e[e.None=0]="None",e[e.InMultiLineCommentTrivia=1]="InMultiLineCommentTrivia",e[e.InSingleQuoteStringLiteral=2]="InSingleQuoteStringLiteral",e[e.InDoubleQuoteStringLiteral=3]="InDoubleQuoteStringLiteral",e[e.InTemplateHeadOrNoSubstitutionTemplate=4]="InTemplateHeadOrNoSubstitutionTemplate",e[e.InTemplateMiddleOrTail=5]="InTemplateMiddleOrTail",e[e.InTemplateSubstitutionPosition=6]="InTemplateSubstitutionPosition"}(e.EndOfLineState||(e.EndOfLineState={})),e.EndOfLineState,function(e){e[e.Punctuation=0]="Punctuation",e[e.Keyword=1]="Keyword",e[e.Operator=2]="Operator",e[e.Comment=3]="Comment",e[e.Whitespace=4]="Whitespace",e[e.Identifier=5]="Identifier",e[e.NumberLiteral=6]="NumberLiteral",e[e.StringLiteral=7]="StringLiteral",e[e.RegExpLiteral=8]="RegExpLiteral"}(e.TokenClass||(e.TokenClass={}))
var z,K,j=e.TokenClass
!function(e){e.unknown="",e.warning="warning",e.keyword="keyword",e.scriptElement="script",e.moduleElement="module",e.classElement="class",e.localClassElement="local class",e.interfaceElement="interface",e.typeElement="type",e.enumElement="enum",e.variableElement="var",e.localVariableElement="local var",e.functionElement="function",e.localFunctionElement="local function",e.memberFunctionElement="method",e.memberGetAccessorElement="getter",e.memberSetAccessorElement="setter",e.memberVariableElement="property",e.constructorImplementationElement="constructor",e.callSignatureElement="call",e.indexSignatureElement="index",e.constructSignatureElement="construct",e.parameterElement="parameter",e.typeParameterElement="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.constElement="const",e.letElement="let"}(z=e.ScriptElementKind||(e.ScriptElementKind={})),function(e){e.none="",e.publicMemberModifier="public",e.privateMemberModifier="private",e.protectedMemberModifier="protected",e.exportedModifier="export",e.ambientModifier="declare",e.staticModifier="static",e.abstractModifier="abstract"}(K=e.ScriptElementKindModifier||(e.ScriptElementKindModifier={}))
var J=function(){function e(){}return e.comment="comment",e.identifier="identifier",e.keyword="keyword",e.numericLiteral="number",e.operator="operator",e.stringLiteral="string",e.whiteSpace="whitespace",e.text="text",e.punctuation="punctuation",e.className="class name",e.enumName="enum name",e.interfaceName="interface name",e.moduleName="module name",e.typeParameterName="type parameter name",e.typeAliasName="type alias name",e.parameterName="parameter name",e.docCommentTagName="doc comment tag name",e.jsxOpenTagName="jsx open tag name",e.jsxCloseTagName="jsx close tag name",e.jsxSelfClosingTagName="jsx self closing tag name",e.jsxAttribute="jsx attribute",e.jsxText="jsx text",e.jsxAttributeStringLiteralValue="jsx attribute string literal value",e}()
e.ClassificationTypeNames=J,function(e){e[e.comment=1]="comment",e[e.identifier=2]="identifier",e[e.keyword=3]="keyword",e[e.numericLiteral=4]="numericLiteral",e[e.operator=5]="operator",e[e.stringLiteral=6]="stringLiteral",e[e.regularExpressionLiteral=7]="regularExpressionLiteral",e[e.whiteSpace=8]="whiteSpace",e[e.text=9]="text",e[e.punctuation=10]="punctuation",e[e.className=11]="className",e[e.enumName=12]="enumName",e[e.interfaceName=13]="interfaceName",e[e.moduleName=14]="moduleName",e[e.typeParameterName=15]="typeParameterName",e[e.typeAliasName=16]="typeAliasName",e[e.parameterName=17]="parameterName",e[e.docCommentTagName=18]="docCommentTagName",e[e.jsxOpenTagName=19]="jsxOpenTagName",e[e.jsxCloseTagName=20]="jsxCloseTagName",e[e.jsxSelfClosingTagName=21]="jsxSelfClosingTagName",e[e.jsxAttribute=22]="jsxAttribute",e[e.jsxText=23]="jsxText",e[e.jsxAttributeStringLiteralValue=24]="jsxAttributeStringLiteralValue"}(e.ClassificationType||(e.ClassificationType={})),e.ClassificationType,e.displayPartsToString=function(t){return t?e.map(t,function(e){return e.text}).join(""):""},e.getDefaultCompilerOptions=a
var U,q,W=function(){function t(t,n){this.host=t,this.getCanonicalFileName=n,this.currentDirectory=t.getCurrentDirectory(),this.fileNameToEntry=e.createFileMap()
for(var r=0,a=t.getScriptFileNames();r<a.length;r++){var i=a[r]
this.createEntry(i,e.toPath(i,this.currentDirectory,n))}this._compilationSettings=t.getCompilationSettings()||{target:1,jsx:1}}return t.prototype.compilationSettings=function(){return this._compilationSettings},t.prototype.createEntry=function(t,n){var r,a=this.host.getScriptSnapshot(t)
return a&&(r={hostFileName:t,version:this.host.getScriptVersion(t),scriptSnapshot:a,scriptKind:e.getScriptKind(t,this.host)}),this.fileNameToEntry.set(n,r),r},t.prototype.getEntry=function(e){return this.fileNameToEntry.get(e)},t.prototype.contains=function(e){return this.fileNameToEntry.contains(e)},t.prototype.getOrCreateEntry=function(t){var n=e.toPath(t,this.currentDirectory,this.getCanonicalFileName)
return this.contains(n)?this.getEntry(n):this.createEntry(t,n)},t.prototype.getRootFileNames=function(){var e=[]
return this.fileNameToEntry.forEachValue(function(t,n){n&&e.push(n.hostFileName)}),e},t.prototype.getVersion=function(e){var t=this.getEntry(e)
return t&&t.version},t.prototype.getScriptSnapshot=function(e){var t=this.getEntry(e)
return t&&t.scriptSnapshot},t}(),V=function(){function t(e){this.host=e}return t.prototype.getCurrentSourceFile=function(t){var n=this.host.getScriptSnapshot(t)
if(!n)throw new Error("Could not find file: '"+t+"'.")
var r,a=e.getScriptKind(t,this.host),i=this.host.getScriptVersion(t)
if(this.currentFileName!==t)r=s(t,n,2,i,!0,a)
else if(this.currentFileVersion!==i){var o=n.getChangeRange(this.currentFileScriptSnapshot)
r=c(this.currentSourceFile,n,i,o)}return r&&(this.currentFileVersion=i,this.currentFileName=t,this.currentFileScriptSnapshot=n,this.currentSourceFile=r),this.currentSourceFile},t}()
e.transpileModule=o,e.transpile=function(t,n,r,a,i){var s=o(t,{compilerOptions:n,fileName:r,reportDiagnostics:!!a,moduleName:i})
return e.addRange(a,s.diagnostics),s.outputText},e.createLanguageServiceSourceFile=s,e.disableIncrementalParsing=!1,e.updateLanguageServiceSourceFile=c,e.createDocumentRegistry=_,e.preProcessFile=function(t,n,r){function a(){var e=A.getTokenValue(),t=A.getTokenPos()
d.push({fileName:e,pos:t,end:t+e.length})}function i(){var e=A.getToken()
return 122===e&&(125===(e=A.scan())&&9===(e=A.scan())&&(u||(u=[]),u.push(A.getTokenValue())),!0)}function o(){var t=A.getToken()
if(89===t){if(9===(t=A.scan()))return a(),!0
if(69===t||e.isKeyword(t))if(133===(t=A.scan())){if(9===(t=A.scan()))return a(),!0}else if(56===t){if(c(!0))return!0}else{if(24!==t)return!0
t=A.scan()}if(15===t){for(t=A.scan();16!==t&&1!==t;)t=A.scan()
16===t&&133===(t=A.scan())&&9===(t=A.scan())&&a()}else 37===t&&116===(t=A.scan())&&(69===(t=A.scan())||e.isKeyword(t))&&133===(t=A.scan())&&9===(t=A.scan())&&a()
return!0}return!1}function s(){var t=A.getToken()
if(82===t){if(15===(t=A.scan())){for(t=A.scan();16!==t&&1!==t;)t=A.scan()
16===t&&133===(t=A.scan())&&9===(t=A.scan())&&a()}else if(37===t)133===(t=A.scan())&&9===(t=A.scan())&&a()
else if(89===t&&(69===(t=A.scan())||e.isKeyword(t))&&56===(t=A.scan())&&c(!0))return!0
return!0}return!1}function c(e){var t=e?A.scan():A.getToken()
return 127===t&&(17===(t=A.scan())&&9===(t=A.scan())&&a(),!0)}function _(){var e=A.getToken()
if(69===e&&"define"===A.getTokenValue()){if(17!==(e=A.scan()))return!0
if(9===(e=A.scan())){if(24!==(e=A.scan()))return!0
e=A.scan()}if(19!==e)return!0
for(e=A.scan();20!==e&&1!==e;)9===e&&a(),e=A.scan()
return!0}return!1}void 0===n&&(n=!0),void 0===r&&(r=!1)
var u,l=[],d=[],p=!1
return n&&function(){for(A.setText(t),A.scan();1!==A.getToken();)i()||o()||s()||r&&(c(!1)||_())||A.scan()
A.setText(void 0)}(),function(){var n=e.getLeadingCommentRanges(t,0)
e.forEach(n,function(n){var r=t.substring(n.pos,n.end),a=e.getFileReferenceFromReferencePath(r,n)
if(a){p=a.isNoDefaultLib
var i=a.fileReference
i&&l.push(i)}})}(),{referencedFiles:l,importedFiles:d,isLibFile:p,ambientExternalModules:u}},function(e){e[e.None=0]="None",e[e.Value=1]="Value",e[e.Type=2]="Type",e[e.Namespace=4]="Namespace",e[e.All=7]="All"}(U||(U={})),function(e){e[e.None=0]="None",e[e.Unlabeled=1]="Unlabeled",e[e.Labeled=2]="Labeled",e[e.All=3]="All"}(q||(q={}))
for(var H=[],G=70;135>=G;G++)H.push({name:e.tokenToString(G),kind:z.keyword,kindModifiers:K.none,sortText:"0"})
e.getContainerNode=D,e.getNodeKind=function(t){switch(t.kind){case 221:return z.moduleElement
case 217:return z.classElement
case 218:return z.interfaceElement
case 219:return z.typeElement
case 220:return z.enumElement
case 214:return e.isConst(t)?z.constElement:e.isLet(t)?z.letElement:z.variableElement
case 216:return z.functionElement
case 146:return z.memberGetAccessorElement
case 147:return z.memberSetAccessorElement
case 144:case 143:return z.memberFunctionElement
case 142:case 141:return z.memberVariableElement
case 150:return z.indexSignatureElement
case 149:return z.constructSignatureElement
case 148:return z.callSignatureElement
case 145:return z.constructorImplementationElement
case 138:return z.typeParameterElement
case 250:return z.variableElement
case 139:return 56&t.flags?z.memberVariableElement:z.parameterElement
case 224:case 229:case 226:case 233:case 227:return z.alias}return z.unknown}
var X=function(){function t(e){this.cancellationToken=e}return t.prototype.isCancellationRequested=function(){return this.cancellationToken&&this.cancellationToken.isCancellationRequested()},t.prototype.throwIfCancellationRequested=function(){if(this.isCancellationRequested())throw new e.OperationCanceledException},t}()
e.createLanguageService=function(t,n){function a(e){t.log&&t.log(e)}function i(e){var t=ie.getSourceFile(e)
if(!t)throw new Error("Could not find file: '"+e+"'.")
return t}function o(t){return ae||(ae=new e.formatting.RulesProvider),ae.ensureUpToDate(t),ae}function s(){function r(t){if(!t)return!1
var n=t.path||e.toPath(t.fileName,ue,le)
return t.version===i.getVersion(n)}if(t.getProjectVersion){var a=t.getProjectVersion()
if(a){if(oe===a)return
oe=a}}var i=new W(t,le)
if(!function(){if(!ie)return!1
var t=i.getRootFileNames()
if(ie.getSourceFiles().length!==t.length)return!1
for(var n=0,a=t;n<a.length;n++){var o=a[n]
if(!r(ie.getSourceFile(o)))return!1}return e.compareDataObjects(ie.getCompilerOptions(),i.compilationSettings())}()){var o=ie&&ie.getCompilerOptions(),s=i.compilationSettings(),c=o&&(o.target!==s.target||o.module!==s.module||o.noResolve!==s.noResolve||o.jsx!==s.jsx||o.allowJs!==s.allowJs||o.disableSizeLimit!=o.disableSizeLimit),_={getSourceFile:function(t){e.Debug.assert(void 0!==i)
var r=i.getOrCreateEntry(t)
if(r){if(!c){var a=ie&&ie.getSourceFile(t)
if(a)return e.Debug.assert(r.scriptKind===a.scriptKind,"Registered script kind ("+a.scriptKind+") should match new script kind ("+r.scriptKind+") for file: "+t),n.updateDocument(t,s,r.scriptSnapshot,r.version,r.scriptKind)}return n.acquireDocument(t,s,r.scriptSnapshot,r.version,r.scriptKind)}},getCancellationToken:function(){return _e},getCanonicalFileName:le,useCaseSensitiveFileNames:function(){return ce},getNewLine:function(){return e.getNewLineOrDefaultFromHost(t)},getDefaultLibFileName:function(e){return t.getDefaultLibFileName(e)},writeFile:function(e,t,n){},getCurrentDirectory:function(){return ue},fileExists:function(n){return e.Debug.assert(!t.resolveModuleNames),void 0!==i.getOrCreateEntry(n)},readFile:function(e){var t=i.getOrCreateEntry(e)
return t&&t.scriptSnapshot.getText(0,t.scriptSnapshot.getLength())},directoryExists:function(n){return e.Debug.assert(!t.resolveModuleNames),e.directoryProbablyExists(n,t)}}
t.resolveModuleNames&&(_.resolveModuleNames=function(e,n){return t.resolveModuleNames(e,n)})
var u=e.createProgram(i.getRootFileNames(),s,_,ie)
if(ie)for(var l=0,d=ie.getSourceFiles();l<d.length;l++){var p=d[l]
u.getSourceFile(p.fileName)&&!c||n.releaseDocument(p.fileName,o)}i=void 0,(ie=u).getTypeChecker()}}function c(t,n,r,a){var i=e.getDeclaredName(ie.getTypeChecker(),t,a)
if(i){var o=i.charCodeAt(0)
if(1536&t.flags&&(39===o||34===o))return}return T(i,n,r)}function T(t,n,r){return t&&(t=e.stripQuotes(t))&&(!r||e.isIdentifier(t,n))?t:void 0}function A(t,n){function r(){var t,r,a
if(t=function(e){if(e)switch(e.kind){case 15:case 24:var t=e.parent
if(t&&(168===t.kind||164===t.kind))return t}}(b))return function(t){var n,r
if(O=!0,168===t.kind)R=!0,n=u.getContextualType(t),r=t.properties
else if(164===t.kind){R=!1
var a=e.getRootDeclaration(t.parent)
e.isVariableLike(a)?(a.initializer||a.type)&&(n=u.getTypeAtLocation(t),r=t.elements):e.Debug.fail("Root declaration is not variable-like.")}else e.Debug.fail("Expected object literal or binding pattern, got "+t.kind)
if(!n)return!1
var i=u.getPropertiesOfType(n)
return i&&i.length>0&&(F=_(i,r)),!0}(t)
if(r=function(e){if(e)switch(e.kind){case 15:case 24:switch(e.parent.kind){case 228:case 232:return e.parent}}}(b))return function(t){var n=228===t.kind?225:231,r=e.getAncestor(t,n)
if(!r.moduleSpecifier)return!1
O=!0,R=!1
var a,i=u.getSymbolAtLocation(r.moduleSpecifier)
return i&&(a=u.getExportsOfModule(i)),F=a?c(a,t.elements):P,!0}(r)
if(a=function(e){if(e){var t=e.parent
switch(e.kind){case 26:case 39:case 69:case 241:case 242:if(t&&(237===t.kind||238===t.kind))return t
if(241===t.kind)return t.parent
break
case 9:if(t&&(241===t.kind||242===t.kind))return t.parent
break
case 16:if(t&&243===t.kind&&t.parent&&241===t.parent.kind)return t.parent.parent
if(t&&242===t.kind)return t.parent}}}(b)){var i=void 0
if((237===a.kind||238===a.kind)&&(i=u.getJsxElementAttributesType(a)))return F=function(t,r){for(var a={},i=0,o=r;i<o.length;i++){var s=o[i]
s.getStart()<=n&&n<=s.getEnd()||241===s.kind&&(a[s.name.text]=!0)}return e.filter(t,function(t){return!e.lookUp(a,t.name)})}(u.getPropertiesOfType(i),a.attributes),O=!0,R=!1,!0}O=!1,R=function(e){if(e){var t=e.parent.kind
switch(e.kind){case 24:return 171===t||145===t||172===t||167===t||184===t||153===t
case 17:return 171===t||145===t||172===t||175===t||161===t
case 19:return 167===t||150===t||137===t
case 125:case 126:return!0
case 21:return 221===t
case 15:return 217===t
case 56:return 214===t||184===t
case 12:return 186===t
case 13:return 193===t
case 112:case 110:case 111:return 142===t}switch(e.getText()){case"public":case"protected":case"private":return!0}}return!1}(b),k!==b&&e.Debug.assert(!!k,"Expected 'contextToken' to be defined when different from 'previousToken'.")
var o=k!==b?k.getStart():n,s=function(t,n,r){for(var a=t;a&&!e.positionBelongsToNode(a,n,r);)a=a.parent
return a}(b,o,l)||l
return F=u.getSymbolsInScope(s,9289727),!0}function o(t){if(9===t.kind||163===t.kind||10===t.kind||e.isTemplateLiteralKind(t.kind)){var r=t.getStart(),a=t.getEnd()
if(n>r&&a>n)return!0
if(n===a)return!!t.isUnterminated||10===t.kind}return!1}function s(e){switch(e){case 176:case 177:case 216:case 144:case 143:case 146:case 147:case 148:case 149:case 150:return!0}return!1}function c(t,r){for(var a={},i=0,o=r;i<o.length;i++){var s=o[i]
if(!(s.getStart()<=n&&n<=s.getEnd())){var c=s.propertyName||s.name
a[c.text]=!0}}return e.isEmpty(a)?t:e.filter(t,function(t){return!e.lookUp(a,t.name)})}function _(t,r){if(!r||0===r.length)return t
for(var a={},i=0,o=r;i<o.length;i++){var s=o[i]
if(!(248!==s.kind&&249!==s.kind&&166!==s.kind&&144!==s.kind||s.getStart()<=n&&n<=s.getEnd())){var c=void 0
166===s.kind&&s.propertyName?69===s.propertyName.kind&&(c=s.propertyName.text):c=s.name.text,a[c]=!0}}return e.filter(t,function(t){return!e.lookUp(a,t.name)})}var u=ie.getTypeChecker(),l=i(t),d=e.isSourceFileJavaScript(l),p=!1,f=(new Date).getTime(),m=e.getTokenAtPosition(l,n)
a("getCompletionData: Get current token: "+((new Date).getTime()-f)),f=(new Date).getTime()
var g=C(l,m,n)
if(a("getCompletionData: Is inside comment: "+((new Date).getTime()-f)),g){e.hasDocComment(l,n)&&64===l.text.charCodeAt(n-1)&&(p=!0)
var y=!1,h=e.getJsDocTagAtPosition(l,n)
if(h)switch(h.tagName.pos<=n&&n<=h.tagName.end&&(p=!0),h.kind){case 272:case 270:case 271:var v=h
v.typeExpression&&(y=v.typeExpression.pos<n&&n<v.typeExpression.end)}if(p)return{symbols:void 0,isMemberCompletion:!1,isNewIdentifierLocation:!1,location:void 0,isRightOfDot:!1,isJsDocTagName:p}
if(!y)return void a("Returning an empty list because completion was inside a regular comment or plain text part of a JsDoc comment.")}f=(new Date).getTime()
var k=e.findPrecedingToken(n,l)
a("getCompletionData: Get previous token 1: "+((new Date).getTime()-f))
var b=k
if(b&&n<=b.end&&e.isWord(b.kind)){var x=(new Date).getTime()
b=e.findPrecedingToken(b.getFullStart(),l),a("getCompletionData: Get previous token 2: "+((new Date).getTime()-x))}var D=m,S=!1,T=!1,E=!1,w=e.getTouchingPropertyName(l,n)
if(b){if(function(e){var t=(new Date).getTime(),n=o(e)||function(e){var t=e.parent.kind
switch(e.kind){case 24:return 214===t||215===t||196===t||220===t||s(t)||217===t||189===t||218===t||165===t||219===t
case 21:return 165===t
case 54:return 166===t
case 19:return 165===t
case 17:return 247===t||s(t)
case 15:return 220===t||218===t||156===t
case 23:return 141===t&&e.parent&&e.parent.parent&&(218===e.parent.parent.kind||156===e.parent.parent.kind)
case 25:return 217===t||189===t||218===t||219===t||s(t)
case 113:return 142===t
case 22:return 139===t||e.parent&&e.parent.parent&&165===e.parent.parent.kind
case 112:case 110:case 111:return 139===t
case 116:return 229===t||233===t||227===t
case 73:case 81:case 107:case 87:case 102:case 123:case 129:case 89:case 108:case 74:case 114:case 132:return!0}switch(e.getText()){case"abstract":case"async":case"class":case"const":case"declare":case"enum":case"function":case"interface":case"let":case"private":case"protected":case"public":case"static":case"var":case"yield":return!0}return!1}(e)||function(e){if(8===e.kind){var t=e.getFullText()
return"."===t.charAt(t.length-1)}return!1}(e)||function(e){if(239===e.kind)return!0
if(27===e.kind&&e.parent){if(238===e.parent.kind)return!0
if(240===e.parent.kind||237===e.parent.kind)return e.parent.parent&&236===e.parent.parent.kind}return!1}(e)
return a("getCompletionsAtPosition: isCompletionListBlocker: "+((new Date).getTime()-t)),n}(b))return void a("Returning an empty list because completion was requested in an invalid position.")
var A=b.parent,N=b.kind
if(21===N)if(169===A.kind)D=b.parent.expression,S=!0
else{if(136!==A.kind)return
D=b.parent.left,S=!0}else 1===l.languageVariant&&(25===N?(T=!0,w=b):39===N&&240===b.parent.kind&&(E=!0,w=b))}var O,R,I=(new Date).getTime(),F=[]
if(S)(function(){if(O=!0,R=!1,69===D.kind||136===D.kind||169===D.kind){var t=u.getSymbolAtLocation(D)
if(t&&8388608&t.flags&&(t=u.getAliasedSymbol(t)),t&&1952&t.flags){var n=u.getExportsOfModule(t)
e.forEach(n,function(e){u.isValidPropertyAccess(D.parent,e.name)&&F.push(e)})}}(function e(t){if(t){for(var n=0,r=t.getApparentProperties();n<r.length;n++){var a=r[n]
u.isValidPropertyAccess(D.parent,a.name)&&F.push(a)}if(d&&16384&t.flags)for(var i=t,o=0,s=i.types;o<s.length;o++){var c=s[o]
e(c)}}})(u.getTypeAtLocation(D))})()
else if(T){var L=u.getJsxIntrinsicTagNames()
F=r()?L.concat(F.filter(function(e){return!!(107455&e.flags)})):L,O=!0,R=!1}else if(E){var M=b.parent.parent.openingElement.tagName,B=u.getSymbolAtLocation(M)
u.isUnknownSymbol(B)||(F=[B]),O=!0,R=!1}else if(!r())return
return a("getCompletionData: Semantic work: "+((new Date).getTime()-I)),{symbols:F,isMemberCompletion:O,isNewIdentifierLocation:R,location:w,isRightOfDot:S||T,isJsDocTagName:p}}function O(t,n){var r=t.getFlags()
if(32&r)return e.getDeclarationOfKind(t,189)?z.localClassElement:z.classElement
if(384&r)return z.enumElement
if(524288&r)return z.typeElement
if(64&r)return z.interfaceElement
if(262144&r)return z.typeParameterElement
var a=R(t,r,n)
if(a===z.unknown){if(262144&r)return z.typeParameterElement
if(8&r)return z.variableElement
if(8388608&r)return z.alias
if(1536&r)return z.moduleElement}return a}function R(t,n,a){var i=ie.getTypeChecker()
if(i.isUndefinedSymbol(t))return z.variableElement
if(i.isArgumentsSymbol(t))return z.localVariableElement
if(3&n)return e.isFirstDeclarationOfSymbolParameter(t)?z.parameterElement:t.valueDeclaration&&e.isConst(t.valueDeclaration)?z.constElement:e.forEach(t.declarations,e.isLet)?z.letElement:r(t)?z.localVariableElement:z.variableElement
if(16&n)return r(t)?z.localFunctionElement:z.functionElement
if(32768&n)return z.memberGetAccessorElement
if(65536&n)return z.memberSetAccessorElement
if(8192&n)return z.memberFunctionElement
if(16384&n)return z.constructorImplementationElement
if(4&n){if(268435456&n){var o=e.forEach(i.getRootSymbols(t),function(t){var n=t.getFlags()
return 98311&n?z.memberVariableElement:void e.Debug.assert(!!(8192&n))})
return o||(i.getTypeOfSymbolAtLocation(t,a).getCallSignatures().length?z.memberFunctionElement:z.memberVariableElement)}return z.memberVariableElement}return z.unknown}function I(t){return t&&t.declarations&&t.declarations.length>0?e.getNodeModifiers(t.declarations[0]):K.none}function F(t,n,r,a,i){function o(){h.length&&h.push(e.lineBreakPart())}function s(t,r){var a=e.symbolToDisplayParts(m,t,r||n,void 0,3)
e.addRange(h,a)}function c(t,n){o(),n&&(_(n),h.push(e.spacePart()),s(t))}function _(t){switch(t){case z.variableElement:case z.functionElement:case z.letElement:case z.constElement:case z.constructorImplementationElement:return void h.push(e.textOrKeywordPart(t))
default:return h.push(e.punctuationPart(17)),h.push(e.textOrKeywordPart(t)),void h.push(e.punctuationPart(18))}}function u(t,n,a){e.addRange(h,e.signatureToDisplayParts(m,t,r,32|a)),n.length>1&&(h.push(e.spacePart()),h.push(e.punctuationPart(17)),h.push(e.operatorPart(35)),h.push(e.displayPart((n.length-1).toString(),B.numericLiteral)),h.push(e.spacePart()),h.push(e.textPart(2===n.length?"overload":"overloads")),h.push(e.punctuationPart(18))),d=t.getDocumentationComment()}function l(t,n){var r=e.mapToDisplayParts(function(e){m.getSymbolDisplayBuilder().buildTypeParameterDisplayFromSymbol(t,e,n)})
e.addRange(h,r)}void 0===i&&(i=$(a))
var d,p,f,m=ie.getTypeChecker(),h=[],k=t.flags,b=R(t,k,a)
if(b!==z.unknown||32&k||8388608&k){b!==z.memberGetAccessorElement&&b!==z.memberSetAccessorElement||(b=z.memberVariableElement)
var x=void 0
if(f=m.getTypeOfSymbolAtLocation(t,a)){if(a.parent&&169===a.parent.kind){var C=a.parent.name;(C===a||C&&0===C.getFullWidth())&&(a=a.parent)}var D=void 0
if(171===a.kind||172===a.kind?D=a:(g(a)||y(a))&&(D=a.parent),D){var S=[]
!(x=m.getResolvedSignature(D,S))&&S.length&&(x=S[0])
var T=172===D.kind||95===D.expression.kind,E=T?f.getConstructSignatures():f.getCallSignatures()
if(e.contains(E,x.target)||e.contains(E,x)||(x=E.length?E[0]:void 0),x){switch(T&&32&k?(b=z.constructorImplementationElement,c(f.symbol,b)):8388608&k?(_(b=z.alias),h.push(e.spacePart()),T&&(h.push(e.keywordPart(92)),h.push(e.spacePart())),s(t)):c(t,b),b){case z.memberVariableElement:case z.variableElement:case z.constElement:case z.letElement:case z.parameterElement:case z.localVariableElement:h.push(e.punctuationPart(54)),h.push(e.spacePart()),T&&(h.push(e.keywordPart(92)),h.push(e.spacePart())),65536&f.flags||e.addRange(h,e.symbolToDisplayParts(m,f.symbol,r,void 0,1)),u(x,E,8)
break
default:u(x,E)}p=!0}}else if(v(a)&&!(98304&t.flags)||121===a.kind&&145===a.parent.kind){var w=a.parent
E=145===w.kind?f.getConstructSignatures():f.getCallSignatures(),x=m.isImplementationOfOverload(w)?E[0]:m.getSignatureFromDeclaration(w),145===w.kind?(b=z.constructorImplementationElement,c(f.symbol,b)):c(148!==w.kind||2048&f.symbol.flags||4096&f.symbol.flags?t:f.symbol,b),u(x,E),p=!0}}}if(32&k&&!p&&(e.getDeclarationOfKind(t,189)?_(z.localClassElement):h.push(e.keywordPart(73)),h.push(e.spacePart()),s(t),l(t,n)),64&k&&2&i&&(o(),h.push(e.keywordPart(107)),h.push(e.spacePart()),s(t),l(t,n)),524288&k&&(o(),h.push(e.keywordPart(132)),h.push(e.spacePart()),s(t),l(t,n),h.push(e.spacePart()),h.push(e.operatorPart(56)),h.push(e.spacePart()),e.addRange(h,e.typeToDisplayParts(m,m.getDeclaredTypeOfSymbol(t),r))),384&k&&(o(),e.forEach(t.declarations,e.isConstEnumDeclaration)&&(h.push(e.keywordPart(74)),h.push(e.spacePart())),h.push(e.keywordPart(81)),h.push(e.spacePart()),s(t)),1536&k){o()
var A=(P=e.getDeclarationOfKind(t,221))&&P.name&&69===P.name.kind
h.push(e.keywordPart(A?126:125)),h.push(e.spacePart()),s(t)}if(262144&k&&2&i)if(o(),h.push(e.punctuationPart(17)),h.push(e.textPart("type parameter")),h.push(e.punctuationPart(18)),h.push(e.spacePart()),s(t),h.push(e.spacePart()),h.push(e.keywordPart(90)),h.push(e.spacePart()),t.parent)s(t.parent,r),l(t.parent,r)
else{var P=e.getDeclarationOfKind(t,138)
e.Debug.assert(void 0!==P),(P=P.parent)&&(e.isFunctionLikeKind(P.kind)?(x=m.getSignatureFromDeclaration(P),149===P.kind?(h.push(e.keywordPart(92)),h.push(e.spacePart())):148!==P.kind&&P.name&&s(P.symbol),e.addRange(h,e.signatureToDisplayParts(m,x,n,32))):(h.push(e.keywordPart(132)),h.push(e.spacePart()),s(P.symbol),l(P.symbol,n)))}if(8&k&&(c(t,"enum member"),250===(P=t.declarations[0]).kind)){var N=m.getConstantValue(P)
void 0!==N&&(h.push(e.spacePart()),h.push(e.operatorPart(56)),h.push(e.spacePart()),h.push(e.displayPart(N.toString(),B.numericLiteral)))}if(8388608&k&&(o(),h.push(e.keywordPart(89)),h.push(e.spacePart()),s(t),e.forEach(t.declarations,function(t){if(224===t.kind){var n=t
if(e.isExternalModuleImportEqualsDeclaration(n))h.push(e.spacePart()),h.push(e.operatorPart(56)),h.push(e.spacePart()),h.push(e.keywordPart(127)),h.push(e.punctuationPart(17)),h.push(e.displayPart(e.getTextOfNode(e.getExternalModuleImportEqualsDeclarationExpression(n)),B.stringLiteral)),h.push(e.punctuationPart(18))
else{var a=m.getSymbolAtLocation(n.moduleReference)
a&&(h.push(e.spacePart()),h.push(e.operatorPart(56)),h.push(e.spacePart()),s(a,r))}return!0}})),!p)if(b!==z.unknown){if(f)if(c(t,b),b===z.memberVariableElement||3&k||b===z.localVariableElement)if(h.push(e.punctuationPart(54)),h.push(e.spacePart()),f.symbol&&262144&f.symbol.flags){var I=e.mapToDisplayParts(function(e){m.getSymbolDisplayBuilder().buildTypeParameterDisplay(f,e,r)})
e.addRange(h,I)}else e.addRange(h,e.typeToDisplayParts(m,f,r))
else(16&k||8192&k||16384&k||131072&k||98304&k||b===z.memberFunctionElement)&&u((E=f.getCallSignatures())[0],E)}else b=O(t,a)
return d||(d=t.getDocumentationComment()),{displayParts:h,documentation:d,symbolKind:b}}function L(t,n,r,a){return{fileName:t.getSourceFile().fileName,textSpan:e.createTextSpanFromBounds(t.getStart(),t.getEnd()),kind:n,name:r,containerKind:void 0,containerName:a}}function M(t,n){function r(t,n,r,a,i,o){var s,c=[]
return e.forEach(t,function(e){(n&&145===e.kind||!n&&(216===e.kind||144===e.kind||143===e.kind))&&(c.push(e),e.body&&(s=e))}),s?(o.push(L(s,r,a,i)),!0):!!c.length&&(o.push(L(e.lastOrUndefined(c),r,a,i)),!0)}var a=ie.getTypeChecker(),i=[],o=t.getDeclarations(),s=a.symbolToString(t),c=O(t,n),_=t.parent,u=_?a.symbolToString(_,n):""
return function(t,n,a,i,o,s){if((y(n)||121===n.kind)&&32&t.flags){for(var c=0,_=t.getDeclarations();c<_.length;c++){var u=_[c]
if(e.isClassLike(u))return r(u.members,!0,a,i,o,s)}e.Debug.fail("Expected declaration to have at least one class-like declaration")}return!1}(t,n,c,s,u,i)||function(e,t,n,a,i,o){return!!(g(t)||y(t)||v(t))&&r(e.declarations,!1,n,a,i,o)}(t,n,c,s,u,i)||e.forEach(o,function(e){i.push(L(e,c,s,u))}),i}function j(t,n,r){function a(t){var n=t.getStart(),r=t.getEnd()
return{fileName:c.fileName,textSpan:e.createTextSpanFromBounds(n,r),kind:w.none}}s(),r=e.map(r,e.normalizeSlashes)
var o=e.filter(ie.getSourceFiles(),function(t){return e.contains(r,t.fileName)}),c=i(t),_=e.getTouchingWord(c,n)
return _?function(t){if(69===t.kind||97===t.kind||162===t.kind||95===t.kind||b(t)||x(t))return function(t){if(t){for(var n={},r=[],a=0,i=t;a<i.length;a++)for(var o=0,s=i[a].references;o<s.length;o++){var c=s[o],_=c.fileName,u=e.getProperty(n,_)
u||(u={fileName:_,highlightSpans:[]},n[_]=u,r.push(u)),u.highlightSpans.push({textSpan:c.textSpan,kind:c.isWriteAccess?w.writtenReference:w.reference})}return r}}(G(t,o,!1,!1))}(_)||function(t){function n(e,t){return void 0!==e&&e.kind===t}function r(e){return e&&e.parent}function i(t){var n=[]
return function t(r){if(211===r.kind)n.push(r)
else if(212===r.kind){var a=r
t(a.catchClause?a.catchClause:a.tryBlock),a.finallyBlock&&t(a.finallyBlock)}else e.isFunctionLike(r)||e.forEachChild(r,t)}(t),n}function o(t){var n=[]
return function t(r){206===r.kind||205===r.kind?n.push(r):e.isFunctionLike(r)||e.forEachChild(r,t)}(t),n}function s(e,t){var n=_(t)
return n&&n===e}function _(t){for(var n=t.parent;n;n=n.parent)switch(n.kind){case 209:if(205===t.kind)continue
case 202:case 203:case 204:case 201:case 200:if(!t.label||d(n,t.label.text))return n
break
default:if(e.isFunctionLike(n))return}}function u(t,n){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a]
return!(!n||!e.contains(r,n.kind)||(t.push(n),0))}function l(t){var n=[]
if(u(n,t.getFirstToken(),86,104,79)&&200===t.kind)for(var r=t.getChildren(),i=r.length-1;i>=0&&!u(n,r[i],104);i--);var c=o(t.statement)
return e.forEach(c,function(e){s(t,e)&&u(n,e.getFirstToken(),70,75)}),e.map(n,a)}function p(t){var n=[]
return u(n,t.getFirstToken(),96),e.forEach(t.caseBlock.clauses,function(r){u(n,r.getFirstToken(),71,77)
var a=o(r)
e.forEach(a,function(e){s(t,e)&&u(n,e.getFirstToken(),70)})}),e.map(n,a)}function f(t){var n=[]
return u(n,t.getFirstToken(),100),t.catchClause&&u(n,t.catchClause.getFirstToken(),72),t.finallyBlock&&u(n,e.findChildOfKind(t,85,c),85),e.map(n,a)}var m=c.fileName,g=function(t){if(t)switch(t.kind){case 88:case 80:if(n(t.parent,199))return function(t){for(var r=[];n(t.parent,199)&&t.parent.elseStatement===t;)t=t.parent
for(;t;){var i=t.getChildren()
u(r,i[0],88)
for(var o=i.length-1;o>=0&&!u(r,i[o],80);o--);if(!n(t.elseStatement,199))break
t=t.elseStatement}for(var s=[],o=0;o<r.length;o++){if(80===r[o].kind&&o<r.length-1){for(var _=r[o],l=r[o+1],d=!0,p=l.getStart()-1;p>=_.end;p--)if(!e.isWhiteSpace(c.text.charCodeAt(p))){d=!1
break}if(d){s.push({fileName:m,textSpan:e.createTextSpanFromBounds(_.getStart(),l.end),kind:w.reference}),o++
continue}}s.push(a(r[o]))}return s}(t.parent)
break
case 94:if(n(t.parent,207))return function(t){var r=e.getContainingFunction(t)
if(r&&n(r.body,195)){var o=[]
return e.forEachReturnStatement(r.body,function(e){u(o,e.getFirstToken(),94)}),e.forEach(i(r.body),function(e){u(o,e.getFirstToken(),98)}),e.map(o,a)}}(t.parent)
break
case 98:if(n(t.parent,211))return function(t){var n=function(t){for(var n=t;n.parent;){var r=n.parent
if(e.isFunctionBlock(r)||251===r.kind)return r
if(212===r.kind){var a=r
if(a.tryBlock===n&&a.catchClause)return n}n=r}}(t)
if(n){var r=[]
return e.forEach(i(n),function(e){u(r,e.getFirstToken(),98)}),e.isFunctionBlock(n)&&e.forEachReturnStatement(n,function(e){u(r,e.getFirstToken(),94)}),e.map(r,a)}}(t.parent)
break
case 72:if(n(r(r(t)),212))return f(t.parent.parent)
break
case 100:case 85:if(n(r(t),212))return f(t.parent)
break
case 96:if(n(t.parent,209))return p(t.parent)
break
case 71:case 77:if(n(r(r(r(t))),209))return p(t.parent.parent.parent)
break
case 70:case 75:if(n(t.parent,206)||n(t.parent,205))return function(e){var t=_(e)
if(t)switch(t.kind){case 202:case 203:case 204:case 200:case 201:return l(t)
case 209:return p(t)}}(t.parent)
break
case 86:if(n(t.parent,202)||n(t.parent,203)||n(t.parent,204))return l(t.parent)
break
case 104:case 79:if(n(t.parent,201)||n(t.parent,200))return l(t.parent)
break
case 121:if(n(t.parent,145))return function(t){var n=t.symbol.getDeclarations(),r=[]
return e.forEach(n,function(t){e.forEach(t.getChildren(),function(e){return u(r,e,121)})}),e.map(r,a)}(t.parent)
break
case 123:case 129:if(n(t.parent,146)||n(t.parent,147))return function(t){function n(t,n){var a=e.getDeclarationOfKind(t,n)
a&&e.forEach(a.getChildren(),function(e){return u(r,e,123,129)})}var r=[]
return n(t.symbol,146),n(t.symbol,147),e.map(r,a)}(t.parent)
break
default:if(e.isModifierKind(t.kind)&&t.parent&&(e.isDeclaration(t.parent)||196===t.parent.kind))return function(t,r){var i=r.parent
if(e.isAccessibilityModifier(t)){if(!(217===i.kind||189===i.kind||139===r.kind&&n(i,145)))return}else if(113===t){if(217!==i.kind&&189!==i.kind)return}else if(82===t||122===t){if(222!==i.kind&&251!==i.kind)return}else{if(115!==t)return
if(217!==i.kind&&217!==r.kind)return}var o,s=[],c=function(t){switch(t){case 112:return 8
case 110:return 16
case 111:return 32
case 113:return 64
case 82:return 2
case 122:return 4
case 115:return 128
default:e.Debug.fail()}}(t)
switch(i.kind){case 222:case 251:o=128&c?r.members.concat(r):i.statements
break
case 145:o=i.parameters.concat(i.parent.members)
break
case 217:case 189:if(o=i.members,56&c){var _=e.forEach(i.members,function(e){return 145===e.kind&&e})
_&&(o=o.concat(_.parameters))}else 128&c&&(o=o.concat(i))
break
default:e.Debug.fail("Invalid container kind.")}return e.forEach(o,function(n){n.modifiers&&n.flags&c&&e.forEach(n.modifiers,function(e){return u(s,e,t)})}),e.map(s,a)}(t.kind,t.parent)}}(t)
return g&&0!==g.length?[{fileName:m,highlightSpans:g}]:void 0}(_):void 0}function U(t){if(t){for(var n=[],r=0,a=t;r<a.length;r++){var i=a[r]
e.addRange(n,i.references)}return n}}function q(t,n,r,a){s()
var o=i(t),c=e.getTouchingPropertyName(o,n)
return c&&(69===c.kind||b(c)||x(c))?(e.Debug.assert(69===c.kind||8===c.kind||9===c.kind),G(c,ie.getSourceFiles(),r,a)):void 0}function G(t,n,r,a){function i(n){var r=F(n,t.getSourceFile(),D(t),t),a=e.map(r.displayParts,function(e){return e.text}).join(""),i=n.declarations
return i&&0!==i.length?{containerKind:"",containerName:"",name:a,kind:r.symbolKind,fileName:i[0].getSourceFile().fileName,textSpan:e.createTextSpan(i[0].getStart(),0)}:void 0}function o(t){return 8388608&t.flags&&!!e.getDeclarationOfKind(t,229)}function s(t,n,r,a){var i=[]
if(!n||!n.length)return i
for(var o=t.text,s=o.length,c=n.length,_=o.indexOf(n,r);_>=0&&(_e.throwIfCancellationRequested(),!(_>a));){var u=_+c
0!==_&&e.isIdentifierPart(o.charCodeAt(_-1),2)||u!==s&&e.isIdentifierPart(o.charCodeAt(u),2)||i.push(_),_=o.indexOf(n,_+c+1)}return i}function c(t,n){var r=[],a=t.getSourceFile(),i=n.text,o=s(a,i,t.getStart(),t.getEnd())
return e.forEach(o,function(t){_e.throwIfCancellationRequested()
var o=e.getTouchingWord(a,t)
o&&o.getWidth()===i.length&&(o===n||l(o)&&u(o,i)===n)&&r.push(Q(o))}),[{definition:{containerKind:"",containerName:"",fileName:n.getSourceFile().fileName,kind:z.label,name:i,textSpan:e.createTextSpanFromBounds(n.getStart(),n.getEnd())},references:r}]}function _(t,n,r,a,o,c,_,u,l){function p(t){var n=e.getSymbolId(t),r=l[n]
return void 0===r&&(r=u.length,l[n]=r,u.push({definition:i(t),references:[]})),u[r]}function f(t,n){return e.isInCommentHelper(t,n,function(e){var n=t.text.substring(e.pos,e.end)
return!h.test(n)})}var g=t.getSourceFile(),h=/^\/\/\/\s*</,v=s(g,r,t.getStart(),t.getEnd())
if(v.length){var k=d(n,a)
e.forEach(v,function(t){_e.throwIfCancellationRequested()
var n=e.getTouchingPropertyName(g,t)
if(function(e,t){if(e)switch(e.kind){case 69:return e.getWidth()===t.length
case 9:if(b(e)||x(e))return e.getWidth()===t.length+2
break
case 8:if(b(e))return e.getWidth()===t.length}return!1}(n,r)){if($(n)&o){var a=y.getSymbolAtLocation(n)
if(a){var i=a.valueDeclaration,s=y.getShorthandAssignmentValueSymbol(i),l=m(k,a,n)
l?p(l).references.push(Q(n)):!(67108864&a.flags)&&k.indexOf(s)>=0&&p(s).references.push(Q(i.name))}}}else(c&&e.isInString(g,t)||_&&f(g,t))&&u.push({definition:void 0,references:[{fileName:g.fileName,textSpan:e.createTextSpan(t,r.length),isWriteAccess:!1}]})})}}function d(t,n){var r=[t]
if(o(t)&&r.push(y.getAliasedSymbol(t)),233===n.parent.kind&&r.push(y.getExportSpecifierLocalTargetSymbol(n.parent)),k(n)){e.forEach(g(n),function(t){e.addRange(r,y.getRootSymbols(t))})
var a=y.getShorthandAssignmentValueSymbol(n.parent)
a&&r.push(a)}return t.valueDeclaration&&139===t.valueDeclaration.kind&&e.isParameterPropertyDeclaration(t.valueDeclaration)&&(r=r.concat(y.getSymbolsOfParameterPropertyDeclaration(t.valueDeclaration,t.name))),e.forEach(y.getRootSymbols(t),function(e){e!==t&&r.push(e),e.parent&&96&e.parent.flags&&f(e.parent,e.getName(),r,{})}),r}function f(t,n,r,a){function i(e){if(e){var i=y.getTypeAtLocation(e)
if(i){var o=y.getPropertyOfType(i,n)
o&&r.push(o),a[t.name]=t,f(i.symbol,n,r,a)}}}t&&(e.hasProperty(a,t.name)||96&t.flags&&e.forEach(t.getDeclarations(),function(t){217===t.kind?(i(e.getClassExtendsHeritageClauseElement(t)),e.forEach(e.getClassImplementsHeritageClauseElements(t),i)):218===t.kind&&e.forEach(e.getInterfaceBaseTypeNodes(t),i)}))}function m(t,n,r){if(t.indexOf(n)>=0)return n
if(o(n)){var a=y.getAliasedSymbol(n)
if(t.indexOf(a)>=0)return a}return 233===r.parent.kind&&(a=y.getExportSpecifierLocalTargetSymbol(r.parent),t.indexOf(a)>=0)?a:k(r)?e.forEach(g(r),function(n){return e.forEach(y.getRootSymbols(n),function(e){return t.indexOf(e)>=0?e:void 0})}):e.forEach(y.getRootSymbols(n),function(n){if(t.indexOf(n)>=0)return n
if(n.parent&&96&n.parent.flags){var r=[]
return f(n.parent,n.getName(),r,{}),e.forEach(r,function(e){return t.indexOf(e)>=0?e:void 0})}})}function g(t){if(k(t)){var n=t.parent.parent,r=y.getContextualType(n),a=t.text
if(r){if(16384&r.flags){var i=r.getProperty(a)
if(i)return[i]
var o=[]
return e.forEach(r.types,function(e){var t=e.getProperty(a)
t&&o.push(t)}),o}var s=r.getProperty(a)
if(s)return[s]}}}var y=ie.getTypeChecker()
if(p(t)){if(l(t)){var h=u(t.parent,t.text)
return h?c(h.parent,h):void 0}return c(t.parent,t)}if(97===t.kind||162===t.kind)return function(n,r){function a(t,n,r,a){e.forEach(r,function(r){_e.throwIfCancellationRequested()
var i=e.getTouchingWord(t,r)
if(i&&(97===i.kind||162===i.kind)){var s=e.getThisContainer(i,!1)
switch(n.kind){case 176:case 216:n.symbol===s.symbol&&a.push(Q(i))
break
case 144:case 143:e.isObjectLiteralMethod(n)&&n.symbol===s.symbol&&a.push(Q(i))
break
case 189:case 217:s.parent&&n.symbol===s.parent.symbol&&(64&s.flags)===o&&a.push(Q(i))
break
case 251:251!==s.kind||e.isExternalModule(s)||a.push(Q(i))}}})}var i=e.getThisContainer(n,!1),o=64
switch(i.kind){case 144:case 143:if(e.isObjectLiteralMethod(i))break
case 142:case 141:case 145:case 146:case 147:o&=i.flags,i=i.parent
break
case 251:if(e.isExternalModule(i))return
case 216:case 176:break
default:return}var c,_=[]
if(251===i.kind)e.forEach(r,function(e){c=s(e,"this",e.getStart(),e.getEnd()),a(e,e,c,_)})
else{var u=i.getSourceFile()
c=s(u,"this",i.getStart(),i.getEnd()),a(u,i,c,_)}return[{definition:{containerKind:"",containerName:"",fileName:t.getSourceFile().fileName,kind:z.variableElement,name:"this",textSpan:e.createTextSpanFromBounds(t.getStart(),t.getEnd())},references:_}]}(t,n)
if(95===t.kind)return function(t){var n=e.getSuperContainer(t,!1)
if(n){var r=64
switch(n.kind){case 142:case 141:case 144:case 143:case 145:case 146:case 147:r&=n.flags,n=n.parent
break
default:return}var a=[],o=n.getSourceFile(),c=s(o,"super",n.getStart(),n.getEnd())
return e.forEach(c,function(t){_e.throwIfCancellationRequested()
var i=e.getTouchingWord(o,t)
if(i&&95===i.kind){var s=e.getSuperContainer(i,!1)
s&&(64&s.flags)===r&&s.parent.symbol===n.symbol&&a.push(Q(i))}}),[{definition:i(n.symbol),references:a}]}}(t)
var v=y.getSymbolAtLocation(t)
if(v){var C=v.declarations
if(C&&C.length){var T,E=function(e,t){if(t){var n=void 0
do{n=e
for(var r=0,a=t;r<a.length;r++){var i=Y(a[r])
i&e&&(e|=i)}}while(e!==n)}return e}($(t),C),w=e.stripQuotes(e.getDeclaredName(y,v,t)),A=function(t){var n=t.valueDeclaration
if(n&&(176===n.kind||189===n.kind))return n
if(8196&t.flags){var r=e.forEach(t.getDeclarations(),function(e){return 16&e.flags?e:void 0})
if(r)return e.getAncestor(r,217)}if(!(8388608&t.flags||t.parent||268435456&t.flags)){var a,i=t.getDeclarations()
if(i)for(var o=0,s=i;o<s.length;o++){var c=D(s[o])
if(!c)return
if(a&&a!==c)return
if(251===c.kind&&!e.isExternalModule(c))return
a=c}return a}}(v),P=[]
if(A)_(A,v,w,t,E,r,a,T=[],P)
else for(var N=function(t,n,r){return e.isImportOrExportSpecifierName(n)?n.getText():(t=e.getLocalSymbolForExportDefault(t)||t,e.stripQuotes(t.name))}(v,t),O=0,R=n;O<R.length;O++){var I=R[O]
_e.throwIfCancellationRequested()
var L=S(I)
void 0!==e.lookUp(L,N)&&_(I,v,w,t,E,r,a,T=T||[],P)}return T}}}function Q(t){var n=t.getStart(),r=t.getEnd()
return 9===t.kind&&(n+=1,r-=1),{fileName:t.getSourceFile().fileName,textSpan:e.createTextSpanFromBounds(n,r),isWriteAccess:function(t){if(69===t.kind&&e.isDeclarationName(t))return!0
var n=t.parent
if(n){if(183===n.kind||182===n.kind)return!0
if(184===n.kind&&n.left===t){var r=n.operatorToken.kind
return r>=56&&68>=r}}return!1}(t)}}function Y(t){switch(t.kind){case 139:case 214:case 166:case 142:case 141:case 248:case 249:case 250:case 144:case 143:case 145:case 146:case 147:case 216:case 176:case 177:case 247:return 1
case 138:case 218:case 219:case 156:return 2
case 217:case 220:return 3
case 221:return e.isAmbientModule(t)?5:1===e.getModuleInstanceState(t)?5:4
case 228:case 229:case 224:case 225:case 230:case 231:return 7
case 251:return 5}return 7}function $(t){return 230===t.parent.kind?7:function(t){for(;136===t.parent.kind;)t=t.parent
return e.isInternalModuleImportEqualsDeclaration(t.parent)&&t.parent.moduleReference===t}(t)?function(t){return e.Debug.assert(69===t.kind),136===t.parent.kind&&t.parent.right===t&&224===t.parent.parent.kind?7:4}(t):e.isDeclarationName(t)?Y(t.parent):function(t){return e.isRightSideOfQualifiedNameOrPropertyAccess(t)&&(t=t.parent),152===t.parent.kind||191===t.parent.kind&&!e.isExpressionWithTypeArgumentsInClassExtendsClause(t.parent)||97===t.kind&&!e.isExpression(t)||162===t.kind}(t)?2:function(e){return function(e){var t=e,n=!0
if(136===t.parent.kind){for(;t.parent&&136===t.parent.kind;)t=t.parent
n=t.right===e}return 152===t.parent.kind&&!n}(e)||function(e){var t=e,n=!0
if(169===t.parent.kind){for(;t.parent&&169===t.parent.kind;)t=t.parent
n=t.name===e}if(!n&&191===t.parent.kind&&246===t.parent.parent.kind){var r=t.parent.parent.parent
return 217===r.kind&&106===t.parent.parent.token||218===r.kind&&83===t.parent.parent.token}return!1}(e)}(t)?4:1}function Z(e){switch(e){case 221:case 217:case 218:case 216:_e.throwIfCancellationRequested()}}function ee(t,n){function r(e,t,n){c.push(e),c.push(t),c.push(n)}s()
var a=i(t),o=ie.getTypeChecker(),c=[],_=ie.getClassifiableNames()
return function t(a){if(a&&e.textSpanIntersectsWith(n,a.getFullStart(),a.getFullWidth())){var i=a.kind
if(Z(i),69===i&&!e.nodeIsMissing(a)&&_[a.text]){var s=o.getSymbolAtLocation(a)
if(s){var c=function(t,n){var r=t.getFlags()
if(0!=(788448&r)){if(32&r)return 11
if(384&r)return 12
if(524288&r)return 16
if(2&n){if(64&r)return 13
if(262144&r)return 15}else if(1536&r&&(4&n||1&n&&function(t){return e.forEach(t.declarations,function(t){return 221===t.kind&&1===e.getModuleInstanceState(t)})}(t)))return 14}}(s,$(a))
c&&r(a.getStart(),a.getWidth(),c)}}e.forEachChild(a,t)}}(a),{spans:c,endOfLineState:0}}function te(e){switch(e){case 1:return J.comment
case 2:return J.identifier
case 3:return J.keyword
case 4:return J.numericLiteral
case 5:return J.operator
case 6:return J.stringLiteral
case 8:return J.whiteSpace
case 9:return J.text
case 10:return J.punctuation
case 11:return J.className
case 12:return J.enumName
case 13:return J.interfaceName
case 14:return J.moduleName
case 15:return J.typeParameterName
case 16:return J.typeAliasName
case 17:return J.parameterName
case 18:return J.docCommentTagName
case 19:return J.jsxOpenTagName
case 20:return J.jsxCloseTagName
case 21:return J.jsxSelfClosingTagName
case 22:return J.jsxAttribute
case 23:return J.jsxText
case 24:return J.jsxAttributeStringLiteralValue}}function ne(t){e.Debug.assert(t.spans.length%3==0)
for(var n=t.spans,r=[],a=0,i=n.length;i>a;a+=3)r.push({textSpan:e.createTextSpan(n[a],n[a+1]),classificationType:te(n[a+2])})
return r}function re(t,n){function r(e,t,n){v.push(e),v.push(t),v.push(n)}function a(t){for(y.setTextPos(t.pos);;){var n=y.getTextPos()
if(!e.couldStartTrivia(f.text,n))return n
var a=y.scan(),o=y.getTextPos(),s=o-n
if(!e.isTrivia(a))return n
if(4!==a&&5!==a)if(e.isComment(a))i(t,a,n,s),y.setTextPos(o)
else if(7===a){var c=f.text,u=c.charCodeAt(n)
if(60===u||62===u){r(n,s,1)
continue}e.Debug.assert(61===u),_(c,n,o)}}}function i(t,n,r,a){if(3===n){var i=e.parseIsolatedJSDocComment(f.text,r,a)
if(i&&i.jsDocComment)return i.jsDocComment.parent=t,void s(i.jsDocComment)}o(r,a)}function o(e,t){r(e,t,1)}function s(e){function t(e){e.preParameterName&&(o(n,e.preParameterName.pos-n),r(e.preParameterName.pos,e.preParameterName.end-e.preParameterName.pos,17),n=e.preParameterName.end),e.typeExpression&&(o(n,e.typeExpression.pos-n),p(e.typeExpression),n=e.typeExpression.end),e.postParameterName&&(o(n,e.postParameterName.pos-n),r(e.postParameterName.pos,e.postParameterName.end-e.postParameterName.pos,17),n=e.postParameterName.end)}for(var n=e.pos,a=0,i=e.tags;a<i.length;a++){var s=i[a]
switch(s.pos!==n&&o(n,s.pos-n),r(s.atToken.pos,s.atToken.end-s.atToken.pos,10),r(s.tagName.pos,s.tagName.end-s.tagName.pos,18),n=s.tagName.end,s.kind){case 270:t(s)
break
case 273:c(s)
break
case 272:p(s.typeExpression)
break
case 271:p(s.typeExpression)}n=s.end}n!==e.end&&o(n,e.end-n)}function c(e){for(var t=0,n=e.getChildren();t<n.length;t++)p(n[t])}function _(t,n,a){var i
for(i=n;a>i&&!e.isLineBreak(t.charCodeAt(i));i++);for(r(n,i-n,1),h.setTextPos(i);h.getTextPos()<a;)u()}function u(){var e=h.getTextPos(),t=h.scan(),n=h.getTextPos(),a=d(t)
a&&r(e,n-e,a)}function l(t){if(e.nodeIsMissing(t))return!0
var n=function(e){switch(e.parent&&e.parent.kind){case 238:if(e.parent.tagName===e)return 19
break
case 240:if(e.parent.tagName===e)return 20
break
case 237:if(e.parent.tagName===e)return 21
break
case 241:if(e.parent.name===e)return 22}}(t)
if(!e.isToken(t)&&239!==t.kind&&void 0===n)return!1
var i=239===t.kind?t.pos:a(t),o=t.end-i
if(e.Debug.assert(o>=0),o>0){var s=n||d(t.kind,t)
s&&r(i,o,s)}return!0}function d(t,n){if(e.isKeyword(t))return 3
if((25===t||27===t)&&n&&e.getTypeArgumentOrTypeParameterList(n.parent))return 10
if(e.isPunctuation(t)){if(n){if(56===t&&(214===n.parent.kind||142===n.parent.kind||139===n.parent.kind||241===n.parent.kind))return 5
if(184===n.parent.kind||182===n.parent.kind||183===n.parent.kind||185===n.parent.kind)return 5}return 10}if(8===t)return 4
if(9===t||163===t)return 241===n.parent.kind?24:6
if(10===t)return 6
if(e.isTemplateLiteralKind(t))return 6
if(239===t)return 23
if(69===t){if(n)switch(n.parent.kind){case 217:return n.parent.name===n?11:void 0
case 138:return n.parent.name===n?15:void 0
case 218:return n.parent.name===n?13:void 0
case 220:return n.parent.name===n?12:void 0
case 221:return n.parent.name===n?14:void 0
case 139:return n.parent.name===n?17:void 0}return 2}}function p(t){if(t&&e.decodedTextSpanIntersectsWith(m,g,t.pos,t.getFullWidth())){Z(t.kind)
for(var n=t.getChildren(f),r=0,a=n.length;a>r;r++){var i=n[r]
l(i)||p(i)}}}var f=se.getCurrentSourceFile(t),m=n.start,g=n.length,y=e.createScanner(2,!1,f.languageVariant,f.text),h=e.createScanner(2,!1,f.languageVariant,f.text),v=[]
return p(f),{spans:v,endOfLineState:0}}void 0===n&&(n=_(t.useCaseSensitiveFileNames&&t.useCaseSensitiveFileNames(),t.getCurrentDirectory()))
var ae,ie,oe,se=new V(t),ce=!1,_e=new X(t.getCancellationToken&&t.getCancellationToken()),ue=t.getCurrentDirectory()
!e.localizedDiagnosticMessages&&t.getLocalizedDiagnosticMessages&&(e.localizedDiagnosticMessages=t.getLocalizedDiagnosticMessages())
var le=e.createGetCanonicalFileName(ce)
return{dispose:function(){ie&&e.forEach(ie.getSourceFiles(),function(e){return n.releaseDocument(e.fileName,ie.getCompilerOptions())})},cleanupSemanticCache:function(){},getSyntacticDiagnostics:function(e){return s(),ie.getSyntacticDiagnostics(i(e),_e)},getSemanticDiagnostics:function(t){s()
var n=i(t),r=ie.getSemanticDiagnostics(n,_e)
if(!ie.getCompilerOptions().declaration)return r
var a=ie.getDeclarationDiagnostics(n,_e)
return e.concatenate(r,a)},getCompilerOptionsDiagnostics:function(){return s(),ie.getOptionsDiagnostics(_e).concat(ie.getGlobalDiagnostics(_e))},getSyntacticClassifications:function(e,t){return ne(re(e,t))},getSemanticClassifications:function(e,t){return ne(ee(e,t))},getEncodedSyntacticClassifications:re,getEncodedSemanticClassifications:ee,getCompletionsAtPosition:function(t,n){function r(e,t){var n=c(e,ie.getCompilerOptions().target,!0,t)
if(n)return{name:n,kind:O(e,t),kindModifiers:I(e),sortText:"0"}}function o(t,n){var i=(new Date).getTime(),o={}
if(t)for(var s=0,c=t;s<c.length;s++){var _=r(c[s],p)
if(_){var u=e.escapeIdentifier(_.name)
e.lookUp(o,u)||(n.push(_),o[u]=u)}}return a("getCompletionsAtPosition: getCompletionEntriesFromSymbols: "+((new Date).getTime()-i)),o}s()
var _=A(t,n)
if(_){var u=_.symbols,l=_.isMemberCompletion,d=_.isNewIdentifierLocation,p=_.location,f=_.isJsDocTagName
if(f)return{isMemberCompletion:!1,isNewIdentifierLocation:!1,entries:E||(E=e.map(N,function(e){return{name:e,kind:z.keyword,kindModifiers:"",sortText:"0"}}))}
var m=i(t),g=[]
if(e.isSourceFileJavaScript(m)){var y=o(u,g)
e.addRange(g,function(e,t,n){var r=[],a=ie.getCompilerOptions().target,i=S(e)
for(var o in i)if(i[o]!==t&&!n[o]){n[o]=o
var s=T(o,a,!0)
if(s){var c={name:s,kind:z.warning,kindModifiers:"",sortText:"1"}
r.push(c)}}return r}(m,p.pos,y))}else{if(!u||0===u.length){if(1!==m.languageVariant||!p.parent||240!==p.parent.kind)return
var h=p.parent.parent.openingElement.tagName
g.push({name:h.text,kind:void 0,kindModifiers:void 0,sortText:"0"})}o(u,g)}return l||f||e.addRange(g,H),{isMemberCompletion:l,isNewIdentifierLocation:d,entries:g}}},getCompletionEntryDetails:function(t,n,r){s()
var a=A(t,n)
if(a){var o=a.symbols,_=a.location,u=ie.getCompilerOptions().target,l=e.forEach(o,function(e){return c(e,u,!1,_)===r?e:void 0})
if(l){var d=F(l,i(t),_,_,7),p=d.displayParts,f=d.documentation,m=d.symbolKind
return{name:r,kindModifiers:I(l),kind:m,displayParts:p,documentation:f}}}return e.forEach(H,function(e){return e.name===r})?{name:r,kind:z.keyword,kindModifiers:K.none,displayParts:[e.displayPart(r,B.keyword)],documentation:void 0}:void 0},getSignatureHelpItems:function(t,n){s()
var r=i(t)
return e.SignatureHelp.getSignatureHelpItems(ie,r,n,_e)},getQuickInfoAtPosition:function(t,n){s()
var r=i(t),a=e.getTouchingPropertyName(r,n)
if(a&&!p(a)){var o=ie.getTypeChecker(),c=o.getSymbolAtLocation(a)
if(c&&!o.isUnknownSymbol(c)){var _=F(c,r,D(a),a)
return{kind:_.symbolKind,kindModifiers:I(c),textSpan:e.createTextSpan(a.getStart(),a.getWidth()),displayParts:_.displayParts,documentation:_.documentation}}switch(a.kind){case 69:case 169:case 136:case 97:case 162:case 95:var u=o.getTypeAtLocation(a)
if(u)return{kind:z.unknown,kindModifiers:K.none,textSpan:e.createTextSpan(a.getStart(),a.getWidth()),displayParts:e.typeToDisplayParts(o,u,D(a)),documentation:u.symbol?u.symbol.getDocumentationComment():void 0}}}},getDefinitionAtPosition:function(t,n){s()
var r=i(t),a=e.getTouchingPropertyName(r,n)
if(a){if(l(a)){var o=a.text,c=u(a.parent,a.text)
return c?[L(c,z.label,o,void 0)]:void 0}var _=e.forEach(r.referencedFiles,function(e){return e.pos<=n&&n<e.end?e:void 0})
if(_){var d=e.tryResolveScriptReference(ie,r,_)
if(d)return[{fileName:d.fileName,textSpan:e.createTextSpanFromBounds(0,0),kind:z.scriptElement,name:_.fileName,containerName:void 0,containerKind:void 0}]}else{var p=ie.getTypeChecker(),f=p.getSymbolAtLocation(a)
if(f){if(8388608&f.flags){var m=f.declarations[0]
69===a.kind&&a.parent===m&&(f=p.getAliasedSymbol(f))}if(249===a.parent.kind){var g=p.getShorthandAssignmentValueSymbol(f.valueDeclaration)
if(!g)return[]
var y=g.getDeclarations(),h=O(g,a),v=p.symbolToString(g),k=p.symbolToString(f.parent,a)
return e.map(y,function(e){return L(e,h,v,k)})}return M(f,a)}}}},getTypeDefinitionAtPosition:function(t,n){s()
var r=i(t),a=e.getTouchingPropertyName(r,n)
if(a){var o=ie.getTypeChecker(),c=o.getSymbolAtLocation(a)
if(c){var _=o.getTypeOfSymbolAtLocation(c,a)
if(_){if(16384&_.flags){var u=[]
return e.forEach(_.types,function(t){t.symbol&&e.addRange(u,M(t.symbol,a))}),u}if(_.symbol)return M(_.symbol,a)}}}},getReferencesAtPosition:function(e,t){return U(q(e,t,!1,!1))},findReferences:function(t,n){var r=q(t,n,!1,!1)
return e.filter(r,function(e){return!!e.definition})},getOccurrencesAtPosition:function(t,n){var r=function(e,t){return s(),function(e){if(e){for(var t=[],n=0,r=e;n<r.length;n++)for(var a=r[n],i=0,o=a.highlightSpans;i<o.length;i++){var s=o[i]
t.push({fileName:a.fileName,textSpan:s.textSpan,isWriteAccess:s.kind===w.writtenReference})}return t}}(j(e,t,[e]))}(t,n)
if(r){var a=le(e.normalizeSlashes(t))
r=e.filter(r,function(t){return le(e.normalizeSlashes(t.fileName))===a})}return r},getDocumentHighlights:j,getNameOrDottedNameSpan:function(t,n,r){var a=se.getCurrentSourceFile(t),i=e.getTouchingPropertyName(a,n)
if(i){switch(i.kind){case 169:case 136:case 9:case 163:case 84:case 99:case 93:case 95:case 97:case 162:case 69:break
default:return}for(var o=i;;)if(m(o)||f(o))o=o.parent
else{if(!h(o))break
if(221!==o.parent.parent.kind||o.parent.parent.body!==o.parent)break
o=o.parent.parent.name}return e.createTextSpanFromBounds(o.getStart(),i.getEnd())}},getBreakpointStatementAtPosition:function(t,n){var r=se.getCurrentSourceFile(t)
return e.BreakpointResolver.spanInSourceFileAtLocation(r,n)},getNavigateToItems:function(t,n){return s(),e.NavigateTo.getNavigateToItems(ie,_e,t,n)},getRenameInfo:function(n,r){function a(e){return{canRename:!1,localizedErrorMessage:e,displayName:void 0,fullDisplayName:void 0,kind:void 0,kindModifiers:void 0,triggerSpan:void 0}}s()
var o=i(n),c=ie.getTypeChecker(),_=e.getTouchingWord(o,r)
if(_&&69===_.kind){var u=c.getSymbolAtLocation(_)
if(u){var l=u.getDeclarations()
if(l&&l.length>0){var d=t.getDefaultLibFileName(t.getCompilationSettings()),p=le(e.normalizePath(d))
if(d)for(var f=0,m=l;f<m.length;f++){var g=m[f].getSourceFile()
if(g&&le(e.normalizePath(g.fileName))===p)return a(e.getLocaleSpecificMessage(e.Diagnostics.You_cannot_rename_elements_that_are_defined_in_the_standard_TypeScript_library))}var y=e.stripQuotes(e.getDeclaredName(c,u,_)),h=O(u,_)
if(h)return{canRename:!0,kind:h,displayName:y,localizedErrorMessage:void 0,fullDisplayName:c.getFullyQualifiedName(u),kindModifiers:I(u),triggerSpan:e.createTextSpan(_.getStart(),_.getWidth())}}}}return a(e.getLocaleSpecificMessage(e.Diagnostics.You_cannot_rename_this_element))},findRenameLocations:function(e,t,n,r){return U(q(e,t,n,r))},getNavigationBarItems:function(n){var r=se.getCurrentSourceFile(n)
return e.NavigationBar.getNavigationBarItems(r,t.getCompilationSettings())},getOutliningSpans:function(t){var n=se.getCurrentSourceFile(t)
return e.OutliningElementsCollector.collectElements(n)},getTodoComments:function(t,n){function r(e){return e>=97&&122>=e||e>=65&&90>=e||e>=48&&57>=e}s()
var a=i(t)
_e.throwIfCancellationRequested()
var o=a.text,c=[]
if(n.length>0)for(var _=function(){var t="("+/(?:^(?:\s|\*)*)/.source+"|"+/(?:\/\/+\s*)/.source+"|"+/(?:\/\*+\s*)/.source+")",r="(?:"+e.map(n,function(e){return"("+function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}(e.text)+")"}).join("|")+")"
return new RegExp(t+"("+r+/(?:.*?)/.source+")"+/(?:$|\*\/)/.source,"gim")}(),u=void 0;u=_.exec(o);){_e.throwIfCancellationRequested(),e.Debug.assert(u.length===n.length+3)
var l=u[1],d=u.index+l.length
if(C(a,e.getTokenAtPosition(a,d),d)){for(var p=void 0,f=0,m=n.length;m>f;f++)u[f+3]&&(p=n[f])
if(e.Debug.assert(void 0!==p),!r(o.charCodeAt(d+p.text.length))){var g=u[2]
c.push({descriptor:p,message:g,position:d})}}}return c},getBraceMatchingAtPosition:function(t,n){var r=se.getCurrentSourceFile(t),a=[],i=e.getTouchingToken(r,n)
if(i.getStart(r)===n){var o=function(e){switch(e.kind){case 15:return 16
case 17:return 18
case 19:return 20
case 25:return 27
case 16:return 15
case 18:return 17
case 20:return 19
case 27:return 25}}(i)
if(o)for(var s=0,c=i.parent.getChildren(r);s<c.length;s++){var _=c[s]
if(_.kind===o){var u=e.createTextSpan(i.getStart(r),i.getWidth(r)),l=e.createTextSpan(_.getStart(r),_.getWidth(r))
u.start<l.start?a.push(u,l):a.push(l,u)
break}}}return a},getIndentationAtPosition:function(t,n,r){var i=(new Date).getTime(),o=se.getCurrentSourceFile(t)
a("getIndentationAtPosition: getCurrentSourceFile: "+((new Date).getTime()-i)),i=(new Date).getTime()
var s=e.formatting.SmartIndenter.getIndentation(n,o,r)
return a("getIndentationAtPosition: computeIndentation  : "+((new Date).getTime()-i)),s},getFormattingEditsForRange:function(t,n,r,a){var i=se.getCurrentSourceFile(t)
return e.formatting.formatSelection(n,r,i,o(a),a)},getFormattingEditsForDocument:function(t,n){var r=se.getCurrentSourceFile(t)
return e.formatting.formatDocument(r,o(n),n)},getFormattingEditsAfterKeystroke:function(t,n,r,a){var i=se.getCurrentSourceFile(t)
return"}"===r?e.formatting.formatOnClosingCurly(n,i,o(a),a):";"===r?e.formatting.formatOnSemicolon(n,i,o(a),a):"\n"===r?e.formatting.formatOnEnter(n,i,o(a),a):[]},getDocCommentTemplateAtPosition:function(n,r){var a=se.getCurrentSourceFile(n)
if(!(e.isInString(a,r)||e.isInComment(a,r)||e.hasDocComment(a,r))){var i=e.getTokenAtPosition(a,r),o=i.getStart()
if(i&&!(r>o)){var s
e:for(s=i;s;s=s.parent)switch(s.kind){case 216:case 144:case 145:case 217:case 196:break e
case 251:return
case 221:if(221===s.parent.kind)return
break e}if(s&&!(s.getStart()<r)){for(var c=function(t){if(e.isFunctionLike(t))return t.parameters
if(196===t.kind){var n=t,r=n.declarationList.declarations
if(1===r.length&&r[0].initializer)return function(e){for(;175===e.kind;)e=e.expression
switch(e.kind){case 176:case 177:return e.parameters
case 189:for(var t=0,n=e.members;t<n.length;t++){var r=n[t]
if(145===r.kind)return r.parameters}}return P}(r[0].initializer)}return P}(s),_=a.getLineAndCharacterOfPosition(r),u=a.getLineStarts()[_.line],l=a.text.substr(u,_.character),d=e.getNewLineOrDefaultFromHost(t),p="",f=0,m=c.length;m>f;f++){var g=c[f].name
p+=l+" * @param "+(69===g.kind?g.text:"param"+f)+d}var y="/**"+d+l+" * "
return{newText:y+d+p+l+" */"+(o===r?d+l:""),caretOffset:y.length}}}}},getEmitOutput:function(e){s()
var t=i(e),n=[],r=ie.emit(t,function(e,t,r){n.push({name:e,writeByteOrderMark:r,text:t})},_e)
return{outputFiles:n,emitSkipped:r.emitSkipped}},getSourceFile:function(e){return se.getCurrentSourceFile(e)},getProgram:function(){return s(),ie}}},e.getNameTable=S,e.createClassifier=function(){function t(t,n){return!e.isAccessibilityModifier(t)||123===n||129===n||121===n||113===n}function n(e,t){for(var n=[],a=e.spans,i=0,o=0,s=a.length;s>o;o+=3){var c=a[o],_=a[o+1],u=a[o+2]
if(i>=0){var l=c-i
l>0&&n.push({length:l,classification:j.Whitespace})}n.push({length:_,classification:r(u)}),i=c+_}var d=t.length-i
return d>0&&n.push({length:d,classification:j.Whitespace}),{entries:n,finalLexState:e.endOfLineState}}function r(e){switch(e){case 1:return j.Comment
case 3:return j.Keyword
case 4:return j.NumberLiteral
case 5:return j.Operator
case 6:return j.StringLiteral
case 8:return j.Whitespace
case 10:return j.Punctuation
case 2:case 11:case 12:case 13:case 14:case 15:case 16:case 9:case 17:default:return j.Identifier}}function a(n,r,a){function u(){var t=s.getTokenPos(),r=s.getTextPos()
if(l(t,r,o(p)),r>=n.length)if(9===p||163===p){var a=s.getTokenText()
if(s.isUnterminated()){for(var i=a.length-1,c=0;92===a.charCodeAt(i-c);)c++
if(1&c){var u=a.charCodeAt(0)
m.endOfLineState=34===u?3:2}}}else 3===p?s.isUnterminated()&&(m.endOfLineState=1):e.isTemplateLiteralKind(p)?s.isUnterminated()&&(14===p?m.endOfLineState=5:11===p?m.endOfLineState=4:e.Debug.fail("Only 'NoSubstitutionTemplateLiteral's and 'TemplateTail's can be unterminated; got SyntaxKind #"+p)):_.length>0&&12===e.lastOrUndefined(_)&&(m.endOfLineState=6)}function l(e,t,n){if(8!==n){0===e&&d>0&&(e+=d)
var r=(t-=d)-(e-=d)
r>0&&(m.spans.push(e),m.spans.push(r),m.spans.push(n))}}for(var d=0,p=0,f=0;_.length>0;)_.pop()
switch(r){case 3:n='"\\\n'+n,d=3
break
case 2:n="'\\\n"+n,d=3
break
case 1:n="/*\n"+n,d=3
break
case 4:n="`\n"+n,d=2
break
case 5:n="}\n"+n,d=2
case 6:_.push(12)}s.setText(n)
var m={endOfLineState:0,spans:[]},g=0
do{if(p=s.scan(),!e.isTrivia(p)){if(39!==p&&61!==p||c[f]){if(21===f&&i(p))p=69
else if(i(f)&&i(p)&&!t(f,p))p=69
else if(69===f&&25===p)g++
else if(27===p&&g>0)g--
else if(117===p||130===p||128===p||120===p||131===p)g>0&&!a&&(p=69)
else if(12===p)_.push(p)
else if(15===p)_.length>0&&_.push(p)
else if(16===p&&_.length>0){var y=e.lastOrUndefined(_)
12===y?14===(p=s.reScanTemplateToken())?_.pop():e.Debug.assert(13===p,"Should have been a template middle. Was "+p):(e.Debug.assert(15===y,"Should have been an open brace. Was: "+p),_.pop())}}else 10===s.reScanSlashToken()&&(p=10)
f=p}u()}while(1!==p)
return m}function i(e){return e>=70&&135>=e}function o(t){if(i(t))return 3
if(function(e){switch(e){case 37:case 39:case 40:case 35:case 36:case 43:case 44:case 45:case 25:case 27:case 28:case 29:case 91:case 90:case 116:case 30:case 31:case 32:case 33:case 46:case 48:case 47:case 51:case 52:case 67:case 66:case 68:case 63:case 64:case 65:case 57:case 58:case 59:case 61:case 62:case 56:case 24:return!0
default:return!1}}(t)||function(e){switch(e){case 35:case 36:case 50:case 49:case 41:case 42:return!0
default:return!1}}(t))return 5
if(t>=15&&68>=t)return 10
switch(t){case 8:return 4
case 9:case 163:return 6
case 10:return 7
case 7:case 3:case 2:return 1
case 5:case 4:return 8
case 69:default:return e.isTemplateLiteralKind(t)?6:2}}var s=e.createScanner(2,!1),c=[]
c[69]=!0,c[9]=!0,c[8]=!0,c[10]=!0,c[97]=!0,c[41]=!0,c[42]=!0,c[18]=!0,c[20]=!0,c[16]=!0,c[99]=!0,c[84]=!0
var _=[]
return{getClassificationsForLine:function(e,t,r){return n(a(e,t,r),e)},getEncodedLexicalClassifications:a}},e.getDefaultLibFilePath=function(t){if("undefined"!=typeof __dirname)return __dirname+e.directorySeparator+e.getDefaultLibFileName(t)
throw new Error("getDefaultLibFilePath is only supported when consumed as a node module. ")},e.objectAllocator={getNodeConstructor:function(){return O},getSourceFileConstructor:function(){return L},getSymbolConstructor:function(){return R},getTypeConstructor:function(){return I},getSignatureConstructor:function(){return F}}}(ts||(ts={})),function(e){!function(t){t.spanInSourceFileAtLocation=function(t,n){function r(n,r){var a=n.decorators?e.skipTrivia(t.text,n.decorators.end):n.getStart(t)
return e.createTextSpanFromBounds(a,(r||n).getEnd())}function a(t,n){return r(t,e.findNextToken(n,n.parent))}function i(e,n){return c(e&&u===t.getLineAndCharacterOfPosition(e.getStart(t)).line?e:n)}function o(n){return c(e.findPrecedingToken(n.pos,t))}function s(t){return c(e.findNextToken(t,t.parent))}function c(n){function _(n){var a=n.parent.declarations
return a&&a[0]===n?r(e.findPrecedingToken(n.pos,t,n.parent),n):r(n)}function u(n){if(203===n.parent.parent.kind)return c(n.parent.parent)
if(e.isBindingPattern(n.name))return f(n.name)
if(n.initializer||2&n.flags||204===n.parent.parent.kind)return _(n)
var r=n.parent.declarations
return r&&r[0]!==n?c(e.findPrecedingToken(n.pos,t,n.parent)):void 0}function l(e){return!!(2&e.flags)||217===e.parent.kind&&145!==e.kind}function d(n){switch(n.parent.kind){case 221:if(1!==e.getModuleInstanceState(n.parent))return
case 201:case 199:case 203:return i(n.parent,n.statements[0])
case 202:case 204:return i(e.findPrecedingToken(n.pos,t,n.parent),n.statements[0])}return c(n.statements[0])}function p(e){if(215!==e.initializer.kind)return c(e.initializer)
var t=e.initializer
return t.declarations.length>0?c(t.declarations[0]):void 0}function f(t){var n=e.forEach(t.elements,function(e){return 190!==e.kind?e:void 0})
return n?c(n):166===t.parent.kind?r(t.parent):_(t.parent)}function m(t){e.Debug.assert(165!==t.kind&&164!==t.kind)
var n=167===t.kind?t.elements:t.properties,a=e.forEach(n,function(e){return 190!==e.kind?e:void 0})
return a?c(a):r(184===t.parent.kind?t.parent:t)}if(n)switch(n.kind){case 196:return u(n.declarationList.declarations[0])
case 214:case 142:case 141:return u(n)
case 139:return function t(n){if(e.isBindingPattern(n.name))return f(n.name)
if(function(e){return!!e.initializer||void 0!==e.dotDotDotToken||!!(8&e.flags)||!!(16&e.flags)}(n))return r(n)
var a=n.parent,i=e.indexOf(a.parameters,n)
return i?t(a.parameters[i-1]):c(a.body)}(n)
case 216:case 144:case 143:case 146:case 147:case 145:case 176:case 177:return function(e){return e.body?l(e)?r(e):c(e.body):void 0}(n)
case 195:if(e.isFunctionBlock(n))return function(e){var t=e.statements.length?e.statements[0]:e.getLastToken()
return l(e.parent)?i(e.parent,t):c(t)}(n)
case 222:return d(n)
case 247:return d(n.block)
case 198:return r(n.expression)
case 207:return r(n.getChildAt(0),n.expression)
case 201:return a(n,n.expression)
case 200:return c(n.statement)
case 213:return r(n.getChildAt(0))
case 199:return a(n,n.expression)
case 210:return c(n.statement)
case 206:case 205:return r(n.getChildAt(0),n.label)
case 202:return function(e){return e.initializer?p(e):e.condition?r(e.condition):e.incrementor?r(e.incrementor):void 0}(n)
case 203:return a(n,n.expression)
case 204:return p(n)
case 209:return a(n,n.expression)
case 244:case 245:return c(n.statements[0])
case 212:return d(n.tryBlock)
case 211:case 230:return r(n,n.expression)
case 224:return r(n,n.moduleReference)
case 225:case 231:return r(n,n.moduleSpecifier)
case 221:if(1!==e.getModuleInstanceState(n))return
case 217:case 220:case 250:case 166:return r(n)
case 208:return c(n.statement)
case 140:return function(n){return e.createTextSpanFromBounds(e.skipTrivia(t.text,n.pos),n.end)}(n.parent.decorators)
case 164:case 165:return f(n)
case 218:case 219:return
case 23:case 1:return i(e.findPrecedingToken(n.pos,t))
case 24:return o(n)
case 15:return function(n){switch(n.parent.kind){case 220:var r=n.parent
return i(e.findPrecedingToken(n.pos,t,n.parent),r.members.length?r.members[0]:r.getLastToken(t))
case 217:var a=n.parent
return i(e.findPrecedingToken(n.pos,t,n.parent),a.members.length?a.members[0]:a.getLastToken(t))
case 223:return i(n.parent.parent,n.parent.clauses[0])}return c(n.parent)}(n)
case 16:return function(t){switch(t.parent.kind){case 222:if(1!==e.getModuleInstanceState(t.parent.parent))return
case 220:case 217:return r(t)
case 195:if(e.isFunctionBlock(t.parent))return r(t)
case 247:return c(e.lastOrUndefined(t.parent.statements))
case 223:var n=t.parent,a=e.lastOrUndefined(n.clauses)
return a?c(e.lastOrUndefined(a.statements)):void 0
case 164:var i=t.parent
return c(e.lastOrUndefined(i.elements)||i)
default:if(e.isArrayLiteralOrObjectLiteralDestructuringPattern(t.parent)){var o=t.parent
return r(e.lastOrUndefined(o.properties)||o)}return c(t.parent)}}(n)
case 20:return function(t){switch(t.parent.kind){case 165:var n=t.parent
return r(e.lastOrUndefined(n.elements)||n)
default:if(e.isArrayLiteralOrObjectLiteralDestructuringPattern(t.parent)){var a=t.parent
return r(e.lastOrUndefined(a.elements)||a)}return c(t.parent)}}(n)
case 17:return function(e){return 200===e.parent.kind||171===e.parent.kind||172===e.parent.kind?o(e):175===e.parent.kind?s(e):c(e.parent)}(n)
case 18:return function(e){switch(e.parent.kind){case 176:case 216:case 177:case 144:case 143:case 146:case 147:case 145:case 201:case 200:case 202:case 204:case 171:case 172:case 175:return o(e)
default:return c(e.parent)}}(n)
case 54:return function(t){return e.isFunctionLike(t.parent)||248===t.parent.kind||139===t.parent.kind?o(t):c(t.parent)}(n)
case 27:case 25:return function(e){return 174===e.parent.kind?s(e):c(e.parent)}(n)
case 104:return function(e){return 200===e.parent.kind?a(e,e.parent.expression):c(e.parent)}(n)
case 80:case 72:case 85:return s(n)
case 135:return function(e){return 204===e.parent.kind?s(e):c(e.parent)}(n)
default:if(e.isArrayLiteralOrObjectLiteralDestructuringPattern(n))return m(n)
if((69===n.kind||188==n.kind||248===n.kind||249===n.kind)&&e.isArrayLiteralOrObjectLiteralDestructuringPattern(n.parent))return r(n)
if(184===n.kind){var g=n
if(e.isArrayLiteralOrObjectLiteralDestructuringPattern(g.left))return m(g.left)
if(56===g.operatorToken.kind&&e.isArrayLiteralOrObjectLiteralDestructuringPattern(g.parent))return r(n)
if(24===g.operatorToken.kind)return c(g.left)}if(e.isExpression(n))switch(n.parent.kind){case 200:return o(n)
case 140:return c(n.parent)
case 202:case 204:return r(n)
case 184:if(24===n.parent.operatorToken.kind)return r(n)
break
case 177:if(n.parent.body===n)return r(n)}if(248===n.parent.kind&&n.parent.name===n&&!e.isArrayLiteralOrObjectLiteralDestructuringPattern(n.parent.parent))return c(n.parent.initializer)
if(174===n.parent.kind&&n.parent.type===n)return s(n.parent.type)
if(e.isFunctionLike(n.parent)&&n.parent.type===n)return o(n)
if(214===n.parent.kind||139===n.parent.kind){var y=n.parent
if(y.initializer===n||y.type===n||e.isAssignmentOperator(n.kind))return o(n)}return 184!==n.parent.kind||(g=n.parent,!e.isArrayLiteralOrObjectLiteralDestructuringPattern(g.left)||g.right!==n&&g.operatorToken!==n)?c(n.parent):o(n)}}if(!(4096&t.flags)){var _=e.getTokenAtPosition(t,n),u=t.getLineAndCharacterOfPosition(n).line
if((!(t.getLineAndCharacterOfPosition(_.getStart(t)).line>u)||(_=e.findPrecedingToken(_.pos,t))&&t.getLineAndCharacterOfPosition(_.getEnd()).line===u)&&!e.isInAmbientContext(_))return c(_)}}}(e.BreakpointResolver||(e.BreakpointResolver={}))}(ts||(ts={}))
var ts,TypeScript,debugObjectHost=this
!function(e){function t(e,t){e&&e.log("*INTERNAL ERROR* - Exception in typescript services: "+t.message)}function n(n,r,a,i){try{var o=function(e,t,n,r){var a
r&&(e.log(t),a=Date.now())
var i=n()
if(r){var o=Date.now()
if(e.log(t+" completed in "+(o-a)+" msec"),"string"==typeof i){var s=i
s.length>128&&(s=s.substring(0,128)+"..."),e.log("  result.length="+s.length+", result='"+JSON.stringify(s)+"'")}}return i}(n,r,a,i)
return JSON.stringify({result:o})}catch(a){return a instanceof e.OperationCanceledException?JSON.stringify({canceled:!0}):(t(n,a),a.description=r,JSON.stringify({error:a}))}}function r(e,t){return e.map(function(e){return a(e,t)})}function a(t,n){return{message:e.flattenDiagnosticMessageText(t.messageText,n),start:t.start,length:t.length,category:e.DiagnosticCategory[t.category].toLowerCase(),code:t.code}}function i(e){return{spans:e.spans.join(","),endOfLineState:e.endOfLineState}}var o=function(){function t(e){this.scriptSnapshotShim=e}return t.prototype.getText=function(e,t){return this.scriptSnapshotShim.getText(e,t)},t.prototype.getLength=function(){return this.scriptSnapshotShim.getLength()},t.prototype.getChangeRange=function(t){var n=t,r=this.scriptSnapshotShim.getChangeRange(n.scriptSnapshotShim)
if(null==r)return null
var a=JSON.parse(r)
return e.createTextChangeRange(e.createTextSpan(a.span.start,a.span.length),a.newLength)},t.prototype.dispose=function(){"dispose"in this.scriptSnapshotShim&&this.scriptSnapshotShim.dispose()},t}(),s=function(){function t(t){var n=this
this.shimHost=t,this.loggingEnabled=!1,this.tracingEnabled=!1,"getModuleResolutionsForFile"in this.shimHost&&(this.resolveModuleNames=function(t,r){var a=JSON.parse(n.shimHost.getModuleResolutionsForFile(r))
return e.map(t,function(t){var n=e.lookUp(a,t)
return n?{resolvedFileName:n}:void 0})}),"directoryExists"in this.shimHost&&(this.directoryExists=function(e){return n.shimHost.directoryExists(e)})}return t.prototype.log=function(e){this.loggingEnabled&&this.shimHost.log(e)},t.prototype.trace=function(e){this.tracingEnabled&&this.shimHost.trace(e)},t.prototype.error=function(e){this.shimHost.error(e)},t.prototype.getProjectVersion=function(){return this.shimHost.getProjectVersion?this.shimHost.getProjectVersion():void 0},t.prototype.useCaseSensitiveFileNames=function(){return!!this.shimHost.useCaseSensitiveFileNames&&this.shimHost.useCaseSensitiveFileNames()},t.prototype.getCompilationSettings=function(){var e=this.shimHost.getCompilationSettings()
if(null==e||""==e)throw Error("LanguageServiceShimHostAdapter.getCompilationSettings: empty compilationSettings")
return JSON.parse(e)},t.prototype.getScriptFileNames=function(){var e=this.shimHost.getScriptFileNames()
return this.files=JSON.parse(e)},t.prototype.getScriptSnapshot=function(e){var t=this.shimHost.getScriptSnapshot(e)
return t&&new o(t)},t.prototype.getScriptKind=function(e){return"getScriptKind"in this.shimHost?this.shimHost.getScriptKind(e):0},t.prototype.getScriptVersion=function(e){return this.shimHost.getScriptVersion(e)},t.prototype.getLocalizedDiagnosticMessages=function(){var e=this.shimHost.getLocalizedDiagnosticMessages()
if(null==e||""==e)return null
try{return JSON.parse(e)}catch(e){return this.log(e.description||"diagnosticMessages.generated.json has invalid JSON format"),null}},t.prototype.getCancellationToken=function(){var e=this.shimHost.getCancellationToken()
return new c(e)},t.prototype.getCurrentDirectory=function(){return this.shimHost.getCurrentDirectory()},t.prototype.getDefaultLibFileName=function(e){return this.shimHost.getDefaultLibFileName(JSON.stringify(e))},t}()
e.LanguageServiceShimHostAdapter=s
var c=function(){function e(e){this.hostCancellationToken=e,this.lastCancellationCheckTime=0}return e.prototype.isCancellationRequested=function(){var e=Date.now()
return Math.abs(e-this.lastCancellationCheckTime)>10&&(this.lastCancellationCheckTime=e,this.hostCancellationToken.isCancellationRequested())},e}(),_=function(){function e(e){var t=this
this.shimHost=e,"directoryExists"in this.shimHost&&(this.directoryExists=function(e){return t.shimHost.directoryExists(e)})}return e.prototype.readDirectory=function(e,t,n,r){var a
try{a=this.shimHost.readDirectory(e,t,JSON.stringify(n),r)}catch(r){a=this.shimHost.readDirectory(e,t,JSON.stringify(n))}return JSON.parse(a)},e.prototype.fileExists=function(e){return this.shimHost.fileExists(e)},e.prototype.readFile=function(e){return this.shimHost.readFile(e)},e}()
e.CoreServicesShimHostAdapter=_
var u=function(){function e(e){this.factory=e,e.registerShim(this)}return e.prototype.dispose=function(e){this.factory.unregisterShim(this)},e}()
e.realizeDiagnostics=r
var l=function(t){function r(e,n,r){t.call(this,e),this.host=n,this.languageService=r,this.logPerformance=!1,this.logger=this.host}return __extends(r,t),r.prototype.forwardJSONCall=function(e,t){return n(this.logger,e,t,this.logPerformance)},r.prototype.dispose=function(e){this.logger.log("dispose()"),this.languageService.dispose(),this.languageService=null,debugObjectHost&&debugObjectHost.CollectGarbage&&(debugObjectHost.CollectGarbage(),this.logger.log("CollectGarbage()")),this.logger=null,t.prototype.dispose.call(this,e)},r.prototype.refresh=function(e){this.forwardJSONCall("refresh("+e+")",function(){return null})},r.prototype.cleanupSemanticCache=function(){var e=this
this.forwardJSONCall("cleanupSemanticCache()",function(){return e.languageService.cleanupSemanticCache(),null})},r.prototype.realizeDiagnostics=function(t){var n=e.getNewLineOrDefaultFromHost(this.host)
return e.realizeDiagnostics(t,n)},r.prototype.getSyntacticClassifications=function(t,n,r){var a=this
return this.forwardJSONCall("getSyntacticClassifications('"+t+"', "+n+", "+r+")",function(){return a.languageService.getSyntacticClassifications(t,e.createTextSpan(n,r))})},r.prototype.getSemanticClassifications=function(t,n,r){var a=this
return this.forwardJSONCall("getSemanticClassifications('"+t+"', "+n+", "+r+")",function(){return a.languageService.getSemanticClassifications(t,e.createTextSpan(n,r))})},r.prototype.getEncodedSyntacticClassifications=function(t,n,r){var a=this
return this.forwardJSONCall("getEncodedSyntacticClassifications('"+t+"', "+n+", "+r+")",function(){return i(a.languageService.getEncodedSyntacticClassifications(t,e.createTextSpan(n,r)))})},r.prototype.getEncodedSemanticClassifications=function(t,n,r){var a=this
return this.forwardJSONCall("getEncodedSemanticClassifications('"+t+"', "+n+", "+r+")",function(){return i(a.languageService.getEncodedSemanticClassifications(t,e.createTextSpan(n,r)))})},r.prototype.getSyntacticDiagnostics=function(e){var t=this
return this.forwardJSONCall("getSyntacticDiagnostics('"+e+"')",function(){var n=t.languageService.getSyntacticDiagnostics(e)
return t.realizeDiagnostics(n)})},r.prototype.getSemanticDiagnostics=function(e){var t=this
return this.forwardJSONCall("getSemanticDiagnostics('"+e+"')",function(){var n=t.languageService.getSemanticDiagnostics(e)
return t.realizeDiagnostics(n)})},r.prototype.getCompilerOptionsDiagnostics=function(){var e=this
return this.forwardJSONCall("getCompilerOptionsDiagnostics()",function(){var t=e.languageService.getCompilerOptionsDiagnostics()
return e.realizeDiagnostics(t)})},r.prototype.getQuickInfoAtPosition=function(e,t){var n=this
return this.forwardJSONCall("getQuickInfoAtPosition('"+e+"', "+t+")",function(){return n.languageService.getQuickInfoAtPosition(e,t)})},r.prototype.getNameOrDottedNameSpan=function(e,t,n){var r=this
return this.forwardJSONCall("getNameOrDottedNameSpan('"+e+"', "+t+", "+n+")",function(){return r.languageService.getNameOrDottedNameSpan(e,t,n)})},r.prototype.getBreakpointStatementAtPosition=function(e,t){var n=this
return this.forwardJSONCall("getBreakpointStatementAtPosition('"+e+"', "+t+")",function(){return n.languageService.getBreakpointStatementAtPosition(e,t)})},r.prototype.getSignatureHelpItems=function(e,t){var n=this
return this.forwardJSONCall("getSignatureHelpItems('"+e+"', "+t+")",function(){return n.languageService.getSignatureHelpItems(e,t)})},r.prototype.getDefinitionAtPosition=function(e,t){var n=this
return this.forwardJSONCall("getDefinitionAtPosition('"+e+"', "+t+")",function(){return n.languageService.getDefinitionAtPosition(e,t)})},r.prototype.getTypeDefinitionAtPosition=function(e,t){var n=this
return this.forwardJSONCall("getTypeDefinitionAtPosition('"+e+"', "+t+")",function(){return n.languageService.getTypeDefinitionAtPosition(e,t)})},r.prototype.getRenameInfo=function(e,t){var n=this
return this.forwardJSONCall("getRenameInfo('"+e+"', "+t+")",function(){return n.languageService.getRenameInfo(e,t)})},r.prototype.findRenameLocations=function(e,t,n,r){var a=this
return this.forwardJSONCall("findRenameLocations('"+e+"', "+t+", "+n+", "+r+")",function(){return a.languageService.findRenameLocations(e,t,n,r)})},r.prototype.getBraceMatchingAtPosition=function(e,t){var n=this
return this.forwardJSONCall("getBraceMatchingAtPosition('"+e+"', "+t+")",function(){return n.languageService.getBraceMatchingAtPosition(e,t)})},r.prototype.getIndentationAtPosition=function(e,t,n){var r=this
return this.forwardJSONCall("getIndentationAtPosition('"+e+"', "+t+")",function(){var a=JSON.parse(n)
return r.languageService.getIndentationAtPosition(e,t,a)})},r.prototype.getReferencesAtPosition=function(e,t){var n=this
return this.forwardJSONCall("getReferencesAtPosition('"+e+"', "+t+")",function(){return n.languageService.getReferencesAtPosition(e,t)})},r.prototype.findReferences=function(e,t){var n=this
return this.forwardJSONCall("findReferences('"+e+"', "+t+")",function(){return n.languageService.findReferences(e,t)})},r.prototype.getOccurrencesAtPosition=function(e,t){var n=this
return this.forwardJSONCall("getOccurrencesAtPosition('"+e+"', "+t+")",function(){return n.languageService.getOccurrencesAtPosition(e,t)})},r.prototype.getDocumentHighlights=function(t,n,r){var a=this
return this.forwardJSONCall("getDocumentHighlights('"+t+"', "+n+")",function(){var i=a.languageService.getDocumentHighlights(t,n,JSON.parse(r)),o=e.normalizeSlashes(t).toLowerCase()
return e.filter(i,function(t){return e.normalizeSlashes(t.fileName).toLowerCase()===o})})},r.prototype.getCompletionsAtPosition=function(e,t){var n=this
return this.forwardJSONCall("getCompletionsAtPosition('"+e+"', "+t+")",function(){return n.languageService.getCompletionsAtPosition(e,t)})},r.prototype.getCompletionEntryDetails=function(e,t,n){var r=this
return this.forwardJSONCall("getCompletionEntryDetails('"+e+"', "+t+", '"+n+"')",function(){return r.languageService.getCompletionEntryDetails(e,t,n)})},r.prototype.getFormattingEditsForRange=function(e,t,n,r){var a=this
return this.forwardJSONCall("getFormattingEditsForRange('"+e+"', "+t+", "+n+")",function(){var i=JSON.parse(r)
return a.languageService.getFormattingEditsForRange(e,t,n,i)})},r.prototype.getFormattingEditsForDocument=function(e,t){var n=this
return this.forwardJSONCall("getFormattingEditsForDocument('"+e+"')",function(){var r=JSON.parse(t)
return n.languageService.getFormattingEditsForDocument(e,r)})},r.prototype.getFormattingEditsAfterKeystroke=function(e,t,n,r){var a=this
return this.forwardJSONCall("getFormattingEditsAfterKeystroke('"+e+"', "+t+", '"+n+"')",function(){var i=JSON.parse(r)
return a.languageService.getFormattingEditsAfterKeystroke(e,t,n,i)})},r.prototype.getDocCommentTemplateAtPosition=function(e,t){var n=this
return this.forwardJSONCall("getDocCommentTemplateAtPosition('"+e+"', "+t+")",function(){return n.languageService.getDocCommentTemplateAtPosition(e,t)})},r.prototype.getNavigateToItems=function(e,t){var n=this
return this.forwardJSONCall("getNavigateToItems('"+e+"', "+t+")",function(){return n.languageService.getNavigateToItems(e,t)})},r.prototype.getNavigationBarItems=function(e){var t=this
return this.forwardJSONCall("getNavigationBarItems('"+e+"')",function(){return t.languageService.getNavigationBarItems(e)})},r.prototype.getOutliningSpans=function(e){var t=this
return this.forwardJSONCall("getOutliningSpans('"+e+"')",function(){return t.languageService.getOutliningSpans(e)})},r.prototype.getTodoComments=function(e,t){var n=this
return this.forwardJSONCall("getTodoComments('"+e+"')",function(){return n.languageService.getTodoComments(e,JSON.parse(t))})},r.prototype.getEmitOutput=function(e){var t=this
return this.forwardJSONCall("getEmitOutput('"+e+"')",function(){return t.languageService.getEmitOutput(e)})},r}(u),d=function(t){function r(n,r){t.call(this,n),this.logger=r,this.logPerformance=!1,this.classifier=e.createClassifier()}return __extends(r,t),r.prototype.getEncodedLexicalClassifications=function(e,t,r){var a=this
return n(this.logger,"getEncodedLexicalClassifications",function(){return i(a.classifier.getEncodedLexicalClassifications(e,t,r))},this.logPerformance)},r.prototype.getClassificationsForLine=function(e,t,n){for(var r=this.classifier.getClassificationsForLine(e,t,n),a="",i=0,o=r.entries;i<o.length;i++){var s=o[i]
a+=s.length+"\n",a+=s.classification+"\n"}return a+r.finalLexState},r}(u),p=function(t){function i(e,n,r){t.call(this,e),this.logger=n,this.host=r,this.logPerformance=!1}return __extends(i,t),i.prototype.forwardJSONCall=function(e,t){return n(this.logger,e,t,this.logPerformance)},i.prototype.resolveModuleName=function(t,n,r){var a=this
return this.forwardJSONCall("resolveModuleName('"+t+"')",function(){var i=JSON.parse(r),o=e.resolveModuleName(n,e.normalizeSlashes(t),i,a.host)
return{resolvedFileName:o.resolvedModule?o.resolvedModule.resolvedFileName:void 0,failedLookupLocations:o.failedLookupLocations}})},i.prototype.getPreProcessedFileInfo=function(t,n){return this.forwardJSONCall("getPreProcessedFileInfo('"+t+"')",function(){var t=e.preProcessFile(n.getText(0,n.getLength()),!0,!0),r={referencedFiles:[],importedFiles:[],ambientExternalModules:t.ambientExternalModules,isLibFile:t.isLibFile}
return e.forEach(t.referencedFiles,function(t){r.referencedFiles.push({path:e.normalizePath(t.fileName),position:t.pos,length:t.end-t.pos})}),e.forEach(t.importedFiles,function(t){r.importedFiles.push({path:e.normalizeSlashes(t.fileName),position:t.pos,length:t.end-t.pos})}),r})},i.prototype.getTSConfigFileInfo=function(t,n){var i=this
return this.forwardJSONCall("getTSConfigFileInfo('"+t+"')",function(){var o=n.getText(0,n.getLength()),s=e.parseConfigFileTextToJson(t,o)
if(s.error)return{options:{},typingOptions:{},files:[],errors:[a(s.error,"\r\n")]}
var c=e.normalizeSlashes(t),_=e.parseJsonConfigFileContent(s.config,i.host,e.getDirectoryPath(c),{},c)
return{options:_.options,typingOptions:_.typingOptions,files:_.fileNames,errors:r(_.errors,"\r\n")}})},i.prototype.getDefaultCompilationSettings=function(){return this.forwardJSONCall("getDefaultCompilationSettings()",function(){return e.getDefaultCompilerOptions()})},i.prototype.discoverTypings=function(t){var n=this,r=e.createGetCanonicalFileName(!1)
return this.forwardJSONCall("discoverTypings()",function(){var a=JSON.parse(t)
return e.JsTyping.discoverTypings(n.host,a.fileNames,e.toPath(a.projectRootPath,a.projectRootPath,r),e.toPath(a.safeListPath,a.safeListPath,r),a.packageNameToTypingLocation,a.typingOptions,a.compilerOptions)})},i}(u),f=function(){function n(){this._shims=[]}return n.prototype.getServicesVersion=function(){return e.servicesVersion},n.prototype.createLanguageServiceShim=function(n){try{void 0===this.documentRegistry&&(this.documentRegistry=e.createDocumentRegistry(n.useCaseSensitiveFileNames&&n.useCaseSensitiveFileNames(),n.getCurrentDirectory()))
var r=new s(n),a=e.createLanguageService(r,this.documentRegistry)
return new l(this,n,a)}catch(e){throw t(n,e),e}},n.prototype.createClassifierShim=function(e){try{return new d(this,e)}catch(n){throw t(e,n),n}},n.prototype.createCoreServicesShim=function(e){try{var n=new _(e)
return new p(this,e,n)}catch(n){throw t(e,n),n}},n.prototype.close=function(){this._shims=[],this.documentRegistry=void 0},n.prototype.registerShim=function(e){this._shims.push(e)},n.prototype.unregisterShim=function(e){for(var t=0,n=this._shims.length;n>t;t++)if(this._shims[t]===e)return void delete this._shims[t]
throw new Error("Invalid operation")},n}()
e.TypeScriptServicesFactory=f,"undefined"!=typeof module&&module.exports&&(module.exports=e)}(ts||(ts={})),function(e){!function(e){e.TypeScriptServicesFactory=ts.TypeScriptServicesFactory}(e.Services||(e.Services={}))}(TypeScript||(TypeScript={}))
var toolsVersion="1.8"
define("vs/language/typescript/lib/typescriptServices",[],function(){return ts})
